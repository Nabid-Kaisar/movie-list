<script setup></script>

<template>
  <div class="sticky-bottom">
    <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Movie List Blink-SS_™</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <div class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Add Movie"
              aria-label="add movie"
            />
            <button class="btn btn-primary">Add</button>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
