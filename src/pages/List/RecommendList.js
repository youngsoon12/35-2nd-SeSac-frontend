import React from 'react';
import { useNavigate } from 'react-router-dom';

import S from './Styled.RecommendList';

function RecommendList({ recommendPostList }) {
  const navigate = useNavigate();

  return recommendPostList.map(info => {
    return (
      <S.RecommendType
        key={info.id}
        onClick={() => navigate(`/posts/${info.id}`)}
      >
        <S.RecommendImg src={info.image.url} alt="" />
        <S.RecommendText>
          <S.Title>
            {info.title}
            <S.MarginRight>
              <i className="fa-solid fa-location-dot" />
            </S.MarginRight>
          </S.Title>
          <S.SubTitle>
            {info.hashtags.map(i => {
              return <div key={i.id}>#{i.name}</div>;
            })}
          </S.SubTitle>
        </S.RecommendText>
      </S.RecommendType>
    );
  });
}

export default RecommendList;
