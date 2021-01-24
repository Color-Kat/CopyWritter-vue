import store from "@/store/index";
import { VuexModule, Module, Mutation, Action, getModule } from "vuex-module-decorators";
interface IArticle {
	nickname: string;
	title: string;
	text: string;
	id: number;
}

@Module({ namespaced: true, name: "articles" })
class Articles extends VuexModule {
	public articles: IArticle[] = JSON.parse(localStorage.getItem("articles") || "[]");

	@Mutation
	public ADD_ARTICLE (article: IArticle): void {
		this.articles.push(article);
		localStorage.setItem("articles", JSON.stringify(this.articles));
	}

	@Action({ rawError: true })
	public updateArticles (article: IArticle): boolean {
		// this.context.commit("ADD_ARTICLE", article);
		if (article.title != "" || article.nickname != "" || article.text != "") {
			this.ADD_ARTICLE(article);
		} else return false;

		return true;
	}

	public get getAllArticles () {
		// return all article without empty articles
		return this.articles
			.filter(t => t.title != "" && t.text != "" && t.nickname != "")
			.reverse();
	}
}
export default Articles;
