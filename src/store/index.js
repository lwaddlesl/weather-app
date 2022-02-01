import { createStore } from 'vuex'

// Create a new store instance.
export const store = createStore({
    state() {
        return {
            api_key: "8a4cd1185eea05a4dd93ea151f2ab97f",
            url_base: "https://api.openweathermap.org/data/2.5",
            query: "",
            weather: {},
        }
    },
    actions: {
        async fetchWeather({ state }) {
            const response = await fetch(
                `${state.url_base}/weather?q=${state.query}&units=metric&appid=${state.api_key}`
            );
            const data = await response.json();
            state.weather = data;
        },
    },
    mutations: {

    }
})

