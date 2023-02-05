<template>
  <NavBar />
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "@components/UI/NavBar.vue";

export default {
  components: {
    NavBar,
  },
};
</script>

<style>
.app {
  max-width: 1000px;
  margin: 2rem auto;
  padding: 2rem;
}
</style>
