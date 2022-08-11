import { useNavigate } from 'react-router';
import S from './Styled.Nav';

const Nav = () => {
  const navigation = useNavigate();
  const isTokenVaild = localStorage.getItem('jwt');

  const preventPosting = e => {
    e.preventDefault();
  };

  const deleteToken = () => {
    localStorage.removeItem('jwt');
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
                    navigation('/post');
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
