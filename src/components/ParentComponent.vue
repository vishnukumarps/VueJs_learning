<template>
  <div>
    <h1>This is a Parent component {{ title }}</h1>
    <child-component name="Vishnu Kumar PS"></child-component>
    <child-component v-bind:name="title"></child-component>
    <child-component v-bind:skillsArray="skills"></child-component>
    <child-component v-on:changeTitle="updateTitle($event)" />
    <child-component>
      <h1 slot="line1">Slot example</h1>
      <h1 slot="line2">Slot example</h1>
      <img src="https://homepages.cae.wisc.edu/~ece533/images/airplane.png" slot="line3"/>
    </child-component>
  </div>
</template>
<script>
import ChildComponent from "./ChildComponent.vue";
export default {
  name: "ParentComponent",
  components: {
    ChildComponent,
  },
  methods: {
    updateTitle(title) {
      this.title = title;
    },
  },
  data() {
    return {
      title: "Test",
      skills: [
        {
          name: "Frozen Yogurt",
          required: 1,
          vMode1: "",
        },
        {
          name: "Ice cream sandwich",
          required: 3,
          vMode1: "",
        },
        {
          name: "Eclair",
          required: 1,
          vMode1: "",
        },
      ],
    };
  },
};
</script>
<style>
</style>