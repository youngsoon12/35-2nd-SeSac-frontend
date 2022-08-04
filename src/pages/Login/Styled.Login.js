import styled from 'styled-components';

const S = {};
S.loginWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

S.Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  width: 500px;
  height: 500px;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.lightGray};
`;

S.GreetingContainer = styled.div`
  width: 100%;
`;

S.LoginIcons = styled.div`
  width: 50%;
  font-size: 30px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  color: ${({ theme }) => theme.logogreen};
`;

S.MainIcon = styled.span`
  display: inline-block;
  margin-bottom: 60px;
  font-size: 100px;
`;

S.Greeting = styled.p`
  font-size: 20px;
  color: ${({ theme }) => theme.black};
`;

S.LoginBtn = styled.div`
  width: 250px;
  height: 60px;
  padding: 20px;
  background-color: #f7e600;
  color: ${({ theme }) => theme.brown};
  border-radius: 20px;
  cursor: pointer;
`;

export default S;
