<template>
  <div>
      <h1>This is a Parent component   {{title}}</h1>
      <child-component v-on:changeTitle="updateTitle($event)" />
       <child-component>
         Slot example
       </child-component>
  </div>
</template>
<script>
import ChildComponent from "./ChildComponent.vue";
export default {
  name: "ParentComponent",
  components: { 
      ChildComponent
       },
  methods: {
    updateTitle(title) {
        this.title=title;
    },
  },
  data() {
    return {
        title:'Test'
    };
  },
};
</script>

<style>
</style>