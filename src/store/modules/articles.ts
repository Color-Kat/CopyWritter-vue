import { Getters, Mutations, Actions, Module, createMapper } from "vuex-smart-module";
interface IArticle {
	nickname: string;
	title: string;
	text: string;
	id: number;
}

class ArticlesState {
	articles: IArticle[] = JSON.parse(localStorage.getItem("articles") || "[]");
}

class ArticlesGetters extends Getters<ArticlesState> {
	get getAllArticles () {
		// return all article without empty articles
		return this.state.articles
			.filter(t => t.title != "" && t.text != "" && t.nickname != "")
			.reverse();
	}

	get getArticleById () {
		return (id: number): IArticle | undefined => {
			return this.state.articles.find(t => t.id == id);
		};
	}
}

class ArticlesMutations extends Mutations<ArticlesState> {
	public ADD_ARTICLE (article: IArticle): void {
		this.state.articles.push(article);
		localStorage.setItem("articles", JSON.stringify(this.state.articles));
	}
}

class ArticlesActions extends Actions<
	ArticlesState,
	ArticlesGetters,
	ArticlesMutations,
	ArticlesActions
> {
	public updateArticles (article: IArticle): boolean {
		console.log(123);
		if (article.title != "" || article.nickname != "" || article.text != "") {
			this.commit("ADD_ARTICLE", article);
		} else return false;

		return true;
	}
}

export const articlesModule = new Module({
	state: ArticlesState,
	getters: ArticlesGetters,
	mutations: ArticlesMutations,
	actions: ArticlesActions
});

export const articlesMapper = createMapper(articlesModule);
