/* global kakao */
import React, { useEffect } from 'react';
import styled from 'styled-components'; // 1

const KakaoMap = ({ data }) => {
  // const mapSearch = data[2];
  const Result = data[2];

  const zido = () => {
    let mapContainer = document.getElementById('map'), // 지도를 표시할 div
      mapOption = {
        center: new kakao.maps.LatLng(36.450701, 126.570667), // 지도의 중심좌표
        level: 14, // 지도의 확대 레벨
      };

    let map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

    // 마커를 표시할 위치와 내용을 가지고 있는 객체 배열입니다
    let positions = [
      {
        content: Result[0].title,
        latlng: new kakao.maps.LatLng(Result[0].longitude, Result[0].latitude),
      },
      {
        content: Result[1].title,
        latlng: new kakao.maps.LatLng(Result[1].longitude, Result[1].latitude),
      },
      {
        content: Result[2].title,
        latlng: new kakao.maps.LatLng(Result[2].longitude, Result[2].latitude),
      },
    ];

    for (let i = 0; i < positions.length; i++) {
      // 마커를 생성합니다
      let marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커의 위치
      });

      // 마커에 표시할 인포윈도우를 생성합니다
      let infowindow = new kakao.maps.InfoWindow({
        content: positions[i].content, // 인포윈도우에 표시할 내용
      });

      // 마커에 mouseover 이벤트와 mouseout 이벤트를 등록합니다
      // 이벤트 리스너로는 클로저를 만들어 등록합니다
      // for문에서 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
      kakao.maps.event.addListener(
        marker,
        'mouseover',
        makeOverListener(map, marker, infowindow)
      );
      kakao.maps.event.addListener(
        marker,
        'mouseout',
        makeOutListener(infowindow)
      );
    }

    // 인포윈도우를 표시하는 클로저를 만드는 함수입니다
    function makeOverListener(map, marker, infowindow) {
      return function () {
        infowindow.open(map, marker);
      };
    }

    // 인포윈도우를 닫는 클로저를 만드는 함수입니다
    function makeOutListener(infowindow) {
      return function () {
        infowindow.close();
      };
    }
  };

  useEffect(() => {
    zido();
  });

  return <KaKao id="map" />;
};

export default KakaoMap;

const KaKao = styled.div`
  width: 400px;
  height: 450px;
  right: 480px;
  top: 50px;
  z-index: 0;
`;
