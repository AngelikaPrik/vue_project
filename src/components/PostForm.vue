<template>
  <form class="form" @submit.prevent>
    <div class="form__content">
      <h4>Создание поста</h4>
      <styled-input v-focus v-model.trim="post.title" />
      <styled-textarea v-model="post.body" />
      <styled-button @click="createPost"> Создать </styled-button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: "",
        body: "",
      },
    };
  },
  methods: {
    createPost() {
      if (this.post.title && this.post.body) {
        this.post.id = this.post.data = Date.now();
        this.$emit("create", this.post);
        this.post = {
          title: "",
          body: "",
        };
      }
    },
  },
};
</script>

<style scoped>
.form {
  background: rgb(139, 185, 191);
  border-radius: 0.8rem;
  padding: 1rem 1.5rem;
}
.form__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}
.form__content h4 {
  text-transform: uppercase;
  text-align: center;
}
</style>
