var m = require("mithril");



module.exports = {
    view: (vnode)=> {
        return m("nav.navbar.navbar-expand-lg.navbar-light.bg-light", 
               m("div.container", [
                
                  m("a.navbar-brand[href='#']",
                        [
                            m("img.d-inline-block.align-top[src='assets/img/flavicon.png'][width='70'][height='70'][alt='']"),
                        ]
                    ),
                    m("button.navbar-toggler[type='button'][data-bs-toggle='collapse'][data-bs-target='#navbarNav'][aria-controls='navbarNav'][aria-expanded='false'][aria-label='Toggle navigation']", 
                    m("span.navbar-toggler-icon")
                  ), 
                  m(".collapse.navbar-collapse[id='navbarNav']", 
                    m("ul.navbar-nav",
                      [
                        m("li.nav-item", 
                          m("a.nav-link.active[aria-current='page'][href='#']", 
                            "Home"
                          )
                        ),
                        m("li.nav-item", 
                          m("a.nav-link[href='#']", 
                            "Menu"
                          )
                        ),
                        m("li.nav-item", 
                          m("a.nav-link[href='#']", 
                            "À propos de Maldoo"
                          )
                        ),
                        m("li.nav-item", 
                          m("a.nav-link[href='#']", 
                            "Shop"
                          )
                        ),
                        m("li.nav-item", 
                          m("a.nav-link[href='#']", 
                            "Contact"
                          )
                        )
                      ]
                    )
                  )
                    
               ])
        )
    }
}
