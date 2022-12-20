<template>
    <div class="d-flex justify-center align-center" style="height: 100%">
      <v-card max-width="400" width="100%" elevation="10">
        <v-toolbar>
          <v-toolbar-title>방명록</v-toolbar-title>
        </v-toolbar>
        <v-card-text >
          <Write-Page
            @onSave="save"
            :is-loading="isLoading"
          />
        </v-card-text>
      </v-card>
    </div>
  </template>
  
  <script>
  import { mapActions } from "vuex";
  import WritePage from "@/components/write/WritePage.vue";

  export default {
    components: { WritePage },
    name: "Join",
    data() {
      return {
        isLoading: false,
      };
    },
    methods: {
      ...mapActions("user", ['createMember']),
      async save(form) {
        this.isLoading = true;
        const data = await this.createMember(form);
          this.isLoading = false;
              if(data) {
                  const db_text = form.get('db_text');
                  this.$toast.info(`등록되셨습니다.`);
                  this.$router.push('/board');
              }
      },
    }
  }
  </script>
  