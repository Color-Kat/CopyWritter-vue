<template>
    <div id="articles">
        <h1>New articles</h1>
        <router-link
            tag="div"
            class="article"
            v-for="article of articles"
            :key="article.id"
            :to="'/articles/' + article.id" 
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
import {articlesMapper} from "@/store/modules/articles.ts";

interface IArticle {
	nickname: string;
	title: string;
	text: string;
	id: number;
}

@Component ({
    computed: articlesMapper.mapGetters(['getAllArticles'])
})
export default class ArticlesComponent extends Vue{
    getAllArticles: IArticle[];
    public articles: IArticle[] = [];

    cropText(str: string): string {
        return str.slice(0, 128) + '...';
    }

    mounted() {
        this.articles = this.getAllArticles
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