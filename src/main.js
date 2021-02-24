import Vue from 'vue';
import Carousel from './Carousel.vue';

Vue.config.productionTip = false


new Vue({
      render: h => h(Carousel),
}).$mount('#app')

const Components = {
      Carousel
}

Vue.component('carousel' , Carousel);

export default Components;
