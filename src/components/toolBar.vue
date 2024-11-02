<template>
    <v-card >
      <v-toolbar color="#EEEEEE" class="pa-2">
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
  
        <img class="img-logo-cesurg"  src="../IMGS/logo.png" alt="Imagem logo Cesurg">
        <v-toolbar-title></v-toolbar-title>
  
        <v-spacer></v-spacer>
  
        <v-btn icon="mdi-magnify"></v-btn>
  
         

          <v-menu>
            <template v-slot:activator="{ props }">
              <v-btn icon="mdi-dots-vertical" variant="text" v-bind="props"></v-btn>
            </template>

            <v-list >
              <v-list-item
                v-for="(item, i) in items"
                :key="i"
              >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

        
  
         <template v-slot:extension>
           <v-tabs
            align-tabs="center"
            class="mt-4"
          >


            <router-link to="/">
              <v-tab>Página inicial</v-tab>
            </router-link>

            
              <v-tab>

            <v-btn color="inherit">Semestre
              <template v-slot:append>
                <v-icon icon="mdi-menu-down" size="small"></v-icon>
              </template>
                  <v-menu activator="parent">
                    <v-list-item link>
                      <router-link to="">
                        <v-btn class="ma-1">Semestre 1</v-btn>
                      </router-link>
                     
                      <router-link to="">
                        <v-btn class="ma-1">Semestre 2</v-btn>
                      </router-link>
                    
                    </v-list-item>
                  </v-menu>
                </v-btn>

              </v-tab>

            
            <router-link to="/course">
              <v-tab >Cursos</v-tab>
            </router-link>

            <router-link to="/teacher">
              <v-tab >Professor</v-tab>
            </router-link>

            <router-link to="/classroom">
              <v-tab >Salas</v-tab>
            </router-link>

            <router-link to="/disciplina">
              <v-tab >Disciplinas</v-tab>
            </router-link>

            <router-link to="/room">
              <v-tab >Turmas</v-tab>
            </router-link>

          </v-tabs> 
        </template> 
      </v-toolbar>
  
       
    </v-card>
  </template>

  
  <script>
    export default {
        data: () => ({
          items: [
            { title: 'Click Me' },
            { title: 'Click Me' },
            { title: 'Click Me' },
            { title: 'Click Me 2' },
          ],
        }),
      }
  </script>
