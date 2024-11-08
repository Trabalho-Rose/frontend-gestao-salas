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
      <template v-slot:item="{ item }">
        <tr>
          <td>{{ item.nome }}</td>
          <td class="d-flex justify-space-between align-center">
            {{ item.cargaHoraria }}
            <v-btn
              @click="updateDisciplina(item)"
              icon="mdi-pencil"
              color="primary"
              size="30"
            ></v-btn>
            <v-btn
              @click="OpendeleteDialog(item.id)"
              icon="mdi-delete"
              color="red-lighten-1"
              size="30"
            ></v-btn>
          </td>
        </tr>
      </template>
    </v-data-table>

    <v-dialog max-width="500px" v-model="dialog">
      <template v-slot:activator="{ props: activatorProps }">
        <v-btn
          v-bind="activatorProps"
          width="200px"
          height="100px"
          color="blue"
        >
          Adicionar
        </v-btn>
      </template>
      <v-card>
        <v-card-title>Adicionar nova disciplina</v-card-title>
        <v-card-text>
          <v-text-field id="name" label="Nome" clearable></v-text-field>
          <v-text-field
            id="workload"
            label="Carga horária"
            clearable
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn color="yellow-darken-2" @click="dialog = false"
            >Cancelar</v-btn
          >
          <v-btn color="primary" @click="saveNewDisciplina">Salvar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- atualizar -->
    <v-dialog max-width="500" v-model="updateDialog">
      <v-card>
        <v-card-title>Editar disciplina</v-card-title>
        <v-card-text>
          <v-text-field
            v-model="disciplina.nome"
            label="Nome"
            clearable
          ></v-text-field>
          <v-text-field
            v-model="disciplina.cargaHoraria"
            label="Carga horária"
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
        <v-card-title>Apagar disciplina permanentemente?</v-card-title>
        <v-card-actions>
          <v-btn color="yellow-darken-2" @click="deleteDialog = false">Cancelar</v-btn>
          <v-btn color="red" @click="deleteOne()">Apagar</v-btn>
        </v-card-actions>
      </v-card>
     </v-dialog>
  </div>
</template>

<script>
import {
  listDisciplina,
  addDisciplina,
  updateDisciplina,
  deleteDisciplina
} from "../../services/disciplina/serviceDisciplina";
import { header } from "../../services/disciplina/const/headers";

export default {
  data() {
    return {
      items: [],
      header,
      search: "",
      disciplina: {},
      dialog: false,
      updateDialog: false,
      deleteDialog: false,
      saveIdDisciplina: null

    };
  },

  async mounted() {
    this.items = await listDisciplina();
  },

  methods: {
    async saveNewDisciplina() {
      this.disciplina = {};
      await addDisciplina(this.disciplina);
      this.dialog = false;
      this.items = await listDisciplina();
    },

    updateDisciplina(item){
      this.disciplina = { ...item };
      this.updateDialog = true;
    },

    async update(){
      await updateDisciplina(this.disciplina);
      this.updateDialog = false;
      this.items = await listDisciplina();
    },

    OpendeleteDialog(disciplinaId){
      this.saveIdDisciplina = disciplinaId;
      this.deleteDialog = true
    },

    async deleteOne (id) {
      this.deleteDialog = false;
      await deleteDisciplina(this.saveIdDisciplina);
      this.items = await listDisciplina();
    },
  },
};
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
