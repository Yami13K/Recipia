<template>
  <div class="mx-auto max-w-7xl">
    <PicHeader text="Recipe Book" />
    <div id="locator-container">
      <div class="search-form">
        <form @submit.prevent="searchRecipe">
          <input
            class="search-bar mx-2 my-2 rounded-md border-2 border-gray-400 px-1 py-1"
            type="text"
            v-model="searchQuery"
          />
          <button type="submit" class="bg-green-300 hover:bg-green-500">
            Search
          </button>
        </form>
      </div>
      <div class="locator-buttons">
        <button
          class="bg-indigo-300 hover:bg-indigo-500 hover:text-white"
          @click="toggleTags"
        >
          Search by Tag
        </button>
        <button
          class="bg-indigo-300 hover:bg-indigo-500 hover:text-white"
          @click="getRecipes(null, null, true)"
        >
          Random Recipes
        </button>
      </div>
      <TagList v-if="tagsVisible" @clicked="receiveTag" />

      <breeding-rhombus-spinner
        :animation-duration="2000"
        :size="65"
        color="#312e81"
        v-if="loading"
        class="m-auto my-20"
      />
      <RecipeList :recipes="recipes" class="mx-5 my-5 font-medium" />
    </div>
  </div>
</template>

<script>
import { BreedingRhombusSpinner } from "epic-spinners";
import PicHeader from "@/components/PicHeader.vue";
import TagList from "@/components/TagList.vue";
import RecipeList from "@/components/RecipeList.vue";

export default {
  name: "BookView",
  data() {
    return {
      tagsVisible: false,
      unfilteredRecipes: [],
      searchQuery: "",
      loading: false,
    };
  },
  components: {
    PicHeader,
    TagList,
    RecipeList,
    BreedingRhombusSpinner,
  },
  computed: {
    recipes() {
      if (this.$root.$data.recipeList.length > 0) {
        return this.$root.$data.recipeList;
      }
      return this.unfilteredRecipes.filter((recipe) =>
        recipe.canonical_id.includes("recipe")
      );
    },
  },
  methods: {
    getRecipes(queryString, tagName, random) {
      if (this.tagsVisible) {
        this.toggleTags();
      }
      this.loading = true;
      let apiURL = "https://tasty.p.rapidapi.com/recipes/list";
      let offset = 0;
      if (random) {
        offset = Math.floor(Math.random() * 8907);
        console.log(offset);
      }
      apiURL += `?from=${offset}&size=30`; // change num recipes?

      if (tagName) {
        apiURL += `&tags=${tagName}`;
      }

      if (queryString) {
        apiURL += `&q=${queryString}`;
      }

      fetch(apiURL, {
        method: "GET",
        headers: {
          "x-rapidapi-host": "tasty.p.rapidapi.com",
          "x-rapidapi-key":
            "0e7f030579msh34a04515a267f43p1cab01jsn0b8b2139c8e7",
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          this.unfilteredRecipes = json.results;
          this.$root.$data.recipeList = json.results.filter((recipe) =>
            recipe.canonical_id.includes("recipe")
          );
          this.loading = false;
        })
        .catch((err) => {
          console.error(err);
        });
    },
    recipeList() {
      return this.$root.$data.recipeList;
    },
    toggleTags() {
      this.tagsVisible = !this.tagsVisible;
    },
    receiveTag(tag) {
      this.getRecipes(null, tag, null);
    },
    searchRecipe() {
      console.log("IM SEARCHING FOR " + this.searchQuery);
      this.getRecipes(this.searchQuery, null, null);
    },
  },
};
</script>
