/* global kakao */
import React, { useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import DaumPostcode from 'react-daum-postcode';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import S from './Styled.Post';

const Post = () => {
  const navigation = useNavigate();
  const [imgPreview, setImgPreview] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false); // 팝업창 상태 관리
  const [user, setUser] = useState({
    title: '',
    category: '',
    hashTag: '',
    zoneCode: '',
    roadAddress: '',
    detailAddress: '',
    content: '',
    x: '',
    y: '',
  });

  const onDrop = file => {
    //미리보기
    setImgPreview(
      file.map(file =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
  };

  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone({
      accept: {
        'image/*': [],
      },
      maxFiles: 3,
      onDrop,
    }); // 업로드 drop

  const thumbs = imgPreview.map(file => (
    <div key={file.name}>
      <div style={thumb}>
        <div style={thumbInner}>
          <img
            src={file.preview}
            alt="이미지"
            style={img}
            onLoad={() => {
              URL.revokeObjectURL(file.preview);
            }}
          />
        </div>
      </div>
      <div>{file.name.slice(0, file.name.length - 4)}</div>
    </div>
  ));

  const onSubmit = () => {
    let formData = new FormData();
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        AUTHORIZATION:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.cpKX0K9ExYMe19a8Dnkc_ShHYcK44uzKuuUYoEuUihA',
      },
    };

    acceptedFiles.map(file => {
      return formData.append('image', file, file.name);
    });
    formData.append('categories', user.category);
    formData.append('hashtags', user.hashTag);
    formData.append('address', `${user.roadAddress} ${user.detailAddress}`);
    formData.append('latitude', user.x);
    formData.append('longitude', user.y);
    formData.append('title', user.title);
    formData.append('content', user.content);
    axios
      .post('http://10.58.0.223:8000/posts/posting', formData, config)
      .then(response => {
        console.log(response);
        navigation('/list');
      });
  };

  let geocoder = new kakao.maps.services.Geocoder();

  const callback = (result, status) => {
    // 위도, 경도 구하는 함수
    if (status === kakao.maps.services.Status.OK) {
      setUser({ ...user, x: result[0].x, y: result[0].y });
    }
  };

  useEffect(() => {
    if (user.roadAddress.length > 0)
      geocoder.addressSearch(`${user.roadAddress}`, callback);
  }, [user.zoneCode]);

  const onChange = e => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const switchPostCode = () => {
    if (!isPopupOpen) {
      setUser({ ...user, zoneCode: '', roadAddress: '' });
      setIsPopupOpen(prev => !prev);
    } else {
      setIsPopupOpen(prev => !prev);
    }
  };

  const handlePostCode = data => {
    setUser({
      ...user,
      zoneCode: data.zonecode,
      roadAddress: data.roadAddress,
    });
    setIsPopupOpen(true);
  };

  const onCheckedElement = (checked, item) => {
    if (checked) {
      setUser({ ...user, category: user.category.concat(`${item},`) });
    } else if (!checked) {
      setUser({ ...user, category: user.category.replace(`${item},`, '') });
    }
  };

  return (
    <S.Wraper>
      {isPopupOpen && <S.ShowPostBox onClick={switchPostCode} />}
      <S.Container>
        <S.Head>싱그런 여행 신청하기</S.Head>
        <S.InputArea>
          <S.InputTitle>
            장소명<S.InputTitleSpan>(최대 30자)</S.InputTitleSpan>
          </S.InputTitle>
          <S.Input
            type="text"
            placeholder="예) 대구수목원"
            name="title"
            onChange={onChange}
            maxLength="30"
          />
        </S.InputArea>
        <S.CategoryArea>
          <S.InputTitle>
            카테고리 선택<S.InputTitleSpan>(다중 선택 가능)</S.InputTitleSpan>
          </S.InputTitle>
          <S.Category>
            {CATEGORY_DATA.map(({ id, categoryName }) => {
              return (
                <S.CategoryLabel key={id}>
                  <S.CategoryCheckBox
                    type="checkbox"
                    value={categoryName}
                    name="category"
                    onChange={e => {
                      onCheckedElement(e.target.checked, e.target.value);
                    }}
                    checked={
                      user.category.includes(categoryName) ? true : false
                    }
                  />
                  {categoryName}
                </S.CategoryLabel>
              );
            })}
          </S.Category>
        </S.CategoryArea>
        <S.HashTagArea>
          <S.InputTitle>
            해시태그 등록<S.InputTitleSpan>(최대 20자)</S.InputTitleSpan>
          </S.InputTitle>
          <S.Input
            placeholder="예) #정원#하늘#여행자"
            name="hashTag"
            onChange={onChange}
            maxLength="20"
          />
        </S.HashTagArea>
        <S.PostArea>
          <S.PostNumber
            placeholder="우편번호"
            disabled={true}
            value={user.zoneCode}
          />
          <S.PostSearchBtn type="button" onClick={switchPostCode}>
            우편번호검색
          </S.PostSearchBtn>
          {isPopupOpen && (
            <div>
              <DaumPostcode
                style={postCodeStyle}
                onComplete={handlePostCode}
                isOpen={false}
                onClose={switchPostCode}
              />
            </div>
          )}

          <S.Input
            placeholder="주소"
            disabled={true}
            value={user.roadAddress}
          />
          <S.Input
            placeholder="상세주소"
            name="detailAddress"
            onChange={onChange}
            maxLength="700"
          />
        </S.PostArea>
        <S.StoryArea>
          <S.ImageArea>
            <S.UploadImageArea {...getRootProps({ className: 'dropzone' })}>
              <S.UploadImage
                type="file"
                {...getInputProps()}
                multiple="multiple"
              />
              {isDragActive ? (
                <S.UploadImageShow>Drop the files here ...</S.UploadImageShow>
              ) : (
                <div>
                  <S.UploadImageBackImg src="/images/Post/upload.png" />
                  <S.UploadImageTag>사진을 등록해주세요</S.UploadImageTag>
                </div>
              )}
            </S.UploadImageArea>
            <S.ImagePreviewArea>
              <S.ThumbsContainer>{thumbs}</S.ThumbsContainer>
            </S.ImagePreviewArea>
          </S.ImageArea>

          <S.ImageContent
            placeholder="내용을 작성해주세요"
            name="content"
            onChange={onChange}
          />
        </S.StoryArea>

        <S.SubmitArea>
          <S.CancelBtn onClick={() => navigation('/list')}>취소</S.CancelBtn>
          <S.SubmitBtn onClick={onSubmit}>신청하기</S.SubmitBtn>
        </S.SubmitArea>
      </S.Container>
    </S.Wraper>
  );
};

export default Post;

const CATEGORY_DATA = [
  { id: 1, categoryName: '식물카페' },
  { id: 2, categoryName: '캠핑' },
  { id: 3, categoryName: '수목원/공원' },
  { id: 4, categoryName: '친환경샵' },
  { id: 5, categoryName: '체험활동/기타' },
];

const postCodeStyle = {
  display: 'block',
  position: 'absolute',
  top: '25%',
  left: '25%',
  width: '440px',
  height: '500px',
  border: '1px solid #b2b2b2',
  zIndex: '1000',
};

const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: 140,
  height: 140,
  padding: 4,
  boxSizing: 'border-box',
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden',
};

const img = {
  display: 'block',
  width: 'auto',
  height: '100%',
};
