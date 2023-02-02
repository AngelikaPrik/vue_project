<template>
  <div class="pagination" @click="changePage" :value="modelValue">
    <p v-for="page in totalPages" :key="page">
      {{ page }}
    </p>
  </div>
</template>

<script>
export default {
  name: "styled-pagination",
  props: {
    modelValue: Number,
    totalPages: {
      type: Number,
      required: true,
    },
  },
  methods: {
    changePage(e) {
      this.$emit("update:modelValue", +e.target.innerHTML);
    },
  },
};
</script>

<style scoped>
.pagination {
  display: flex;
  column-gap: 5px;
  justify-content: center;
}
.pagination p {
  font-size: 16px;
  background: #2c8c98;
  width: 28px;
  height: 28px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  color: white;
  font-weight: 500;
  transition: opacity 0.1s linear;
}
.pagination p:hover {
  cursor: pointer;
  opacity: 0.5;
}
</style>
