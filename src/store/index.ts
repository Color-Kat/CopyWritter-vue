// import { Articles } from "@/store/modules/articles";
import Vue from "vue";
import Vuex from "vuex";
import { Module } from "vuex-module-decorators";
import articles from "./modules/articles";

Vue.use(Vuex);

// export default new Vuex.Store({
// 	modules: {
// 		Articles
// 	}
// });
const store = new Vuex.Store({
	modules: {
		articles
	}
});
export default store;
