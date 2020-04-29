<template>
  <div>
    <input type="text" v-model="user">
    <button @click="onclick">route</button>
  </div>
</template>

<script>
// import VueRouter from 'vue-router';
export default {
  data() {
    return {
      user: ""
    };
  },
  methods: {
    onclick() {
      this.$router.push("/user/" + this.user);
    }
  }
};
</script>

<style>
</style>
