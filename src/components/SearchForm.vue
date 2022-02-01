<template>
  <div class="search">
    <input
      v-model="$store.state.query"
      @keyup.enter="fetchWeather"
      type="text"
      placeholder="search..."
      class="search-input"
    />
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      query: "london",
    };
  },
  methods: {
    ...mapActions(["fetchWeather"]),
  },
};
</script>

<style>
.search-input {
  width: 50%;
  height: 50px;
  border-radius: 0 16px 0 16px;
  padding-left: 10px;
  font-size: 1.8vw;
}
</style>