<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { getMovieDetail, movieEdit } from '@/store/FirebaseStore'
import { MovieData } from '@/model/MovieData'
import { useDebounceFn } from '@vueuse/core'

const router = useRouter()
const movieDetail = ref<MovieData>()

//make it computed
const seqId = router.currentRoute.value.params?.seqId

const fetchMovieDetail = async () => {
  if (seqId) {
    movieDetail.value = (await getMovieDetail(seqId)) as MovieData
  }
}

onMounted(() => {
  fetchMovieDetail()
})

const handleChangeWatchedStatus = useDebounceFn(async () => {
  const editedData = movieDetail.value
  if (editedData) {
    editedData.finishedWatching = !editedData?.finishedWatching
  } else return

  console.log('editedData :: ', editedData)
  await movieEdit(seqId, editedData)
  await fetchMovieDetail()
}, 1000)
</script>

<template>
  <div class="m-3">
    <div class="">
      <h5 class="text-center">{{ movieDetail?.movieName }}</h5>
      <h6 class="mb-2 text-body-secondary text-center">
        {{ movieDetail?.releasedYear }}
      </h6>
      <p class="fst-italic" v-if="movieDetail?.other">
        {{ movieDetail?.other }}
      </p>
      <p href="#" style="color: darkred" class="fw-bold">
        Letterboxd Rating: {{ movieDetail?.letterboxdRating }}
      </p>
      <p href="#" style="color: darkred" class="fw-bold">
        Imdb Rating: {{ movieDetail?.imdbRating }}
      </p>
      <p href="#" style="color: darkred" class="fw-bold">
        <span>Watched: </span>
        <span style="color: green" v-if="movieDetail?.finishedWatching">Yes</span>
        <span style="color: red" v-if="!movieDetail?.finishedWatching">No</span>
      </p>

      <button
        @click="handleChangeWatchedStatus"
        type="button"
        style="background: var(--color-primary)"
        class="btn text-white"
      >
        <span v-if="!movieDetail?.finishedWatching">I have watched the Movie!</span>
        <span v-else>I have not watched the Movie!</span>
      </button>
      <p />
    </div>
  </div>
</template>

<style scoped></style>
