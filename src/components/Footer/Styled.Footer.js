import styled from 'styled-components';

const S = {};

S.FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: stretch;
  height: 350px;
  padding: 30px 50px;
  background-color: ${({ theme }) => theme.footerGray};
  color: ${({ theme }) => theme.footerWhite};
  font-size: 15px;
`;

S.FooterContact = styled.div`
  display: flex;
  justify-content: space-between;
  width: 35%;
`;

S.FooterContactC = styled.span``;

S.FooterContactB = styled.span``;

S.FooterNav = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.footerNavGray};
  padding: 20px;
  border-radius: 8px;
  color: ${({ theme }) => theme.white};
`;

S.FooterNavItem = styled.span`
  cursor: pointer;
`;

S.FooterInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

S.FooterLeaderInfo = styled.div`
  margin-bottom: 20px;
`;

S.FooterLeaderInfoItem = styled.span`
  margin-right: 10px;
`;

S.FooterPlaceInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
`;

S.FooterPlaceInfoItem = styled.span``;

export default S;
