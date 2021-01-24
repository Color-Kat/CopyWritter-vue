import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomePage from "../views/HomePage.vue";

Vue.use(VueRouter);

const routes: RouteConfig[] = [
	{
		path: "/add-article",
		name: "Article",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ "@/views/AddArticle.vue")
	},
	{
		path: "/",
		name: "Home",
		component: () => import(/* webpackChunkName: "about" */ "@/views/HomePage.vue")
	}
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes
});

export default router;
