<template>
  <div>
    <ul class="photo-list">
      <router-link v-for="item in imglist" :key="item.id" :to="'/home/photoinfo'+item.id" tag="li">
        <img v-lazy="item.img_url">
        <div class="info">
          <h1 class="info-title">{{item.title}}</h1>
          <div class="info-body">{{item.zhaiyao}}</div>
        </div>
      </router-link>
    </ul>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      imglist: []
    };
  },
  created() {
    this.getfenye();
  },
  methods: {
    getfenye() {
      this.$http.get("api/getimages/0").then(result => {
        if (result.body.status === 0) {
          this.imglist = result.body.message;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  touch-action: pan-y;
}

.photo-list {
  list-style: none;
  margin: 0;
  padding: 10px;
  padding-bottom: 0;
  li {
    background-color: #ccc;
    text-align: center;
    margin-bottom: 10px;
    //设计阴影
    box-shadow: 0 0 6px #999;
    position: relative;
    img {
      width: 100%;
      vertical-align: middle;
    }
    img[lazy="loading"] {
      width: 10px;
      height: 300px;
      margin: auto;
    }
  }
}

.info {
  color: white;
  text-align: left;
  position: absolute;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  max-height: 84px;
  .info-title {
    font-size: 14px;
  }
  .info-body {
    font-size: 12px;
  }
}
</style>
