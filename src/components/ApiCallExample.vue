<template>
  <div>
    <h1>Api Example11</h1>
    <form @submit="submit()">
      <input type="text" v-model="postData.name" />
      <br />
      <br />
      <input type="text" v-model="postData.age" />
      <br />
      <br />
      <input type="submit" />
    </form>
    <input id="fileUploadControl" name="fileUploadControl" type="file" />
    <button @click="launchSaveToOneDrive()">Save to OneDrive</button>
    <h2>Table2</h2>
    <table border="2" class="table">
      <tr>
        <td>ID</td>
        <td>USER ID</td>
        <td>TITLE</td>
        <td>BODY</td>
      </tr>
      <tr v-for="item in dataList" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.userId }}</td>
        <td>{{ item.title }}</td>
        <td>{{ item.body }}</td>
      </tr>
    </table>
  </div>
</template>
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@microsoft/microsoft-graph-client/lib/graph-js-sdk.js"></script>
<script type="text/javascript" src="https://secure.aadcdn.microsoftonline-p.com/lib/1.0.0/js/msal.min.js"></script>
<script>
import axios from "axios";
export default {
  //npm install axios vue-axios
  name: "ApiCallExample",
  methods: {
    submit(e) {
      console.log(this.postData);
      axios
        .post("https://jsonplaceholder.typicode.com/posts", this.postData)
        .then((resp) => {
          console.warn(resp);
        });
      e.preventDefault();
    },
    launchSaveToOneDrive() {
      alert("t");
      var odOptions = {
        clientId: "553d6b11-5aa4-477a-81d9-2b245ef45e39",
        action: "save",
        sourceInputElementId: "fileUploadControl",
        sourceUri: "",
        fileName: "file.txt",
        openInNewWindow: true,
        advanced: {},
        success: function (files) {
          /* success handler */
        },
        progress: function (percent) {
          /* progress handler */
        },
        cancel: function () {
          /* cancel handler */
        },
        error: function (error) {
          /* error handler */
        },
      };
      OneDrive.save(odOptions);
    },
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