<template>

  <div id="searchContainer" @keyup.enter="search">
    <i class="el-icon-back" @click="back"></i>
    <i class="el-icon-search" @click="search" v-show="show"></i>
    <mt-search v-model="searchValue" class="search"></mt-search>


    <el-card class="box-card" v-if="show">
      <div v-for="item in list" :key="item" class="text item" @click="searchStart(item)">
        {{ item }}
      </div>

    </el-card>
  </div>

</template>

<script>
  export default {
    name: "SearchContainer",
    data() {
      return {
        list: [],
        searchValue: '',
        show: false,
        loadingInstance: null,
      }
    },
    methods: {
      back() {
        this.$router.back()
      },
      search() {
        this.loadingInstance = this.$loading({
          fullscreen: true,
          lock: true,
          text: "Searching...",
          spinner: "el-icon-loading",
          background: "rgba(0,0,0, .5)",
          body: true,
          target: "html"
        })
        const vm = this
        console.log(vm.searchValue)
        const searchHistory = JSON.parse(localStorage.getItem("searchHistory") || "[]")

        searchHistory.forEach(function (item, index) {
          if (item === vm.searchValue) {
            console.log(index);
            return searchHistory.splice(index, 1)
          }
        })

        searchHistory.unshift(vm.searchValue)
        console.log(searchHistory)
        this.list = searchHistory
        localStorage.setItem("searchHistory", JSON.stringify(searchHistory))


        // this.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
        //   this.loadingInstance.close()
        // })

        setTimeout(() => {
          this.loadingInstance.close()
          this.$router.push({name: "goodslist", params: {search: this.searchValue}})
          this.$store.commit("changeTitle", "商品列表")
        }, 500)
      },
      searchStart(item) {
        console.log(1);
        console.log(item);
        this.searchValue = item
        this.search()
      }
    },
    watch: {
      searchValue(newVal) {
        if (newVal !== '') {
          this.show = true
          this.list = JSON.parse(localStorage.getItem("searchHistory") || "[]")
        } else {
          this.show = false
        }
      }
    }
  }
</script>

<style lang="less">
  @main-color: #f10215;
  #searchContainer {
    > .box-card {
      position: absolute;
      width: 100%;
    }

    position: absolute;
    background-color: cyan;
    width: 100vw;
    top: 0;

    .el-icon-back,
    .el-icon-search {
      position: absolute;
      background-color: @main-color;
      z-index: 999;
      color: #fff;
      font-size: .14rem;
      width: 40px;
      height: .42rem;
      text-align: center;
      line-height: .42rem;
    }

    .mint-searchbar {
      background-color: @main-color !important;
      height: .45rem;
      padding: 8px 10px;
      padding-left: 40px;

      .mint-searchbar-inner {
        height: .28rem;


        .mintui.mintui-search {
          font-size: .12rem;

        }
      }

      .mint-searchbar-cancel {
        color: #fff;
      }
    }

    .mint-search {
      height: .45rem;
    }

  }


</style>