import styled from 'styled-components';

const S = {};

S.Container = styled.section`
  position: relative;
  padding: 30px 100px 100px;
`;

// 작성자 정보
S.Editor = styled.article`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  min-height: 56px;
  margin: 0 auto;
  max-width: 1200px;
`;

S.ProfileImg = styled.div`
  width: 56px;
  height: 56px;
  border: 1px solid lightgray;
  border-radius: 50%;
  overflow: hidden;
`;

S.Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

S.EditorInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-left: 20px;
`;

S.Id = styled.div`
  display: flex;
  gap: 10px;
  font-size: 17px;
`;

S.Follow = styled.a`
  color: #1f901f;
`;

// 본문
S.Content = styled.article`
  display: flex;
  flex-direction: column;
  gap: 60px;
  max-width: 800px;
  margin: 100px auto;
  text-align: center;
  line-height: 25px;
`;

S.ContentTitle = styled.h1`
  font-size: 25px;
  font-weight: 700;
`;

S.ContentImg = styled.div`
  width: 100%;
  border-radius: 4px;
  overflow: hidden;

  & :nth-child(n) {
    margin-top: 30px;
  }
`;

S.ContentTxt = styled.div`
  color: ${props => props.theme.deepGray};
`;

S.Map = styled.div`
  width: 100%;
  height: 400px;
  margin: 0 auto;

  .wrap {
    position: absolute;
    left: 0;
    bottom: 40px;
    width: 288px;
    height: 140px;
    margin-left: -144px;
    text-align: left;
    font-size: 12px;
    font-family: 'Malgun Gothic', dotum, '돋움', sans-serif;
    line-height: 1.5;
  }
  .wrap * {
    padding: 0;
    margin: 0;
  }
  .wrap .info {
    width: 286px;
    height: 128px;
    border-radius: 5px;
    border-bottom: 2px solid #ccc;
    border-right: 1px solid #ccc;
    overflow: hidden;
    background: #fff;
  }
  .wrap .info:nth-child(1) {
    border: 0;
    box-shadow: 0px 1px 2px #888;
  }
  .info .title {
    padding: 8px 0 0 10px;
    height: 35px;
    background: #eee;
    border-bottom: 1px solid #ddd;
    font-size: 16px;
    font-weight: bold;
  }
  .info .close {
    position: absolute;
    top: 10px;
    right: 10px;
    color: #888;
    width: 17px;
    height: 17px;
    background: url('https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/overlay_close.png');
  }
  .info .close:hover {
    cursor: pointer;
  }
  .info .body {
    position: relative;
    overflow: hidden;
  }
  .info .desc {
    position: relative;
    margin: 13px 0 0 90px;
    height: 75px;
  }
  .desc .ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .desc .jibun {
    font-size: 11px;
    color: #888;
    margin-top: -2px;
    margin-bottom: 3px;
  }
  .info .img {
    position: absolute;
    top: 6px;
    left: 5px;
    width: 73px;
    height: 71px;
    padding: 3px;
    color: #888;
    overflow: hidden;
  }
  .info:after {
    content: '';
    position: absolute;
    margin-left: -12px;
    left: 50%;
    bottom: 0;
    width: 22px;
    height: 12px;
    background: url('https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/vertex_white.png');
  }
  .info .link {
    display: inline-block;
    padding: 3px;
    color: white;
    background: #3496ff;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    text-decoration: none;
  }
`;

S.HashTags = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 6px;
  color: ${props => props.theme.logogreen};
  font-size: 17px;
`;

S.ButtonList = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  max-width: 1000px;
  margin: 75px auto 0;
`;

S.PostOptionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 50px;
  margin-bottom: 10px;
  color: ${props => props.theme.middleGray};
  background-color: white;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  text-decoration: none;
  font-size: 1rem;
  cursor: pointer;
`;

S.TimeStamp = styled.div`
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  color: ${props => props.theme.lightGray};
  font-size: 14px;
  text-align: right;
`;

S.Comments = styled.article`
  margin: 80px auto 0;
  max-width: 1000px;
`;

S.SubTitle = styled.h3`
  line-height: 63px;
  font-size: 25px;
  font-weight: 700;
  color: ${props => props.theme.black};
`;

S.Count = styled.span`
  color: #1f901f;
`;

S.CommentsForm = styled.form`
  position: relative;
  overflow: hidden;
  height: 100%;
  visibility: visible;
  transition: all 0.3s;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
`;

S.CommentsList = styled.ul`
  margin-top: 27px;
`;

S.Input = styled.input`
  width: calc(100% - 65px);
  height: 48px;
  padding: 14px 0 14px 19px;
  line-height: 20px;
  font-size: 15px;
  border: none;

  &::placeholder {
    color: ${props => props.theme.middleGray};
  }

  &:focus {
    outline: none;
  }
`;

S.Button = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 65px;
  color: #009a3e;
  background: none;
  border: none;
  text-align: center;
  line-height: 48px;
  font-size: 15px;
  opacity: ${props => (props.disabled ? 0.5 : 1)};
  cursor: pointer;
`;

S.PageButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 30%;
  margin: 10px auto;
`;

S.PageButton = styled.button`
  padding: 0 auto;
  color: ${({ isCurrent, theme }) => (isCurrent ? theme.logogreen : '#b3b3b3')};
  background: none;
  border: none;
  font-weight: bold;
  font-size: 15px;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.logogreen};
  }
`;

S.PrevButton = styled(S.PageButton)`
  background: url('https://www.shouse.garden/images/common/arrow03_l.png')
    no-repeat;
  width: 10px;
  height: 17px;
  padding: 0;
`;

S.NextButton = styled(S.PrevButton)`
  background: url('https://www.shouse.garden/images/common/arrow03_r.png')
    no-repeat;
`;

//Comment
S.OneComment = styled.li`
  display: flex;
  gap: 10px;
  width: 100%;
  margin: 14px 0;

  &.reply {
    padding-left: 42px;
  }
`;

S.CommentImg = styled(S.ProfileImg)`
  width: 34px;
  height: 34px;
`;

S.Article = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  width: 100%;
  color: #4d4d4d;
  font-size: 15px;
`;

S.Nickname = styled.div`
  font-weight: 600;
  font-size: 16px;
`;

S.Info = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 4px 8.5px 0 0;
  line-height: 1;
  font-size: 13px;
  color: #b3b3b3;
`;

S.Dot = styled.div`
  content: '';
  width: 4px;
  height: 4px;
  background: #b3b3b3;
  border-radius: 100%;
`;

S.CommentOptionButton = styled.button`
  padding: 0;
  background: none;
  border: none;
  color: #b3b3b3;
  cursor: pointer;
`;

export default S;
