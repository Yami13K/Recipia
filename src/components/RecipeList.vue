<template>
  <div class="content">
    <div
      class="recipes grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      <div
        v-for="recipe in recipes"
        :key="recipe.id"
        class="rounded-lg transition-all hover:scale-105"
      >
        <router-link :to="{ path: '/recipe', query: { recipeid: recipe.id } }">
          <div class="recipe-tile">
            <div class="aspect-w-1 aspect-h-1">
              <img
                class="rounded-lg object-cover shadow-xl"
                :src="recipe.thumbnail_url"
              />
            </div>
            <div class="title">{{ recipe.name }}</div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecipeList",
  props: {
    recipes: Array,
  },
};
</script>

<style></style>
