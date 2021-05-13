<template>
  <div>
    Style Example
    <h1 v-bind:style="{ color: inputColor }">Style Binding</h1>
    <input type="color" id="groupId" v-model="inputColor" />
    <h1 v-bind:class="{ display: isVisible ? true : false }">
      Style object binding
    </h1>
    <button v-on:click="clickMe(isVisible)">Click</button>

     <h1 v-bind:class="[aclass]">Style Binding</h1>
  </div>
</template>

<script>
export default {
  name: "ClassAndStyleBindingExample",
  methods: {
    clickMe(isVisibleCurrentData) {
       isVisibleCurrentData? this.isVisible=false:this.isVisible=true
    },
  },
  data() {
    return {
      clr: "red",
      inputColor: "yellow",
      isVisible: true,
      aclass:'arrayClass',
    };
  },
};
</script>

<style scoped>
.display { 
  color: green;
}
.arrayClass {
    color: cyan;
}
</style>