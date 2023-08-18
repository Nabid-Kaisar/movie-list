<script setup>
import TopBar from '@/components/TopBar.vue'
import BottomBar from '@/components/BottomBar.vue'
import MovieList from '@/components/MovieList.vue'
import { initiateFirebase } from '@/components/FirebaseInitiator.ts'
//
const app = initiateFirebase()
// const db = getFirestore(app)
</script>

<template>
  <TopBar />
  <MovieList />
  <BottomBar />
</template>
