<template id="main-page">
    <v-ons-splitter>
        <Menu></Menu>
        <v-ons-splitter-content>
            <v-ons-page>
                <v-ons-toolbar>
                    <div class="left">
                        <v-ons-toolbar-button icon="ion-navicon, material: md-menu"
                                              @click="toggleMenu"></v-ons-toolbar-button>
                    </div>
                    <div class="center"> {{ currentPage.title }}</div>
                </v-ons-toolbar>
                <div class="content">
                    <router-view>
                    </router-view>
                </div>
            </v-ons-page>
        </v-ons-splitter-content>
    </v-ons-splitter>
</template>

<style scoped>
</style>

<script>
    import Menu from './components/Menu.vue'
    import {mapMutations, mapGetters} from 'vuex'

    export default {
        components: {
            Menu
        },
        methods: {
            ...mapMutations('menu', ['toggleMenu']),
        },
        computed: {
            ...mapGetters('menu', ['currentPage'])
        },
        data: function () {
            return {}
        }
    }
</script>
