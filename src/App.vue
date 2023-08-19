<script setup>
import TopBar from '@/components/TopBar.vue'
import BottomBar from '@/components/BottomBar.vue'
import MovieList from '@/components/MovieList.vue'
// import { initiateFirebase } from '@/Firebase/FirebaseInitiator.js'
//
// const app = initiateFirebase()
// const db = getFirestore(app)
</script>

<template>
  <div class="app-container">
    <RouterView />
    <BottomBar />
  </div>
</template>

<style scoped>
.app-container {
}
</style>
