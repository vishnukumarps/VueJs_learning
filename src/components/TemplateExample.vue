<template>
  <div>
    <p v-html="rowHtml"></p>
    <p id="p1" v-once> {{name}}</p>
    <p>{{name}}</p>
    <p>{{isVisible ? 'yes':'no'}}</p>
    <button v-on:click="clickMe()"> clickMe</button>
    <button v-bind:disabled="isVisible">Disabled</button>
  </div>
</template>

<script>
export default {
  name: "TemplateExample",
  methods: {
    clickMe() {
      this.name="Vipin";
      this.isVisible=false;
    },
  },
  data() {
    return {
      name: 'Vishnu',
      isVisible:true,
      rowHtml:'<h1>This MSG is Rendered inside  Template using v-html</h1>'
    };
  },
};
</script>

<style scoped>

</style>