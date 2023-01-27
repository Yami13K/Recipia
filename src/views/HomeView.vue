<template>
  <div class="home">
    <HomeIntro text="Cooking Companion" />
    <div
      class="mx-auto mt-5 mb-3 max-w-prose rounded-lg bg-violet-50 p-3 shadow-lg"
    >
      <p class="text-3xl font-medium">What We Do</p>
      <p class="text-lg">
        Cooking Companion will be a website where you can track ingredients and
        recipes so that you always know what you can cook, and what you'll need
        to buy to cook the recipes you love. Right now, not all that
        functionality is implemented, but you can browse our extensive list of
        recipes pulled from <a href="https://tasty.co">Tasty</a>. You can search
        for whatever you want, browse by category, or just get a list of random
        recipes. Enjoy!
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HomeIntro from "@/components/HomeIntro.vue"; // @ is an alias to /src

export default Vue.extend({
  name: "HomeView",
  components: {
    HomeIntro,
  },
});
</script>
