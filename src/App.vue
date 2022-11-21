<template>
  <v-app>
    <v-app-bar app color="primary" dark hide-on-scroll>
      <site-title/>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
    <site-footer/>
    <vue-progress-bar></vue-progress-bar>
  </v-app>
</template>

<script>
import SiteFooter from './components/layout/SiteFooter.vue';
import SiteTitle from './components/layout/SiteTitle.vue';

export default {
  name: "App",
  components: {SiteTitle, SiteFooter},
  data: () => ({
    //
  }),
  serverPrefetch() {
    return new Promise((resolve, reject) => {
      resolve();
    });
  },
  beforeCreate() {
  },
  created() {
  },
  beforeMount() {
  },
  mounted() {
  },
};
</script>
