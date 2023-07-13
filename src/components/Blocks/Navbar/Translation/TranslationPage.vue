<template>
  <div
      class="logoWidget draggable"
      :style="{ transform: `translate(${position.x}px, ${position.y}px)` }"
      @mousedown="startDrag"

  >
    <div class="dropdownLang" @click="toggleDropdown">
      {{ lang }}
      <ul v-if="dropdownOpen">
        <li @click="changeLang('fr')">Français</li>
        <li @click="changeLang('en')">English</li>
        <li @click="changeLang('es')">Español</li>
      </ul>
    </div>
  </div>
</template>



<script>
import TranslateWidget from '../../Js/MoovableWidget.vue'

export default {
  mixins: [TranslateWidget],
  data(){
    return {
      lang: "FR",
      dropdownOpen: false,

    }
  },
  methods: {
    changeLang(selectedLang){
      this.lang = selectedLang;
    },
    toggleDropdown(){
      this.dropdownOpen = !this.dropdownOpen;
    }
  }
}
</script>
