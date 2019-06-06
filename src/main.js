//入口文件
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import moment from 'moment'
import VuePreview from 'vue-preview'

//注册路由
Vue.use(VueRouter)
Vue.use(VueResource)
    //是用vuex状态管理
import store from './vuex.js'

//注册图片预览
Vue.use(VuePreview)
    //定义全局的请求地址
Vue.http.options.root = 'http://www.liulongbin.top:3005'
    //定义全局设计post请求
Vue.http.options.emulateJSON = true

//导入router.js模块
import router from './router'

//导入mint-ui中的组件
import MintUi from 'mint-ui'
Vue.use(MintUi)

//导入组件样式
import 'mint-ui/lib/style.css'
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

//定义过滤器
Vue.filter('dateFormat', function(dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
    return moment(dataStr).format(pattern)
})

import App from './app.vue'
var vm = new Vue({
    el: '#app',
    data: {

    },
    render: c => c(App),
    router,
    store

})