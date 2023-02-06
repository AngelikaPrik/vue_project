<template>
  <select :modelValue="modelValue" @change="changeOption" class="select">
    <option class="option" disabled value="">Выберите из списка</option>
    <option class="option" v-for="option in options" :key="option.value" :value="option.value">
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: "styled-select",
  props: {
    modelValue: {
      type: String,
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    changeOption(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>
<style scoped>
.select {
  background: rgba(128, 174, 180, 0.4);
  outline: none;
  border-radius: 4px;
  border: none;
}
.option {
  outline: none;
}
</style>
