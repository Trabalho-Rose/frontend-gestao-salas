<template>
    <v-skeleton-loader type="card"
        class="mx-auto"
        elevation="12"
        max-width="400"
        
    >
        
    </v-skeleton-loader>
</template>

<script>
export default {
  mounted() {
    console.log('Loader is rendering!');
  },
};
</script>