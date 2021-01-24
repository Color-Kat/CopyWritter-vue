<template>
    <div id="article">
        <h1>{{article.title}}</h1>
        <h5>{{article.nickname}}</h5>
        <div class="text">
            {{article.text}}
        </div>
    </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import {getModule} from 'vuex-module-decorators'
import articles from "@/store/modules/articles";

interface IArticle {
	nickname: string;
	title: string;
	text: string;
	id: number;
}

@Component
export default class ArticlesComponent extends Vue{
    articlesModule = getModule(articles, this.$store);
    article: IArticle = (this.articlesModule.getArticleById)(this.$route.params.id);
}
</script>