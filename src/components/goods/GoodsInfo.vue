<template>
  <div id="goodsInfo">

    <!-- 小球 -->
    <transition
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter">
      <div class="ball" v-show="ballFlag" ref="ball"></div>
    </transition>

    <div class="swiper-container goodsInfo">
      <div class="swiper-wrapper">
        <div class="swiper-slide">


          <!-- 轮播图区域 -->
          <mySlider :sliderList="sliderList"></mySlider>





          <section id="wife">



            <div class="title">
              名称：<strong>
              {{ Info.proName }}
            </strong>
            </div>
            <div class="price">
              价格：<span class="mui-badge-danger mui-badge-inverted">
                                    {{ '$ ' + Info.price }}
                                </span>
              <del>{{ '$ '+ Info.oldPrice }}</del>
            </div>
            <div class="size">
              <div><span>码数:&nbsp;&nbsp;&nbsp;</span>
                <el-select v-model="size" clearable placeholder="请选择" size="mini">
                  <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </div>




            <div class="count">
              <span>数量:</span>
              <el-input-number v-model="num" :min="1" :max="maxNum" label="描述文字"></el-input-number>
              <span>剩余{{ Info.num }}件</span>
            </div>


            <div class="add">
              <el-button type="primary" @click="ballFlag=!ballFlag" class="btn">加入购物车</el-button>
              <el-button type="success" class="">立即购买</el-button>
            </div>

          </section>
        </div>
        <!-- 滚动条 -->
        <div class="swiper-scrollbar goodsInfo">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Slider from "../subcomponents/Slider.vue"
  import infanta01 from "../../assets/shop/images/infanta01.jpg"

  export default {
    name: "GoodsInfo",
    data() {
      return {
        id: this.$route.params.id,
        Info: '',
        sliderList: [{
          id: 1,
          src: infanta01
        }
        ],
        options: [],
        num: 1,
        maxNum: 20,
        remaining: 20,
        minSize: 40,
        maxSize: 50,
        size: 0 ,
        ballFlag: false,
      }
    },
    methods: {
      getInfo(id) {
        this.$http.get("product/queryProductDetail", {params: {id}})
            .then(result => {

              this.Info = result.body
              console.log(this.Info);
              // 码数
              let size = this.Info.size.split("-")
              this.minSize = parseInt(size[0])
              this.maxSize = parseInt(size[1])
              let num = this.maxSize -this.minSize
              var arr = []
              for (let i = 0; i <= num; i++ ) {
                let obj = {}
                obj.label = this.minSize
                obj.value = `选项${i}`
                arr[i] = obj
                this.minSize++
              }
              this.options = arr

              // 数量
              this.maxNum = this.Info.num


            })
      },
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
        el.style.transition = "all 0.7s cubic-bezier(.4,-0.6,.4,1)"
        // el.style.transition = "all 2.5s"
        done()
      },
      afterEnter() {
        this.ballFlag = !this.ballFlag
      }
    },
    components: {
      mySlider: Slider

    },
    created() {
      this.getInfo(this.id)
    },
    mounted() {
      new this.$Swiper(".swiper-container.goodsInfo", {
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

  #goodsInfo {
    height: 100%;
    overflow: hidden;
    padding-left: 5px;
    padding-right: 5px;

    > .swiper-container {
      height: 100%;

      > .swiper-wrapper {

        > .swiper-slide {
          height: auto;

          > #wife {
            margin-top: 20px;
            text-align: center;

            .title {

              margin-bottom: 5px;

              strong {
                font-weight: bold;
              }
            }

            .price {
              padding-top: 5px;
              padding-bottom: 5px;
              border-bottom: solid 1px #ccc;
              border-top: solid 1px #ccc;

              span {
                color: #f10215;
              }
            }

            .size {
              margin-top: 25px;
              margin-bottom: 25px;
              display: flex;
              justify-content: space-evenly;
              align-items: center;
              > div {


              }

              span {
                text-align: center;
              }
            }

            .count {
              display: flex;
              justify-content: space-evenly;
              align-items: center;
            }

            .add {
              padding: 20px;
            }
          }
        }
      }

    }
  }
  .ball {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: #f10215;
    position: absolute;
    z-index: 999;
    top: 475px;
    left: 185px;
  }
</style>