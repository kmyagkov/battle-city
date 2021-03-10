<template>
  <div>game</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/high-score/component.vue' // @ is an alias to /src

@Options({
  components: {
    HelloWorld
  }
})
export default class GameArea extends Vue {}
</script>
