<template>
  <div id="app">
    <div id="nav">
       <router-link to="/ondrive">OnDrive</router-link> |
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/sample">Sample</router-link> |
      <router-link to="/watcher">Watcher</router-link> |
      <router-link to="/url/1">Url</router-link> |
      <router-link to="/parent">Parent child component</router-link> |
      <router-link to="/temp">Template example </router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  methods: {},
  data() {
    return {
      no1: Number,
    };
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
