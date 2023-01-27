<template>
  <div v-if="recipe" class="content mx-auto max-w-7xl">
    <div class="recipe-header sm:mx-12 sm:grid sm:grid-cols-2 md:grid-cols-3">
      <div class="flex-center flex flex-col justify-center md:col-span-2">
        <h1 class="text-3xl md:text-5xl">{{ recipe.name }}</h1>
        <p v-if="recipe.total_time_minutes">
          Minutes: {{ recipe.total_time_minutes }}
        </p>
        <p v-else-if="recipe.total_time_tier">
          {{ recipe.total_time_tier.display_tier }}
        </p>
        <p v-if="recipe.num_servings">Servings: {{ recipe.num_servings }}</p>
      </div>
      <div class="my-6 flex justify-center md:mx-1">
        <video v-if="recipe.original_video_url" controls width="100%">
          <source :src="recipe.original_video_url" type="video/mp4" />
        </video>
        <img v-else :src="recipe.thumbnail_url" />
      </div>
    </div>
    <div class="sm:mx-10 lg:grid lg:grid-cols-3">
      <div class="l mb-2 border-b-2 lg:border-b-0">
        <div
          class="mb-2"
          v-for="section in recipe.sections"
          :key="section.position"
        >
          <h1
            class="ml-3 text-left text-xl font-bold"
            v-if="section.name === null"
          >
            Ingredients
          </h1>
          <h1 class="ml-3 text-left text-xl font-bold" v-else>
            {{ section.name }}
          </h1>
          <ul class="list-disc">
            <li
              class="ml-9 mr-2 text-left"
              v-for="ingredient in section.components"
              :key="ingredient.id"
            >
              {{ ingredient.raw_text }}
            </li>
          </ul>
        </div>
      </div>
      <div class="mt-5 mb-5 lg:col-span-2 lg:mt-0 lg:border-l-2 lg:pl-4">
        <p class="ml-3 mb-2 text-left text-2xl font-bold">Instructions</p>
        <ol class="list-decimal">
          <li
            class="ml-9 mr-2 text-left"
            v-for="item in recipe.instructions"
            :key="item.id"
          >
            {{ item.display_text }}
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecipeView",
  data() {
    return {
      recipe: {},
    };
  },
  created() {
    if (this.$root.$data.recipeList) {
      let recipe = this.$root.$data.recipeList.find(
        (recipe) => recipe.id == this.$route.query.recipeid
      );
      if (recipe) {
        this.recipe = recipe;
        return;
      }
    }
    // Make API call if recipe not available in stored list
    let apiURL = `https://tasty.p.rapidapi.com/recipes/get-more-info?id=${this.$route.query.recipeid}`;
    fetch(apiURL, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "tasty.p.rapidapi.com",
        "x-rapidapi-key": "0e7f030579msh34a04515a267f43p1cab01jsn0b8b2139c8e7",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        this.recipe = json;
        console.log(json);
      })
      .catch((err) => {
        console.error(err);
      });
    console.log(this.recipe);
  },
  methods: {
    getRecipe() {
      return this.fetchRecipe();
    },
    fetchRecipe() {
      return recipe;
    },
  },
};
</script>

<style></style>
