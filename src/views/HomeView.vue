<template>
  <main>
    <!-- <tab></tab> -->

    <v-container>
      <v-col>
        <v-row>
          <!-- <v-col> <course></course> </v-col>
          <v-col> <teacher></teacher> </v-col> -->
          <loader
            type="table"
            loading-text="Carregando dados"  
          ></loader>
            <v-col><CoursePage /></v-col>
            <v-col><TeacherPage /></v-col>
          
          
        </v-row>
        <v-row>
          <!-- <v-col><classroom></classroom></v-col>
          <v-col><disciplina></disciplina></v-col> -->
        </v-row>
      </v-col>
    </v-container>
  </main>
</template>

<script setup>
import {defineAsyncComponent, hydrateOnVisible} from 'vue'
import Loader from '../components/loader.vue'

// import course from "./course.vue";
// import teacher from './teacherView/teacher.vue'
// import classroom from "./classroomView/classroom.vue";
// import disciplina from "./disciplinaView/disciplina.vue";


const CoursePage = defineAsyncComponent({
  loader: () => import('./course.vue'),
  hydrate: hydrateOnVisible(),
  loadingComponent: Loader,
  delay: 300,
  timeout: 3000
});

const TeacherPage = defineAsyncComponent({
  loader: () => import('./teacherView/teacher.vue'),
  loadingComponent: Loader,
  //delay: 5000,
});

const ClassroomPage = defineAsyncComponent({
  loader: () => import('./classroomView/classroom.vue'),
  loadingComponent: Loader,
  delay: 5000,
});

const ClassPage = defineAsyncComponent({
  loader: () => import('./classView/turma.vue'),
  loadingComponent: Loader,
  delay: 5000,
});

const DisciplinePage = defineAsyncComponent({
  loader: () => import('./disciplinaView/disciplina.vue'),
  loadingComponent: Loader,
  delay: 5000,
})

// const CoursePage = defineAsyncComponent(() => 
//   import('./course.vue')
// )

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
