<template>
  <main>
    <!-- <tab></tab> -->

    <v-container>
      <v-col>
        <v-row>
          <v-col><course></course></v-col>
          <v-col><teacher></teacher></v-col>
        </v-row>
        <v-row>
          <v-col><classroom></classroom></v-col>
          <v-col><disciplina></disciplina></v-col>
        </v-row>
      </v-col>
    </v-container>
  </main>
</template>

<script setup>
//import tab from '../components/tab.vue';
import course from "./course.vue";
import teacher from './teacherView/teacher.vue'
import classroom from "./classroomView/classroom.vue";
import disciplina from "./disciplinaView/disciplina.vue";
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
