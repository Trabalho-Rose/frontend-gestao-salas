<!-- <template>
  <h2>Docentes da faculdade Cesurg Marau</h2>
   <v-table >
    <thead>
      <tr>
        <th class="text-left">
          <strong>Nome professores:</strong>
        </th>
      </tr>
    </thead>

    <tbody>
      <td>      
        <v-card
          class="mx-auto border-md"        
        >
          <v-list >
            <v-list-item 
              v-for="teacher in teachers" :key = "teacher.id"
            > 
              <strong>ID do professor: </strong> {{teacher.id}}
              <br>
              <v-btn @click="disponibility" variant=""><strong>Nome: </strong> {{teacher.nome}}</v-btn> 
              <br>
              <strong>Descrição: </strong> {{teacher.diasTrabalhados}}
              <br><br>
            </v-list-item>
          </v-list>
        </v-card>
      </td>

      <td>

          <div>

            <v-table>
                <thead>
                    <tr >
                        <td><strong>Segunda</strong></td>
                        <td><strong>Terça</strong></td>
                        <td><strong>Quarta</strong></td>
                        <td><strong>Quinta</strong></td>
                        <td><strong>Sexta</strong></td>
                        <td><strong>Sábado</strong></td>
                        <td><strong>Domingo</strong></td>
                    </tr>
                </thead>

                  <tbody>
                          <tr>
                              <td>
                                  <v-checkbox
                                      v-model="checkbox1"
                              
                                  ></v-checkbox>
                              </td>

                              <td>
                                  <v-checkbox
                                      v-model="checkbox2"
                                  ></v-checkbox>
                              </td>

                              <td>
                                  <v-checkbox
                                      v-model="checkbox3"
                                  ></v-checkbox>
                              </td>

                              <td>
                                  <v-checkbox
                                      v-model="checkbox4"
                                  ></v-checkbox>
                              </td>

                              <td>
                                  <v-checkbox
                                      v-model="checkbox5"
                                  ></v-checkbox>
                              </td>

                              <td>
                                  <v-checkbox
                                      v-model="checkbox6"
                                  ></v-checkbox>
                              </td>

                              <td>
                                  <v-checkbox
                                      v-model="checkbox7"
                                  ></v-checkbox>
                              </td>
                          </tr>

                          <tr>
                              <td>
                                  <v-checkbox
                                      v-model="checkbox8"
                              
                                  ></v-checkbox>
                              </td>

                              <td>
                                  <v-checkbox
                                      v-model="checkbox9"
                                  ></v-checkbox>
                              </td>

                              <td>
                                  <v-checkbox
                                      v-model="checkbox10"
                                  ></v-checkbox>
                              </td>

                              <td>
                                  <v-checkbox
                                      v-model="checkbox11"
                                  ></v-checkbox>
                              </td>

                              <td>
                                  <v-checkbox
                                      v-model="checkbox12"
                                  ></v-checkbox>
                              </td>

                              <td>
                                  <v-checkbox
                                      v-model="checkbox13"
                                  ></v-checkbox>
                              </td>

                              <td>
                                  <v-checkbox
                                      v-model="checkbox14"
                                  ></v-checkbox>
                              </td>
                          </tr>

                          <tr>
                              <td>
                                  <v-checkbox
                                      v-model="checkbox15"
                              
                                  ></v-checkbox>
                              </td>

                              <td>
                                  <v-checkbox
                                      v-model="checkbox16"
                                  ></v-checkbox>
                              </td>

                              <td>
                                  <v-checkbox
                                      v-model="checkbox17"
                                  ></v-checkbox>
                              </td>

                              <td>
                                  <v-checkbox
                                      v-model="checkbox18"
                                  ></v-checkbox>
                              </td>

                              <td>
                                  <v-checkbox
                                      v-model="checkbox19"
                                  ></v-checkbox>
                              </td>

                              <td>
                                  <v-checkbox
                                      v-model="checkbox20"
                                  ></v-checkbox>
                              </td>

                              <td>
                                  <v-checkbox
                                      v-model="checkbox21"
                                  ></v-checkbox>
                              </td>
                          </tr>

                          <tr>
                              <td>
                                  <v-checkbox
                                      v-model="checkbox22"
                              
                                  ></v-checkbox>
                              </td>

                              <td>
                                  <v-checkbox
                                      v-model="checkbox23"
                                  ></v-checkbox>
                              </td>

                              <td>
                                  <v-checkbox
                                      v-model="checkbox24"
                                  ></v-checkbox>
                              </td>

                              <td>
                                  <v-checkbox
                                      v-model="checkbox25"
                                  ></v-checkbox>
                              </td>

                              <td>
                                  <v-checkbox
                                      v-model="checkbox26"
                                  ></v-checkbox>
                              </td>

                              <td>
                                  <v-checkbox
                                      v-model="checkbox27"
                                  ></v-checkbox>
                              </td>

                              <td>
                                  <v-checkbox
                                      v-model="checkbox28"
                                  ></v-checkbox>
                              </td>
                          </tr>

                          <tr>
                              <td>
                                  <v-checkbox
                                      v-model="checkbox29"
                              
                                  ></v-checkbox>
                              </td>

                              <td>
                                  <v-checkbox
                                      v-model="checkbox30"
                                  ></v-checkbox>
                              </td>

                              <td>
                                  <v-checkbox
                                      v-model="checkbox31"
                                  ></v-checkbox>
                              </td>

                              <td>
                                  <v-checkbox
                                      v-model="checkbox32"
                                  ></v-checkbox>
                              </td>

                              <td>
                                  <v-checkbox
                                      v-model="checkbox33"
                                  ></v-checkbox>
                              </td>

                              <td>
                                  <v-checkbox
                                      v-model="checkbox34"
                                  ></v-checkbox>
                              </td>

                              <td>
                                  <v-checkbox
                                      v-model="checkbox35"
                                  ></v-checkbox>
                              </td>
                          </tr>
                          <p>{{ selected }}</p>   
                  </tbody>
              </v-table>
          </div>
      </td>
    </tbody>
  </v-table> 
</template>

<script>

import { teachers, init } from '../services/fetchApi';

export default {

  data(){
    return {
      checkbox1: false,
      checkbox2: false,
      checkbox3: false,
      checkbox4: false,
      checkbox5: false,
      checkbox6: false,
      checkbox7: false,
      checkbox8: false,
      checkbox9: false,
      checkbox10: false,
      checkbox11: false,
      checkbox12: false,
      checkbox13: false,
      checkbox14: false,
      checkbox15: false,
      checkbox16: false,
      checkbox17: false,
      checkbox18: false,
      checkbox19: false,
      checkbox20: false,
      checkbox21: false,
      checkbox22: false,
      checkbox23: false,
      checkbox24: false,
      checkbox25: false,
      checkbox26: false,
      checkbox27: false,
      checkbox28: false,
      checkbox29: false,
      checkbox30: false,
      checkbox31: false,
      checkbox32: false,
      checkbox33: false,
      checkbox34: false,
      checkbox35: false

    }
  },
  
     
     data: () => ({
      
       tab: "one",
       teachers: []
     }),

     mounted(){
      init()
      .then(() => {
        this.teachers = teachers;
      })
      
     },


     methods: {
      disponibility(){
        alert('f')
      }
     }
   }
  
</script>

<style>
  a{
    text-decoration: none;
  }
  
</style>




 -->

 <template>
    <div>
        
    </div>
 </template>

<script>

</script>