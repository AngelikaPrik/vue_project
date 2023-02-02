<template>
  <div class="pagination">
      <div
        class="page"
        v-for="pageNum in totalPages"
        :key="pageNum"
		  :value="modelValue"
        :class="{ currentPage: +modelValue === +pageNum }"
        @click="changePage(pageNum)"
      >
        {{ pageNum }}
      </div>
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
    changePage(p) {
      this.$emit("update:modelValue", p);
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
.page {
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
.page:hover {
  cursor: pointer;
  opacity: 0.5;
}
.currentPage {
  font-size: 16px;
  background: #15474e;
}
</style>
