<script setup lang="ts">
import { ref } from 'vue'
import { MovieData } from '@/model/MovieData'

const newMovieData = ref<MovieData>({
  movieName: '',
  releasedYear: '',
  imdbRating: '',
  letterboxdRating: '',
  downloadLink: '',
  finishedWatching: false
})

const handleAddMovie = () => {
  console.log('userInput', newMovieData.value)
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
    <input
      v-model="newMovieData.downloadLink"
      class="form-control mb-3"
      type="text"
      placeholder="Download link"
      aria-label="Download link"
    />

    <h5 class="mb-3">Finished Watching?</h5>
    <div class="form-check mb-3">
      <input
        v-model="newMovieData.finishedWatching"
        class="form-check-input"
        type="radio"
        name="flexRadioDefault"
        id="flexRadioDefault1"
      />
      <label class="form-check-label" for="flexRadioDefault1">Yes</label>
    </div>
    <div class="form-check mb-3">
      <input
        v-model="newMovieData.downloadLink"
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
