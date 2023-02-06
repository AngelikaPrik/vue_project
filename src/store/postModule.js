import axios from "axios";

export const postModule = {
  state: () => ({
    posts: [],
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
  }),
  getters: {
    sortedPosts(state) {
      return [...state.posts].sort((post1, post2) => {
        post1[state.selectedSort]?.localeCompare(post2[state.selectedSort]);
      });
    },
    searchSortedPost(state, getters) {
      return getters.sortedPosts.filter(post => {
        const isFindPost = post.title
          .toLowerCase()
          .includes(state.searchQuery.toLowerCase());

        if (isFindPost) {
          state.findingPosts = true;
          return post.title
            .toLowerCase()
            .includes(state.searchQuery.toLowerCase());
        } else {
          state.findingPosts = false;
        }
      });
    },
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    setLoading(state, bool) {
      state.isPostsLoading = bool;
    },
    setSelectedSort(state, selectedSort) {
      state.selectedSort = selectedSort;
    },
    setSearchQuery(state, searchQuery) {
      state.searchQuery = searchQuery;
    },
	 cleanSearchQuery(state) {
		state.searchQuery = "";
	 },
    setFindingPosts(state, bool) {
      state.findingPosts = bool;
    },
    setPage(state, page) {
      state.page = page;
    },
    setTotalPages(state, totalPages) {
      state.totalPages = totalPages;
    },
  },
  actions: {
    async fetchPosts({ state, commit }) {
      try {
        commit("setLoading", true);
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: state.page,
              _limit: state.limit,
            },
          }
        );
        commit("setPosts", response.data);
        commit(
          "setTotalPages",
          Math.ceil(response.headers["x-total-count"] / state.limit)
        );
      } catch (error) {
        throw new Error("Не удалось загрузить посты");
      } finally {
        commit("setLoading", false);
      }
    },
    async loadMorePosts({ state, commit }) {
      try {
        commit("setPage", state.page + 1);
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: state.page,
              _limit: state.limit,
            },
          }
        );
        commit(
          "setTotalPages",
          Math.ceil(response.headers["x-total-count"] / state.limit)
        );
		  commit('setPosts', [...state.posts, ...response.data])
      } catch (error) {
        throw new Error("Не удалось загрузить посты");
      }
    },
  },
  namespaced: true
};
