<template>
  <v-container grey mt-1 mb-1>
    d
  </v-container>
</template>

<script>



export default {
  name: "VideoMain",
  components: {
    SearchBar,
    VideoList,
    VideoListItemDetail,
  },
  data() {
    return {
      videoList: [],
      video: {},
    };
  },
  methods: {
    onKeywordEnter(videoList) {
      //console.log('부모에서찍음', videoList)
      this.videoList = videoList;
      console.log(videoList);
    },
    onSelectVideo(video) {
      this.video = video;
    },
  },
  mounted(){
    
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
