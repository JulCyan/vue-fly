<template>
  <div id="goodsInfo">


    <div class="swiper-container goodsInfo">

      <div class="swiper-wrapper" id="swiperScroll">
        <div class="swiper-slide">

          <!-- 轮播图区域 -->
          <div id="slider">
            <mySlider :sliderList="sliderList"></mySlider>
          </div>


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
              <el-input-number v-model="num" :min="1" :max="maxNum" label="描述文字" id="number"></el-input-number>
              <span>剩余{{ Info.num }}件</span>
            </div>


            <div class="add">
              <el-button type="primary" @click="addBuyCar" class="btn">加入购物车</el-button>
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
  // import infanta01 from "../../assets/shop/images/infanta01.jpg"

  export default {
    name: "GoodsInfo",
    data() {
      return {
        id: this.$route.params.id,
        Info: '',
        sliderList: [{
          id: 1,
          src: 'http://127.0.0.1:3000/mobile/images/detail.jpg'
        }
        ],
        options: [],
        num: 1,
        maxNum: 20,
        remaining: 20,
        minSize: 40,
        maxSize: 50,
        size: 40,

      }
    },
    methods: {
      getInfo(id) {
        this.$http.get("product/queryProductDetail", {params: {id}})
            .then(result => {

              this.Info = result.body

              // 图片
              this.sliderList.src = 'http://127.0.0.1:3000' + this.Info.pic[0].picAddr
              // 码数
              let size = this.Info.size.split("-")
              this.minSize = parseInt(size[0])
              this.maxSize = parseInt(size[1])
              let num = this.maxSize - this.minSize
              var arr = []
              for (let i = 0; i <= num; i++) {
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

      addBuyCar() {
        this.$store.commit("changeBallFlag")
        this.$http.post("cart/addCart", {productId: this.id, num: this.num, size: this.size})
            .then(result => {
              console.log(result.body);
              if(result.body.error === 400) {
                this.$router.push({path: "/login"})
              }

            })
      },
      scroll () {
        setTimeout(() => {
          this.$store.commit("changeBallStyle")
        },1500)
      }
    },
    components: {
      mySlider: Slider

    },
    created() {

      this.getInfo(this.id)
    },
    mounted() {
      let swiperScroll = document.getElementById("swiperScroll")
      swiperScroll.addEventListener("touchend", this.scroll, false)

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
    },

  }
</script>

<style scoped lang="less">

  #goodsInfo {
    height: 100%;
    /*overflow: hidden;*/
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

              span {
                text-align: center;
              }
            }

            .count {
              position: relative;
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



  #slider {
    width: 100vw;
    height: 100vw;
    /*height: auto;*/
  }
</style>