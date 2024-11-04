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
    //import  tab from '../components/tab.vue'
    import listCurso from '../services/curso/serviceCurso';
    import { header } from '../services/curso/const/headers';

    export default {
        data () {
            return {
                header,
                items: [],
                search: ''
            }
        },
        async mounted() {
            this.items = await listCurso();   
        }
    }
</script>