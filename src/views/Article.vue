<template>
    <div id="article" v-if="article">
        <h1>{{article.title}}</h1>
        <h5>{{article.nickname}}</h5>
        <div class="text">
            {{article.text}}
        </div>
    </div>
    <div v-else>
        wrong  id!
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
    article: IArticle | undefined = (this.articlesModule.getArticleById)(+this.$route.params.id);
}
</script>