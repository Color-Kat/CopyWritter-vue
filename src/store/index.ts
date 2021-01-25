// import { Articles } from "@/store/modules/articles";
import Vue from "vue";
import Vuex from "vuex";
// import { Module } from "vuex-module-decorators";
import { createStore, Module } from "vuex-smart-module";
import { articlesModule } from "./modules/articles";

Vue.use(Vuex);

export default createStore(articlesModule);
