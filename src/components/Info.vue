<template>
  <main>
    <div class="info" v-if="$store.state.weather.main">
      <div class="name">
        {{ $store.state.weather.sys.country }},{{ $store.state.weather.name }}
      </div>

      <div class="temp">{{ Math.round($store.state.weather.main.temp) }}°C</div>
      <div class="temp">
        Feels: {{ Math.round($store.state.weather.main.feels_like) }}°C
      </div>
      <div class="state">
        {{ $store.state.weather.weather[0].main }}
      </div>
    </div>
    <div class="not-found" v-else>Not Found</div>
  </main>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  color: white;
}
.not-found {
  margin-top: 10px;
  font-size: 25px;
}
.info {
  margin-top: 10px;
}
.name {
  font-size: 7vw;
}
.temp {
  width: 50%;
  margin: 0 auto;
  font-size: 5vw;
  font-style: italic;
  background-color: rgba(255, 255, 255, 0.25);
}
.state {
  font-size: 5vw;
}
</style>