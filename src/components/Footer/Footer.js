import S from './Styled.Footer';

const Footer = () => {
  return (
    <S.FooterContainer>
      <S.FooterContact>
        <S.FooterContactC>고객문의 : cs@gmail.wecode</S.FooterContactC>
        <S.FooterContactB>제휴문의 : wecode35@gmail.business</S.FooterContactB>
      </S.FooterContact>
      <S.FooterNav>
        <S.FooterNavItem>공지사항 </S.FooterNavItem>
        <S.FooterNavItem>브랜드 스토리 </S.FooterNavItem>
        <S.FooterNavItem>기인정보처리방침 </S.FooterNavItem>
        <S.FooterNavItem>서비스 이용약관 </S.FooterNavItem>
        <S.FooterNavItem>고객상담 </S.FooterNavItem>
        <S.FooterNavItem>판매자 신청 </S.FooterNavItem>
        <S.FooterNavItem>사업자 구매회원 신청 </S.FooterNavItem>
      </S.FooterNav>
      <S.FooterInfo>
        <S.FooterLeaderInfo>
          <S.FooterLeaderInfoItem>대표번호:0000-0000</S.FooterLeaderInfoItem>
          <S.FooterLeaderInfoItem>재휴문의:aaaa@aaa.aaa</S.FooterLeaderInfoItem>
        </S.FooterLeaderInfo>
        <S.FooterPlaceInfo>
          <S.FooterPlaceInfoItem>
            주소:서울특별시 강남구 테헤란로 427 10층{' '}
          </S.FooterPlaceInfoItem>
          <S.FooterPlaceInfoItem>
            사업자등록번호: 1111-11-111111{' '}
          </S.FooterPlaceInfoItem>
          <S.FooterPlaceInfoItem>
            통신판매업신고번호: 0000-서울특별시-000
          </S.FooterPlaceInfoItem>
          <S.FooterPlaceInfoItem>
            Copyright싱그러운 우리ALL RIGHTS RESERVED
          </S.FooterPlaceInfoItem>
          <S.FooterPlaceInfoItem />
        </S.FooterPlaceInfo>
      </S.FooterInfo>
    </S.FooterContainer>
  );
};

export default Footer;
