<template>
  <div class="navbar">
    <div @click="$router.push('/')" class="logo"><h3>LOGO</h3></div>
    <div class="links">
      <div @click="$router.push('/posts')" class="link">Посты</div>
      <div @click="$router.push('/about')" class="link">О приложении</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
  position: sticky;
  height: 56px;
  width: 100%;
  top: 0;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  z-index: 10;
  border-bottom: #16474f 2px solid;
}
.logo {
  color: black;
  cursor: pointer;
}
.links {
  display: inline-flex;
  gap: 20px;
}
.link {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>
