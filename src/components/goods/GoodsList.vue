<template>
  <div id="goodsList">
    <!-- 添加区域滚动的父容器  这个id是方便初始化的时候获取这个区域滚动的父容器 -->
    <div class="swiper-container goodsList" id="refreshContainer">
      <!-- 添加区域滚动的子容器 -->
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <!-- 搜索表单 -->
          <!-- 商品列表 -->
          <mt-loadmore :top-method="loadTop" @top-status-change="handleTopChange" :bottom-method="loadBottom"
                       :bottom-all-loaded="allLoaded" @bottom-status-change="handleBottomChange" ref="loadmore">
            <div class="product-list">
              <div class="title">
                <!-- ul>li*4>a[href="#"]{上架时间}>i.fa.fa-angle-down -->
                <ul>
                  <li class="active"><a href="javascript:void(0)">上架时间<i class="fa fa-angle-down"></i></a></li>
                  <!-- 默认定义一个排序顺序的属性 值默认为1  升序   点击后改成2  再点改成1 -->
                  <!-- data-sort-type="price" 排序方式(类型) -->
                  <li @click="forPrice"><a href="javascript:void(0)" data-sort="1" data-sort-type="price">价格<i
                      class="fa fa-angle-down"></i></a></li>
                  <li @click="forNum"><a href="javascript:void(0)" data-sort="1" data-sort-type="num">销量<i
                      class="fa fa-angle-down"></i></a>
                  </li>
                  <li><a href="javascript:void(0)">折扣<i class="fa fa-angle-down"></i></a></li>
                </ul>
              </div>
              <!-- ul>li*8>a[href="#"]>img[src="../../assets/shop/images/brand$.png"] -->
              <div class="content">
                <ul>

                  <li v-for="item in productList" :key="item.id">
                    <a href="#" class="product">
                      <img class="product-img" :src="'http://127.0.0.1:3000' + item.pic[0].picAddr" alt="">
                      <p class="product-name">{{ item.proName }}</p>
                      <p class="product-price">
                        <span>{{ '$ ' + item.price }}</span>
                        <del>{{ '$ ' + item.oldPrice }}</del>
                      </p>
                      <p class="product-buy">
                        <el-button size="small" round @click="buy(item.id)" type="primary" plain>立即购买</el-button>
                      </p>
                    </a>
                  </li>

                </ul>
              </div>
            </div>
            <div slot="top" class="mint-loadmore-top">
              <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">↓</span>
              <span v-show="topStatus === 'loading'"><i class="el-icon-loading"></i></span>
            </div>
            <div slot="bottom" class="mint-loadmore-bottom">
              <span v-show="bottomStatus !== 'loading'" :class="{ 'rotate': bottomStatus === 'drop' }">shang</span>
              <span v-show="bottomStatus === 'loading'">Loading...</span>
            </div>
          </mt-loadmore>


        </div>
      </div>
      <!-- 滚动条 -->
      <div class="swiper-scrollbar">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsList",
    data() {
      return {
        topStatus: '',
        bottomStatus: '',
        page: 1,
        pageSize: 4,
        productList: [],
        allLoaded: false,
        price: true,
        num: true,
      }
    },
    methods: {
      init() {
        new this.$Swiper(".swiper-container.goodsList", {
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
      buy(id) {
        this.$router.push({name: "goodsInfo", params: {id}})
      },
      loadBottom() {
        this.getProduct().then((result) => {
            if (result.body.data.length == 0) {
              this.allLoaded = true
              this.$refs.loadmore.onBottomLoaded()
              this.$Toast({
                message: "没有更多了",
                duration: 1500
              })
            }else {
              this.productList = this.productList.concat(result.body.data)
              this.page++
            }
          })
      },
      loadTop() {
        this.page = 1
        this.getProduct().then((result) => {
            this.productList = result.body.data
            this.$refs.loadmore.onTopLoaded()
        })
      },
      handleTopChange(status) {
        this.topStatus = status;
      },
      handleBottomChange(status) {
        this.bottomStatus = status;
      },
      getProduct() {
        return new Promise((resolve) => {
          this.$http.get("product/queryProduct", {
            params: {
              page: this.page,
              pageSize: this.pageSize,
              proName: this.$route.params.search
            }
          })
              .then(result => {
                console.log(result.body.data);
                resolve(result)
              })
        })
      },
      forPrice() {
        this.page = 1
        this.$http.get("product/queryProduct", {
          params: {
            price: this.price ? 1 : 2,
            page: this.page,
            pageSize: this.pageSize,
            proName: this.$route.params.search
          }
        })
            .then(result => {
              console.log(result.body.data);
              this.productList = result.body.data
              this.price = !this.price
              this.num = true
              this.page = 1
            })


      },
      forNum() {
        this.$http.get("product/queryProduct", {
          params: {
            num: this.num ? 1 : 2, page: this.page,
            pageSize: this.pageSize,
            proName: this.$route.params.search
          }
        })
            .then(result => {
              this.productList = result.body.data
              this.num = !this.num
              this.price = true
              this.page = 1
            })
      }
    },
    created() {
      this.getProduct().then((result) => {
        if (result.body.data == []) {
          this.allLoaded = true
          this.$refs.loadmore.onBottomLoaded()
          return this.$Toast("暂时找不到您要的商品")
        }
      })
    },
    mounted() {
      this.init()
    }
  }
</script>

<style scoped lang="less">
  #goodsList {
    height: 100%;

    .swiper-container {
      height: 100%;

      .swiper-wrapper {
        height: 100%;

        .swiper-slide {
          height: auto;

          .product-list {
            height: 100%;
            padding-top: 10px;
            display: flex;
            align-content: space-between;
            flex-wrap: wrap;

            .title {
              width: 100%;
              border-top: solid 1px #ccc;
              border-bottom: solid 1px #ccc;

              ul {
                display: flex;

                li {
                  flex: 100%;
                  height: 40px;
                  text-align: center;
                  line-height: 40px;

                  a:active {
                    color: #f10215;
                  }
                }
              }
            }

            .content {
              width: 100%;

              ul {
                display: flex;
                flex-wrap: wrap;

                li {
                  padding-bottom: 10px;
                  margin-top: 10px;

                  border: solid 1px #ccc;
                  width: 50%;
                  text-align: center;

                  .product-name {
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box; //将对象作为弹性伸缩盒子模型显示。

                    -webkit-box-orient: vertical; //从上到下垂直排列子元素（设置伸缩盒子的子元素排列方式）

                    -webkit-line-clamp: 2; //这个属性不是css的规范属性，需要组合上面两个属性，表示显示的行数
                    padding-left: 5px;
                    padding-right: 5px;
                  }

                  .product-price {
                    display: flex;
                    justify-content: space-around;
                    margin-top: 5px;
                    margin-bottom: 5px;
                    /*span,*/
                    /*del {*/
                    /*}*/

                    span {
                      color: #f10215;
                    }
                  }


                  img {
                    width: 80%;
                  }
                }
              }
            }
          }
        }
      }
    }
  }


</style>