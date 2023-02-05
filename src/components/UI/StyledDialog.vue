<template>
  <div class="dialog" v-if="show" @click="hideDialog">
    <div @click.stop class="dialog__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import toggleMixins from '../../mixins/toggleMixins';

export default {
  name: "styled-dialog",
  mixins: [toggleMixins]
};
</script>

<style scoped>
.dialog {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(74, 74, 74, 0.6);
  width: 100%;
  height: 100%;
}
.dialog__content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
