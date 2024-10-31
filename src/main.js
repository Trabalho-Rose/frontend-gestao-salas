import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import '@mdi/font/css/materialdesignicons.css'  // Import MDI icons

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Components
import App from './App.vue'
import HomeView from './views/HomeView.vue'
import teacher from './views/teacher.vue'
import course from './views/course.vue'
import classroom from './views/classroom.vue'
import disciplina from './views/disciplina.vue'

const vuetify = createVuetify({
  components,
  directives,
})



const routes = [
  {path: '/', component: HomeView},
  {path: '/teacher', component: teacher},
  {path: '/course', component: course },
  {path: '/classroom', component: classroom},
  {path: '/disciplina', component: disciplina}
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

createApp(App).use(vuetify).use(router).mount('#app')


