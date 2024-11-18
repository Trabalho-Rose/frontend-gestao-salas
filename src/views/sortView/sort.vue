<template>
   <v-card
      max-width="700px"
      class="ma-10"
   >
      <v-card-title>Sorteio</v-card-title>
      <v-select
         clearable
         label="Cursos"
         :items="filteredItems"
         item-value="nome"
         item-title="nome"
         v-model="selectedCourse"
      ></v-select>
      <v-card-text>
         
      </v-card-text>

      <span>selecionado: {{ selectedCourse }}</span>

   </v-card>
</template>

<script>
import { getItems } from '../../services/curso/serviceCurso';

export default {
  data() {
    return {
      items: [], 
      filteredItems: [],
      selectedCourse: null,
    };
  },

  async mounted() {
    try {
      const itemCurso = await getItems();
      this.items = itemCurso;
      
      // this.filteredItems = this.items.filter( function (item) {
      //    return item.nome == 'ADM'
      // });

      // console.log(this.filteredItems);

      console.log(this.items);
      
    } catch (error) {
      console.error("Erro ao carregar itens:", error);
    }
  },
};
</script>
