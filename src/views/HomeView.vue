<template>
  <main>
    <!-- <tab></tab> -->

    <v-container>
      <v-col>
        <v-row>
          <v-col> <course></course> </v-col>
          <v-col> <teacher></teacher> </v-col>
          <!-- <v-col><CoursePage /></v-col>
          <v-col><TeacherPage /></v-col> -->
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
// import {defineAsyncComponent} from 'vue'
// import Loader from '../components/loader.vue'

import course from "./course.vue";
import teacher from './teacherView/teacher.vue'
import classroom from "./classroomView/classroom.vue";
import disciplina from "./disciplinaView/disciplina.vue";

// const CoursePage = defineAsyncComponent({
//   loader: () => import('./course.vue'),
//   loadingComponent: Loader,
//   delay: 5000,
// })

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
