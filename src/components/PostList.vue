<template>
  <div v-if="posts.length > 0">
    <div class="title">
      <h3 class="title-posts">Посты</h3>
      <styled-select :modelValue="selectedSort" :options="sortOptions" />
    </div>
    <div class="content">
      <transition-group name="list">
        <PostItem
          v-for="post in posts"
          :post="post"
          :key="post.id"
          @remove="$emit('remove', post)"
        />
      </transition-group>
    </div>
  </div>
  <h3 v-else-if="findingPosts" class="empty-title">Пока постов нет</h3>
  <h3 v-else-if="!findingPosts" class="empty-title">
    Поиск по запросу <b>{{ searchQuery }}</b> не найден
  </h3>
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
    selectedSort: {
      type: String,
      required: true,
    },
    sortOptions: {
      type: Array,
      required: true,
    },
    findingPosts: {
      type: Boolean,
      required: true,
    },
    searchQuery: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.title {
  display: flex;
  justify-content: space-between;
  margin: 3rem 0 1.5rem 0;
}
.title-posts {
  text-align: center;
}
.empty-title {
  text-align: center;
  margin: 2rem 0;
}
.empty-title b {
  color: rgb(49, 107, 148);
}

.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(100px);
}
.list-move {
  transition: transform 0.5s ease;
}
</style>
