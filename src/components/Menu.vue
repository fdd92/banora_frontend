<template id="menu">
    <v-ons-splitter-side
            swipeable width="150px" collapse="" side="left"
            :open="menuOpen"
            @update:open="toggleMenu"
    >
        <v-ons-page>
            <ons-list-title>Links</ons-list-title>
            <v-ons-list>
                <v-ons-list-item v-bind:key="page.path" v-for="page in pages"
                                 tappable modifier="chevron"
                                 @click="toggleMenu">
                    <div class="center">
                        <router-link :to="page.path">{{ page.title }}</router-link>
                    </div>
                </v-ons-list-item>
            </v-ons-list>
        </v-ons-page>
    </v-ons-splitter-side>
</template>

<script>
    import {mapState, mapMutations} from 'vuex'

    export default {
        name: "Menu",
        methods: {
            ...mapMutations('menu',
                ['toggleMenu']
            )
        },
        computed: {
            ...mapState({
                menuOpen: state => state.menu.menuOpen,
                pages: state => state.menu.pages
            })
        },
        created: function () {
            this.$store.dispatch('menu/getPages')
        },
        data: function () {
            return {}
        }
    }
</script>

<style scoped>
    a {
        text-decoration: none;
        color: #1f1f21;
    }
</style>
