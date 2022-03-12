<template>
  <div class="rightContainer">
    <CityNameBox />
    <div id="contentsBox">
      <div class="buttonBox">
        <div class="buttonBackground">
          <button class="forecast">Forecast</button>
          <button class="airquality">Air Quality</button>
        </div>
      </div>
      <div class="weatherBox">
        {{ test }}
        <div class="airCondition">
          <!-- 영하 / 영상 나누기 -->
          <p v-if="this.$store.state.COMMON_01.subData2[2].value > 30">매우 더움</p>
          <p v-else-if="this.$store.state.COMMON_01.subData2[2].value > 25">더움</p>
          <p v-else-if="this.$store.state.COMMON_01.subData2[2].value > 20">시원함</p>
          <p @click="clickHandle" v-else-if="this.$store.state.COMMON_01.subData2[2].value > 15">선선함</p>
          <p v-else-if="this.$store.state.COMMON_01.subData2[2].value > 0">추움</p>
          <p v-else>매우 추움</p>
        </div>
        <div class="detail">
          <div class="title">
            <p>Detail Temperatures</p>
          </div>
          <div v-for="detailData in this.$store.state.COMMON_01.subData2" :key="detailData" class="data">
            <div class="dataName">
              <p></p>
              <p>{{ detailData.title }}</p>
            </div>
            <div class="dataValue">
              <p>
                <span>{{ Math.round(detailData.value) }}</span> &deg;
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Map />
    <NavUnderBar />
  </div>
</template>

<script>
  import CityNameBox from './common/CityNameBox.vue';
  import NavUnderBar from './common/NavUnderBar.vue';
  import Map from './Map.vue';

  export default {
    components: { CityNameBox, NavUnderBar, Map },
    data() {
      return {
        test: 'test',
        test1: 'test1',
      };
    },

    updated() {
      console.log('updated', this.test);
    },
    created() {
      this.$store.dispatch('COMMON_01/GET_DATA');

      console.log('created');

      this.test = 'asd';
    },
    watch: {
      // eslint-disable-next-line vue/no-arrow-functions-in-watch
      test: (value) => {
        console.log('dasdasdasdqdq1', value);
      },
    },

    methods: {
      clickHandle() {
        this.test = 'ddddddd';
        // this.set(this.test, '경기도 의왕시');
      },
    },
  };
</script>

<style lang="scss" scoped>
  @import '~/scss/main.scss';
  @import '~/scss/subView.scss';
</style>
