import styled from 'styled-components';

const S = {};

S.StoryBox = styled.div`
  position: relative;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  width: 49%;
  height: 350px;
  margin-bottom: 50px;
  cursor: pointer;

  &:hover {
    border: 1px solid green;
    transition: border-color 0.2s;
  }
`;

S.StoryTitle = styled.div`
  position: absolute;
  top: 50px;
  left: 40px;
  font-size: 22px;
`;

S.Location = styled.div`
  position: absolute;
  top: 85px;
  left: 60px;
`;

S.LocationIcon = styled(S.Location)`
  left: 40px;
`;

S.HashTag = styled.div`
  position: absolute;
  bottom: 80px;
  left: 40px;
  font-size: 14px;
  color: grey;
`;

S.ImageBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
`;

S.Image = styled.img`
  margin-top: 120px;
  width: 150px;
  height: 100px;
  border-radius: 4px;
  object-fit: cover;
`;

S.Image2 = styled(S.Image)`
  left: 220px;
`;

S.Image3 = styled(S.Image)`
  left: 400px;
`;

export default S;
