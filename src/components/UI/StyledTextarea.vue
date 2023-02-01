<template>
  <textarea
    type="text"
    class="textarea"
    @input="updateInput"
    :value="modelValue"
  />
</template>
<script>
export default {
  name: "styled-textarea",
  props: {
    modelValue: [String, Number],
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>
<style scoped>
.textarea {
  margin-bottom: 0.8rem;
  padding: 0.5rem 0.5rem;
  border-radius: 0.4rem;
  outline: 0;
  border: 0.2px solid rgba(128, 174, 180, 1);
  min-width: 400px;
  font-size: 16px;
  max-width: 650px;
  max-height: 400px;
}
</style>
