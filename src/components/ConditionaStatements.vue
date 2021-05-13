<template>
  <div>
    <h1 v-if="isVisible">If example true</h1>
    <h1 v-else>If example false</h1>
    <button v-on:click="show()" v-on:dblclick="hide()">Show</button>
    <div v-for="item in students" :key="item.name">
      <p>Name {{ item.name }}</p>
      <p>Mob{{ item.mob }}</p>
      <br />
      <br />
    </div>
    <br />
    <div v-for="(val, index) in students" :key="val.name">
      {{ index + 1 }}
      <p>Name {{ val.name }}</p>
      <p>Mobile {{ val.mob }}</p>
      <br />
      <br />
    </div>
  </div>
</template>

<script>
export default {
  name: "ConditionaStatements",
  data() {
    return {
      isVisible: false,
      students: [
        { name: "Vishnu", mob: "773617715" },
        { name: "Vishnukumar ", mob: "773617715" },
        { name: "Vishnukumar ps", mob: "773617715" },
      ],
    };
  },
  methods: {
    show() {
      this.isVisible = true;
    },
    hide() {
      this.isVisible = false;
    },
  },
};
</script>

<style scoped>
</style>