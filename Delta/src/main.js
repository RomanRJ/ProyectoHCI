
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';


import App from './App.vue';
import Login from './components/Login.vue';
import Inicio from './components/Inicio.vue';
import Actividad from './components/Actividad.vue';
import Test from './components/Test.vue';
import Resultados from './components/Resultados.vue';
import Sidebar from './components/sidebar.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/Login', component: Login },
      { path: '/', component: Sidebar,},
      { path: '/Inicio', component: Inicio },
      { path: '/Actividad', component: Actividad },
      { path: '/Test', component: Test },
      { path: '/Resultados', component: Resultados }
    ],
  });
  const app = createApp(App);
  app.use(router);
  app.mount('#app');
