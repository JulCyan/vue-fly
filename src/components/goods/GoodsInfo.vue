<template>
  <div id="goodsInfo">
    <div class="swiper-container goodsInfo">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <!-- 轮播图区域 -->
          <!--<mySlider :sliderList="sliderList"></mySlider>-->
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
              <div><span>码数:</span>
                <el-select v-model="value4" clearable placeholder="请选择">
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
              <el-input-number v-model="num" :min="1" :max="10" label="描述文字"></el-input-number>
              <span>剩余{{ Info.num }}件</span>
            </div><div class="count">
              <span>数量:</span>
              <el-input-number v-model="num" :min="1" :max="10" label="描述文字"></el-input-number>
              <span>剩余{{ Info.num }}件</span>
            </div><div class="count">
              <span>数量:</span>
              <el-input-number v-model="num" :min="1" :max="10" label="描述文字"></el-input-number>
              <span>剩余{{ Info.num }}件</span>
            </div><div class="count">
              <span>数量:</span>
              <el-input-number v-model="num" :min="1" :max="10" label="描述文字"></el-input-number>
              <span>剩余{{ Info.num }}件</span>
            </div><div class="count">
              <span>数量:</span>
              <el-input-number v-model="num" :min="1" :max="10" label="描述文字"></el-input-number>
              <span>剩余{{ Info.num }}件</span>
            </div><div class="count">
              <span>数量:</span>
              <el-input-number v-model="num" :min="1" :max="10" label="描述文字"></el-input-number>
              <span>剩余{{ Info.num }}件</span>
            </div><div class="count">
              <span>数量:</span>
              <el-input-number v-model="num" :min="1" :max="10" label="描述文字"></el-input-number>
              <span>剩余{{ Info.num }}件</span>
            </div><div class="count">
              <span>数量:</span>
              <el-input-number v-model="num" :min="1" :max="10" label="描述文字"></el-input-number>
              <span>剩余{{ Info.num }}件</span>
            </div><div class="count">
              <span>数量:</span>
              <el-input-number v-model="num" :min="1" :max="10" label="描述文字"></el-input-number>
              <span>剩余{{ Info.num }}件</span>
            </div><div class="count">
              <span>数量:</span>
              <el-input-number v-model="num" :min="1" :max="10" label="描述文字"></el-input-number>
              <span>剩余{{ Info.num }}件</span>
            </div><div class="count">
              <span>数量:</span>
              <el-input-number v-model="num" :min="1" :max="10" label="描述文字"></el-input-number>
              <span>剩余{{ Info.num }}件</span>
            </div><div class="count">
              <span>数量:</span>
              <el-input-number v-model="num" :min="1" :max="10" label="描述文字"></el-input-number>
              <span>剩余{{ Info.num }}件</span>
            </div><div class="count">
              <span>数量:</span>
              <el-input-number v-model="num" :min="1" :max="10" label="描述文字"></el-input-number>
              <span>剩余{{ Info.num }}件</span>
            </div><div class="count">
              <span>数量:</span>
              <el-input-number v-model="num" :min="1" :max="10" label="描述文字"></el-input-number>
              <span>剩余{{ Info.num }}件</span>
            </div><div class="count">
              <span>数量:</span>
              <el-input-number v-model="num" :min="1" :max="10" label="描述文字"></el-input-number>
              <span>剩余{{ Info.num }}件</span>
            </div><div class="count">
              <span>数量:</span>
              <el-input-number v-model="num" :min="1" :max="10" label="描述文字"></el-input-number>
              <span>剩余{{ Info.num }}件</span>
            </div><div class="count">
              <span>数量:</span>
              <el-input-number v-model="num" :min="1" :max="10" label="描述文字"></el-input-number>
              <span>剩余{{ Info.num }}件</span>
            </div><div class="count">
              <span>数量:</span>
              <el-input-number v-model="num" :min="1" :max="10" label="描述文字"></el-input-number>
              <span>剩余{{ Info.num }}件</span>
            </div><div class="count">
              <span>数量:</span>
              <el-input-number v-model="num" :min="1" :max="10" label="描述文字"></el-input-number>
              <span>剩余{{ Info.num }}件</span>
            </div><div class="count">
              <span>数量:</span>
              <el-input-number v-model="num" :min="1" :max="10" label="描述文字"></el-input-number>
              <span>剩余{{ Info.num }}件</span>
            </div><div class="count">
              <span>数量:</span>
              <el-input-number v-model="num" :min="1" :max="10" label="描述文字"></el-input-number>
              <span>剩余{{ Info.num }}件</span>
            </div><div class="count">
              <span>数量:</span>
              <el-input-number v-model="num" :min="1" :max="10" label="描述文字"></el-input-number>
              <span>剩余{{ Info.num }}件</span>
            </div><div class="count">
              <span>数量:</span>
              <el-input-number v-model="num" :min="1" :max="10" label="描述文字"></el-input-number>
              <span>剩余{{ Info.num }}件</span>
            </div><div class="count">
              <span>数量:</span>
              <el-input-number v-model="num" :min="1" :max="10" label="描述文字"></el-input-number>
              <span>剩余{{ Info.num }}件</span>
            </div><div class="count">
              <span>数量:</span>
              <el-input-number v-model="num" :min="1" :max="10" label="描述文字"></el-input-number>
              <span>剩余{{ Info.num }}件</span>
            </div><div class="count">
              <span>数量:</span>
              <el-input-number v-model="num" :min="1" :max="10" label="描述文字"></el-input-number>
              <span>剩余{{ Info.num }}件</span>
            </div><div class="count">
              <span>数量:</span>
              <el-input-number v-model="num" :min="1" :max="10" label="描述文字"></el-input-number>
              <span>剩余{{ Info.num }}件</span>
            </div><div class="count">
              <span>数量:</span>
              <el-input-number v-model="num" :min="1" :max="10" label="描述文字"></el-input-number>
              <span>剩余{{ Info.num }}件</span>
            </div><div class="count">
              <span>数量:</span>
              <el-input-number v-model="num" :min="1" :max="10" label="描述文字"></el-input-number>
              <span>剩余{{ Info.num }}件</span>
            </div><div class="count">
              <span>数量:</span>
              <el-input-number v-model="num" :min="1" :max="10" label="描述文字"></el-input-number>
              <span>剩余{{ Info.num }}件</span>
            </div><div class="count">
              <span>数量:</span>
              <el-input-number v-model="num" :min="1" :max="10" label="描述文字"></el-input-number>
              <span>剩余{{ Info.num }}件</span>
            </div><div class="count">
              <span>数量:</span>
              <el-input-number v-model="num" :min="1" :max="10" label="描述文字"></el-input-number>
              <span>剩余{{ Info.num }}件</span>
            </div><div class="count">
              <span>数量:</span>
              <el-input-number v-model="num" :min="1" :max="10" label="描述文字"></el-input-number>
              <span>剩余{{ Info.num }}件</span>
            </div><div class="count">
              <span>数量:</span>
              <el-input-number v-model="num" :min="1" :max="10" label="描述文字"></el-input-number>
              <span>剩余{{ Info.num }}件</span>
            </div><div class="count">
              <span>数量:</span>
              <el-input-number v-model="num" :min="1" :max="10" label="描述文字"></el-input-number>
              <span>剩余{{ Info.num }}件</span>
            </div><div class="count">
              <span>数量:</span>
              <el-input-number v-model="num" :min="1" :max="10" label="描述文字"></el-input-number>
              <span>剩余{{ Info.num }}件</span>
            </div>
            <div class="count">
              <span>数量:</span>
              <el-input-number v-model="num" :min="1" :max="10" label="描述文字"></el-input-number>
              <span>剩余{{ Info.num }}件</span>
            </div> <div class="count">
              <span>数量:</span>
              <el-input-number v-model="num" :min="1" :max="10" label="描述文字"></el-input-number>
              <span>剩余{{ Info.num }}件</span>
            </div> <div class="count">
              <span>数量:</span>
              <el-input-number v-model="num" :min="1" :max="10" label="描述文字"></el-input-number>
              <span>剩余{{ Info.num }}件</span>
            </div> <div class="count">
              <span>数量:</span>
              <el-input-number v-model="num" :min="1" :max="10" label="描述文字"></el-input-number>
              <span>剩余{{ Info.num }}件</span>
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
  // import Slider from "../subcomponents/Slider.vue"

  export default {
    name: "GoodsInfo",
    data() {
      return {
        id:this.$route.params.id,
        Info: '',
        sliderList: [{
          src: ''
        }
        ],
        options: [{
          value: '选项1',
          label: '40'
        }, {
          value: '选项2',
          label: '41'
        }, {
          value: '选项3',
          label: '42'
        }, {
          value: '选项4',
          label: '43'
        }, {
          value: '选项5',
          label: '44'
        }, {
          value: '选项6',
          label: '45'
        }, {
          value: '选项7',
          label: '46'
        },
          // {
          //   value: '选项8',
          //   label: '47'
          // }, {
          //   value: '选项9',
          //   label: '18'
          // }, {
          //   value: '选项10',
          //   label: '49'
          // }, {
          //   value: '选项11',
          //   label: '50'
          // }
        ],
        value4: "",
        num: 1,
        remaining: 20
      }
    },
    methods: {
      getInfo(id) {
        this.$http.get("product/queryProductDetail", { params: {id }})
            .then(result => {
              console.log(result.body);
              this.Info = result.body
              console.log(result.body.pic[0].picAddr);
              this.sliderList[0].src = `http://127.0.0.1:3000${result.body.pic[0].picAddr}`
            })
      }
    },
    components: {
      // mySlider: Slider

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

    .swiper-container {
      height: 100%;

      .swiper-wrapper {

        .swiper-slide {
          height: auto;

          #wife {
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
              margin-top: 20px;
              margin-bottom: 50px;
              display: flex;
              justify-content: space-evenly;
              align-items: center;

              span {
                text-align: center;
              }
            }

            .count {
              display: flex;
              justify-content: space-evenly;
              align-items: center;
            }
          }
        }
      }

    }
  }
</style>