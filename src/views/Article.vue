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
import {articlesMapper} from "@/store/modules/articles";

interface IArticle {
	nickname: string;
	title: string;
	text: string;
	id: number;
}

@Component({
    computed: articlesMapper.mapGetters(['getArticleById'])
})
export default class ArticlesComponent extends Vue{
    // articlesModule = getModule(articles, this.$store);
    getArticleById: (id: number)=> IArticle | undefined;
    public article: IArticle | undefined | {} = {};

    mounted() {
        this.article = this.getArticleById(+this.$route.params.id);
    }
}
</script>