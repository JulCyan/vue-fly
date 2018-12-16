<template>

  <div id="categoryContainer">


    <!-- 区域滚动的父容器 -->
    <div class="swiper-container category-left category">
      <!-- 区域滚动的子容器 -->
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <!--这里放置真实显示的DOM内容-->
          <ul>
            <li :class="item.id === id? 'active': ''" @click="changeCategory(item.id)" v-for="item in categoryList"
                :key="item.id"><a href="javascript:void(0)">{{ item.categoryName }}</a></li>
          </ul>
        </div>
      </div>

      <!-- 滚动条 -->
      <div class="swiper-scrollbar">
      </div>
    </div>


    <div class="swiper-container category-right category">
      <!-- 区域滚动的子容器 -->
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <ul>
            <li v-for="item in secondCategory" :key="item.id">
              <a href="javascript:void(0)">
                <img :src="'http://localhost:3000'+ item.brandLogo" alt="">
                <p>{{ item.brandName }}</p>
              </a>
            </li>
          </ul>
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
    name: "categoryContainer",
    data() {
      return {
        categoryList: [],
        secondCategory: [],
        id: 1
      }
    },
    methods: {
      getCategoryList() {
        this.$http.get("category/queryTopCategory").then((result) => {
          console.log(this.categoryList = result.body.rows);
        })
      },
      changeCategory(id) {
        this.id = id
        this.$http.get("category/querySecondCategory", {
          params: {id}
        },).then((result) => {
          this.secondCategory = result.body.rows
        })

      }
    },
    created() {
      this.getCategoryList()
      this.changeCategory(1)
    },
    mounted() {
      new this.$Swiper(".swiper-container.category", {
        direction: "vertical",
        freeMode: true,
        slidesPerView: 'auto',
        mousewheelControl: true,
        roundLengths: true, //防止文字模糊
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });
    },

  }
</script>


<style scoped lang="less">
  @main-color: #f10215;
  #categoryContainer {
    height: 100%;
    display: flex;

    .category-left {
      width: 0.8rem;
      position: relative;

      ul {
        /* 如果高度不够也需要加滑动 加一个最小高 高度不够就生效最小高 高度超出就生效高度 */
        min-height: 5.77rem;

        li {
          a {
            display: block;
            color: #666;
            height: 0.45rem;
            text-align: center;
            line-height: 0.45rem;
            font-size: 0.14rem;
            background-color: #fff;
            border-bottom: 1px solid #ccc;
          }

          &.active {
            a {
              transition: all .5s;
              background-color: #eee;
              color: @main-color;
            }
          }
        }
      }
    }

    .category-right {
      flex: 1;
      /* 子元素绝对定位的 padding不会影响子元素的位置 */
      /* padding: 10px; */
      position: relative;

      ul {
        display: flex;
        flex-wrap: wrap;
        padding: 10px;
        min-height: 5.77rem;
        /* 注意如果设置了最小高度 默认内容会使用 align-content:stretch 内容会占满整个高度
        把内容对齐方式设置为flex-start顶部对齐 */
        align-content: flex-start;

        li {
          width: 33.33%;

          a {
            display: block;
            background-color: #fff;
            color: black;

            img {
              width: 100%;
            }

            p {
              font-size: 0.14rem;
              text-align: center;
            }
          }
        }
      }
    }

    .swiper-container.category {
      height: 100%;

      .swiper-slide {
        height: auto;

      }
    }

  }
</style>