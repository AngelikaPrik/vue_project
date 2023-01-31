<template>
  <form class="form" @submit.prevent>
    <div class="form__content">
      <h4>Создание поста</h4>
      <input v-model="post.title" type="text" class="form__input" />
      <textarea v-model="post.desc" type="text" class="form__input" />
      <button class="form__button" @click="createPost">Создать</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: "",
        desc: "",
      },
    };
  },
  methods: {
    createPost() {
      this.post.id = this.post.data = Date.now();
      this.$emit("create", this.post);
      this.post = {
        title: "",
        desc: "",
      };
    },
  },
};
</script>

<style scoped>
.form {
  background: rgba(128, 174, 180, 0.2);
  border-radius: 0.8rem;
  padding: 1rem 1.5rem;
}
.form__content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.form__content h4 {
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 0.8em;
}

.form__input {
  margin-bottom: 0.8rem;
  padding: 0.2rem 0.5rem;
  border-radius: 0.4rem;
  outline: 0;
  border: 0.2px solid rgba(128, 174, 180, 1);
  width: 400px;
}
.form__button {
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
.form__button:hover {
  cursor: pointer;
  background: rgba(44, 139, 152, 0.5);
}
</style>
