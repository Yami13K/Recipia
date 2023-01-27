import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import tagData from "./tags.js";

import "./index.css";

Vue.config.productionTip = false;

console.log(tagData);
let data = {
  tags: tagData.tagData,
  recipeList: [],
};

console.log(data.tags);

new Vue({
  router,
  data,
  render: (h) => h(App),
}).$mount("#app");
