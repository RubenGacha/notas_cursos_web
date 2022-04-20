export const vueRoutes=[
    {
        path: '/vue/introduccion',
        name: 'vueIntroduccion',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Vue/01_Introduccion.vue')
    },
    {
        path: '/vue/primerospasos',
        name: 'vuePrimerosPasos',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Vue/02_Primerospasos.vue')
    },
    {
        path: '/vue/directivasbasicas',
        name: 'vueDirectivasBasicas',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Vue/03_Basicas.vue')
    },
    {
        path: '/vue/directivascondicionales',
        name: 'vueDirectivasCondicionales',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Vue/04_Condicionales.vue')
    },
    {
        path: '/vue/directivasbucles',
        name: 'vueDirectivasBucles',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Vue/05_Ciclos.vue')
    },
    {
        path: '/vue/directivasbind',
        name: 'vueDirectivasBind',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Vue/06_Bind.vue')
    },
    {
        path: '/vue/eventosmetodos',
        name: 'vueEventosMetodos',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Vue/07_EventosMetodos.vue')
    },
    {
        path: '/vue/computed',
        name: 'vueComputed',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Vue/08_Computed.vue')
    },
    {
        path: '/vue/lifecycle',
        name: 'vueLifecycle',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Vue/09_Lifecycle.vue')
    },
    {
        path: '/vue/componentesbasicos',
        name: 'vueComponentesBasicos',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Vue/10_ComponentesBasico.vue')
    },
    {
        path: '/vue/componentescomunicacion',
        name: 'vueComponentesComunicacion',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Vue/11_ComponentesComunicacion.vue')
    },
    {
        path: '/vue/libreriavuex',
        name: 'vueLibreriaVuex',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Vue/12_Vuex.vue')
    },
    {
        path: '/vue/singlefilecomponents',
        name: 'vueSingleFileComponents',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Vue/13_SingleFileComponents.vue')
    },
    {
        path: '/vue/rutas',
        name: 'vueRutas',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Vue/14_Rutas.vue')
    },
    {
        path: '/vue/pwa',
        name: 'vuePWA',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Vue/15_PWA.vue')
    },
    {
        path: '/vue/auditarpwa',
        name: 'vueAuditarPWA',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Vue/16_Auditoria_PWA.vue')
    },
    {
        path: '/vue/peticiones',
        name: 'vuePeticiones',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Vue/17_Peticiones.vue')
    }
]