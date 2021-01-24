<template>
    <div id="home-page">
        <div class="homePage-title">
            <h1>@Copywritter-vue - share your creativity</h1>
            <h3>Here you can share your texts!</h3>
        </div>
        <ArticlesComponent />
    </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import ArticlesComponent from '@/components/ArticleComponent.vue';

@Component({
  components: {
    ArticlesComponent
  }
})
export default class App extends Vue{
}
</script>

<style lang="scss" scoped>
    .homePage-title{
        width: 100%;
        margin-bottom: 4rem;
        padding: 10px 0;
        background: rgb(233, 241, 239);
    }
</style>