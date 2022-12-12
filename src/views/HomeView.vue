<template>
  <v-container style="padding: 0px" class="text_center">
    <v-layout>
      <v-img src="../assets/dog1.jpg">
        <h1 class="color-white">Welcome to DOGFLIX</h1>
        <p class="color-white">
          국내 여러가지 강이지 동영상을 보여주는 DOGFLIX!
        </p>
      </v-img>
    </v-layout>

    <v-layout pt-2>
      <v-carousel>
        <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="item.src"
          class="text_down"
          
        >
          <h1 class="stroke color-white text_down">
            {{ item.titleName }}
          </h1>
        </v-carousel-item>
      </v-carousel>
    </v-layout>

    <v-layout>
      
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      title: "DOGFLIX",
    };
  },
  title() {
    return "DOGFLIX";
  },
  serverPrefetch() {
    return new Promise((resolve, reject) => {
      resolve();
    });
  },
  computed: {
    items() {
      return this.$store.state.banner;
    },
  },
};
</script>

<style>
.text_center {
  text-align: center;
}
.color-white {
  color: white;
}
.stroke {
  -webkit-text-stroke: 2px black;
}
.text_down {
  vertical-align: bottom;
}
</style>
