<template>
    
    <div>

      <v-data-table
      :headers="headerDisciplina"
      :items="itemsa"
      :search="search"
      item-value="id"
    >
      <template v-slot:top>
        <v-text-field
          v-model="search"
          class="pa-2"
          label="Search (UPPER CASE ONLY)"
        ></v-text-field>
      </template>
    </v-data-table>

    <ul>
      <li v-for="item in items" :key="item.id">
        {{ item.nome }} - {{ item.cargaHoraria }} horas
      </li>
    </ul>

    </div>
  </template>

<script>
    import listDisciplina from '../services/disciplina/serviceDisciplina'
    import { headerDisciplina } from '../services/disciplina/const/headers'

  export default {
    data(){
      return {
        items: [],
        headerDisciplina: [],
        search: '',
      }
    },

   async mounted(){
      this.items = await listDisciplina();
    },

    // methods: {
    //   editDisciplinas(item){
    //     console.log("testing", item);
        
    //   }
    // }

    // methods: {
    //   filterOnlyCapsText (value, query, item) {
    //     return value != null &&
    //       query != null &&
    //       typeof value === 'string' &&
    //       value.toString().toLocaleUpperCase().indexOf(query) !== -1
    //   },
    // },
  }
</script>
