import menu from '../../api/menu'

import {Page} from '../../api/menu'

const state = {
    'menuOpen': false,
    'pages': [],
    'current': ''
}

const getters = {
    currentPage: function (state) {
        return state.pages.find(page => page.name === state.current) || new Page();
    }
}

const actions = {
    getPages({commit}) {
        menu.getPages(pages => {
            commit('setPages', pages)
        })
    }
}

const mutations = {
    toggleMenu: function () {
        state.menuOpen = !state.menuOpen
    },
    setPages(state, pages) {
        state.pages = pages
    },
    setCurrentPage(state, name) {
        state.current = name
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
