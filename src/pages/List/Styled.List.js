import styled from 'styled-components';

const S = {};

S.Inner = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
`;

S.Wrapper = styled.div`
  width: 1200px;
`;

S.Header = styled.div`
  display: flex;
  align-items: flex-end;
`;

S.HeaderTitle = styled.h1`
  margin-right: 28px;
  font-size: 24px;
  font-weight: bold;
`;

S.HeaderSubTitle = styled.h2`
  font-size: 16px;
`;

S.RightSide = styled.form`
  display: flex;
  justify-content: flex-end;
  margin-top: 40px;
`;

S.RightWrapper = styled.div`
  position: relative;
  display: flex;
  width: 60%;
  flex-direction: column;
`;

S.LeftSide = styled.div`
  position: absolute;
`;

S.RightTitle = styled.h1`
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 30px;
`;

S.RecommendPlace = styled.div`
  display: flex;
  flex-direction: column;
`;

S.ListTitle = styled.form`
  font-size: 24px;
  font-weight: bold;
  margin-top: 30px;
  margin-bottom: 30px;
`;

S.StoryWrapper = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`;

S.SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  width: 720px;
`;

S.Region = styled.select`
  z-index: 10;

  height: 50px;
  width: 140px;
  border: 1px solid rgb(227 227 227);
  border-radius: 4px;
  font-weight: 400;
  font-size: 15px;
  text-indent: 19px;
  color: grey;
`;

S.SearchBox = styled.input`
  z-index: 10;
  height: 50px;
  width: 550px;
  border: 1px solid rgb(227 227 227);
  border-radius: 4px;
  text-indent: 19px;
  font-weight: 400;
  font-size: 15px;
`;

S.CheckBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
`;

S.CheckBoxTo = styled.div`
  display: flex;
  align-items: center;
  color: #808080;
  font-size: 14px;
`;

S.CheckBoxType = styled.input`
  width: 20px;
  height: 20px;
  accent-color: green;
  margin-right: 5px;
`;

S.Button = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

S.SearchButton = styled.button`
  border: 1px solid #fff;
  border-radius: 4px;
  padding: 17px 300px;
  color: #fff;
  background-color: #009a3e;
  font-size: 15px;
  cursor: pointer;
`;

S.ResetButton = styled.button`
  border: 0;
  border-radius: 4px;
  color: #4d4d4d;
  background-color: #d9d9d9;
  padding: 17px 20px;
  cursor: pointer;
`;

S.LoadButton = styled.button`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  padding: 10px 20px;
  border: 0;
  cursor: pointer;
`;

S.Vacant = styled.div`
  height: 300px;
`;

S.WriteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 50px;
  margin-top: 20px;
  height: 60px;
  font-size: 14px;
  border: 0;
  background-color: #edf8f1;
  border-radius: 4px;
  cursor: pointer;
`;

S.WriteLeft = styled.span``;

S.WriteRight = styled.span`
  font-size: 15px;
  font-weight: 700;
  color: #009a3e;
`;
export default S;
