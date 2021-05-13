<template>
  <div>
    <button v-on:click="updateTitle()">Click Me</button>
  </div>
</template>

<script>
export default {
  name: "Child",
  methods: {
    updateTitle() {
      this.$emit("changeTitle");
    },
    data() {
      return {
        
      };
    },
  },
};
</script>

<style>
</style>