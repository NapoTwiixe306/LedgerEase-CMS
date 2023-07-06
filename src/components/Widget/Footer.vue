<template>
  <footer>
    <p class="logo">{{translation.footer.footer_text}}</p>
</footer>
</template>


<script>
import translation from '@/TextVariables.json';
export default {
  data(){
    return{
      translation: translation
    }
  },
  name: 'AppFooter'
}
</script>

