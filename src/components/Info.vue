<template>
  <main class="info">
    <div class="name">
      {{ $store.state.weather.name }}
    </div>
    <div class="temp">
      Temp: {{ Math.round($store.state.weather.main.temp) }}
    </div>
    <div class="temp">
      feels like: {{ Math.round($store.state.weather.main.feels_like) }}
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  color: black;
}
.name {
  font-size: 7vw;
}
</style>