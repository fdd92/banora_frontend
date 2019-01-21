/**
 * Mocking client-server processing
 */

function Page(path, title, name) {
    this.path = path || ''
    this.title = title || ''
    this.name = name || ''
}

Page.prototype = {
    path: "",
    title: "",
    name: ""
}

const _pages = [
    new Page('/home', '首页', 'home'),
    new Page('/wish-list', '愿望单', 'wish-list')
]

export {Page}

export default {
    getPages(callback) {
        setTimeout(() => callback(_pages), 100)
    },
}
