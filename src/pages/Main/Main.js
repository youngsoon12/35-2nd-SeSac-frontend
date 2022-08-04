import React from 'react';
import { useNavigate } from 'react-router-dom';
import SimpleSlider from './Slider/SimpleSlider';

import MainBtn from './MainBtn/MainBtn';

const Main = () => {
  const navigate = useNavigate();

  const goToList = () => {
    navigate('/list');
  };

  return (
    <>
      <SimpleSlider />
      <MainBtn goToList={goToList} />
    </>
  );
};

export default Main;
