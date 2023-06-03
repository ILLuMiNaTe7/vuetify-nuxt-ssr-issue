<template>
  <v-container>
    <h1>Vuetify/Nuxt issues</h1>
    <div class="carousel-wrapper">
      <h2>Bug 1: V-Window has a SSR issue</h2>
      <p>The content of V-Carousel-Item is not being generated on SSR</p>
      <p>It appears to be a bug with V-Window/V-Window-Item</p>
      <v-carousel
        v-model="carousel"
        :show-arrows="images.length > 1"
        hide-delimiters
      >
        <v-carousel-item v-for="(image, slide) in images" :key="slide">
          <v-img
            :width="600"
            :src="image"
          ></v-img>
        </v-carousel-item>
      </v-carousel>
    </div>
    <div style="margin-bottom: 30px;">
      <h2>Bug 2: Propogation of the next/prev button sometimes doesnt work if pressed too quickly.</h2>
      <p>If the button is pressed too quickly it does not transition to the next step.</p>
      <p>Reproduction: Press the next button multiple times in a rather quick manner.</p>
    </div>
    <div>
      <h2>Bug 3: vuetify-theme-stylesheet is still in Page Source while Themes are disabled</h2>
      <div>See the <pre>&lt;style id="vuetify-theme-stylesheet"></pre> tag in the source for more information</div>
      <small>Fixing this would save at least 12kb of data transfer.</small>
    </div>
  </v-container>
</template>

<script setup>
import {ref} from "vue"

const carousel = ref(null)
const images = ref([
  'https://placehold.co/600x400?text=1',
  'https://placehold.co/600x400?text=2'
])
</script>

<style lang="scss" scoped>
div.carousel-wrapper {
  width: 600px;
}
</style>
