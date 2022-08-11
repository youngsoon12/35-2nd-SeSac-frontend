import styled from 'styled-components';

const S = {};

S.RecommendType = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid rgb(214 214 214);
  padding: 20px;
  z-index: 1;
  cursor: pointer;
`;
S.RecommendImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100px;
  object-fit: cover;
  margin-right: 20px;
`;

S.RecommendText = styled.div`
  display: flex;
  flex-direction: column;
`;

S.Title = styled.div`
  font-size: 15px;
  padding: 5px;
  display: flex;

  align-items: center;
`;

S.SubTitle = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
  color: grey;
  padding: 5px;
`;

S.MarginRight = styled.div`
  margin-left: 10px;
`;

export default S;
