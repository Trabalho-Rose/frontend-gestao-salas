<template>
  <div>
    <v-data-table
      class="data-table-header"
      dense
      height="76vh"
      fixed-header
      :headers="header"
      :items="items"
      :search="search"
      item-value="id"
    >
      <template v-slot:top>
        <v-toolbar
            flat
            color="cyan-lighten-5"
            >
          <v-toolbar-title>Turmas Cesurg</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-btn
            @click="handleAddTurma"
            width="200px"
            height="100px"
            color="primary"
          >
            Adicionar
          </v-btn>
        </v-toolbar>
      </template>

      <template v-slot:item.actions="{ item }">
        <v-icon size="small" color="primary" @click="updateTurma(item)">
          mdi-pencil
        </v-icon>
        <v-icon
          color="red-lighten-1"
          size="small"
          @click="openDeleteDialog(item.id)"
        >
          mdi-delete
        </v-icon>
      </template>
    </v-data-table>

    <v-dialog max-width="500px" v-model="addDialog">
      <!-- <template v-slot:activator="{ props: activatorProps }">
        <v-btn
          v-bind="activatorProps"
          width="200px"
          height="100px"
          color="primary"
          >Adicionar</v-btn
        >
      </template> -->

      <v-card>
        <v-card-title>Adicionar nova turma</v-card-title>
        <v-card-text>
          <v-text-field id="name" label="Nome" clearable></v-text-field>
          <v-text-field
            id="studentsNumber"
            label="Quantidade de estudantes"
            clearable
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn color="yellow-darken-2" @click="addDialog = false"
            >Cancelar</v-btn
          >
          <v-btn color="primary" @click="saveNewTurma">Salvar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog max-width="500px" v-model="updateDialog">
      <v-card>
        <v-card-title>Editar turma</v-card-title>
        <v-card-text>
          <v-text-field
            label="Nome"
            v-model="turma.nome"
            clearable
          ></v-text-field>
          <v-text-field
            label="Quantidade de alunos"
            v-model="turma.qtdAlunos"
            clearable
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn color="yellow-darken-2" @click="updateDialog = false"
            >Cancelar</v-btn
          >
          <v-btn color="primary" @click="update()">Salvar alteração</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog max-width="500px" v-model="deleteDialog">
      <v-card>
        <v-card-title>Apagar turma permanentemente?</v-card-title>
        <v-card-actions>
          <v-btn color="yellow-darken-2" @click="deleteDialog = false"
            >Cancelar</v-btn
          >
          <v-btn color="red" @click="deleteOne()">Apagar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import {
  listTurmas,
  addTurma,
  updateTurma,
  deleteTurma,
} from "../../services/turma/serviceTurma";
import { header } from "../../services/turma/const/headers";

export default {
  data() {
    return {
      header,
      items: [],
      search: "",
      addDialog: false,
      turma: {},
      updateDialog: false,
      deleteDialog: false,
      saveIdTurma: null,
    };
  },

  async mounted() {
    this.items = await listTurmas();
  },

  methods: {
    handleAddTurma() {
      this.turma = {};
      this.addDialog = true;
    },

    async saveNewTurma() {
      //this.turma = {};
      await addTurma(this.turma);
      this.addDialog = false;
      this.items = await listTurmas();
    },

    updateTurma(item) {
      this.turma = { ...item };
      this.updateDialog = true;
    },

    async update() {
      await updateTurma(this.turma);
      this.updateDialog = false;
      this.items = await listTurmas();
    },

    openDeleteDialog(turmaId) {
      this.saveIdTurma = turmaId;
      this.deleteDialog = true;
    },

    async deleteOne(id) {
      this.deleteDialog = false;
      await deleteTurma(this.saveIdTurma);
      this.items = await listTurmas();
    },
  },
};
</script>
