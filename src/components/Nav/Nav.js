import { useNavigate } from 'react-router';
import S from './Styled.Nav';

const Nav = () => {
  const navigation = useNavigate();

  const deleteToken = () => {
    localStorage.removeItem('jwt');
    navigation('/');
  };

  return (
    <S.Nav>
      <S.NavContainer>
        <S.NavTitle>
          <img src="/images/SesacSesac.jpg" alt="logo" />
          <div>싱그러운 우리</div>
        </S.NavTitle>
        <S.NavInputBox>
          <S.NavInputTitle>검색:</S.NavInputTitle>
          <S.NavInput />
        </S.NavInputBox>
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
      </S.NavContainer>
    </S.Nav>
  );
};

export default Nav;
