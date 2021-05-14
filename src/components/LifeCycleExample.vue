<template>
  <h1>{{ name }}</h1>
</template>

<script>
export default {
  name: "LifeCycleExample",
  methods: {},
  data() {
    return {
      name: "Vishnu",
    };
  },
  beforeCreate() {
    this.name = "vk";
    console.log(this.name);
  },
  created() {
    //  this.name = "vkp";
    console.log(this.name);
  },
  beforeMount() {},
  mounted() {
    console.warn("mount", this.$el);
  },
  beforeDestroy() {},
  destroyed() {},
};
</script>

<style>
</style>