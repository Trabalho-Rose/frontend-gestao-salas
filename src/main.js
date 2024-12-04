import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import '@mdi/font/css/materialdesignicons.css'  // Import MDI icons
import { SnackbarService, Vue3Snackbar } from 'vue3-snackbar';
//import "vue3-snackbar/dist/style.css";

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Components
import App from './App.vue';
import HomeView from './views/HomeView.vue';
import teacher from './views/teacherView/teacher.vue';
import course from './views/course.vue';
import classroom from './views/classroomView/classroom.vue';
import disciplina from './views/disciplinaView/disciplina.vue';
import Turma from './views/classView/turma.vue';
import Sort from './views/sortView/sort.vue'


const vuetify = createVuetify({
  components,
  directives,
})



const routes = [
  {path: '/', component: HomeView},
  {path: '/teacher', component: teacher},
  {path: '/course', component: course },
  {path: '/classroom', component: classroom},
  {path: '/disciplina', component: disciplina},
  {path: '/room', component: Turma},
  {path: '/sort', component: Sort}
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

createApp(App).use(vuetify).use(router).use(SnackbarService).component('vue3-snackbar', Vue3Snackbar).mount('#app')


