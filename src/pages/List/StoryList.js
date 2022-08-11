import React from 'react';
import { useNavigate } from 'react-router-dom';

import S from './Styeld.StoryList';

const StoryList = ({ item }) => {
  const navigate = useNavigate();
  return (
    <S.StoryBox onClick={() => navigate(`posts/${item.id}`)}>
      <S.StoryTitle>{item.title}</S.StoryTitle>
      <S.LocationIcon>
        <i className="fa-solid fa-location-dot" />
      </S.LocationIcon>
      <S.Location>{item.address}</S.Location>
      <S.HashTag>
        {item.hashtags.map(i => {
          return <span key={i.id}>#{i.name}</span>;
        })}
      </S.HashTag>
      <S.Image src={item.images[0].url} alt="" />
      <S.Image2 src={item.images[1].url} alt="" />
      <S.Image3 src={item.images[2].url} alt="" />
    </S.StoryBox>
  );
};

export default StoryList;
