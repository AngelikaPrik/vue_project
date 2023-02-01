<template>
  <div v-if="posts.length > 0">
    <h3 class="title-posts">Ваши посты</h3>
    <div class="content">
      <PostItem
        v-for="post in posts"
        :post="post"
        :key="post.id"
        @remove="$emit('remove', post)"
      />
    </div>
  </div>
  <h3 v-else class="empty-title">Пока не создано ни одного поста</h3>
</template>

<script>
import PostItem from "./PostItem.vue";
export default {
  components: {
    PostItem,
  },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.content {
}
.title-posts {
  text-align: center;
  margin: 3rem 0 1.5rem 0;
}
.empty-title {
  text-align: center;
  margin: 2rem 0;
}
</style>
