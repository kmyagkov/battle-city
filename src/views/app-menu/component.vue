<template>
  <div class="app-menu">
    app-menu
  </div>
  <router-link to="/game">Game</router-link>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import HelloWorld from '@/components/high-score/component.vue' // @ is an alias to /src

@Options({
  components: {
    HelloWorld
  }
})
export default class AppMenu extends Vue {}
</script>
