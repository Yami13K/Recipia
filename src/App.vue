<template>
  <div id="app" class="flex h-screen flex-col">
    <nav class="bg-violet-400">
      <router-link class="text-xl hover:text-violet-800" to="/"
        >Home</router-link
      >
      <span class="px-1 text-xl"> | </span>
      <router-link class="text-xl hover:text-violet-800" to="/recipe-book"
        >Recipe Book</router-link
      >
    </nav>
    <router-view class="mb-auto w-[100%]" />
    <div class="grid grid-cols-3 bg-violet-100 py-1.5">
      <span class="font-medium">Jared Black</span>
      <a
        class="font-semibold text-violet-800 underline"
        href="https://github.com/jaredblack/creative-vue"
        >GitHub</a
      >
      <span class="font-medium">BJ Foutz</span>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 25px;
}

nav a {
  font-weight: bold;
  color: rgb(26, 26, 26);
}

nav a.router-link-exact-active {
  color: white;
}

nav a.router-link-exact-hover {
  color: gray;
}
</style>
