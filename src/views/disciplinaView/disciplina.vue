<template>
    
    <div>

      <v-data-table
        class="data-table-header"
        dense
        height="76vh"
        fixed-header
        :headers="headerDisciplina"
        :items="items"
        :search="search"
        item-value="id"
      >
      
      </v-data-table>
    </div>
</template>

<script>
    import listDisciplina from '../../services/disciplina/serviceDisciplina'
    import { headerDisciplina  } from '../../services/disciplina/const/headers'

  export default {
    data(){
      return {
        items: [],
        header: headerDisciplina,
        search: '',
      }
    },

   async mounted(){
      this.items = await listDisciplina();
    },

  }
</script>

<style>

  /* estilos customizados */
.data-table-header {
    font-weight: bold;
}

.v-table > .v-table__wrapper > table {
    width: 50%; 
    border-spacing: 0;
    border: solid 1px gray;
    
    margin: 10px;
}






</style>
