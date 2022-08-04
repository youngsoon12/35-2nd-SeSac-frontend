import styled from 'styled-components';

const S = {};
S.loginWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  padding-bottom: 80px;
  background: #f5f5f5;
`;

S.Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  width: 400px;
  height: 500px;
  text-align: center;
  background: white;
`;

S.GreetingContainer = styled.div`
  width: 100%;
`;

S.LoginIcons = styled.div`
  width: 70%;
  font-size: 30px;
  display: flex;
  justify-content: space-around;
  cursor: pointer;
  color: ${({ theme }) => theme.logogreen};
  margin: 30px auto;
`;

S.MainIcon = styled.span`
  display: inline-block;
  margin-bottom: 30px;
  font-size: 100px;

  img {
    width: 100px;
  }
`;

S.Greeting = styled.p`
  font-size: 20px;
  font-family: 'One-Mobile-Pop';
  color: ${({ theme }) => theme.black};
`;

S.LoginBtn = styled.div`
  display: flex;
  justify-content: center;
  width: 250px;
  height: 60px;
  padding: 20px;
  margin: 0 auto;
  background-color: #f7e600;
  color: ${({ theme }) => theme.brown};
  border-radius: 20px;
  font-size: 15px;
  cursor: pointer;

  img {
    height: 17px;
    margin-right: 10px;
  }
`;

export default S;
