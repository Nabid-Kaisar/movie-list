<script setup></script>

<template>
  <nav class="fixed-bottom navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">Movie List Blink-SS_™</a>
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
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/add">Add Movie</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/">Movie List</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/about">About</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.fixed-bottom {
  padding: 20px;
  text-align: left;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
}
</style>
