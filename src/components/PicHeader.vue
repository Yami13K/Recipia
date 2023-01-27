<template>
  <div class="relative">
    <div class="aspect-w-3 aspect-h-1 md:aspect-w-4 md:aspect-h-1">
      <img
        src="../assets/recipe-book.jpg"
        alt="cookbook"
        class="h-full w-full object-cover xl:rounded-xl"
      />
    </div>
    <h1
      class="absolute inset-x-0 top-[30%] text-[10vw] font-bold text-white md:top-[28%] md:text-[9vw] xl:text-[114px]"
    >
      {{ text }}
    </h1>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
  },
};
</script>

<style></style>
