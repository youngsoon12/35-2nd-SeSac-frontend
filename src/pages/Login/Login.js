import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import S from './Styled.Login';

const Login = () => {
  const navigate = useNavigate();

  const params = new URL(document.URL).searchParams;
  const code = params.get('code');

  const authLink = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=code`;

  useEffect(() => {
    if (code) {
      fetch(`http://10.58.4.114:8000/users/login?code=${code}`, {
        method: 'GET',
      })
        .then(res => res.json())
        .then(data => {
          if (data.access_token) {
            alert('환영합니다!');
            localStorage.setItem('jwt', data.access_token);
            navigate('/');
          } else {
            alert('다시 시도해주세요!');
          }
        });
    }
  }, [code, navigate]);

  const goToKakaoLogin = () => {
    window.location.href = authLink;
  };

  const goToMain = () => {
    navigate('/');
  };

  return (
    <S.loginWrap>
      <S.Container>
        <S.GreetingContainer>
          <S.MainIcon>🌱</S.MainIcon>
          <S.Greeting>
            {code ? '로그인 완료 ✅' : 'Welcome to 싱그러운 우리!'}
          </S.Greeting>
        </S.GreetingContainer>
        <S.LoginIcons>
          <i className="fab fa-facebook" />
          <i className="fab fa-instagram" />
          <i className="fab fa-twitter-square" />
        </S.LoginIcons>
        <S.LoginBtn onClick={code ? goToMain : goToKakaoLogin}>
          {code ? '메인 화면으로' : '카카오로 시작하기'}
        </S.LoginBtn>
      </S.Container>
    </S.loginWrap>
  );
};

export default Login;
