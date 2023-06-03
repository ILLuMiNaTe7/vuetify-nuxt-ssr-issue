<template>
  <v-container>
    <div class="carousel-wrapper">
      <h1>Bug V Window SSR issue</h1>
      <v-carousel
        v-model="carousel"
        hide-delimiters
        :show-arrows="images.length > 1"
      >
        <v-carousel-item v-for="(image, slide) in images" :key="slide">
          <v-img
            :width="300"
            aspect-ratio="16/9"
            cover
            :src="image"
          ></v-img>
        </v-carousel-item>
      </v-carousel>
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
