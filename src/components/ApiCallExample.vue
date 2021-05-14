<template>
  <div>
    <h1>Api Example11</h1>
    <table border="2">
      <tr>
        <td>ID</td>
        <td>USER ID</td>
        <td>TITLE</td>
         <td>BODY</td>
      </tr>
       <tr v-for="item in dataList" :key="item.id">
        <td>{{item.id}}</td>
        <td>{{item.userId}}</td>
        <td>{{item.title}}</td>
        <td>{{item.body}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  //npm install axios vue-axios
  name: "ApiCallExample",
  data() {
    return {
      dataList: [],
    };
  },
  mounted() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((resp) => {
      console.warn(resp);
      this.dataList = resp.data;
    });
  },
};
</script>

<style>
</style>