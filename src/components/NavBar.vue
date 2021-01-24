<template>
    <header>
        <div class="brand-name">{{brandName}}</div>

        <div class="links">
            <router-link 
                v-for="link of links" 
                :key="link.id" 
                :to="link.linkPath"
                active-class="active-link"
                exact
            >
                {{link.linkName}}
            </router-link>
        </div>
    </header>
</template>

<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';

@Component
export default class NavBar extends Vue{
    private brandName: string = '@Copywritter-vue';

    private links: any[] = [
        {
            linkName: 'Home',
            linkPath: '/',
            linkId: 1
        },
        {
            linkName: 'Add article',
            linkPath: '/add-article',
            linkId: 2
        },
    ];
}
</script>

<style lang="scss" scoped>
    header {
        // width: 100%;
        height: 70px;
        background: rgb(0, 216, 151);

        padding: 0 4rem;

        display: flex;
        justify-content: space-between;

        * {
            height: 100%;
            display: flex;
            align-items: center;
            color: #fff;
            font-size: 1.1em;
            font-weight: bold;
            font-family: Verdana, Geneva, Tahoma, sans-serif;
        }

        .links *{
            // margin: 0 1rem;
            min-width: calc(100px + 1rem);
            padding: 0 10px;
            // text-align: center;
            display: flex;
            justify-content: center;
            text-decoration: none;
            
            transition: .3s all ease-in-out;

            &:hover {
                background: rgb(15, 194, 134);
            }
            
            &.active-link{
                background: rgb(15, 194, 134);
            }
        }
    }
</style>

