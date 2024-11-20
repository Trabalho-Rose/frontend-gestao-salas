<template>
  <v-row>
    <v-col>
      <v-card max-width="700px" class="ma-10">
        <v-card-title>Definição da organização de salas diárias</v-card-title>
        <v-select
          clearable
          label="Cursos"
          :items="items"
          item-value="nome"
          item-title="nome"
          v-model="selectedCourse"
          multiple
        ></v-select>
        <v-select
          clearable
          label="Disciplinas"
          :items="itemsDisciplina"
          item-value="nome"
          item-title="nome"
          v-model="selectedCourse"
          multiple
        ></v-select>
        <v-select
          clearable
          label="Professores"
          :items="itemsProfessor"
          item-value="nome"
          item-title="nome"
          
          multiple
        ></v-select>
        <v-select
          clearable
          label="Salas"
          :items="itemsSala"
          item-value="nome"
          item-title="nome"
          
          multiple
        ></v-select>
        <v-select
          clearable
          label="Turmas"
          :items="itemsTurmas"
          item-value="nome"
          item-title="nome"
          
          multiple
        ></v-select>
      </v-card>
    </v-col>
    <v-col>
          <v-card class="mx-auto ma-10" max-width="500px">
            <v-card-title class="ma-2">Lista organização das salas</v-card-title>

            <v-divider></v-divider>

            <v-infinite-scroll
              color="secondary"
              height="auto"
              mode="manual"
              @load="load"
            >
              <v-card v-for="(item, index) in selectedCourse" :key="item" class="my-1">
                <div
                  :class="['pa-2', index % 2 === 0 ? 'bg-grey-lighten-2' : '']"
                >
                  {{ item }}
                </div>
              </v-card>
            </v-infinite-scroll>
          </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { getItems } from "../../services/curso/serviceCurso";
import { getItemsDisciplina } from '../../services/disciplina/serviceDisciplina';
import { getItemsProfessor } from '../../services/professor/serviceProfessor';
import { getItemsSala } from '../../services/sala/serviceSala';
import { getItemsTurma } from '../../services/turma/serviceTurma';

export default {
  data() {
    return {
      items: [],
      itemsDisciplina: [],
      itemsProfessor: [],
      itemsSala: [],
      itemsTurmas: [],
      filteredItems: [],
      selectedCourse: [],
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

      const itemDisciplina = await getItemsDisciplina();
      this.itemsDisciplina = itemDisciplina;

      const itemProfessor = await getItemsProfessor();
      this.itemsProfessor = itemProfessor;

      const itemSala = await getItemsSala();
      this.itemsSala = itemSala;

      const itemTurma = await getItemsTurma();
      this.itemsTurmas = itemTurma;
      
    } catch (error) {
      console.error("Erro ao carregar itens:", error);
    }
  },

  methods: {
      async load(){
         // const selectedOnes = await this.selectedCourse;
         // this.items.push(...selectedOnes);

         if (this.selectedCourse.length) {
            //const newItems = this.selectedCourse;
            this.items.push(...newItems);
         }
      },
  },
};
</script>
