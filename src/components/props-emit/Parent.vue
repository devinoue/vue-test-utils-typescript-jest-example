<template>
  <div><Child /></div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Child from './Child.vue'

@Component({
  components: {
    Child,
  },
})
export default class Parent extends Vue {}
</script>

<style scoped></style>
