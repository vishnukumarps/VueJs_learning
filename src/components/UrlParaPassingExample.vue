<template>
  <h1>hi</h1>
</template>

<script>
export default {
  name: "UrlParaPassingExample",
  mounted() {
    console.log("ha");
    console.log(this.$route.parms.id);
  },
};
</script>

<style>
</style>