import { useNavigate } from 'react-router';
import S from './Styled.Nav';

const Nav = () => {
  const navigation = useNavigate();
  const isTokenVaild = localStorage.getItem('jwt');

  const preventPosting = e => {
    alert('로그인을 해주세요!');
    e.preventDefault();
  };

  const deleteToken = () => {
    localStorage.removeItem('jwt');
    alert('로그아웃 되었습니다!');
    navigation('/');
  };

  const goToMain = () => {
    navigation('/');
  };

  return (
    <S.Nav>
      <S.NavContainer>
        <S.NavTitle>
          <img src="/images/loginImg/SesacSesac.jpg" alt="logo" />
          <div onClick={goToMain}>싱그러운 우리</div>
        </S.NavTitle>
        <S.NavInputBox>
          <S.NavInputTitle>검색:</S.NavInputTitle>
          <S.NavInput />
        </S.NavInputBox>
        <S.NavRight>
          <S.NavLogin
            onClick={
              localStorage.getItem('jwt')
                ? deleteToken
                : () => {
                    navigation('/kakaoLogin');
                  }
            }
          >
            {localStorage.getItem('jwt') ? `로그아웃` : `로그인`}
          </S.NavLogin>
          <S.NavPostIcon
            onClick={
              isTokenVaild
                ? () => {
                    navigation('/post/posting');
                  }
                : preventPosting
            }
            src="/images/navImg/writing.png"
          />
        </S.NavRight>
      </S.NavContainer>
    </S.Nav>
  );
};

export default Nav;
