<template>
  <div class="post" v-for="{ title, desc, data } in posts">
   
  </div>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.post {
  padding: 1rem 1.5rem;
  background: rgba(128, 174, 180, 0.2);
  border-radius: 0.8rem;
  margin-top: 1rem;
}

</style>
