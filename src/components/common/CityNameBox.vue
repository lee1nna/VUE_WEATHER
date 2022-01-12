<template>
  <div id="cityNameBox">
    <div class="cityName">
      <p>San Fransisco</p>
      <p>Jan 28, 2022</p>
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style lang="scss" scoped>
  @import '~/scss/main.scss';

  #cityNameBox {
    width: 100%;
    height: 10%;
    .cityName {
      @include c-center;
      width: 100%;
      height: 100%;

      p {
        color: white;
        font-family: 'Poppins', sans-serif;
        line-height: 2.5;
        text-align: center;

        &:first-child {
          width: 241px;
          height: 33px;
          font-size: 1.35rem;
        }
        &:last-child {
          width: 160px;
          height: 19px;
          font-size: 0.9rem;
          font-weight: 100;
        }
      }
    }
  }
</style>
