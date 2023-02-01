<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: "styled-button",
};
</script>
<style scoped>
.btn {
  background: rgb(44, 140, 152);
  padding: 0.5rem 1rem;
  border: 0;
  border-radius: 0.4rem;
  color: white;
  text-transform: uppercase;
  font-weight: 600;
  width: 180px;
  transition: background 0.1s linear;
}
.btn:hover {
  cursor: pointer;
  background: rgba(44, 139, 152, 0.5);
}
</style>
