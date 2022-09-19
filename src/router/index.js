import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue'
import Brands from '../views/Brands.vue'
import Maintenance from '../views/Maintenance.vue'
import Collaborators from '../views/Collaborators.vue'
import Contact from '../views/Contact.vue'


const routes = [
    {
        id: 0,
        path: "/",
        name: "inicio",
        component: Home
    },
    {
        id: 1,
        path: "/marcas",
        name: "marcas",
        component: Brands
    },
    {
        id: 2,
        path: "/mantenimiento",
        name: "cuidados",
        component: Maintenance
    },
    {
        id: 3,
        path: "/colaboradores",
        name: "colaboradores",
        component: Collaborators
    },
    {
        id: 4,
        path: "/contacto",
        name: "contacto",
        component: Contact
    }
]


const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export { router, routes }