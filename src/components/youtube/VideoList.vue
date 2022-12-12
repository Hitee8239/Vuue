<template>
    <div v-if="videoList.length">
        <VideoListItem
          v-for="video in videoList"
          :video="video"
          :key="video.id.videoId"
          @on-select-video="onSelectVideo"
        />
    </div>
  </template>
  
  <script>
  import VideoListItem from './VideoListItem.vue'
  
  
  export default {
      name: 'VideoList',
      components:{
          VideoListItem,
      },
      props: {
          videoList: Array,
      },
  }
  </script>
  
  <style>
  
  </style>