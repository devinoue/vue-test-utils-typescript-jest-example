<template>
  <div>
    <div v-show="menuOpen" class="open">About...</div>
    <button @click="toggleMenu">Open</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Simple extends Vue {
  menuOpen: boolean = false
  toggleMenu() {
    this.menuOpen = !this.menuOpen
  }
}
</script>

<style scoped></style>
