<template>
  <div><Child :msg="msg" @input-text="inputText" /></div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Child from './Child.vue'

@Component({
  components: {
    Child,
  },
})
export default class Parent extends Vue {
  msg: string = 'Ohayo'

  inputText(payload: string) {
    alert(payload)
  }
}
</script>

<style scoped></style>
