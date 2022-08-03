import styled from 'styled-components';

const S = {};
S.Wraper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

S.Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  padding: 30px;
  width: 1200px;
`;

S.PreviewName = styled.div`
  width: 100;
  overflow: scroll;
`;

S.Head = styled.div`
  height: 40px;
  margin: 13px 0 0px;
  font-size: 28px;
  font-weight: 700;
`;

S.InputArea = styled.div``;

S.InputTitle = styled.div`
  margin: 10px 0 10px 0;
  line-height: 28px;
  font-size: 18px;
  font-weight: 700;
  color: #222624;
`;

S.InputTitleSpan = styled.span`
  font-size: 16px;
  font-weight: 400;
  color: #b3b3b3;
`;

S.Input = styled.input`
  margin-bottom: 4px;
  text-indent: 19px;
  width: 100%;
  height: 50px;
  font-size: 15px;
  color: #808080;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  ::placeholder {
    color: #b3b3b3;
  }
`;

S.CategoryArea = styled.div`
  width: 100%;
`;

S.Category = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  height: 40px;
  font-size: 14px;
  font-weight: 500;
  color: #808080;
`;
S.CategoryCheckBox = styled.input`
  margin: 5px;
  width: 20px;
  height: 20px;
  opacity: 0.6;
  accent-color: #009a3e;
`;

S.CategoryLabel = styled.span`
  display: flex;
  align-items: center;
  gap: 3px;
`;

S.HashTagArea = styled.div`
  width: 100%;
`;

S.PostArea = styled.div`
  width: 100%;
`;

S.PostNumber = styled(S.Input)`
  width: 100px;
`;

S.PostSearchBtn = styled.button`
  margin-left: 4px;
  width: 100px;
  height: 50px;
  color: #009a3e;
  background-color: #e5f5eb;
  border-width: 1px;
  border-radius: 4px;
  border-style: solid;
  border-color: #009a3e;
  cursor: pointer;
`;
S.SubmitArea = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  width: 100%;
`;

S.CancelBtn = styled.button`
  width: 150px;
  height: 50px;
  color: #4d4d4d;
  background-color: #d9d9d9;
  font-size: 15px;
  border-radius: 4px;
  border-style: none;
`;

S.SubmitBtn = styled(S.CancelBtn)`
  color: #fff;
  background-color: #009a3e;
  cursor: pointer;
`;

S.StoryArea = styled.div`
  display: flex;
  justify-content: space-between;
`;

S.ImageContent = styled.textarea`
  padding: 20px;
  width: 550px;
  min-height: 600px;
  font-size: 15px;
  color: #808080;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  ::placeholder {
    padding-top: 50%;
    color: #b3b3b3;
    text-align: center;
  }
`;

S.UploadImageArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 550px;
  height: 290px;
  min-height: 290px; // 원래 600
  color: #808080;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  cursor: pointer;
`;
S.UploadImageBackImg = styled.img`
  padding: 0 0 10px 50px;
  opacity: 0.6;
`;

S.UploadImageShow = styled.div``;

S.UploadImage = styled.input``;

S.UploadImageTag = styled.div`
  color: #b3b3b3;
  font-size: 15px;
`;

S.ImageArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
S.ImagePreviewArea = styled.div`
  display: flex;
  align-items: center;
  width: 550px;
  height: 290px;
  border: 1px solid #d9d9d9;
  padding: 20px;
  overflow: scroll;
`;

S.ThumbsContainer = styled.aside`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
`;

S.ShowPostBox = styled.div`
  position: absolute;
  width: 100%;
  height: 1345px;
`;

export default S;
