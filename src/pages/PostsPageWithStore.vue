<template>
  <div>
    <div class="block">
      <div class="block__input">
        <styled-button @click="showDialog">Добавить новый пост</styled-button>
      </div>
      <div class="block__input">
        <styled-input
          :model-value="searchQuery"
          @update:model-value="setSearchQuery"
          placeholder="Поиск по постам..."
        ></styled-input>
        <span
          class="material-symbols-outlined"
          v-if="searchQuery"
          @click="cleanSearchQuery"
        >
          close
        </span>
      </div>
    </div>
    <styled-dialog v-model:show="dialogVisible">
      <PostForm @create="createPost" />
    </styled-dialog>
    <div class="title">
      <h3 class="title-posts">Посты</h3>
      <styled-select v-model="selectedSort" :options="sortOptions" />
    </div>
    <PostList
      v-if="!isPostsLoading"
      :posts="searchSortedPost"
      @update="setSelectedSort"
      :findingPosts="findingPosts"
      :searchQuery="searchQuery"
      @remove="removePost"
    />
    <styled-loader v-else></styled-loader>
    <div v-intersection="loadMorePosts" ref="observer" class="observer"></div>
  </div>
</template>

<script>
import PostForm from "@components/PostForm.vue";
import PostList from "@components/PostList.vue";
import { mapState, mapActions, mapGetters, mapMutations } from "vuex";

export default {
  components: {
    PostForm,
    PostList,
  },
  data() {
    return {
      dialogVisible: false,
    };
  },
  methods: {
    ...mapMutations({
      setPage: "post/setPage",
      setSelectedSort: "post/setSelectedSort",
      setSearchQuery: "post/setSearchQuery",
      cleanSearchQuery: "post/cleanSearchQuery",
    }),
    ...mapActions({
      loadMorePosts: "post/loadMorePosts",
      fetchPosts: "post/fetchPosts",
    }),
    createPost(post) {
      this.posts.unshift(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id);
    },
    showDialog() {
      this.dialogVisible = true;
    },
  },
  mounted() {
    this.fetchPosts();
  },
  computed: {
    ...mapState({
      posts: state => state.post.posts,
      isPostsLoading: state => state.post.isPostsLoading,
      selectedSort: state => state.post.selectedSort,
      sortOptions: state => state.post.sortOptions,
      searchQuery: state => state.post.searchQuery,
      findingPosts: state => state.post.findingPosts,
      page: state => state.post.page,
      limit: state => state.post.limit,
      totalPages: state => state.post.totalPages,
    }),
    ...mapGetters({
      sortedPosts: "post/sortedPosts",
      searchSortedPost: "post/searchSortedPost",
    }),
  },
  watch: {},
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
.block {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.block__input {
  display: flex;
  align-items: stretch;
  width: 30%;
  position: relative;
}
.block__input span {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translate(0, -50%);
  transition: opacity 0.1s linear;
}
.block__input span:hover {
  opacity: 0.4;
  cursor: pointer;
}
.observer {
  height: 30px;
}
</style>
