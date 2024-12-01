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
          <v-btn color="grey" @click="limparSelecoes">Limpar</v-btn>
          <v-btn color="primary" @click="saveAllItems">Salvar</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
    <v-col>
        <div>
          <v-data-table
            class="data-table-header mt-10"
            max-width="500px"
            dense
            height="76vh"
            fixed-header
            :headers="header"
            :items="allItems"
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
              <v-toolbar
                flat
                color="grey-lighten-4"
              >
                <v-toolbar-title>Lista Salas</v-toolbar-title>
                <v-divider class="mx-4" inset vertical></v-divider>
                <v-spacer></v-spacer>
                <v-btn
                >
                  excel
                </v-btn>
                <v-icon
                  color="red"
                  @click="handleDeleteAllDialog"
                >mdi-delete</v-icon>
              </v-toolbar>
            </template>

            <template v-slot:item.actions="{ item }">
              <!-- <v-icon class="" size="small" color="primary" @click="updateSorteio(item)">
                mdi-pencil
              </v-icon> -->
              <v-icon
                color="red-lighten-1"
                size="small"
                @click="openDeleteDialog(item.id)"
              >
                mdi-delete
              </v-icon>
            </template>
          </v-data-table>

          <!-- <v-dialog max-width="500px" v-model="updateDialog">
            <v-card>
              <v-card-title>Editar item</v-card-title>
              <v-card-text>
                <v-text-field
                  label="Curso"
                >

                </v-text-field>
                <v-text-field
                  label="Professor"
                >

                </v-text-field>
                <v-text-field
                  label="Disciplina"
                >

                </v-text-field>
                <v-text-field
                  label="Sala"
                >

                </v-text-field>
                <v-text-field
                  label="Turma"
                >

                </v-text-field>
              </v-card-text>
              <v-card-actions>
                <v-btn color="grey-darker-2" @click="updateDialog = false"
                  >Cancelar</v-btn
                >
                <v-btn color="primary" @click="update()">Salvar alteração</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog> -->

          <!-- delete -->
          <v-dialog max-width="700px" v-model="deleteDialog">
            <v-card>
              <v-card-title>Apagar item permanentemente?</v-card-title>
              <v-card-actions>
                <v-btn color="grey-darken-2" @click="deleteDialog = false"
                  >Cancelar</v-btn
                >
                <v-btn color="red" @click="deleteOne()">Apagar</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>

          <!-- delete all -->
          <v-dialog max-width="700px" v-model="deleteAllDialog">
            <v-card>
              <v-card-title>Ao prosseguir você excluirá todos os itens da tabela</v-card-title>
              <v-card-text>Deseja prosseguir?</v-card-text>
              <v-card-actions>
                <v-btn color="grey-darken-2" @click="deleteAllDialog = false"
                  >Cancelar</v-btn
                >
                <v-btn color="red" @click="deleteAll()">Apagar todos</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>

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
import { getItemsSorteio, addSorteio, updateSorteio, deleteSorteio, deleteAllSorteio } from '../../services/relatorio/relatorio'
 
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
      allItems: [],
      currentSelection: {},
      nextId: 1,
      //updateDialog: false,
      //sort: {}
      deleteDialog: false,
      saveIdToDelete: null,
      deleteAllDialog: false,
    };
  },

  async mounted() {
    try {
      const saveAllItems = await getItemsSorteio();
      this.allItems = saveAllItems;
      
      const itemCurso = await getItems();
      this.itemsCurso = itemCurso;
      
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
    };
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
    async saveAllItems () {
      if(Object.keys(this.currentSelection).length > 0){
        const newChoices = {
          id: this.nextId++,
          ...this.currentSelection
        };
        await addSorteio(newChoices);
        this.allItems = await getItemsSorteio();

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
    },

    // updateSorteio(item){
    //   this.currentSelection = { ...item }
    //   this.updateDialog = true;
    // },

    // async update() {
    //   await updateSorteio(this.sort);
    //   this.updateDialog = false;
    //   this.allItems = await getItemsSorteio();
    // },
    
    openDeleteDialog (id) {
      this.saveIdToDelete = id;
      this.deleteDialog = true
    },

    async deleteOne() {
      try{
        this.deleteDialog = false;
        await deleteSorteio(this.saveIdToDelete);
        this.allItems = await getItemsSorteio();
      } catch (error) {
        console.log('Erro ao deletar item: ', error); 
      }
    },

    handleDeleteAllDialog () {
      this.deleteAllDialog = true;
    },

    async deleteAll () {
      try{
        this.deleteAllDialog = false;
        await deleteAllSorteio();
      } catch (error) {
        console.log('Erro ao excluir todos registros: ', error);
        
      }
    }
  }
};
</script>
