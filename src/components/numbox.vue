<template>
    <!-- 封装选择数量框 -->
  <div class="mui-numbox" data-numbox-min="1" data-numbox-max="9">
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input id="test" class="mui-input-numbox" type="number" value="1" @change="countChanged" ref="numbox">
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
</template>

<script>
//导入mui js
import mui from '../lib/mui/js/mui.js'
export default {
    data() {
        return {
            
        }
    },
    mounted(){//初始化numbox组件
        mui(".mui-numbox").numbox();
    },
    methods:{
      countChanged(){
        //每当文本框的数据被修改的时候，立即把最新的数据，通过事件调用传递给父组件
        //使用$emit（）调用父组件方法传值
        this.$emit('getcount',parseInt(this.$refs.numbox.value))
      }
    }
}
</script>
