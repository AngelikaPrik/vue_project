<template>
  <div class="post">
    <div class="post__content">
      <div class="post__title">
        <p :contenteditable="isEdit" :class="{ edit__desc: isEdit }">
          {{ post.title }}
        </p>
        <p class="post__data">
          {{ post.data }}
        </p>
      </div>
      <div
        class="post__desc"
        :contenteditable="isEdit"
        :class="{ edit__desc: isEdit }"
      >
        {{ post.body }}
      </div>
    </div>

    <div class="btns">
      <button
        class="settings-btn"
        :class="{ edit: isEdit }"
        @click="toggleEdit"
      >
        <span v-if="!isEdit" class="material-symbols-outlined"> edit </span>
        <span v-else class="material-symbols-outlined"> save </span>
      </button>
      <button class="settings-btn remove" @click="$emit('remove', post)">
        <span class="material-symbols-outlined"> delete </span>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isEdit: false,
    };
  },
  methods: {
    toggleEdit() {
      this.isEdit = !this.isEdit;
    },
  },
};
</script>
<style>
.post {
  padding: 1rem 1.5rem;
  background: rgba(128, 174, 180, 0.2);
  border-radius: 0.8rem;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
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
  word-break: break-word;
}
.btns {
  display: flex;
  justify-content: end;
  gap: 0.5rem;
  margin-top: 1rem;
}
.settings-btn {
  background: rgba(44, 139, 152, 0.317);
  padding: 0.1rem 0.6rem;
  border: 0;
  border-radius: 0.2rem;
  color: white;
  transition: background 0.1s linear;
  display: inline-flex;
}
.settings-btn span {
  font-size: 20px;
}
.settings-btn:hover {
  cursor: pointer;
  background: rgba(44, 139, 152, 0.8);
}
.edit {
  background: rgba(44, 139, 152, 1);
}
.edit__desc {
  outline: 1.5px solid rgb(35, 69, 83);
  border-radius: 0.2rem;
  padding: 5px;
}
</style>
