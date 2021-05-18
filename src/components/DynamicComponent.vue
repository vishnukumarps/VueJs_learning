<template>
  <div>
    <component v-bind:is="comp"></component>
    <br>
    <button v-on:click="updateComponent()">OnClick</button>
  </div>
</template>

<script>
import HelloWorld from "./HelloWorld.vue";
import Sample from "./Sample.vue";
export default {
  comments: {
      "hello":HelloWorld,
      "sample":Sample
  },
  methods:{
      updateComponent(){
          this.comp="sample";
      }
  },
  name: "DynamicComponent",
  data() {
    return {
      comp: "sample",
    };
  },
};
</script>

<style>
</style>