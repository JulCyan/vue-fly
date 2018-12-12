<template>
  <div id="home-container">


    <main id="main">
      <!-- 添加一个区域滚动的父容器 -->
      <div class="swiper-container wrap">
        <!-- 区域滚动的子容器 里面放真实要滚动的内容 轮播图 导航等 -->
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <!-- 轮播图区域 -->

            <div class="swiper-container slider">

              <div class="swiper-wrapper">

                <div class="swiper-slide"><img src="../../assets/shop/images/infanta01.jpg" alt=""></div>
                <div class="swiper-slide"><img src="../../assets/shop/images/infanta02.jpg" alt=""></div>
                <div class="swiper-slide"><img src="../../assets/shop/images/infanta03.jpg" alt=""></div>
                <div class="swiper-slide"><img src="../../assets/shop/images/infanta04.jpg" alt=""></div>
                <div class="swiper-slide"><img src="../../assets/shop/images/infanta05.jpg" alt=""></div>
                <div class="swiper-slide"><img src="../../assets/shop/images/infanta06.jpg" alt=""></div>
                <div class="swiper-slide"><img src="../../assets/shop/images/infanta07.jpg" alt=""></div>
                <div class="swiper-slide"><img src="../../assets/shop/images/infanta08.jpg" alt=""></div>

              </div>

              <!-- 如果需要分页器 -->
              <div class="swiper-pagination"></div>

            </div>


            <!-- 导航条区域 -->
            <nav id="nav">
              <!-- ul>li*6>a[href="#"]>img[src="../../assets/shop/images/nav$.png"] -->
              <ul>
                <li>
                  <a href="#"><img src="../../assets/shop/images/nav1.png" alt=""></a>
                </li>
                <li>
                  <a href="#"><img src="../../assets/shop/images/nav2.png" alt=""></a>
                </li>
                <li>
                  <a href="#"><img src="../../assets/shop/images/nav3.png" alt=""></a>
                </li>
                <li>
                  <a href="#"><img src="../../assets/shop/images/nav4.png" alt=""></a>
                </li>
                <li>
                  <a href="#"><img src="../../assets/shop/images/nav5.png" alt=""></a>
                </li>
                <li>
                  <a href="#"><img src="../../assets/shop/images/nav6.png" alt=""></a>
                </li>
              </ul>
            </nav>
            <!-- 广告区域 -->
            <section id="banner">
              <div class="banner-left">
                <a href="#">
                  <img src="../../assets/shop/images/active1.png" alt="">
                  <img src="../../assets/shop/images/active2.png" alt="">
                </a>
                <a href="#">
                  <img src="../../assets/shop/images/active4.png" alt="">
                  <img src="../../assets/shop/images/active5.png" alt="">
                </a>
              </div>
              <div class="banner-right">
                <a href="#">
                  <img src="../../assets/shop/images/active3.png" alt="">
                </a>
              </div>
            </section>
            <!-- 品牌专区 -->
            <section id="brand">
              <div class="title">
                <a href="#">
                  <img src="../../assets/shop/images/title0.png" alt="">
                </a>
              </div>
              <div class="content">
                <!-- ul>li*8>a[href="#"]>img[src="../../assets/shop/images/brand$.png"] -->
                <ul>
                  <li>
                    <a href="#"><img src="../../assets/shop/images/brand1.png" alt=""></a>
                  </li>
                  <li>
                    <a href="#"><img src="../../assets/shop/images/brand2.png" alt=""></a>
                  </li>
                  <li>
                    <a href="#"><img src="../../assets/shop/images/brand3.png" alt=""></a>
                  </li>
                  <li>
                    <a href="#"><img src="../../assets/shop/images/brand4.png" alt=""></a>
                  </li>
                  <li>
                    <a href="#"><img src="../../assets/shop/images/brand5.png" alt=""></a>
                  </li>
                  <li>
                    <a href="#"><img src="../../assets/shop/images/brand6.png" alt=""></a>
                  </li>
                  <li>
                    <a href="#"><img src="../../assets/shop/images/brand7.png" alt=""></a>
                  </li>
                  <li>
                    <a href="#"><img src="../../assets/shop/images/brand8.png" alt=""></a>
                  </li>
                </ul>
              </div>
            </section>
            <!-- 运动生活专区 -->
            <section id="sport">
              <div class="title">
                <a href="#">
                  <img src="../../assets/shop/images/title1.png" alt="">
                </a>
              </div>
              <div class="content">
                <!-- ul>li*8>a[href="#"]>img[src="../../assets/shop/images/brand$.png"] -->
                <ul>
                  <li>
                    <a href="#" class="product">
                      <img class="product-img" src="../../assets/shop/images/product.jpg" alt="">
                      <p class="product-name">adidas阿迪达斯 男式 场下休闲篮球鞋S83700</p>
                      <p class="product-price">
                        <span>￥566.00</span>
                        <del>￥888.00</del>
                      </p>
                      <p class="product-buy">
                        <button type="button" class="mui-btn mui-btn-primary ">立即购买</button>
                      </p>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="product">
                      <img class="product-img" src="../../assets/shop/images/product.jpg" alt="">
                      <p class="product-name">adidas阿迪达斯 男式 场下休闲篮球鞋S83700</p>
                      <p class="product-price">
                        <span>￥566.00</span>
                        <del>￥888.00</del>
                      </p>
                      <p class="product-buy">
                        <button type="button" class="mui-btn mui-btn-primary ">立即购买</button>
                      </p>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="product">
                      <img class="product-img" src="../../assets/shop/images/product.jpg" alt="">
                      <p class="product-name">adidas阿迪达斯 男式 场下休闲篮球鞋S83700</p>
                      <p class="product-price">
                        <span>￥566.00</span>
                        <del>￥888.00</del>
                      </p>
                      <p class="product-buy">
                        <button type="button" class="mui-btn mui-btn-primary ">立即购买</button>
                      </p>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="product">
                      <img class="product-img" src="../../assets/shop/images/product.jpg" alt="">
                      <p class="product-name">adidas阿迪达斯 男式 场下休闲篮球鞋S83700</p>
                      <p class="product-price">
                        <span>￥566.00</span>
                        <del>￥888.00</del>
                      </p>
                      <p class="product-buy">
                        <button type="button" class="mui-btn mui-btn-primary ">立即购买</button>
                      </p>
                    </a>
                  </li>
                </ul>
              </div>
            </section>
            <!-- 女士专区 -->
            <section id="women">
              <div class="title">
                <a href="#">
                  <img src="../../assets/shop/images/title2.png" alt="">
                </a>
              </div>
              <div class="content">
                <!-- ul>li*8>a[href="#"]>img[src="../../assets/shop/images/brand$.png"] -->
                <ul>
                  <li>
                    <a href="#" class="product">
                      <img class="product-img" src="../../assets/shop/images/product.jpg" alt="">
                      <p class="product-name">adidas阿迪达斯 男式 场下休闲篮球鞋S83700</p>
                      <p class="product-price">
                        <span>￥566.00</span>
                        <del>￥888.00</del>
                      </p>
                      <p class="product-buy">
                        <button type="button" class="mui-btn mui-btn-primary ">立即购买</button>
                      </p>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="product">
                      <img class="product-img" src="../../assets/shop/images/product.jpg" alt="">
                      <p class="product-name">adidas阿迪达斯 男式 场下休闲篮球鞋S83700</p>
                      <p class="product-price">
                        <span>￥566.00</span>
                        <del>￥888.00</del>
                      </p>
                      <p class="product-buy">
                        <button type="button" class="mui-btn mui-btn-primary ">立即购买</button>
                      </p>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="product">
                      <img class="product-img" src="../../assets/shop/images/product.jpg" alt="">
                      <p class="product-name">adidas阿迪达斯 男式 场下休闲篮球鞋S83700</p>
                      <p class="product-price">
                        <span>￥566.00</span>
                        <del>￥888.00</del>
                      </p>
                      <p class="product-buy">
                        <button type="button" class="mui-btn mui-btn-primary ">立即购买</button>
                      </p>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="product">
                      <img class="product-img" src="../../assets/shop/images/product.jpg" alt="">
                      <p class="product-name">adidas阿迪达斯 男式 场下休闲篮球鞋S83700</p>
                      <p class="product-price">
                        <span>￥566.00</span>
                        <del>￥888.00</del>
                      </p>
                      <p class="product-buy">
                        <button type="button" class="mui-btn mui-btn-primary ">立即购买</button>
                      </p>
                    </a>
                  </li>
                </ul>
              </div>
            </section>
            <!-- 男士专区 -->
            <section id="man">
              <div class="title">
                <a href="#">
                  <img src="../../assets/shop/images/title3.png" alt="">
                </a>
              </div>
              <div class="content">
                <!-- ul>li*8>a[href="#"]>img[src="../../assets/shop/images/brand$.png"] -->
                <ul>
                  <li>
                    <a href="#" class="product">
                      <img class="product-img" src="../../assets/shop/images/product.jpg" alt="">
                      <p class="product-name">adidas阿迪达斯 男式 场下休闲篮球鞋S83700</p>
                      <p class="product-price">
                        <span>￥566.00</span>
                        <del>￥888.00</del>
                      </p>
                      <p class="product-buy">
                        <button type="button" class="mui-btn mui-btn-primary ">立即购买</button>
                      </p>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="product">
                      <img class="product-img" src="../../assets/shop/images/product.jpg" alt="">
                      <p class="product-name">adidas阿迪达斯 男式 场下休闲篮球鞋S83700</p>
                      <p class="product-price">
                        <span>￥566.00</span>
                        <del>￥888.00</del>
                      </p>
                      <p class="product-buy">
                        <button type="button" class="mui-btn mui-btn-primary ">立即购买</button>
                      </p>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="product">
                      <img class="product-img" src="../../assets/shop/images/product.jpg" alt="">
                      <p class="product-name">adidas阿迪达斯 男式 场下休闲篮球鞋S83700</p>
                      <p class="product-price">
                        <span>￥566.00</span>
                        <del>￥888.00</del>
                      </p>
                      <p class="product-buy">
                        <button type="button" class="mui-btn mui-btn-primary ">立即购买</button>
                      </p>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="product">
                      <img class="product-img" src="../../assets/shop/images/product.jpg" alt="">
                      <p class="product-name">adidas阿迪达斯 男式 场下休闲篮球鞋S83700</p>
                      <p class="product-price">
                        <span>￥566.00</span>
                        <del>￥888.00</del>
                      </p>
                      <p class="product-buy">
                        <button type="button" class="mui-btn mui-btn-primary ">立即购买</button>
                      </p>
                    </a>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  </div>


</template>

<script>
  import Swiper from "swiper"
  import "swiper/dist/css/swiper.min.css"

  export default {
    name: "HomeContainer",
    methods: {
      init() {
        new Swiper('.swiper-container.slider', {
          loop: true, // 循环模式选项

          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination',
          },

        })
        new Swiper(".swiper-container.wrap", {
          direction: "vertical",
          freeMode : true,
          slidesPerView: 'auto',
          mousewheelControl: true,
          roundLengths: true, //防止文字模糊
        })
      }
    },
    mounted() {
      this.init();
    }
  }
</script>

<style scoped lang="less">

  @main-height: 1.95rem;
  #home-container {
    position: relative;
    height: 85.7571214vh;

    #main {
      height: 100%;
      overflow: hidden;

      .slider.swiper-container {
        width: 100vw;

        img {
          width: 100vw;
        }
      }

      > .swiper-container {
        height: 100%;
         .swiper-slide {
          height: auto;
        }
      }
    }

    @import "../../less/home.less";
  }


</style>