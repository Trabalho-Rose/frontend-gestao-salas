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
import listProfessor from '../../services/professor/serviceProfessor';
import header from '../../services/professor/const/headers';

export default {
    data () {
       return {
            header,
            items: [],
            search: ''
       }        
    },
    async mounted(){
        this.items = await listProfessor();
    }
}
</script>