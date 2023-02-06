import { computed, ref } from "vue";

export function useSortedAndSearchedPosts(sortedPosts) {
  const searchQuery = ref("");
  const findingPosts = ref(false);
  const sortedAndSearchedPosts = computed(() => {
    return sortedPosts.value.filter(post => {
      if (post.title.toLowerCase().includes(searchQuery.value.toLowerCase())) {
        findingPosts.value = true;
        return post.title
          .toLowerCase()
          .includes(searchQuery.value.toLowerCase());
      } else {
        findingPosts.value = false;
      }
    });
  });

  return {
    searchQuery,
    sortedAndSearchedPosts,
	 findingPosts
  };
}
