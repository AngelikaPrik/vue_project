<template>
  <input type="text" class="input" @input="updateInput" :value="modelValue"/>
</template>
<script>
export default {
  name: "styled-input",
  props: {
    modelValue: [String, Number],
  },
  methods: {
    updateInput(event) {
		this.$emit('update:modelValue', event.target.value)
	 },
  },
};
</script>
<style scoped>
.input {
  padding: 0.5rem 0.5rem;
  border-radius: 0.4rem;
  outline: 0;
  border: 0.2px solid rgba(128, 174, 180, 1);
  width: 100%;
  font-size: 18px;
}
</style>
