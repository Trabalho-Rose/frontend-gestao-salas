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

        <template v-slot:item="{ item }" >
          <tr >
            <td>{{ item.id }}</td>
            <td>{{ item.nome }}</td>
            <td
              class="d-flex justify-space-between align-center"
            > {{ item.descricao }}
              <v-btn
                @click="updateCurso(item)"
                icon="mdi-pencil"
                color="primary"
                size="30"
              ></v-btn>
              <v-btn
                @click="openDeleteDialog(item.id)"
                icon="mdi-delete"
                color="red-lighten-1"
                size="30"
              ></v-btn>
            </td>
          </tr>
        </template>
      </v-data-table>

      <!-- adicionar novo curso -->
      <div>
        <v-btn
          @click="handleAddCurso"
          width="200px"
          height="100px"
          color="blue"
        >
          Adicionar
        </v-btn>
      </div>
      <v-dialog max-width="500px" v-model="buttonAddDialog">
        <v-card>
          <v-card-title>Adicionar novo curso</v-card-title>
          <v-card-text>
            <v-text-field
              id="name"
              v-model="course.nome"
              label="Nome"
              clearable
            ></v-text-field>
            <v-text-field
              id="description"
              v-model="course.descricao"
              label="Descrição"
              clearable
            >
            </v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-btn color="yellow-darken-2" @click="buttonAddDialog = false">Cancelar</v-btn>
            <v-btn color="primary" @click="saveNewCourse">Salvar</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <!-- update Curso -->
       <v-dialog max-width="500px" v-model="dialogUpdate">
        <v-card>
          <v-card-title>Editar curso</v-card-title>
          <v-card-text>
            <v-text-field
              v-model="course.nome"
              label="Nome"
              clearable
            ></v-text-field>
            <v-text-field
              v-model="course.descricao"
              label="Descrição"
              clearable
            >
            </v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-btn color="yellow-darken-2" @click="dialogUpdate = false">Cancelar</v-btn>
            <v-btn color="primary" @click="update()">Salvar alteração</v-btn>
          </v-card-actions>
        </v-card>
       </v-dialog>

       <!-- delete curso -->
      <v-dialog max-width="550px" v-model="deleteDialog">
        <v-card>
          <v-card-title>Apagar um curso permanentemente?</v-card-title>
          <v-card-actions>
            <v-btn color="yellow-darken-2" @click="deleteDialog = false">Cancelar</v-btn>
            <v-btn color="red" @click="deleteOne()">Apagar</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

    </div>
  </template>

<script>
    //import  tab from '../components/tab.vue'
    import { listCurso, addCurso, updateCurso, deleteCurso } from '../services/curso/serviceCurso';
    import { header } from '../services/curso/const/headers';

    export default {
        data () {
            return {
                header,
                items: [],
                search: '',
                course: {},
                buttonAddDialog: false,
                dialogUpdate: false,
                deleteDialog: false,
                saveIdCurso: null
            }
        },
        async mounted() {
            this.items = await listCurso();   
        },

        methods: {
          handleAddCurso(){
            this.course = {};
            this.buttonAddDialog = true
          },

          async saveNewCourse () {
            await addCurso (this.course);
            this.buttonAddDialog = false;
            this.items = await listCurso();
          },

          updateCurso(item){
            this.course = { ...item };
            this.dialogUpdate = true;
          },

          async update(){
            await updateCurso(this.course);
            this.dialogUpdate = false;
            this.items = await listCurso();
          },

          openDeleteDialog(courseId){
            this.saveIdCurso = courseId;
            this.deleteDialog = true;
          },

          async deleteOne (id) {
            this.deleteDialog = false;
            await deleteCurso(this.saveIdCurso);
            this.items = await listCurso();
          },
        }
    }
</script>

<style>
  .v-table {
    border-radius: inherit;
    line-height: 1.5;
    max-width: 800px;
    display: inline-block;
    flex-direction: column;
}
</style>