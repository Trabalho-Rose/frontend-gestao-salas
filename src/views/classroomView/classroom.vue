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
          <td>{{ item.id }}</td>
          <td ><v-btn>{{ item.nome }}</v-btn></td>
          <td>{{ item.capacidade }}</td>
          <td>{{ item.situacaoSala }}</td>
        </tr>
      </template>
    </v-data-table>

    
    
  </div>

</template>


<script>
import listSalas from '../../services/sala/serviceSala';
import { header } from '../../services/sala/const/headers';
import calendarTemplate from './calendar.vue'
import { ref, reactive } from 'vue';

// const calendar = reactive({});


export default {
  data () {
    return {
      items: [],
      header,
      search: '',
    }
  },
  async mounted(){
    this.items = await listSalas();
  },
}

// const Opencalendar = () => {
//   calendar = calendarTemplate;
  
//   console.log("calendar");
  
  
// }


</script>





      
   
  