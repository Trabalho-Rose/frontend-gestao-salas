<template>
    <v-card
      class="mx-auto"
      max-width="300"
    >
      <v-list >
            <v-list-item v-for="curso in cursos" :key = "curso.id"> {{curso.id}} </v-list-item>
      </v-list>
    </v-card>
  </template>


  <script>
     import { getCurso, cursos, addCurso } from '../services/fetchApi';
   

  

  </script>