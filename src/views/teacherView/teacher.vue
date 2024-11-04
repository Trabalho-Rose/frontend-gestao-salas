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
            <td ><v-btn>{{ item.nome }}</v-btn></td>
            <td
              class="d-flex justify-space-between align-center"
            > {{ item.diasTrabalhados }}
              <v-btn
                @click="updateTeacher(item)"
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

      
        <div>
          <v-btn @click="handleAddProfessor" width="200px" height=" 100px" color="blue">
            Adicionar
          </v-btn>    
        </div>
      
        <!-- add dialog -->
      <v-dialog width="500px" v-model="buttonAddDialog">
        <v-card>
          <v-card-title>Adicionar novo professor</v-card-title>
          <v-card-text>
            <v-text-field
              id="name"
              v-model="teacher.nome" label="Nome" clearable
            >
            </v-text-field>
            <v-text-field
              id="workedDays"
              v-model="teacher.diasTrabalhados" label="Dias trabalhados" clearable
            >
            </v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-btn color="yellow-darken-2" @click="buttonAddDialog = false">Cancelar</v-btn>
            <v-btn color="primary" @click="saveNewProfessor()">Salvar</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      
      <!-- update dialog -->
      <v-dialog width="500px" v-model="dialog">
        <v-card>
          <v-card-title>Editar professor</v-card-title>
          <v-card-text>
            <v-text-field
              v-model="teacher.nome" label="Nome" clearable
            >
            </v-text-field>
            <v-text-field
              v-model="teacher.diasTrabalhados" label="Dias trabalhados" clearable
            >
            </v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-btn color="yellow-darken-2" @click="dialog = false">Cancelar</v-btn>
            <v-btn color="primary" @click="update()">Salvar</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <!-- delete dialog -->
      <v-dialog max-width="550px" v-model="deleteDialog">
        <v-card>
          <v-card-title>Apagar um professor do sistema permanentemente?</v-card-title>

          <v-card-actions>
            <v-btn  @click="deleteDialog = false">Cancelar</v-btn>
            <v-btn color="red" @click="deleteOne()">Apagar</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div> 
</template>

<script>
import { listProfessor, addProfessor, updateProfessor, deleteProfessor} from '../../services/professor/serviceProfessor';
import header from '../../services/professor/const/headers';

export default {
    data () {
       return {
          header,
          items: [],
          search: '',
          dialog: false,
          deleteTeacher: false,
          buttonAddDialog: false,
          deleteDialog: false,
          teacher: {},
          saveIDTeacher: null
       }        
    },
    async mounted () {
      this.items = await listProfessor();
    },
    methods: {
      updateTeacher(item) {
        this.teacher = { ...item };
        this.dialog = true;
      },

      handleAddProfessor(){
        this.teacher = {};
        this.buttonAddDialog = true
      },

      async saveNewProfessor () {
        await addProfessor(this.teacher);
        this.buttonAddDialog = false;
        this.items = await listProfessor();
      },

      async update () {
        await updateProfessor(this.teacher);
        this.dialog = false;
        this.items = await listProfessor();
      },

      openDeleteDialog(teacherId) {
        this.saveIDTeacher = teacherId;
        this.deleteDialog = true;
      },

      async deleteOne (id) {
        this.deleteDialog = false;
        await deleteProfessor(this.saveIDTeacher);
        this.items = await listProfessor();
      }

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