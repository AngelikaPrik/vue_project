<template>
  <div class="post__title">
    <p>{{ title }}</p>
    <p class="post__data">{{ data }}</p>
  </div>
  <div class="post__desc">{{ desc }}</div>
</template>
<script>
export default {};
</script>
<style>
.post__title {
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: 0.5rem;
  font-size: 18px;
  display: flex;
  justify-content: space-between;
}
.post__data {
  font-size: 12px;
  color: rgb(167, 167, 167);
}
.post__desc {
  line-height: 130%;
}
</style>
