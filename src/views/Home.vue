<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <sample msg="value passing from home to Sample using Props"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Sample from '../components/Sample.vue';

export default {
  name: "Home",
  components: {
    HelloWorld,
    Sample
  },
};
</script>
