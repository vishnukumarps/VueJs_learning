<template>
  <div>
    <h1>Watcher Example</h1>
    {{ count }}
    <button v-on:click="count = count + 1">+</button>
    <button v-on:click="count = count - 1">-</button>
  </div>
</template>

<script>
export default {
  name: "WatcherExample",
  watch: {
    count(val, prev) {
      if (val == 10) {
        alert(prev);
      }
     // alert("ha" + val);
    },
  },
  data() {
    return {
      count: 0,
    };
  },
};
</script>

<style>
</style>