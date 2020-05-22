<template>
    <div class="ajout">
        <h1>This is an ajout page</h1>
        <etudiant-formulaire />
    </div>
</template>

<script>
// @ is an alias to /src
import EtudiantFormulaire from '@/components/etudiant-formulaire.vue';

export default {
    name: 'Home',
    components: {
        EtudiantFormulaire,
    },
};
</script>
