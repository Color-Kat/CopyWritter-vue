<template>
  <div id="app">
    <NavBar />
    <main>
    <router-view ></router-view>
    </main>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import NavBar from '@/components/NavBar.vue';

@Component({
  components: {
    NavBar
  }
})
export default class App extends Vue{
}
</script>

<style lang="scss">
body, html{
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
main {
    // display: flex;
    // max-width: 700px;
    // min-width: 700px;
    position: relative;
    margin: 0 25%;
    margin-top: 3rem;

    @media screen and (max-width: 920px) {
        &{ margin: 0 5%;}
    }
}
</style>
