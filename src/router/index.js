import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Echarts from '@/components/Echarts'
import SaleHome from '@/components/Sales/SaleHome'
import SaleHomePage from '@/components/Sales/SaleHomePage'
import SaleHomePage1 from '@/components/Sales/SaleHomePage1'
import SaleHomePage2 from '@/components/Sales/SaleHomePage2'
import SaleHomePage3 from '@/components/Sales/SaleHomePage3'
import GroupReport from '@/components/demo/GroupReport'
import Report from '@/components/demo1/Report'
import HomePage from '@/components/homepage/HomePage'
import techone from '@/components/demo3/techone'
import techtwo from '@/components/demo3/techtwo'
import techthree from '@/components/demo3/techthree'
import technologytwo from '@/components/demo3/technologytwo'
import technology from '@/components/demo3/technology'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/',
      name: '/SaleHome',
      component: SaleHome
    },
    {
      path: '/Echarts',
      name: 'Echarts',
      component: Echarts
    },
    {
      path: '/SaleHome',
      name: 'SaleHome',
      component: SaleHome
    },

    {
      path: '/SaleHomePage',
      name: 'SaleHomePage',
      component: SaleHomePage
    },
    {
      path: '/SaleHomePage1',
      name: 'SaleHomePage1',
      component: SaleHomePage1
    }, {
      path: '/SaleHomePage2',
      name: 'SaleHomePage2',
      component: SaleHomePage2
    }, {
      path: '/SaleHomePage3',
      name: 'SaleHomePage3',
      component: SaleHomePage3
    },
    {
      path: '/GroupReport',
      name: 'GroupReport',
      component: GroupReport
    },
    {
      path: '/Report',
      name: 'Report',
      component: Report
    },
    {
      path: '/HomePage',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: "/augustone/one",
      name: "technology",
      component: technology
      },
      {
      path: "/augustone/two",
      name: "technologytwo",
      component: technologytwo
      },
      {
      path: "/techone",
      name: "techone",
      component: techone
      },
      {
      path: "/techtwo",
      name: "techtwo",
      component: techtwo
      },
      {
      path: "/techthree",
      name: "techthree",
      component: techthree
      },
  ]
})
