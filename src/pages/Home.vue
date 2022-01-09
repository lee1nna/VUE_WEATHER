<template>
  <div class="wrap">
    <div class="container">
      <div class="leftContainer">
        <div id="cityNameBox">
          <div class="cityName">
            <p>San Fransisco</p>
            <p>Jan 28, 2022</p>
          </div>
        </div>
        <div id="contentsBox">
          <div class="buttonBox">
            <button class="forecast">Forecast</button>
            <button class="airquality">Air Quality</button>
          </div>
        </div>
      </div>
      <div class="rightContainer"></div>
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style lang="scss" scoped>
  @import '~/scss/main.scss';
  .wrap {
    @include center;
    width: 100%;
    height: 100vh;
    font-size: 16px;

    .container {
      @include center-sb;
      width: 65%;
      height: 90%;
      max-width: 1920px;
      max-height: 1354px;

      // 공통 코드이기 때문에 어떻게 클린하게 작성할 수 있을지 고민해보자.
      .leftContainer {
        width: 40%;
        height: 100%;
        border-radius: 50px;
        background-color: $primary;
        box-shadow: 5px 5px 5px gray;

        #cityNameBox {
          @include center;
          width: 100%;
          height: 15%;

          p {
            width: 100%;
            color: white;
            font-family: 'Poppins', sans-serif;
            line-height: 1.5;

            &:first-child {
              font-size: 1.5rem;
            }
            &:last-child {
              font-size: 0.9rem;
              font-weight: 200;
              text-align: center;
            }
          }
        }
        #contentsBox {
          width: 100%;
          height: 50%;
          background-color: #921e224b;
          .buttonBox {
            @include center;
            width: 100%;
            height: 20%;

            button {
              width: 125px;
              height: 35px;
              margin: 0 10px;
              border: 0;
              border-radius: 7.5px;
              outline: 0;
              background-color: rgba(245, 245, 245, 0.5);
              cursor: pointer;
            }
          }
        }
      }
      .rightContainer {
        width: 40%;
        height: 100%;
        border-radius: 50px;
        background-color: $primary;
        box-shadow: 5px 5px 5px gray;
      }
    }
  }
</style>
