import VueRouter from 'vue-router'

//导入对应的路由组件
import Home from './components/Home.vue'
import ShopCar from './components/ShopCar.vue'
import Member from './components/Member.vue'
import NewsList from './components/NewsList.vue'
import NewsInfo from './components/Newsinfo.vue'
import PhotoList from './components/PhotoList.vue'
import PhotoInfo from './components/PhotoInfo.vue'
import GoodsList from './components/GoodsList.vue'
import GoodsInfo from './components/GoodsInfo.vue'
import GoodsComment from './components/GoodsComment.vue'
import GoodsDesc from './components/GoodsDesc.vue'

var router = new VueRouter({
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: Home },
        { path: '/shopcar', component: ShopCar },
        { path: '/member', component: Member },
        { path: '/home/newslsit', component: NewsList },
        { path: '/home/newsinfo/:id', component: NewsInfo },
        { path: '/home/photolist', component: PhotoList },
        { path: '/home/photoinfo:id', component: PhotoInfo },
        { path: '/home/goods', component: GoodsList },
        { path: '/home/goodsinfo/:id', component: GoodsInfo },
        { path: '/home/goodsdesc/:id', name: 'goodsdesc', component: GoodsDesc },
        { path: '/home/goodscomment/:id', name: 'goodscomment', component: GoodsComment }
    ],
    linkActiveClass: "mui-active" //可覆盖默认的高亮类
})

export default router