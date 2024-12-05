<template>
  <main>
    <!-- <tab></tab> -->

    <v-container>
      <v-col>
        <v-row>
          <!-- <v-col> <course></course> </v-col>
          <v-col> <teacher></teacher> </v-col> -->
          <LoaderPage
            v-if="loading"
            type="table"
            loading-text="Carregando dados"  
          ></LoaderPage>
          <v-col v-else>
            <CoursePage :courses="courses" />
            <TeacherPage :teachers="teachers" />
          </v-col>
          
          
        </v-row>
        <v-row>
          <!-- <v-col><classroom></classroom></v-col>
          <v-col><disciplina></disciplina></v-col> -->
        </v-row>
      </v-col>
    </v-container>
  </main>
</template>

<script>
//import {defineAsyncComponent, hydrateOnVisible} from 'vue'
import Loader from '../components/loader.vue'


 import Course from "./course.vue";

 import {listCurso} from '../services/curso/serviceCurso'
 import Teacher from './teacherView/teacher.vue'
 
 import { listProfessor } from '../services/professor/serviceProfessor'
// import classroom from "./classroomView/classroom.vue";
// import disciplina from "./disciplinaView/disciplina.vue";

export default {
  components: {
    LoaderPage: Loader,
    CoursePage: Course,
    TeacherPage: Teacher
  },
  data() {
    return {
      loading: true,
      courses: [],
      teachers: []
    }
  },

  async mounted(){
    try {
    this.courses = await listCurso();
    this.teachers = await listProfessor();
  } catch (error) {
    console.error("Error loading data:", error);
  } finally {
    this.loading = false;
  }
  }
}

// const CoursePage = defineAsyncComponent({
//   loader: () => import('./course.vue'),
//   hydrate: hydrateOnVisible(),
//   loadingComponent: Loader,
//   delay: 300,
//   timeout: 3000
// });

// const TeacherPage = defineAsyncComponent({
//   loader: () => import('./teacherView/teacher.vue'),
//   loadingComponent: Loader,
//   //delay: 5000,
// });

// const ClassroomPage = defineAsyncComponent({
//   loader: () => import('./classroomView/classroom.vue'),
//   loadingComponent: Loader,
//   delay: 5000,
// });

// const ClassPage = defineAsyncComponent({
//   loader: () => import('./classView/turma.vue'),
//   loadingComponent: Loader,
//   delay: 5000,
// });

// const DisciplinePage = defineAsyncComponent({
//   loader: () => import('./disciplinaView/disciplina.vue'),
//   loadingComponent: Loader,
//   delay: 5000,
// })

</script>








<style>
.img-logo-cesurg {
  width: 150px;
  margin: 10px;
}

/* .v-table {
  border-radius: inherit;
  line-height: 1.5;
  max-width: 800px;
  display: inline-block;
  flex-direction: column;
} */
</style>
