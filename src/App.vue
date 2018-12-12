<template>


  <div id="app">

    <!-- 顶部 -->
    <mt-header title="我的商城" id="header">
      <router-link to="/" slot="left">
        <!--<mt-button icon="back">返回</mt-button>-->
      </router-link>
      <router-link tag="button" class="mint-button fa fa-search mint-button--default mint-button--normal" slot="right"
                   to="/search"></router-link>
    </mt-header>

    <!--<header id="header">-->
    <!--<h3>我的商城</h3>-->
    <!--<router-link to="/search" class="fa fa-search"></router-link>-->
    <!--</header>-->


    <transition>
      <router-view></router-view>
    </transition>


    <!-- 底部 -->
    <mt-tabbar id="tabbar">
      <router-link to="/home" class="routerLink" active-class="routerLinkActive">
        <img @click="tabbarChangeHome" ref="home"
             src="https://m.360buyimg.com/mobilecms/jfs/t18526/211/696109898/3876/a61be82c/5aa10cd2N1318ac50.png">
      </router-link>
      <router-link to="/category" class="routerLink">
        <img ref="category" @click="tabbarChangeCategory"
             src="https://m.360buyimg.com/mobilecms/jfs/t19183/49/696491919/3763/dec8cceb/5aa10cdbNa9cd0320.png">
      </router-link>
      <router-link to="shopping" class=routerLink>
        <img
            src="https://img11.360buyimg.com/jdphoto/s130x100_jfs/t25261/337/1250179439/2765/db2976c3/5b8e4ac3N749fb56e.png">
      </router-link>
      <router-link to="buyCar" class=routerLink>
        <img
            src="https://m.360buyimg.com/mobilecms/jfs/t18583/69/717127328/4407/5e47882b/5aa10ceaN649eec12.png">
      </router-link>
      <router-link to="/center" class="routerLink">
        <img
            src="https://m.360buyimg.com/mobilecms/jfs/t17782/11/2358895717/4684/ad19de7f/5af43af1N04ef5a16.png">
      </router-link>
    </mt-tabbar>


  </div>


</template>


<script>


  export default {
    data() {
      return {}
    },
    methods: {
      changeHome() {
        this.$refs.home.src = "https://m.360buyimg.com/mobilecms/jfs/t18526/211/696109898/3876/a61be82c/5aa10cd2N1318ac50.png"
      },
      changeCategory() {
        this.$refs.category.src = "https://m.360buyimg.com/mobilecms/jfs/t19183/49/696491919/3763/dec8cceb/5aa10cdbNa9cd0320.png"
      },
      tabbarChangeHome() {
        this.changeCategory()
        this.$refs.home.src = "https://m.360buyimg.com/mobilecms/jfs/t15145/137/2502885754/3106/de5e0b14/5aa10cd2N46f18ce6.png"
      },
      tabbarChangeCategory() {
        this.changeHome()
        this.$refs.category.src = "https://m.360buyimg.com/mobilecms/jfs/t17578/307/690695366/3731/8695ed50/5aa10cdbNf3977e9f.png"
      },
    }
  }
</script>


<style lang="less" scoped>
  @main-color: #f10215;
  #app {
    overflow: hidden;
    position: relative;
    padding-top: .45rem;
    padding-bottom: .5rem;
    height: 100%;

    #header {
      position: absolute;
      top: 0;
      width: 100vw;
      display: flex;
      /*padding: 0 .45rem;*/
      height: .45rem;
      background-color: @main-color;

      .mint-button {
        line-height: .16rem;
      }



      .fa-search {
        position: absolute;
        color: #fff;
        text-align: center;
        width: .45rem;
        height: 100%;
        top: 0;
        right: 0;
        line-height: .45rem;
        font-size: .16rem;
      }
    }

    #tabbar {
      height: 45px;
      display: flex;
      padding-top: 5px;

      img {
        width: .5rem;
      }

      .routerLink {
        flex: 1;
      }
    }

    > a.mint-tab-item {
      padding: 0;

    }
  }

  .v-enter {
    opacity: 0;
    transform: translateX(100vw);
  }

  .v-leave-to {
    opacity: 0;
    transform: translateX(-100vw);
    position: absolute;
  }

  .v-enter-active,
  .v-leave-active {
    transition: all .5s;
  }

  .mint-header-title {
    font-size: .16rem !important;
  }
</style>
