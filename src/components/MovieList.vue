<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getMovieList, initiateFirebase, isFirebaseInitiated } from '@/store/FirebaseStore'
import { MovieData } from '@/model/MovieData'

const moviesList = ref<Array<MovieData>>()

onMounted(async () => {
  await initiateFirebase()

  moviesList.value = await getMovieList()
})
</script>

<template>
  <h1 :key="movie.movieName + idx" v-for="(movie, idx) in moviesList">
    movie name {{ movie.movieName }}
  </h1>
</template>
