import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Comment from './Comment';
import S from './Styled.Detail';
import { API } from '../../components/Config/Config';

const { kakao } = window;
const LIMIT = 5;
const TOKEN = localStorage.getItem('jwt');

const Detail = () => {
  const [post, setPost] = useState({});
  const [comments, setComments] = useState('');
  const [commentsList, setCommentsList] = useState([]);
  const [totalCommentCount, setTotalCommentCount] = useState(0);
  const [currCommentOffset, setCurrCommentOffset] = useState(0);
  const [userId, setUserId] = useState(null);
  const params = useParams();

  //Post GET
  const getPostData = () => {
    fetch(`${API}/posts/${params.id}`, {
      headers: {
        Authorization: TOKEN,
      },
    })
      .then(res => res.json())
      .then(data => {
        setPost(data.result);
      });
  };

  const {
    user_id,
    written_user_id,
    written_user_name,
    written_user_profile_image_url,
    address,
    latitude,
    longitude,
    title,
    images,
    content,
    hashtags,
    created_at,
  } = post;

  //Comments GET
  const getCommentsData = () => {
    fetch(
      `${API}/posts/${params.id}/comments?limit=${LIMIT}&offset=${currCommentOffset}`,
      {
        headers: {
          Authorization: TOKEN,
        },
      }
    )
      .then(res => res.json())
      .then(data => {
        setCommentsList(data.comment);
        setUserId(data.user_id);
        setTotalCommentCount(data.comments_total);
      });
  };

  useEffect(() => {
    getPostData();
    getCommentsData();
  }, []);

  useEffect(() => {
    fetch(
      `${API}/posts/${params.id}/comments?limit=${LIMIT}&offset=${currCommentOffset}`,
      {
        headers: {
          Authorization: TOKEN,
        },
      }
    )
      .then(res => res.json())
      .then(data => {
        setCommentsList(data.comment);
        setTotalCommentCount(data.comments_total);
      });
  }, [currCommentOffset]);

  const totalPageCount = Math.ceil(totalCommentCount / 5);
  const pageArr = [];
  for (let i = 0; i < totalPageCount; i++) {
    pageArr.push(i + 1);
  }

  const updateOffset = offset => {
    if (0 <= offset && offset < totalCommentCount) {
      setCurrCommentOffset(offset);
    } else {
      alert('페이지가 없습니다');
      return;
    }
  };

  const handleComments = e => {
    setComments(e.target.value);
  };

  const addComment = e => {
    e.preventDefault();
    if (comments.trim().length === 0) {
      alert('댓글 내용을 입력해주세요');
      return;
    }

    fetch(`${API}/posts/${params.id}/comments`, {
      method: 'POST',
      headers: {
        Authorization: TOKEN,
      },
      body: JSON.stringify({
        parent_comment_id: 0,
        comment: comments,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.message === 'SUCCESS') {
          getCommentsData();
          setComments('');
        } else {
          alert('다시 시도해 주세요');
        }
      });
  };

  //kakao 지도 API 삽입
  const container = useRef();
  const locationArr = address?.split(' ');
  const location = locationArr?.slice(0, -1).join().replaceAll(',', ' ');
  const locationDetail = locationArr?.slice(-1).toString();

  const loadingMap = useCallback(() => {
    const position = new kakao.maps.LatLng(longitude, latitude);

    const options = {
      center: position,
      level: 3,
    };

    const map = new kakao.maps.Map(container.current, options);

    // 마커 찍기
    let marker = new kakao.maps.Marker({
      position: position,
      draggable: true,
    });

    marker.setMap(map);

    // 지도 타입 변경 컨트롤(지도<->스카이뷰)
    let mapTypeControl = new kakao.maps.MapTypeControl();
    map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

    // 확대 축소 컨트롤
    let zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    const content = `
      <div class="wrap">
          <div class="info">
              <div class="title">
                  ${title}
                  <div class="close" onclick="closeOverlay()" title="닫기"></div>
              </div>
              <div class="body">
                  <div class="img">
                      <img src="/images/SeSAC.png" width="73" height="70">
                 </div>
                  <div class="desc">
                      <div class="ellipsis">${location}</div>
                      <div class="jibun ellipsis">${locationDetail}</div>
                      <div><a href="https://map.kakao.com/link/to/싱그러운 장소,${longitude},${latitude}" target="_blank" class="link">카카오로 길찾기</a></div>
                  </div>
              </div>
          </div>
      </div>`;

    //커스텀 오버레이
    let customOverlay = new kakao.maps.CustomOverlay({
      content: content,
      position: marker.getPosition(),
    });
    customOverlay.setMap(map);
  }, [post]);

  useEffect(() => {
    loadingMap();
  }, [post]);

  // 게시글 삭제
  const navigate = useNavigate();
  const deletePost = () => {
    const confirmDelete = window.confirm('게시글을 삭제하시겠습니까?');

    if (confirmDelete) {
      fetch(`${API}/posts/${params.id}`, {
        method: 'DELETE',
        headers: {
          Authorization: TOKEN,
        },
      }).then(res => {
        if (res.ok) {
          navigate('/posts');
          alert('글이 삭제되었습니다!ㄴ');
        } else {
          alert('다시 시도해 주세요');
        }
      });
    }
  };

  const date = created_at?.split('T')[0].replaceAll('-', '.');

  return (
    <S.Container>
      <S.Editor>
        <div>
          <S.ProfileImg>
            <S.Img src={written_user_profile_image_url} alt="profile" />
          </S.ProfileImg>
        </div>
        <S.EditorInfo>
          <S.Id>
            <div>{written_user_name}</div>
            <S.Follow>팔로우</S.Follow>
          </S.Id>
        </S.EditorInfo>
      </S.Editor>
      <S.Content>
        <S.ContentTitle>{title}</S.ContentTitle>
        <S.ContentImg>
          {images?.map(img => {
            return <S.Img key={img.id} src={img.url} alt="Content" />;
          })}
        </S.ContentImg>
        <S.ContentTxt>{content}</S.ContentTxt>
        <S.Map ref={container} />
        <S.HashTags>
          {hashtags?.map(hashtag => {
            return <div key={hashtag.id}>#{hashtag.name}</div>;
          })}
        </S.HashTags>
      </S.Content>
      <S.ButtonList>
        <S.PostOptionButton as={Link} to="/posts">
          목록
        </S.PostOptionButton>
        {user_id === written_user_id && (
          <>
            <S.PostOptionButton onClick={() => navigate(`/post/posting/1`)}>
              수정
            </S.PostOptionButton>
            <S.PostOptionButton onClick={() => deletePost()}>
              삭제
            </S.PostOptionButton>
          </>
        )}
      </S.ButtonList>
      <S.TimeStamp>{date}</S.TimeStamp>
      <S.Comments>
        <S.SubTitle>
          댓글&nbsp;
          <S.Count>{totalCommentCount}</S.Count>
        </S.SubTitle>
        <S.CommentsForm onSubmit={addComment}>
          <S.Input
            type="text"
            placeholder="댓글을 입력해주세요."
            value={comments}
            onChange={handleComments}
          />
          <S.Button disabled={!comments}>등록</S.Button>
        </S.CommentsForm>
        <S.CommentsList>
          {commentsList.map(
            ({
              id,
              user_id,
              parent_comment_id,
              profile_image_url,
              nickname,
              comment,
              created_at,
            }) => {
              return (
                <Comment
                  key={id}
                  id={id}
                  user_id={user_id}
                  parent_comment_id={parent_comment_id}
                  profile_image_url={profile_image_url}
                  nickname={nickname}
                  comment={comment}
                  created_at={created_at}
                  userId={userId}
                  getCommentsData={getCommentsData}
                  TOKEN={TOKEN}
                />
              );
            }
          )}
        </S.CommentsList>
        {totalCommentCount > 0 && (
          <S.PageButtonContainer>
            <S.PrevButton
              onClick={() => updateOffset(currCommentOffset - LIMIT)}
            />
            <div>
              {pageArr.map((page, idx) => {
                return (
                  <S.PageButton
                    key={idx}
                    isCurrent={currCommentOffset / 5 === idx}
                    onClick={() => updateOffset((page - 1) * 5)}
                  >
                    {page}
                  </S.PageButton>
                );
              })}
            </div>
            <S.NextButton
              onClick={() => updateOffset(currCommentOffset + LIMIT)}
            />
          </S.PageButtonContainer>
        )}
      </S.Comments>
    </S.Container>
  );
};

export default Detail;
