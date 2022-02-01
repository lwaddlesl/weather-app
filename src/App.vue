<template>
  <div>
    <SearchForm />
    <Info />
  </div>
</template>

<script>
import SearchForm from "./components/SearchForm.vue";
import Info from "./components/Info.vue";

export default {
  name: "App",
  components: {
    SearchForm,
    Info,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  background-color: rgb(0, 162, 255);
}
</style>
