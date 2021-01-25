<template>
  <div id="add-article">
    <h1>Add new article</h1>

    <form @submit.prevent="submitHandler">
      <label><span>Your nickname:</span><br>
        <input v-model="nickname" type="text" placeholder="ColorKat">
        <br>
      </label>

      <label><span>Title:</span><br>
        <input v-model="title" type="text" placeholder="There lived a grandfather and a grandmother">
        <br>
      </label>

      <label><span>Text:</span><br>
        <textarea v-model="text" name="" id="" cols="30" rows="10"></textarea>
        <br>
      </label>

      <div v-if="error" class="error">Fill in all the fields!</div>

      <button type="submit">Share!</button>
    </form>
  </div>
</template>

<script lang="ts">
import {Vue, Component, Watch} from 'vue-property-decorator';
import {articlesMapper} from "@/store/modules/articles.ts";

interface IArticle {
	nickname: string;
	title: string;
    text: string;
    id: number;
}

@Component({
    methods: articlesMapper.mapActions({
        updateArticles: 'updateArticles'
    })
})
export default class AddArticle extends Vue {
    nickname: string = '';
    title: string = '';
    text: string = '';
    error: boolean = false;

    async submitHandler(): Promise<any> {
        let id = Date.now();
        // console.log(module);
        this.error = !await this.updateArticles({
            nickname: this.nickname,
            title: this.title,
            text: this.text,
            id
        });

        // if (!this.error) {
        //     this.$router.push('/articles/' + id);
        // }
    }
}
</script>

<style lang="scss" scoped>
  form{
    position: relative;

    label {
        width: 100%;
        font-size: 1.1em;
        font-weight: 500;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 


        input, textarea {
            width: 70%;
            height: 40px;
            border-radius: 5px;
            border: none;
            outline: none;
            background: rgb(233, 241, 239);;
            margin: 10px 0;
            padding: 9px;
            font-size: 1.1em;
            font-weight: 450;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
        }

        textarea{
            height: 200px;
        }
    }
    button {
        width: 40%;
        height: 40px;
        border-radius: 6px;
        border: none;
        outline: none;
        background: rgb(0, 216, 151);
        color: #fff;
    }
  }
</style>
