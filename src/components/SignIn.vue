<template>
<div>
    <form @submit.prevent="submit()">
        <input type="text" v-model="form.Username">
        <br>
          <input type="text" v-model="form.Password">
          <br>
          <input type="submit">
    </form>
</div>
</template>
<script>
import {mapActions} from 'vuex'
export default {

  name: "SignIn",
  methods: {
      ...mapActions({
          signIn:'auth/signIn'
      }),
      submit(){
          this.signIn(this.form);
          console.log(this.form);
          
      }
  },
  data() {
    return {
      form: {
        Username: "",
        Password: "",
      },
    };
  },
};
</script>

<style>
</style>