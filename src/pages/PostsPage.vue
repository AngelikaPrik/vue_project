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
      :findingPosts="findingPosts"
      :searchQuery="searchQuery"
      @remove="removePost"
    />
    <styled-loader v-else></styled-loader>
    <div v-intersection="loadMorePosts" ref="observer" class="observer"></div>
    <!-- <styled-pagination v-model="page" style="margin-top: 2rem" :totalPages="totalPages" /> -->
  </div>
</template>

<script>
import PostForm from "@components/PostForm.vue";
import PostList from "@components/PostList.vue";

import axios from "axios";

export default {
  components: {
    PostForm,
    PostList,
  },
  data() {
    return {
      posts: [],
      dialogVisible: false,
      isPostsLoading: false,
      selectedSort: "",
      sortOptions: [
        { value: "title", name: "По названию" },
        { value: "body", name: "По описанию" },
      ],
      searchQuery: "",
      findingPosts: false,
      page: 1,
      limit: 5,
      totalPages: 0,
    };
  },
  methods: {
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
    async fetchPosts() {
      try {
        this.isPostsLoading = true;
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: this.page,
              _limit: this.limit,
            },
          }
        );
        this.posts = response.data;
        this.totalPages = Math.ceil(
          response.headers["x-total-count"] / this.limit
        );
      } catch (error) {
        throw new Error("Не удалось загрузить посты");
      } finally {
        this.isPostsLoading = false;
      }
    },
    async loadMorePosts() {
      try {
        this.page += 1;
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: this.page,
              _limit: this.limit,
            },
          }
        );

        this.totalPages = Math.ceil(
          response.headers["x-total-count"] / this.limit
        );
        this.posts = [...this.posts, ...response.data];
      } catch (error) {
        throw new Error("Не удалось загрузить посты");
      }
    },
    cleanSearchQuery() {
      this.searchQuery = "";
    },
    //  changePage(pageNum) {
    //    this.page = pageNum;
    //  },
  },
  mounted() {
    this.fetchPosts();

    //   const options = {
    // 	 rootMargin: "0px",
    // 	 threshold: 1.0,
    //   };
    //   const callback = (entries, observer) => {
    // 	 if (entries[0].isIntersecting && this.page < this.totalPages) {
    // 		this.loadMorePosts()
    // 	 }
    //   };
    //   const observer = new IntersectionObserver(callback, options);
    //   observer.observe(this.$refs.observer);
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) => {
        post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]);
      });
    },
    searchSortedPost() {
      return this.sortedPosts.filter(post => {
        if (post.title.toLowerCase().includes(this.searchQuery.toLowerCase())) {
          this.findingPosts = true;
          return post.title
            .toLowerCase()
            .includes(this.searchQuery.toLowerCase());
        } else {
          this.findingPosts = false;
        }
      });
    },
  },
  watch: {
    //  page() {
    //    this.fetchPosts();
    //  },
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
