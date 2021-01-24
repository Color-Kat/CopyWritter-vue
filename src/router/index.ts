import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomePage from "../views/HomePage.vue";

Vue.use(VueRouter);

const routes: RouteConfig[] = [
	{
		path: "/add-article",
		name: "AddArticle",
		component: () => import("@/views/AddArticle.vue")
	},
	{
		path: "/articles/:id",
		name: "ReadArticle",
		component: () => import("@/views/Article.vue")
	},
	{
		path: "/",
		name: "Home",
		component: () => import("@/views/HomePage.vue")
	}
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes
});

export default router;
