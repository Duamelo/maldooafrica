var m = require("mithril");
const navbar = require("../components/navbar/navbar");



module.exports = {
    view: (vnode) => {
        return [
            m(navbar)
        ]
    }
}