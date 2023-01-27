<template>
  <div class="relative mx-auto max-w-7xl">
    <div class="aspect-w-1 aspect-h-1 lg:aspect-w-3 lg:aspect-h-2">
      <img
        src="../assets/spoons.jpg"
        alt="spoons"
        class="h-full w-full object-cover xl:rounded-xl"
      />
    </div>
    <h1
      class="absolute inset-x-0 top-[4%] w-full bg-gradient-to-r from-green-400 to-violet-400 bg-clip-text text-[11vw] font-extrabold leading-tight text-transparent lg:top-0 lg:text-[10.5vw] xl:text-[135px]"
    >
      {{ text }}
    </h1>
    <router-link to="/recipe-book">
      <button
        class="absolute inset-x-0 top-[60%] m-auto w-fit border-2 border-purple-600 bg-white px-4 py-1 text-xl font-semibold text-purple-600 shadow-md hover:border-transparent hover:bg-purple-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
      >
        Get Started
      </button>
    </router-link>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "HomeIntro",
  props: {
    text: String,
  },
});
</script>

<style scoped></style>
