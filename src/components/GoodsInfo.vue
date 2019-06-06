<template>
  <div class="goods-info">
    <!-- 商品图片轮播 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <swiper :lunbotuList="lunbotu" :isfull="false"></swiper>
        </div>
      </div>
    </div>
    <!-- 购买详情 -->
    <div class="mui-card">
      <div class="mui-card-header">{{goodsinfo.title}}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            市场价：
            <del>￥{{goodsinfo.market_price}}</del>&nbsp;&nbsp;销售价：
            <span class="now_price">￥{{goodsinfo.sell_price}}</span>
          </p>
          <p>
            购买数量：
            <numbox @getcount="addToCount"></numbox>
          </p>
          <p>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small" @click="addToCar">加入购物车</mt-button>
          </p>
        </div>
      </div>
    </div>
    <!-- 商品参数 -->
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号：{{goodsinfo.goods_no}}</p>
          <p>库存情况：{{goodsinfo.stock_quantity}}件</p>
          <p>上架时间：{{goodsinfo.add_itme | dateFormat}}</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" size="large" plain @click="goDesc(id)">图文介绍</mt-button>
        <mt-button type="danger" size="large" plain @click="goComment(id)">商品评论</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
import swiper from "./swiper.vue";
import numbox from "./numbox.vue";
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      id: this.$route.params.id, //从路由参数对象中获得id并放在data中
      lunbotu: [],
      goodsinfo: {},
      seletedCount: 1
    };
  },
  created() {
    this.getLunbotu();
    this.getGoodsInfo();
  },
  methods: {
    getLunbotu() {
      //获取图片
      this.$http.get("api/getthumimages/" + this.id).then(result => {
        if (result.body.status === 0) {
          result.body.message.forEach(item => {
            item.img = item.src;
          });
          this.lunbotu = result.body.message;
        }
      });
    },
    getGoodsInfo() {
      this.$http.get("api/goods/getinfo/" + this.id).then(resoult => {
        if (resoult.body.status === 0) {
          this.goodsinfo = resoult.body.message[0];
        }
      });
    },
    goDesc(id) {
      //编程式导航
      this.$router.push({ name: "goodsdesc", params: { id: id } });
    },
    goComment(id) {
      //编程式导航
      this.$router.push({ name: "goodscomment", params: { id: id } });
    },
    addToCount(count) {
      // 蒋子组件转来的值存到data上
      this.seletedCount = count;
      console.log("拿到的值是：" + this.seletedCount);
    },
    addToCar() {
      //拼接出一个要保存到store中car数组的商品对象
      var goodsinfo = {
        id: this.id,
        count: this.seletedCount,
        price: this.goodsinfo.sell_price,
        selected: true
      };
      this.$store.commit("addToCar", goodsinfo);
      Toast("添加购物车成功");
    }
  },
  components: {
    swiper,
    numbox
  }
};
</script>

<style lang="scss" scoped>
.goods-info {
  background-color: #eee;
  overflow: hidden;
  .now_price {
    color: red;
    font-size: 16px;
    font-weight: bold;
  }
  .mui-card-footer {
    display: block;
    button {
      margin: 15px 0;
    }
  }
}
</style>
