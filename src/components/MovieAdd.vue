<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { MovieData } from '@/model/MovieData'
import { addMovie } from '@/store/FirebaseStore'
import { openToast } from '@/util/util'

const emptyMovieData = {
  movieName: '',
  releasedYear: '',
  imdbRating: '',
  letterboxdRating: '',
  other: '',
  finishedWatching: false
}

const newMovieData = ref<MovieData>({ ...emptyMovieData })

const handleAddMovie = async () => {
  console.log('userInput')
  for (let key in newMovieData.value) {
    console.log(typeof newMovieData.value[key])
  }

  addMovie(newMovieData.value)
    .then((res) => {
      console.log('res::', res)
      newMovieData.value = emptyMovieData
      openToast('Movie Added Successfully! :) ')
    })
    .catch((err) => {
      console.error('err::', err)
      openToast('Failed to add :( ', 'error')
    })
}
</script>

<template>
  <section class="add-container m-3">
    <h3>Add a new Movie to the List</h3>
    <input
      v-model="newMovieData.movieName"
      class="form-control mb-3"
      type="text"
      placeholder="Movie Name"
      aria-label="movie name input"
    />
    <input
      v-model="newMovieData.releasedYear"
      class="form-control mb-3"
      type="text"
      placeholder="Released Year"
      aria-label="released year"
    />
    <input
      v-model="newMovieData.imdbRating"
      class="form-control mb-3"
      type="text"
      placeholder="Imdb Rating"
      aria-label="Imdb Rating"
    />
    <input
      v-model="newMovieData.letterboxdRating"
      class="form-control mb-3"
      type="text"
      placeholder="Letterboxd Rating"
      aria-label="Letterboxd Rating"
    />
    <div class="form-floating mb-3">
      <textarea
        v-model="newMovieData.other"
        class="form-control"
        placeholder="Other information"
        id="floatingTextarea"
      ></textarea>
      <label for="floatingTextarea">Other info</label>
    </div>
    <h5 class="mb-3">Finished Watching?</h5>
    <div class="form-check mb-3">
      <input
        v-model="newMovieData.finishedWatching"
        value="true"
        class="form-check-input"
        type="radio"
        name="flexRadioDefault"
        id="flexRadioDefault1"
      />
      <label class="form-check-label" for="flexRadioDefault1">Yes</label>
    </div>
    <div class="form-check mb-3">
      <input
        v-model="newMovieData.finishedWatching"
        value="false"
        class="form-check-input"
        type="radio"
        name="flexRadioDefault"
        id="flexRadioDefault2"
        checked
      />
      <label class="form-check-label" for="flexRadioDefault2"> No </label>
    </div>

    <button
      @click="handleAddMovie"
      type="button"
      style="background: var(--color-primary)"
      class="btn btn-success"
    >
      Add Movie
    </button>
  </section>
</template>
