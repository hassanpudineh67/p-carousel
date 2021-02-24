import Vue from 'vue';
import Carousel from './Carousel.vue';

Vue.config.productionTip = false

const Components = {
      Carousel
}
Vue.component('carousel' , Carousel);

new Vue({
      render: h => h(Carousel),
}).$mount('#app')



export default Components;
