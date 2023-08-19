<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { getMovieDetail } from '@/store/FirebaseStore'
import { MovieData } from '@/model/MovieData'

const router = useRouter()
const movieDetail = ref<MovieData>()

onMounted(async () => {
  const seqId = router.currentRoute.value.params?.seqId
  if (seqId) {
    movieDetail.value = (await getMovieDetail(seqId)) as MovieData
  }
})
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
      <p />
    </div>
  </div>
</template>

<style scoped></style>
