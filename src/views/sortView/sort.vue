<template>
  <v-row>
    <v-col>
      <v-card max-width="700px" class="ma-10">
        <v-card-title>Definição da organização de salas diárias</v-card-title>
        <v-card-text>
          <v-select
          clearable
          label="Cursos"
          :items="itemsCurso"
          item-value="id"
          item-title="nome"
          v-model="selectedCourse"
          return-object
        ></v-select>
        <v-select
          clearable
          label="Disciplinas"
          :items="itemsDisciplina"
          item-value="id"
          item-title="nome"
          v-model="selectedDisciplina"
          return-object
        ></v-select>
        <v-select
          clearable
          label="Professores"
          :items="itemsProfessor"
          item-value="id"
          item-title="nome"
          v-model="selectedProfesssor"
          return-object
        ></v-select>
        <v-select
          clearable
          label="Salas"
          :items="itemsSala"
          item-value="id"
          item-title="nome"
          v-model="selectedSala"
          return-object
        ></v-select>
        <v-select
          clearable
          label="Turmas"
          :items="itemsTurmas"
          item-value="id"
          item-title="nome"
          v-model="selectedTurma"
          return-object
        ></v-select>
        </v-card-text>
        <v-spacer></v-spacer>
        <v-card-actions>
          <v-btn color="grey" @click="limparSelecoes">Cancelar</v-btn>
          <v-btn color="primary" @click="salvarSelecao">Salvar</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
    <v-col>
        <div>
          <v-data-table
            class="data-table-header"
            max-width="500px"
            dense
            height="76vh"
            fixed-header
            :headers="header"
            :items="newDiaryChoice"
            :search="search"
            item-value="id"

            
          >
          <template v-slot:item.id_curso="{ item }">
            {{ item.curso }}
          </template>

          <template v-slot:item.id_disciplina="{ item }">
            {{ item.disciplina }}
          </template>

          <template v-slot:item.id_professor="{ item }">
            {{ item.professor }}
          </template>

          <template v-slot:item.id_sala="{ item }">
            {{ item.sala }}
          </template>

          <template v-slot:item.id_turma="{ item }">
            {{ item.turma }}
          </template>

            <template v-slot:top>
              <v-toolbar flat color="secondary">
                <v-toolbar-title>Lista Salas</v-toolbar-title>
                <v-divider class="mx-4" inset vertical></v-divider>
                <v-spacer></v-spacer>
                <v-btn
                >
    
                </v-btn>
              </v-toolbar>
            </template>
          </v-data-table>
        </div>
    </v-col>
  </v-row>
</template>

<script>
import { getItems } from "../../services/curso/serviceCurso";
import { getItemsDisciplina } from "../../services/disciplina/serviceDisciplina";
import { getItemsProfessor } from "../../services/professor/serviceProfessor";
import { getItemsSala } from "../../services/sala/serviceSala";
import { getItemsTurma } from "../../services/turma/serviceTurma";

import { header } from '../../services/relatorio/const/headers'
import { getItemsSorteio } from '../../services/relatorio/relatorio'
 
export default {
  data() {
    return {
      header,
      itemsCurso: [],
      search: '',
      itemsDisciplina: [],
      itemsProfessor: [],
      itemsSala: [],
      itemsTurmas: [],
      selectedCourse: null,
      selectedDisciplina: null,
      selectedProfesssor: null,
      selectedSala: null,
      selectedTurma: null,
      newDiaryChoice: [],
      currentSelection: {},
      nextId: 1
    };
  },

  async mounted() {
    try {
      const itemCurso = await getItems();
      this.itemsCurso = itemCurso;
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

  watch: {
    selectedCourse(newValue){
      if (newValue) {
        this.currentSelection.id_curso = newValue.id;
        this.currentSelection.curso = newValue.nome;
      } else {
        delete this.currentSelection.id_curso;
        delete this.currentSelection.curso;
      }
    },
    selectedDisciplina(newValue){
      if (newValue) {
        this.currentSelection.id_disciplina = newValue.id;
        this.currentSelection.disciplina = newValue.nome;
      } else {
        delete this.currentSelection.id_disciplina;
        delete this.currentSelection.disciplina;
      }
    },
    selectedProfesssor(newValue){
      if (newValue) {
        this.currentSelection.id_professor = newValue.id;
        this.currentSelection.professor = newValue.nome;
      } else {
        delete this.currentSelection.id_professor;
        delete this.currentSelection.professor;
      }
    },
    selectedSala(newValue){
      if (newValue) {
        this.currentSelection.id_sala = newValue.id;
        this.currentSelection.sala = newValue.nome;
      } else {
        delete this.currentSelection.id_sala;
        delete this.currentSelection.nome;
      }
    },
    selectedTurma(newValue){
      if (newValue) {
        this.currentSelection.id_turma = newValue.id;
        this.currentSelection.turma = newValue.nome;
      } else {
        delete this.currentSelection.id_turma;
        delete this.currentSelection.turma;
      }
    },
  },


  methods: {
    salvarSelecao() {
      // Verifica se há alguma seleção atual
      if (Object.keys(this.currentSelection).length > 0) {
        // Adiciona um ID único para cada entrada
        const novaSelecao = {
          id: this.nextId++,
          ...this.currentSelection
        };
        
        // Adiciona a nova seleção ao array
        this.newDiaryChoice.push(novaSelecao);
        
        this.limparSelecoes();
      }
    },

    limparSelecoes() {
      this.selectedCourse = null;
      this.selectedDisciplina = null;
      this.selectedProfesssor = null;
      this.selectedSala = null;
      this.selectedTurma = null;
      this.currentSelection = {};
    }
  }
};
</script>
