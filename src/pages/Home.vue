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
          <div class="weatherBox">
            <div class="weatherIcon">
              <img src="~/assets/storm.png" alt="" />
            </div>
            <div class="weatherData">
              <div v-for="weatherValue in weather" :key="weatherValue" class="detailData">
                <p>{{ weatherValue.title }}</p>
                <p>{{ weatherValue.value }}</p>
              </div>
            </div>
          </div>
        </div>
        <div id="todayWeather">
          <div class="textBox">
            <p>Today</p>
            <p>View full report</p>
          </div>
          <div class="timelyWeatherBox">
            <div class="timelyWeather">
              <div class="icon">
                <img src="~/assets/sunshine.png" alt="" />
              </div>
              <div class="data">
                <p>14:00</p>
                <p>32</p>
              </div>
            </div>
          </div>
        </div>
        <nav>
          <i class="fas fa-home"></i>
          <i class="fas fa-search-location"></i>
          <i class="fas fa-chart-line"></i>
          <i class="fas fa-cog"></i>
        </nav>
      </div>
      <div class="rightContainer"></div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        weather: [
          {
            title: 'Temp',
            value: '32',
          },
          {
            title: 'Wind',
            value: '10m/s',
          },
          {
            title: 'Humidity',
            value: '50%',
          },
        ],
      };
    },
  };
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
        box-shadow: 5px 5px 10px gray;

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
          height: 55%;
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
              box-shadow: 1px 1px 3px gray;
            }
          }
          .weatherBox {
            width: 100%;
            height: 80%;

            .weatherIcon {
              @include center;
              width: 100%;
              height: 70%;

              img {
                height: 80%;
              }
            }
            .weatherData {
              display: flex;
              width: 100%;
              height: 30%;

              .detailData {
                @include c-center;
                width: 33.33%;
                height: 100%;

                p {
                  line-height: 1.5;
                  color: white;

                  &:first-child {
                    font-size: 1rem;
                    font-weight: 200;
                  }
                  &:last-child {
                    font-family: 'Poppins', sans-serif;
                    font-size: 1.3rem;
                    font-weight: 200;
                  }
                }
              }
            }
          }
        }
        #todayWeather {
          width: 100%;
          height: 20%;
          .textBox {
            @include center-sb;
            width: calc(100% - 75px);
            height: 40%;
            padding: 0 35px 0 40px;

            p {
              font-family: 'Poppins', sans-serif;
              font-weight: 700;
              font-size: 1.2rem;
              color: white;

              &:last-child {
                font-weight: 200;
                font-size: 0.8rem;
                color: skyblue;
                cursor: pointer;
              }
            }
          }
          .timelyWeatherBox {
            display: flex;
            align-items: center;
            width: calc(100% -80px);
            height: 60%;
            padding: 0 40px;
            .timelyWeather {
              display: flex;
              width: 50%;
              height: 90%;
              background-color: rgba(189, 224, 255, 0.3);
              border-radius: 10px;
              .icon {
                @include center;
                width: 50%;
                height: 100%;

                img {
                  height: 80%;
                }
              }
              .data {
                @include c-center;
                width: 50%;
                height: 100%;

                p {
                  color: whitesmoke;
                  font-family: 'Poppins', sans-serif;
                  margin-top: 10px;

                  &:first-child {
                    @include center;
                    font-size: 1rem;
                    font-weight: 200;
                    margin-top: 5px;
                  }
                  &:last-child {
                    @include center;
                    font-size: 1.5rem;
                  }
                }
              }
            }
          }
        }
        nav {
          @include center-sb;
          width: calc(100% - 78px);
          height: 10%;
          padding: 0 40px;

          i {
            color: rgb(255, 255, 255);
            font-size: 1.15rem;
            cursor: pointer;
            transition: all 0.2s ease;

            &:hover {
              color: rgb(75, 224, 133);
            }
          }
        }
      }
      .rightContainer {
        width: 40%;
        height: 100%;
        border-radius: 50px;
        background-color: $primary;
        box-shadow: 5px 5px 10px gray;
      }
    }
  }
</style>
