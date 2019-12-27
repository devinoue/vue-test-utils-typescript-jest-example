<template>
  <div>
    <input type="text" v-model="someText" />
    <button @click="sendData">Send data</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator'

@Component
export default class Child extends Vue {
  someText: string = ''

  @Prop({ default: '' })
  msg!: string

  @Emit('input-text')
  sendData() {
    return this.someText
  }
}
</script>

<style scoped></style>
