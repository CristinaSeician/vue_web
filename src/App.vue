<script>
import Home from "./Home.vue";
import Search from "./components/SearchCountry.vue"
//import Deck from "./Search.vue";
import NotFound from "./404.vue";
import { useTheme } from "vuetify";

const routes = {
  "/": Home,
  "/search": Search,
};

export default {
  setup() {
    const theme = useTheme();

    return {
      theme,
      toggleTheme: () =>
        (theme.global.name.value = theme.global.current.value.dark
          ? "light"
          : "dark"),
    };
  },
  data() {
    return {
      currentPath: window.location.hash,
    };
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || "/"] || NotFound;
    },
  },
  mounted() {
    window.addEventListener("hashchange", () => {
      this.currentPath = window.location.hash;
    });
  },
  methods: {},
};
</script>

<template>
  <main>
    <v-app>
      <v-app-bar id="app-bar" title="Countries of the World">
        <v-btn href="#/" @click=href append-icon="mdi-home">Home</v-btn>
        <v-btn href="#/search" @click=href append-icon="mdi-magnify">Search</v-btn>
        <v-btn @click="toggleTheme" icon="mdi-animation"></v-btn>
      </v-app-bar>
      <v-main>
        <component :is="currentView" />
      </v-main>
    </v-app>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}
</style>
