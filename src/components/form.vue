<template>
    <v-card flat class="border mb-4">
        <div class="d-flex justify-space-between">
            <v-card-tittle>
                <v-dialog>
                    <template #activator="{ props }">
                        <v-btn v-bind="props" variant="tonal" size="small">Adicionar curso</v-btn>
                    </template>
                </v-dialog>
            </v-card-tittle>
        </div>
    </v-card>
</template>

<script setup>
    import { onMounted, ref } from 'vue';
</script>