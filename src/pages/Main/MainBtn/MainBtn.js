import React from 'react';
import S from './Styled.MainBtn';

const MainBtn = ({ goToList }) => {
  return <S.MainBtn onClick={goToList}>싱그러운 일상으로 Go</S.MainBtn>;
};

export default MainBtn;
