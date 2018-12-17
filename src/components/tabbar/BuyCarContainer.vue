<template>
  <div id="buyCarContainer">

    <!-- 小球 -->
    <transition
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter">
      <div class="ball" v-show="ballFlag" ref="ball"></div>
    </transition>

    <!-- 主体 -->
    <div class="swiper-container wrap">
      <div class="swiper-wrapper">
        <div class="swiper-slide">

          <el-button type="success" icon="el-icon-check" circle @click="ballFlag=!ballFlag" class="btn"></el-button>

        </div>
        <!-- 滚动条 -->

      </div>
      <div class="swiper-scrollbar">
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: "BuyCarContainer",
    data() {
      return {
        ballFlag: false,
      }
    },
    methods: {
      beforeEnter(el) {
        el.style.transform = "translate(0, 0)"
      },
      enter(el, done) {
        const goods = document.getElementById("goods").getBoundingClientRect()
        const ball = this.$refs.ball.getBoundingClientRect()

        const xDistance = goods.left - ball.left
        const yDistance = goods.bottom - ball.bottom
        el.offsetWidth
        el.style.transform = `translate(${xDistance}px, ${yDistance}px)`
        el.style.transition = "all 0.7s cubic-bezier(.4,-0.3,.4,1)"
        // el.style.transition = "all 2.5s"
        done()
      },
      afterEnter() {
        this.ballFlag = !this.ballFlag
      }
    },
    mounted() {
      new this.$Swiper(".swiper-container.wrap", {
        direction: "vertical",
        freeMode: true,
        slidesPerView: 'auto',
        mousewheelControl: true,
        roundLengths: true, //防止文字模糊
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      })
    }
  }
</script>

<style scoped lang="less">
  #buyCarContainer {
    height: 100%;

    > .swiper-container {
      height: 100%;

      .swiper-slide {
        height: auto;

      }

    }

    .ball {
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background-color: #f10215;
      position: absolute;
      z-index: 999;
      top: 390px;
      left: 146px;
    }

  }

</style>