import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import RecommendList from './RecommendList';
import StoryList from './StoryList';
import S from './Styled.List';
import CATEGORY_LIST from './CategoryList.js';
import KakaoMap from './KakaoMap';
import { API } from '../../components/Config/Config';

const List = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  const [moreList, setMoreList] = useState([]);
  const [user, setUser] = useState({
    title_or_hashtag: '',
    city: '',
    categories: '',
  });
  const data = Object.values(items);

  const lists = data[0];
  const [result, setResult] = useState([]);
  const recommendPostList = data[2];
  const totalPost = data[1];
  const { title_or_hashtag, city, categories } = user;
  const [offSet, setOffSet] = useState(0);
  const onIncrease = () => {
    setOffSet(offSet + 8);
  };
  useEffect(() => {
    fetch(`${API}/posts?title_or_hashtag=&city=&categories=
    `)
      .then(res => res.json())
      .then(result => {
        setItems(result);
      });
    fetch(
      `${API}/posts?title_or_hashtag=${title_or_hashtag}&city=${city}&categories=${categories}&offset=${8}`
    )
      .then(res => res.json())
      .then(result => {
        setMoreList(result.result);
      });
  }, []);

  const getItem = e => {
    e.preventDefault();
    fetch(
      `${API}/posts?title_or_hashtag=${title_or_hashtag}&city=${city}&categories=${categories}&offset=0`
    )
      .then(res => res.json())
      .then(result => {
        setItems(result);
      });

    setResult([]);
  };

  const moreItem = e => {
    e.preventDefault();
    const getMoreItem = () => {
      const copyResult = [...result];
      copyResult.push(moreList);
      setResult(copyResult.flat());
    };

    fetch(
      `${API}/posts?title_or_hashtag=${title_or_hashtag}&city=${city}&categories=${categories}&offset=${
        4 + offSet
      }`
    )
      .then(res => res.json())
      .then(result => {
        onIncrease();
        setMoreList(result.result);
        getMoreItem();
      });
  };
  const handleInput = e => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const onCheckedElement = (checked, item) => {
    if (checked) {
      setUser({ ...user, categories: categories.concat(item, ',') });
    } else if (!checked) {
      setUser({
        ...user,
        categories: categories.replace(`${item},`, ''),
      });
    }
  };

  const isData = items.length !== 0;

  if (!isData) {
    return (
      <S.Loading>
        <img src="/images/Loading.jpg" alt="빠져든다" />
        <div>Loading 되고 있습니당</div>
      </S.Loading>
    );
  } else
    return (
      <div>
        {items.length !== 0 && (
          <S.Inner>
            <S.Wrapper>
              <S.Header>
                <S.HeaderTitle>새싹 여행</S.HeaderTitle>
                <S.HeaderSubTitle>
                  새싹과 관련된 지역별 추천장소를 소개합니다
                </S.HeaderSubTitle>
              </S.Header>
              <S.RightSide>
                <S.RightWrapper>
                  <S.LeftSide>
                    <KakaoMap data={data} />
                  </S.LeftSide>
                  <S.RightTitle>추천 장소</S.RightTitle>
                  <S.RecommendPlace>
                    <RecommendList recommendPostList={recommendPostList} />
                  </S.RecommendPlace>
                  <S.SearchContainer>
                    <S.Region name="city" onChange={handleInput}>
                      <option value="">도시</option>
                      {COUNTY.map(item => (
                        <option key={item.id} value={item.county}>
                          {item.county}
                        </option>
                      ))}
                    </S.Region>
                    <S.SearchBox
                      type="search"
                      name="title_or_hashtag"
                      id="search-form"
                      placeholder="장소명 혹은 해시태그를 검색하세요"
                      onChange={handleInput}
                    />
                  </S.SearchContainer>
                  <S.CheckBox>
                    {CATEGORY_LIST.map(item => {
                      return (
                        <S.CheckBoxTo key={item.id}>
                          <S.CheckBoxType
                            onChange={e => {
                              onCheckedElement(
                                e.target.checked,
                                e.target.value
                              );
                            }}
                            type="checkbox"
                            value={item.data}
                            name="categories"
                            checked={categories.includes(item.data)}
                          />
                          {item.data}
                        </S.CheckBoxTo>
                      );
                    })}
                  </S.CheckBox>
                  <S.Button>
                    <S.SearchButton onClick={getItem}>검색</S.SearchButton>
                    <S.ResetButton>초기화</S.ResetButton>
                  </S.Button>
                  <S.WriteButton onClick={() => navigate(`/post/posting`)}>
                    <S.WriteLeft>나의 싱그러운 라이프를 소개하세요</S.WriteLeft>
                    <S.WriteRight>신청하기</S.WriteRight>
                  </S.WriteButton>
                </S.RightWrapper>
              </S.RightSide>
              <S.ListTitle>
                LIST <span style={{ color: 'green' }}>{totalPost}</span>
              </S.ListTitle>
              <S.StoryWrapper>
                {lists.map(item => (
                  <StoryList key={item.id} item={item} />
                ))}
                {totalPost >= lists.length &&
                  result.length !== 0 &&
                  result.map(item => <StoryList key={item.id} item={item} />)}
              </S.StoryWrapper>
              <S.LoadButton onClick={moreItem}>더 보기</S.LoadButton>
              <S.Vacant />
            </S.Wrapper>
          </S.Inner>
        )}
      </div>
    );
};
export default List;

const COUNTY = [
  { id: 1, county: '서울' },
  { id: 2, county: '경기도' },
  { id: 3, county: '인천' },
  { id: 4, county: '충남' },
  { id: 5, county: '대전' },
  { id: 6, county: '충북' },
  { id: 7, county: '부산' },
  { id: 8, county: '울산' },
  { id: 9, county: '대구' },
  { id: 10, county: '경북' },
  { id: 11, county: '경남' },
  { id: 12, county: '전남' },
  { id: 13, county: '광주' },
  { id: 14, county: '전북' },
  { id: 15, county: '제주' },
  { id: 16, county: '세종' },
];
