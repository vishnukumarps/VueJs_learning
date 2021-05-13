<template>
  <div id="d1">
    <h1>Welcome to sample component</h1>
    <h2>{{ msg }}</h2>
    {{name}}

    <br>
    <button v-on:click="load()">click</button>
    <ConditionaStatements />
  </div>
</template>

<script>
import  ConditionaStatements from "./ConditionaStatements"
export default {
  name: "Sample",
  components:{
     ConditionaStatements
  },
  props: {
    msg: String,
  },
  data() {
    return {
        name:String
    };
  },
  mounted(){
      this.name="Value to  name variable in data is assigned from mount function  "
  },
  methods:{
      load(){
          alert('hai');
      }
  }
};
</script>

<style >
#d1{
    width: auto;
    height: 100%;
    border: solid 1px black;
}
</style>