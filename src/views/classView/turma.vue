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
import listTurmas from '../../services/turma/serviceTurma';
import { header } from '../../services/turma/const/headers';

export default {
    data () {
        return {
            header,
            items: [],
            search: ''
        }
    },

    async mounted () {
        this.items = await listTurmas();
    }
}

</script> 
