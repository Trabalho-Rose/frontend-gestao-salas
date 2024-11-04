<template>
    <v-card class="ma-16 " max-width="600">
      <v-tabs
        v-model="tab"
        bg-color="#607D8B"
      >
        <v-tab value="one">Listar cursos</v-tab>
        <v-tab value="two">Adicionar curso</v-tab>
        <v-tab value="three">Remover curso</v-tab>
      </v-tabs>
  
      <v-card-text>
        <v-tabs-window v-model="tab">
          <v-tabs-window-item value="one">
            <v-card
              class="mx-auto"
              max-width="600"
            >
              
              <v-card
                class="mx-auto border-md"
                max-width="500"
                
              >
                <v-list >
                  <v-list-item 
                      v-for="curso in cursos" :key = "curso.id"
                    > 
                      <strong>ID do curso: </strong> {{curso.id}}
                      <br>
                      <strong>Nome: </strong> {{curso.nome}} 
                      <br>
                      <strong>Descrição: </strong> {{curso.descricao}}
                      <br><br>
                    </v-list-item>
                  
                </v-list>
              </v-card>
              
            </v-card>
          </v-tabs-window-item>
          <v-tabs-window-item value="two">
            <v-card flat class="border mb-4">
              <div class="d-flex justify-space-between">
                 <v-card-tittle>
                    <v-dialog width="700px">
                      <template #activator="{ props }">
                          <v-btn 
                            height="72"
                            min-width="164"
                            v-bind="props"
                            variant="tonal"
                            size="small"
                          >Adicionar curso</v-btn>
                      </template>

                      <v-card>
                        <v-card-title>Adicionar curso</v-card-title>
                          <v-card-text>
                            <v-row>
                              <v-col>
                                <v-select
                                  id="name"
                                  label="Nome"
                                  variant="outlined"
                                  :items ="['Agronomia', 'Ciências Contábeis', 'Administração', 'Desenvolvimento de Sistemas', 'Enfermagem']" 
                        
                                >
                                </v-select>
                              </v-col>

                              <v-col>
                                <v-text-field label="Descrição" variant="outlined" id="descricao"></v-text-field>
                              </v-col>

                            </v-row>

                            <v-row>
                              <v-col>
                                <v-text-field label="Outro curso? (Opcional)" >
                                    
                                </v-text-field>

                              </v-col>
                                <v-spacer></v-spacer>
                              <v-col>
                                <v-card-actions>
                                  <v-btn variat="text">Cancelar</v-btn>
                                  <v-btn @click="handleAddCurso" variat="tonal" color="success" id="buttonSave">Salvar</v-btn>
                                </v-card-actions>
                              </v-col>
                            </v-row>

                            
                          </v-card-text>
                      </v-card>

                    </v-dialog>
                  </v-card-tittle>
              </div>
            </v-card>
          </v-tabs-window-item>
            
          <v-tabs-window-item value="three">
              Qual curso deseja remover
          </v-tabs-window-item>
        </v-tabs-window>
      </v-card-text>
    </v-card>
  </template>
  
  <script >
import { cursos , addCurso} from '../services/fetchApi'

     export default {
     
       data: () => ({
         tab: "one",
         cursos: []
       }),

       mounted(){
        this.cursos = cursos;
       },

       methods: {
          handleAddCurso(){
            addCurso();

            
          },

          
       }
     }
  </script>