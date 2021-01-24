// store/modules/user.ts
import { VuexModule, Module, Mutation, Action } from "vuex-module-decorators";

interface IArticle {
	nickname: string;
	title: string;
	text: string;
}

@Module({ namespaced: true, name: "articles" })
class Articles extends VuexModule {
	public articles: IArticle[] = [];

	@Mutation
	public addArticle (article: IArticle): void {
		this.articles.push(article);
	}
	@Action
	public updateName (article: IArticle): void {
		this.context.commit("addArticle", article);
	}
}
export default Articles;
