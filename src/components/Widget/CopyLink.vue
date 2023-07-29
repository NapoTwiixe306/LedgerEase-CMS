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
            console.log("le text a bien été copier", linkText);
          })
          .catch((error) => {
            console.error('Erreur lors de la copie du lien :', error);
          });
    },
  },
};
</script>

