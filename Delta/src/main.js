
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';


import App from './App.vue';
import Login from './components/Login.vue';
import Inicio from './components/Inicio.vue';
import Actividad from './components/Actividad.vue';
import Test from './components/Test.vue';
import Resultados from './components/Resultados.vue';
import Sidebar from './components/sidebar.vue';
import Heatmap from './components/Heatmap.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/heatmap',component:Heatmap},
      { path: '/Inicio', component: Inicio },
      { path: '/Actividad', component: Actividad },
      { path: '/Test', component: Test },
      { path: '/Resultados', component: Resultados },
      { path: '/Login', component: Login },
      { path: '/', component: Sidebar},
     
    ],
  });
  const app = createApp(App);
  app.use(router);
  app.mount('#app');

