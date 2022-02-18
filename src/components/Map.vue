<template>
  <div id="mapContainer">
    <div id="map"></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        markerLon: '',
        markerLat: '',
      };
    },
    mounted() {
      if (window.kakao && window.kakao.maps) {
        this.initMap();
      } else {
        const script = document.createElement('script');
        /* global kakao */
        script.onload = () => kakao.maps.load(this.initMap);
        script.src = 'http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=460f0ed10d70ba3d6b7af586f508b369';
        document.head.appendChild(script);
      }
    },
    methods: {
      initMap() {
        var mapContainer = document.getElementById('map'), // 지도를 표시할 section
          mapOption = {
            center: new kakao.maps.LatLng(36.73035, 127.967487), // 지도의 중심좌표
            level: 13, // 지도의 확대 레벨
          };
        var map = new kakao.maps.Map(mapContainer, mapOption); // eslint-disable-line no-unused-vars
        // 마커가 표시될 위치입니다.
        var positions = [
          {
            // 서울
            lating: new kakao.maps.LatLng(37.566826, 126.9786567),
          },
          {
            // 인천
            lating: new kakao.maps.LatLng(37.40864282648822, 126.65071862847725),
          },
          {
            // 수원
            lating: new kakao.maps.LatLng(37.2911, 127.0089),
          },
          {
            // 대전
            lating: new kakao.maps.LatLng(36.3519957815787, 127.39131469478555),
          },
          {
            // 태백
            lating: new kakao.maps.LatLng(37.15818414766273, 128.928560966107),
          },
          {
            // 강릉
            lating: new kakao.maps.LatLng(37.791688035246636, 128.82867301427635),
          },
          {
            // 대구
            lating: new kakao.maps.LatLng(35.871148697228875, 128.61345034272617),
          },
          {
            // 울산
            lating: new kakao.maps.LatLng(35.5372, 129.3167),
          },
          {
            // 부산
            lating: new kakao.maps.LatLng(5.185997613083536, 129.0662809358643),
          },
          {
            // 전주
            lating: new kakao.maps.LatLng(35.90493196781132, 127.17357575637105),
          },
          {
            // 광주
            lating: new kakao.maps.LatLng(35.166611792579545, 126.84603104436039),
          },
          {
            // 목포
            lating: new kakao.maps.LatLng(34.823630139082525, 126.39766650967137),
          },
          {
            // 제주도
            lating: new kakao.maps.LatLng(33.5097, 126.5219),
          },
        ];
        const vm = this;
        // 마커를 생성합니다.
        positions.forEach(function (pos) {
          var marker = new kakao.maps.Marker({
            position: pos.lating, // 마커의 위치
          });
          // 마커가 지도 위에 표시되도록 설정합니다.
          marker.setMap(map);
          //마커 클릭 이벤트를 등록합니다.
          kakao.maps.event.addListener(marker, 'click', () => {
            //마커 position을 출력합니다.
            // console.log(marker.getPosition());
            vm.markerLon = marker.getPosition().La;
            vm.markerLat = marker.getPosition().Ma;
            // console.log(vm.markerLat);
            // console.log(vm.markerLon);
            return marker;
          });
          // 아래 코드는 지도 위의 마커를 제거하는 코드입니다.
          // marker.setMap(null);
        });
      },
    },
  };
</script>

<style lang="scss" scoped>
  @import '~/scss/main.scss';

  #mapContainer {
    @include center;
    width: 100%;
    height: 35%;

    #map {
      width: 80%;
      height: 90%;
      border-radius: 10px;
    }
  }
</style>
