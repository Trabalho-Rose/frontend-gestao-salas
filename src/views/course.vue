<template>
    <div>
      <v-snackbar
        v-model="showSnackbar"
        :color="snackBarColor"
      >
        {{ text }}
      </v-snackbar>

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
              color="grey-lighten-4"
            >
            <v-toolbar-title>Meus cursos</v-toolbar-title>
            <v-divider
              class="mx-4"
              inset
              vertical
            ></v-divider>
            <v-spacer></v-spacer>
            <v-btn
              @click="handleAddCurso"
              width="200px"
              height="100px"
              color="primary"
            >
              Adicionar
            </v-btn>
          </v-toolbar>
        </template>

        <template v-slot:item.actions=" { item } ">
          <v-icon
            size="small"
            color="primary"
            @click="updateCurso(item)"
          >
            mdi-pencil
          </v-icon>
          <v-icon
            size="small"
            color="red-lighten-1"
            @click="openDeleteDialog(item.id)"
          >
            mdi-delete
          </v-icon>
        </template>
      </v-data-table>

      <!-- adicionar novo curso -->
      
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

<!-- <script setup>
import { useSnackbar } from "vue3-snackbar";
const snackbar = useSnackbar();
snackbar.add({
    type: 'success',
    text: 'This is a snackbar message'
})
</script> -->

<script>
    //import  tab from '../components/tab.vue'
    import { listCurso, getItems, addCurso, updateCurso, deleteCurso, apiState } from '../services/curso/serviceCurso';
    import { header } from '../services/curso/const/headers';
    import { EventBus, ACTIONS } from '../global/eventBus'
    import { showSnackbar } from '../global/index'


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
                saveIdCurso: null,
                showSnackbar: false,
                text: '',
                snackBarColor: 'success'
            }
        },
        async mounted() {
          const cursos = await listCurso();
          this.items = cursos; 
        },

        methods: {
          handleAddCurso(){
            this.course = {};
            this.buttonAddDialog = true
          },

          async saveNewCourse () {
            try {
              await addCurso (this.course);
              if (apiState.success === true){
                this.snackBarColor = 'success';
                this.text = 'Curso adicionado com sucesso!';
                this.showSnackbar = true;
                this.items = await getItems();
                setTimeout(() => {
                  this.showSnackbar = false
                }, 2000);
              } else {
                  this.snackBarColor = 'error';
                  this.text = 'Erro ao adicionar novo curso.';
                  this.showSnackbar = true;
                  setTimeout(() => {
                    this.showSnackbar = false
                  }, 4000);
              }
            } catch (error) {
              console.log(error);
            } finally {
              this.buttonAddDialog = false;
              this.items = await getItems();
            }
          },

          updateCurso(item){
            this.course = { ...item };
            this.dialogUpdate = true;
          },

          async update(){
            try {
              await updateCurso(this.course);
              if (apiState.success === true) {
                this.snackBarColor = 'success';
                this.text = 'Curso atualizado com sucesso!';
                this.showSnackbar = true;
                this.items = await listCurso();
                setTimeout(() => {
                  this.showSnackbar = false
                }, 2000);
              } else {
                this.snackBarColor = 'error';
                this.text = `Erro ao atualizar item`;
                this.showSnackbar = true;
                setTimeout(() => {
                  this.showSnackbar = false
                }, 4000);
              }
            } catch (error) {
              console.log(error);
            } finally {
              this.dialogUpdate = false;
              this.items = await getItems();
            }
          },

          openDeleteDialog(courseId){
            this.saveIdCurso = courseId;
            this.deleteDialog = true;
          },

          async deleteOne () {
            try {
              this.deleteDialog = false;
              await deleteCurso(this.saveIdCurso);
              if (apiState.success === true) {
                this.snackBarColor = 'success';
                this.text = 'Curso removido com sucesso!';
                this.showSnackbar = true;
                this.items = await getItems();
                setTimeout(() => {
                  this.showSnackbar = false
                }, 2000);
              } else {
                this.snackBarColor = 'error';
                this.text = `Erro ao remover curso`;
                this.showSnackbar = true;
                setTimeout(() => {
                  this.showSnackbar = false
                }, 4000);
              }
            } catch (error) {
              console.log(error);
            } finally {
              this.items = await getItems();
            }
          },

        //   openSnackbar() {
        //     this.text = 'Some message';
        //     this.showSnackbar = true;

        //     setTimeout(() => {
        //       this.showSnackbar = false
        //     }, 4000);
        // },
      }
    }
</script>

<!-- <style>
  .v-table {
    border-radius: inherit;
    line-height: 1.5;
    max-width: 800px;
    display: inline-block;
    flex-direction: column;
}
</style> -->

<style>

  a, button{
    color: inherit !important;
  }

</style>