<template>
  <div>
    <!-- 沦播图 -->
    <!-- <swiper :lunbotuList="lunboList" :isfull="true"></swiper> -->
    <mt-swipe :auto="3000">
      <mt-swipe-item>
        <img src="../img/lb.jpg" alt>
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../img/lb2.jpg" alt>
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../img/lb3.jpg" alt>
      </mt-swipe-item>
    </mt-swipe>

    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newslsit">
          <img src="../img/news.png" alt>
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/photolist">
          <img src="../img/fx.png" alt>
          <div class="mui-media-body">美女写真</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/goods">
          <img src="../img/shangpin.png" alt>
          <div class="mui-media-body">商品购买</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home">
          <img src="../img/wx.png" alt>
          <div class="mui-media-body">联系我们</div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
import swiper from "./swiper.vue";
export default {
  data() {
    return {
      // lunboList: [
      //   { img: "../img/lb.png" },
      //   { img: "../img/lb2.jpg" },
      //   { img: "../img/lb3.jpg" }
      // ]
    };
  },
  // created() {
  //   this.getlunbotu();
  // },
  components: {
    Toast
  },
  methods: {
    getlunbotu() {
      this.$http.get("api/getlunbo").then(result => {
        //   console.log(result);
        if (result.body.status === 0) {
          this.lunboList = result.body.message;
        } else {
          Toast("网络加载中");
        }
      });
    }
  },
  components: {
    swiper
  }
};
</script>

<style lang="scss" scoped>
.mint-swipe {
  height: 200px;

  .mint-swipe-item {
    &:nth-child(1) {
      background-color: orange;
    }
    &:nth-child(2) {
      background-color: blue;
    }
    &:nth-child(3) {
      background-color: pink;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
}

.mui-grid-view.mui-grid-9 {
  background-color: #fff;
  border: none;
  img {
    width: 50px;
    height: 50px;
  }
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: 0px;
}
.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body {
  font-size: 13px;
}
</style>
