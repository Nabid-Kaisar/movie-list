<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getMovieList } from '@/store/FirebaseStore'
import { MovieData } from '@/model/MovieData'

const moviesList = ref<Array<MovieData>>()

onMounted(async () => {
  moviesList.value = await getMovieList()
})

const getDetailLink = (seqId) => `/detail/${seqId}`
</script>

<template>
  <div class="m-3 list-parent">
    <h2 class="text-center mb-3" style="color: var(--color-primary)">BLINK-SS MOVIES</h2>
    <div class="list-group">
      <div class="mb-2" :key="movie.seqId" v-for="(movie, idx) in moviesList">
        <router-link
          :to="getDetailLink(movie.seqId)"
          class="list-group-item list-group-item-action link-primary rounded-3"
          style="cursor: pointer"
        >
          <span class="text-decoration-none">{{ idx + 1 }} .</span>
          {{ movie.movieName }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.list-parent {
  max-height: calc(100vh - 110px);
  overflow-y: scroll;
}
</style>
