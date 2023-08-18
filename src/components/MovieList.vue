<template>
  <h1 :key="item" v-for="item in Array.from(Array(10).keys())">movie name {{ item }}</h1>
</template>
