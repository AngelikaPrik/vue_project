<template>
  <div class="app">
    <PostForm @create="createPost" />
    <PostList :posts="posts" />
  </div>
</template>

<script>
import PostForm from "./components/PostForm.vue";
import PostList from "./components/PostList.vue";
export default {
  components: {
    PostForm,
    PostList,
  },
  data() {
    return {
      posts: [
        {
          id: 1,
          title: "О JavaScript",
          desc: "Когда JavaScript создавался, у него было другое имя – «LiveScript». Однако, язык Java был очень популярен в то время, и было решено, что позиционирование JavaScript как «младшего брата» Java будет полезно. Со временем JavaScript стал полностью независимым языком со своей собственной спецификацией, называющейся ECMAScript, и сейчас не имеет никакого отношения к Java.",
          data: "15.01.2023",
        },
        {
          id: 2,
          title: "ООП во фронтенде",
          desc: "Feature-Sliced Design (FSD) — это архитектурная методология для проектирования frontend-приложений. Проще говоря, это свод правил и соглашений по организации кода. Главная цель методологии — сделать проект понятным и структурированным, особенно в условиях регулярного изменения требований бизнеса.",
          data: "15.11.2022",
        },
        {
          id: 3,
          title: "Стейт-менеджеры",
          desc: "Сложность больших приложений нередко возрастает из-за распределения кусочков состояния по многим компонентам и связям между ними. Для решения этой проблемы, Vue предлагает Vuex: нашу собственную библиотеку управления состоянием, вдохновлённую языком Elm. Она даже интегрируется с Vue-devtools, из коробки давая доступ к функциональности “машины времени”.",
          data: "10.09.2022",
        },
      ],
    };
  },
  methods: {
    createPost(post) {
      this.posts.unshift(post);
    },
  },
};
</script>

<style>
.app {
  max-width: 800px;
  margin: 2rem auto;
}
</style>
