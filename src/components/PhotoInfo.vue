<template>
  <div class="photoinfo">
    <h3>{{photoinfo.title}}</h3>
    <p class="subtitle">
      <span>发表时间：{{photoinfo.add_itme | dateFormat }}</span>
      <span>点击：{{photoinfo.click}}</span>
    </p>

    <hr>
    <!-- 缩略图 -->
    <vue-preview :slides="slide1"></vue-preview>

    <div class="content" v-html="photoinfo.content"></div>

    <cmt-box :id="id"></cmt-box>
  </div>
</template>

<script>
//导入评论组件
import comment from "./pinglun.vue";
export default {
  data() {
    return {
      id: this.$route.params.id,
      photoinfo: {},
      slide1: []
    };
  },
  created() {
    this.getPhotoInfo();
    this.getSuolue()
  },
  components: {
    "cmt-box": comment
  },
  methods: {
    getPhotoInfo() {
      this.$http.get("api/getimageInfo/" + this.id).then(result => {
        if (result.body.status === 0) {
          this.photoinfo = result.body.message[0];
        }
      });
    },
    getSuolue() {
      this.$http.get("api/getthumimages/" + this.id).then(result => {
        if (result.body.status === 0) {
          result.body.message.forEach(item => {
            item.w = 600;
            item.h = 400;
            item.msrc='';//服务器里没小图、
          });
          //吧宽高保存到list中
          this.slide1 = result.body.message;
        }
      });
    },
  }
};
</script>

<style lang="scss" scoped>
.photoinfo {
  padding: 2px;
  h3 {
    color: #2266aa;
    font-size: 15px;
    text-align: center;
    margin: 15px 0;
  }
  .subtitle {
    display: flex;
  }
  .content {
    font-size: 13px;
    line-height: 30px;
  }
}
</style>
