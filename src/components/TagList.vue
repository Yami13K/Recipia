<template>
  <div>
    <div class="mt-3 -mb-[2px]">
      <button
        v-bind:class="{ active: currentTab === 'cuisine' }"
        class="mx-0 mb-0 rounded-none rounded-tl-md border-x-0 border-b-2 border-t-0 bg-indigo-50 px-1.5 text-sm hover:bg-indigo-200 sm:px-3 sm:text-base"
        @click="displayCuisine"
      >
        Cuisine
      </button>
      <button
        v-bind:class="{ active: currentTab === 'meal' }"
        class="mx-0 mb-0 rounded-none border-x-0 border-b-2 border-t-0 bg-indigo-50 px-1.5 text-sm hover:bg-indigo-200 sm:px-3 sm:text-base"
        @click="displayMeal"
      >
        Meal
      </button>
      <button
        v-bind:class="{ active: currentTab === 'dietary' }"
        class="mx-0 mb-0 rounded-none border-x-0 border-b-2 border-t-0 bg-indigo-50 px-1.5 text-sm hover:bg-indigo-200 sm:px-3 sm:text-base"
        @click="displayDietary"
      >
        Dietary
      </button>
      <button
        v-bind:class="{ active: currentTab === 'difficulty' }"
        class="mx-0 mb-0 rounded-none border-x-0 border-b-2 border-t-0 bg-indigo-50 px-1.5 text-sm hover:bg-indigo-200 sm:px-3 sm:text-base"
        @click="displayDifficulty"
      >
        Difficulty
      </button>
      <button
        v-bind:class="{ active: currentTab === 'method' }"
        class="mx-0 mb-0 rounded-none rounded-tr-md border-x-0 border-b-2 border-t-0 bg-indigo-50 px-1.5 text-sm hover:bg-indigo-200 sm:px-3 sm:text-base"
        @click="displayMethod"
      >
        Method
      </button>
    </div>
    <div
      class="animate-drop mx-6 inline-block w-auto rounded-xl border-2 py-2 px-2"
    >
      <div v-if="currentTab === 'cuisine'">
        <button
          v-for="tag in cuisineTags"
          :key="tag.id"
          class="my-1 hover:bg-green-200"
          @click="sendTagName(tag.name)"
        >
          {{ tag.display_name }}
        </button>
      </div>
      <div v-if="currentTab === 'meal'">
        <button
          v-for="tag in mealTags"
          :key="tag.id"
          class="my-1 hover:bg-green-200"
          @click="sendTagName(tag.name)"
        >
          {{ tag.display_name }}
        </button>
      </div>
      <div v-if="currentTab === 'dietary'">
        <button
          v-for="tag in dietaryTags"
          :key="tag.id"
          class="my-1 hover:bg-green-200"
          @click="sendTagName(tag.name)"
        >
          {{ tag.display_name }}
        </button>
      </div>
      <div v-if="currentTab === 'difficulty'">
        <button
          v-for="tag in difficultyTags"
          :key="tag.id"
          class="my-1 hover:bg-green-200"
          @click="sendTagName(tag.name)"
        >
          {{ tag.display_name }}
        </button>
      </div>
      <div v-if="currentTab === 'method'">
        <button
          v-for="tag in methodTags"
          :key="tag.id"
          class="my-1 hover:bg-green-200"
          @click="sendTagName(tag.name)"
        >
          {{ tag.display_name }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tags: this.$root.$data.tags,
      currentTab: "cuisine",
    };
  },
  computed: {
    cuisineTags() {
      return this.tags
        .filter((tag) => tag.type === "cuisine")
        .sort((x, y) => x.display_name.localeCompare(y.display_name));
    },
    mealTags() {
      return this.tags
        .filter((tag) => tag.type === "meal")
        .sort((x, y) => x.display_name.localeCompare(y.display_name));
    },
    dietaryTags() {
      return this.tags
        .filter((tag) => tag.type === "dietary")
        .sort((x, y) => x.display_name.localeCompare(y.display_name));
    },
    difficultyTags() {
      return this.tags
        .filter((tag) => tag.type === "difficulty")
        .sort((x, y) => x.display_name.localeCompare(y.display_name));
    },
    methodTags() {
      return this.tags
        .filter((tag) => tag.type === "method")
        .sort((x, y) => x.display_name.localeCompare(y.display_name));
    },
  },
  methods: {
    displayCuisine() {
      this.currentTab = "cuisine";
    },
    displayMeal() {
      this.currentTab = "meal";
    },
    displayDietary() {
      this.currentTab = "dietary";
    },
    displayDifficulty() {
      this.currentTab = "difficulty";
    },
    displayMethod() {
      this.currentTab = "method";
    },
    sendTagName(tag) {
      this.$emit("clicked", tag);
    },
  },
};
</script>

<style>
.animate-drop {
  animation: growDown 300ms ease-in-out forwards;
  transform-origin: top center;
}

@keyframes growDown {
  0% {
    transform: scaleY(0);
  }
  80% {
    transform: scaleY(1.1);
  }
  100% {
    transform: scaleY(1);
  }
}

.active {
  @apply border-b-indigo-500 bg-indigo-300;
}
</style>
