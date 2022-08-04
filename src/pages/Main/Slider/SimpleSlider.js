import React, { useState } from 'react';
import Slider from 'react-slick';
import S from './Styled.SimpleSlider';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SLIDE_LIST = [
  {
    id: 1,
    img: '/images/slideImg/drone.jpg',
    title: '싱그런 여행을 떠나요',
    subtitle: 'TRAVEL/싱그런 여행',
    btn: '싱그런 여행 바로가기',
  },
  {
    id: 2,
    img: '/images/slideImg/plant.jpg',
    title: '식물 이야기를 나누어요',
    subtitle: 'COMMUNITY/커뮤니티',
    btn: '커뮤니티 바로가기',
  },
  {
    id: 3,
    img: '/images/slideImg/summer.jpg',
    title: '싱그러운 일상을 공유해보세요',
    subtitle: ' 함께 소통하며 나누는 즐거움',
  },
  {
    id: 4,
    img: '/images/slideImg/branch.jpg',
    title: '식물의 소리를 들려주세요',
    subtitle: '숨쉬는 나의 집, 싱그러운 집',
  },
  {
    id: 5,
    img: '/images/slideImg/leaves.jpg',
    title: '싱그런 여행을 떠나요',
    subtitle: 'TRAVEL/싱그런 여행',
    btn: '싱그런 여행 바로가기',
  },
];

const SimpleSlider = () => {
  const [sliderPage, setSliderPage] = useState(1);

  let settings = {
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (oldIdx, newIdx) => {
      setSliderPage(newIdx + 1);
    },
  };

  return (
    <S.SliderWrap>
      <Slider {...settings}>
        {SLIDE_LIST.map((el, idx) => {
          return (
            <S.SliderImgBox key={el.id}>
              <S.SliderImg src={el.img} alt="슬라이더 이미지" />
              <S.SliderLeft>
                <S.SliderTitleConainer>
                  <S.SliderTitle>{el.title}</S.SliderTitle>
                  <S.SliderSubtitle>{el.subtitle}</S.SliderSubtitle>
                </S.SliderTitleConainer>
                {el.btn && <S.SliderBtn>{el.btn}</S.SliderBtn>}
              </S.SliderLeft>
            </S.SliderImgBox>
          );
        })}
      </Slider>
      <S.SliderPageBtn>
        &lt; {sliderPage} / {SLIDE_LIST.length} &gt;
      </S.SliderPageBtn>
    </S.SliderWrap>
  );
};

export default SimpleSlider;
