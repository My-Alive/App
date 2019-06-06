<template>
  <div class="newsinfo">
    <h3 class="title">{{newsinfo.title}}</h3>
    <p class="subtitle">
      <span>发表时间：{{newsinfo.add_itme | dateFormat }}</span>
      <span>点击次数：{{newsinfo.click}}</span>
    </p>

    <hr>

    <div class="content" v-html="newsinfo.content"></div>
    <!-- //评论组件 -->
    <comment-box :id="this.id"></comment-box>
  </div>
</template>

<script>
import comment from "./pinglun.vue";
export default {
  data() {
    return {
      id: this.$route.params.id,
      newsinfo: {}
    };
  },
  created() {
    this.getNewsInfo();
  },
  methods: {
    getNewsInfo() {
      this.$http.get("api/getnew/" + this.id).then(result => {
        if (result.body.status === 0) {
          this.newsinfo = result.body.message[0];
        }
      });
    }
  },
  components: {
    "comment-box": comment
  }
};
</script>

<style lang="scss" scoped>
.newsinfo {
  padding: 0 4px;
  .title {
    font-size: 16px;
    text-align: center;
    margin: 15px 0;
    color: orange;
  }
  .subtitle {
    font-size: 12px;
    color: #226aff;
    display: flex;
    justify-content: space-between;
  }
  .content {
  }
}
</style>


