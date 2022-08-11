import styled from 'styled-components';

const S = {};

S.SliderWrap = styled.div`
  position: relative;
  margin: 0 auto 50px;
  width: 83%;

  .slick-prev {
    top: 55%;
    left: -40px;
  }

  .slick-next {
    top: 55%;
    right: -30px;
  }

  .slick-prev:before,
  .slick-next:before {
    color: ${({ theme }) => theme.lightgreen};
    font-size: 30px;
  }
`;

S.SliderImgBox = styled.div`
  display: flex;
  margin-bottom: 20px;
  position: relative;
  transition: all ease-in-out 0.4s;
  margin-top: 100px;

  :hover {
    ${S.SliderImg} {
      transform: scale(1.01);
      transition: all ease-in-out 0.4s;
    }
  }
`;

S.SliderImg = styled.img`
  width: 100%;
  height: 450px;
  text-align: center;
  border-radius: 5px;
  object-fit: cover;
`;

S.SliderLeft = styled.div`
  position: absolute;
  top: 25%;
  left: 5%;
  width: 25%;
`;

S.SliderTitleConainer = styled.div`
  margin-bottom: 20px;
`;

S.SliderTitle = styled.div`
  height: 70%;
  font-size: 60px;
  color: ${({ theme }) => theme.white};
  font-weight: bold;
  line-height: 1.3;
  margin-bottom: 20px;
`;

S.SliderSubtitle = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.white};
  margin-bottom: 35px;
`;

S.LargeSliderSubtitle = styled.p`
  font-size: 20px;
  color: white;
  margin: 40px 0 0 5px;
`;

S.SliderBtn = styled.div`
  width: 180px;
  color: ${({ theme }) => theme.white};
  text-align: center;
  padding: 8px 10px;
  border: 2px solid white;
`;

S.SliderPageBtn = styled.span`
  display: block;
  position: absolute;
  right: 2%;
  font-size: 13px;
  color: ${({ theme }) => theme.deepgreen};
`;

export default S;
