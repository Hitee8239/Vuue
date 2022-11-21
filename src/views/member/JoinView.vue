<template>
  <div class="d-flex justify-center align-center" style="height:100%">
    <v-card max-width="400" width="100%" elevation="10">
      <v-toolbar>
        <v-toolbar-title>회원가입</v-toolbar-title>
      </v-toolbar>
      <v-card-text> 
				<sign-up-form :cb-check-id="checkId"/> 
			</v-card-text>
    </v-card>
  </div>
</template>

<script>
import SignUpForm from "../../components/auth/SignUpForm.vue";
export default {
  components: { SignUpForm },
  name: "Join",
  methods : {
    async checkId(id){
      console.log(id)
      return {cnt : 0};
    }
  }
};
</script>