import { RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ConversionView from '../views/ConversionView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: HomeView,
    name: 'Home',
  },
  {
    path: '/convert',
    component: ConversionView,
    name: 'Convert',
  },
];

export default routes;
