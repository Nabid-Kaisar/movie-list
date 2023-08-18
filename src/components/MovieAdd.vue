<template>
  <section class="add-container m-3">
    <h3>Add a new Movie to the List</h3>
    <input
      class="form-control mb-3"
      type="text"
      placeholder="Movie Name"
      aria-label="movie name input"
    />
    <input
      class="form-control mb-3"
      type="text"
      placeholder="Released Year"
      aria-label="released year"
    />
    <input
      class="form-control mb-3"
      type="text"
      placeholder="Imdb Rating"
      aria-label="Imdb Rating"
    />
    <input
      class="form-control mb-3"
      type="text"
      placeholder="Letterboxd Rating"
      aria-label="Letterboxd Rating"
    />
    <input
      class="form-control mb-3"
      type="text"
      placeholder="Download link"
      aria-label="Download link"
    />

    <h5 class="mb-3">Finished Watching?</h5>
    <div class="form-check mb-3">
      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
      <label class="form-check-label" for="flexRadioDefault1">Yes</label>
    </div>
    <div class="form-check mb-3">
      <input
        class="form-check-input"
        type="radio"
        name="flexRadioDefault"
        id="flexRadioDefault2"
        checked
      />
      <label class="form-check-label" for="flexRadioDefault2"> No </label>
    </div>

    <button type="button" style="background: var(--color-primary)" class="btn btn-success">
      Add Movie
    </button>
  </section>
</template>
