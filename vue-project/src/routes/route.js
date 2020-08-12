import Vue from 'vue'
import VueRouter from 'vue-router'

// 뷰인스턴스가 vue-router 라이브러리를 사용할것임을 명시한다.
Vue.use(VueRouter)

import SampleList from '@/components/sample/SampleList.vue'
import Sample from '@/components/sample/Sample.vue'
import Main from '@/components/Main.vue'
import Shop from '@/components/shop/Shop.vue'
import NotFound from '@/components/NotFound.vue'

// ES6 Named export 방식 
export const router = new VueRouter({
    mode: 'history', // default는 hash 모드이다. history 모드를 적용하지 않으면 localhost:8080/#/ 이렇게 표시된다.
    routes: [
        {
            path: '/covid/all',
            component: SampleList,
            name: 'SampleList'
        },
        {
            path: '/covid/:country',
            component: Sample,
            name: 'Sample'
        },
        {
            path: '/main',
            component: Main,
            name: 'Main' // name을 적어주면 나중에 프로그래밍 방식의 라우터 전환이 편해진다.
        },
        {
            path: '/shop/:id',
            component: Shop,
            name: 'Shop'
        },
        {
            path: '*',
            component: NotFound,
            name: 'NotFound'
        }
    ]
  })