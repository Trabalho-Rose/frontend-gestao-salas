<template>
  <div>
    <v-data-table
      class="data-table-header ma-5 border-md rounded-lg "
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
          color="grey-lighten-4"
        >
          <v-toolbar-title>Salas Cesurg</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-btn
            @click="handleAddSala"
            width="200px"
            height="100px"
            color="primary"
          >
            Adicionar
          </v-btn>
        </v-toolbar>
      </template>

      <template v-slot:item.actions="{ item }">
        <v-icon class="" size="small" color="primary" @click="updateSala(item)">
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
  </div>

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
      <v-card-title>Adicionar nova sala</v-card-title>
      <v-card-text>
        <v-text-field clearable label="Nome"></v-text-field>
        <v-text-field clearable label="Capacidade"></v-text-field>
        <v-text-field
          id="roomSituation"
          clearable
          label="Situação da sala"
        ></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-btn color="yellow-darken-2" @click="dialog = false">Cancelar</v-btn>
        <v-btn color="primary" @click="saveNewSala">Salvar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <!-- atualizar -->
  <v-dialog max-width="500" v-model="updateDialog">
    <v-card>
      <v-card-title>Editar sala</v-card-title>
      <v-card-text>
        <v-text-field v-model="sala.nome" label="Nome" clearable></v-text-field>
        <v-text-field
          v-model="sala.capacidade"
          label="Capacidade"
          clearable
        ></v-text-field>
        <v-text-field
          v-model="sala.situacaoSala"
          label="Situação da sala"
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

  <!-- delete -->
  <v-dialog max-width="500px" v-model="deleteDialog">
    <v-card>
      <v-card-title>Apagar sala permanentemente?</v-card-title>
      <v-card-actions>
        <v-btn color="yellow-darken-2" @click="deleteDialog = false"
          >Cancelar</v-btn
        >
        <v-btn color="red" @click="deleteOne()">Apagar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  
</template>

<script>

import {
  listSalas,
  getItemsSala,
  addSala,
  updateSala,
  deleteSala,
} from "../../services/sala/serviceSala";
import { header } from "../../services/sala/const/headers";



export default {

  data() {
    return {
      
      items: [],
      header,
      search: "",
      addDialog: false,
      sala: {},
      updateDialog: false,
      deleteDialog: false,
      saveIdSala: null,
    };
  },
  async mounted() {
    const salas = await listSalas();
    this.items = salas;
  },

  methods: {
    handleAddSala(){
      this.sala = {};
      this.addDialog = true
    },

    async saveNewSala() {
      await addSala(this.sala);
      this.addDialog = false;
      this.items = await getItemsSala();
    },

    updateSala(item) {
      this.sala = { ...item };
      this.updateDialog = true;
    },

    async update() {
      await updateSala(this.sala);
      this.updateDialog = false;
      this.items = await getItemsSala();
      
    },

    openDeleteDialog(salaId) {
      this.saveIdSala = salaId;
      this.deleteDialog = true;
    },

    async deleteOne(id) {
      this.deleteDialog = false;
      await deleteSala(this.saveIdSala);
      this.items = await getItemsSala();
    },
  },
};
</script>