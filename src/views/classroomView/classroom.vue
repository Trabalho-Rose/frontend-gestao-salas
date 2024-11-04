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
    </v-data-table>
  </div>
</template>


<script>
import listSalas from '../../services/sala/serviceSala';
import { header } from '../../services/sala/const/headers';


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

</script>





      
   
  