import React from 'react';
import { useNavigate } from 'react-router-dom';

import S from './Styeld.StoryList';

const StoryList = ({ item }) => {
  const navigate = useNavigate();
  return (
    <S.StoryBox onClick={() => navigate(`/posts/${item.id}`)}>
      <S.StoryTitle>{item.title}</S.StoryTitle>
      <S.LocationIcon>
        <i className="fa-solid fa-location-dot" />
      </S.LocationIcon>
      <S.Location>{item.address}</S.Location>
      <S.ImageBox>
        {item.images.map(data => {
          return <S.Image key={data.id} src={data.url} alt="" />;
        })}
      </S.ImageBox>
      <S.HashTag>
        {item.hashtags.map(i => {
          return <span key={i.id}>#{i.name}</span>;
        })}
      </S.HashTag>
    </S.StoryBox>
  );
};

export default StoryList;
