<template>
    <div id="articles">
        <h1>New articles</h1>
        <router-link
            :to="'/articles/' + article.id" 
            tag="div"
            class="article"
            v-for="article of articles"
            :key="article.id"
        >
            <h2>{{article.title}}</h2>
            <h6>{{article.nickname}}</h6>
            <div class="text">
                {{cropText(article.text)}}
            </div>
        </router-link>
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
    articles: IArticle[] = this.articlesModule.getAllArticles;

    cropText(str: string): string {
        return str.slice(0, 128) + '...';
    }
}
</script>

<style lang="scss" scoped>
    #articles .article{
        background: rgb(233, 241, 239);
        padding: 15px 1rem;
        margin-bottom: 2rem;

        *{
            width: 100%;
            text-align: left;
            margin: 0;
        }

        .text{
            margin: 15px 0 ;
            max-width: 100%;
            max-height: 100px;
            word-wrap:break-word;
            text-overflow: ellipsis;
        }
    }
</style>