<template>
  <div class="linkBar">
    <p ref="link" @click="copyLink">link.chausettesDeChocolatJeSaisPasMoi.fr</p>
    <button @click="copyLink"><font-awesome-icon :icon="['fas', 'clone']"/></button>
  </div>
</template>

<script>
export default {
  name: 'AppCopylink',
  data() {
    return {
      linkText: 'link.chausettesDLedgerEase-CMSeChocolatJeSaisPasMoi.fr',
    };
  },
  methods: {
    copyLink() {
      const linkText = this.$refs.link.innerText;

      navigator.clipboard
          .writeText(linkText)
          .then(() => {
            // Copie réussie
            // Ajoutez ici les actions supplémentaires que vous souhaitez effectuer
          })
          .catch((error) => {
            console.error('Erreur lors de la copie du lien :', error);
            // Gérez l'erreur ici
          });
    },
  },
};
</script>

