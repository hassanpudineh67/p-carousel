<template>
      <div id="app" class="carousel-view">
            <transition-group class="carousel" tag="div">
                  <div v-for="(slide, index) in slides" class="slide" :key="`slide-${index}`">
                        <h4>{{ slide.title }}</h4>
                  </div>
            </transition-group>
            <div class="carousel-controls">
                  <button class="carousel-controls__button" @click="previous">prev</button>
                  <button class="carousel-controls__button" @click="next">next</button>
            </div>
      </div>
</template>

<script>
export default {
      name: "p-carousel",
      data() {
            return {
                  slides: [{ title: "1" }, { title: "2" }],
                  porps: {
                        //slides : {
                        //      type: Array,
                        //      required: true
                        //},
                        //autoplay: {
                        //      type: Boolean,
                        //      default: false
                        //},
                        //delayAutoplay : {
                        //      type: Boolean,
                        //      default: false
                        //},
                        //delayBetweenSlides: {
                        //      type: Boolean,
                        //      default: false
                        //}
                  },
            };
      },
      methods: {
            next() {
                  const first = this.slides.shift();
                  this.slides = this.slides.concat(first);
            },
            previous() {
                  const last = this.slides.pop();
                  this.slides = [last].concat(this.slides);
            },
      },
};
</script>

<style>
.carousel-view {
      display: flex;
      flex-direction: column;
      align-items: center;
}
.carousel {
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;

      width: 24em;
      min-height: 25em;
}
.slide {
      flex: 0 0 20em;
      height: 20em;
      margin: 1em;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 0.1em dashed #000;
      border-radius: 50%;
      transition: transform 0.3s ease-in-out;
}
.slide:first-of-type {
      opacity: 0;
}
.slide:last-of-type {
      opacity: 0;
}
</style>