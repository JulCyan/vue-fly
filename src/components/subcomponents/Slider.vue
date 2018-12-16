<template>
  <div class="swiper-container slider">

    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in sliderList" :key="item.id">
        <img :src="item.src" alt="">
      </div>

    </div>

    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

  </div>
</template>

<script>
  export default {
    name: "Slider",
    props: [
      "sliderList"
    ],
    mounted() {
      new this.$Swiper('.swiper-container.slider', {
        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项

        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },

        // 如果需要滚动条
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      })
    },

  }
</script>

<style scoped lang="less">
  .slider.swiper-container {
    width: 100vw;

    img {
      width: 100vw;
    }
  }
</style>