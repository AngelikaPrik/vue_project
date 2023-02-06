<template>
  <div>
    <div class="block">
      <div class="block__input">
        <styled-button @click="showDialog">Добавить новый пост</styled-button>
      </div>
      <div class="block__input">
        <styled-input
          v-model="searchQuery"
          placeholder="Поиск по постам..."
        ></styled-input>
        <!-- <span
          class="material-symbols-outlined"
          v-if="searchQuery"
          @click="cleanSearchQuery"
        >
          close
        </span> -->
      </div>
    </div>
    <!-- <styled-dialog v-model:show="dialogVisible">
      <PostForm @create="createPost" />
    </styled-dialog> -->

    <PostList
      v-if="!isPostsLoading"
      :posts="sortedAndSearchedPosts"
      :selectedSort="selectedSort"
      :sortOptions="sortOptions"
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
import { usePosts } from "../hooks/usePosts";
import { useSortedPosts } from "../hooks/useSortedPosts";
import { useSortedAndSearchedPosts } from "../hooks/useSortedAndSearchedPosts";

export default {
  components: {
    PostForm,
    PostList,
  },
  data() {
    return {
      dialogVisible: false,
      sortOptions: [
        { value: "title", name: "По названию" },
        { value: "body", name: "По описанию" },
      ],
    };
  },
  setup(props) {
    const { posts, totalPages, isPostsLoading } = usePosts(5);
    const { selectedSort, sortedPosts } = useSortedPosts(posts);
    const { searchQuery, sortedAndSearchedPosts, findingPosts } =
      useSortedAndSearchedPosts(sortedPosts);

    return {
      posts,
      totalPages,
      isPostsLoading,
      selectedSort,
      sortedPosts,
      searchQuery,
      sortedAndSearchedPosts,
      findingPosts,
    };
  },
};
</script>

<style scoped>
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
