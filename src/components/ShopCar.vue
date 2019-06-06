<template>
  <div class="shopcar">
    <div class="goods-list">
      <div class="mui-card" v-for="(item,i) in goodslist" :key="item.id">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <mt-switch
              v-model="$store.getters.getGoodsSelected[item.id]"
              @change="selectedChange(item.id,$store.getters.getGoodsSelected[item.id])"
            ></mt-switch>
            <img :src="item.thumb_path">
            <div class="info">
              <h3>{{item.title}}</h3>
              <p>
                <span class="price">￥{{item.sell_price}}</span>
                <numbox :initcount="$store.getters.getGoodsCount[item.id]" :goodsid="item.id"></numbox>
                <a href="#" @click.prevent="remove(item.id,i)">删除</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 结算区域 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner jiesuan">
          <div class="left">
            <p>总计（不含运费）</p>
            <p>
              已勾选商品
              <span class="red">{{$store.getters.getGoodsCountAndAmount.count}}</span> 件总价
              <span class="red">￥{{$store.getters.getGoodsCountAndAmount.amount}}</span>
            </p>
          </div>
          <mt-button type="danger">去结算</mt-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import numbox from "./shopcar_numbox.vue";
export default {
  data() {
    return {
      goodslist: [] //存放购物车的列表数据
    };
  },
  components: {
    numbox
  },
  created() {
    this.getGoodsList();
  },
  methods: {
    getGoodsList() {
      //获取购物车列表
      //1.获取到store中的所有商品id，然后拼接
      var idArr = [];
      this.$store.state.car.forEach(item => idArr.push(item.id));
      if (idArr.length <= 0) {
        return;
      }
      this.$http
        .get("api/goods/getshopcarlist/" + idArr.join(","))
        .then(result => {
          if (result.body.status === 0) {
            this.goodslist = result.body.message;
          }
        });
    },
    remove(id, index) {
      //点击删除把商品从store中根据传递的id删除，同时把当前组件中的goodslist中，对应要删除的那个商品，使用索引来删除
      this.goodslist.splice(index, 1);
      this.$store.commit("removeFromCar", id);
    },
    selectedChange(id, val) {
      //点击开关吧最新的状态同步到store中
      this.$store.commit("updateGoodsSelected", { id: id, selected: val });
    }
  }
};
</script>

<style lang="scss" scoped>
.shopcar {
  background-color: #eee;
  overflow: hidden;
  .goods-list {
    .mui-card-content-inner {
      display: flex;
      align-items: center;
    }
    img {
      width: 60px;
      height: 60px;
    }
    h3 {
      font-size: 13px;
    }
    .info {
      display: flex;
      flex-direction: column;
      justify-content: span-between;
      .price {
        color: red;
        font-weight: bold;
      }
    }
  }
  .jiesuan {
    display: flex;
    justify-content: space-between;
    .red {
      color: red;
      font-weight: bold;
      font-size: 16px;
    }
  }
}
</style>
