<template>
  <v-container fluid>
    <h1>방명록을 남겨주세요!</h1>
    <form v-on:submit="submit">
      <v-row>
        <v-col cols="12" md="6">
          <v-textarea
            solo
            v-model="guestBook"
            label="방문해주셔서감사합니다"
            ref="form"
          ></v-textarea>
        </v-col>
      </v-row>
      <v-btn type="submit" block color="purple lighten-4" :loading="isLoading"
        >작성하기</v-btn
      >
    </form>
  </v-container>
</template>

<script>
import Axios from 'axios';
export default {
  data(){
    return{
        guestBook:''
    }
  },
  props: {
    isLoading : Boolean,
  },
  methods: {
   async  submit(){
      const guestBoard = new FormData();
      const keys = Object.keys(this.guestBook);
      for(const key of keys){
        guestBoard.append(key, this.guestBook[key]);
      }
      this.$emit('onSave', guestBoard);
    }
  }
};
</script>

<style></style>
