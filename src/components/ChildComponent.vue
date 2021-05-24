<template>
  <div>
    <button v-on:click="updateTitle()">Click Me</button>
    {{ name }}
    <div v-for="skill in skillsArray" :key="skill.name">{{ skill.name }}</div>
    <br />
    <br />
    <div>
      <slot name="line1"></slot>
      <slot name="line1"></slot>
       <slot name="line3"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Child",
  props: ["name", "skillsArray"],
  methods: {
    updateTitle() {
      this.$emit("changeTitle");
    },
    data() {
      return {};
    },
  },
};
</script>
<style>
</style>