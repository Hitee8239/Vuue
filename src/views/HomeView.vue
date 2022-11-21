<template>
  <div>
    <h1>토스트 테스트</h1>
    <div>
      <v-btn @click="toastTest1">토스트 Info</v-btn>
      <v-btn @click="toastTest2">토스트 Success</v-btn>
      <v-btn @click="toastTest3">토스트 Error</v-btn>
      <v-btn @click="toastTest4">토스트 Warning</v-btn>
      <v-btn @click="toastTest5">전역 Error</v-btn>
    </div>
    <h1>프로그레스 테스트</h1>
    <div>
      <v-btn @click="barTest1">start</v-btn>
      <v-btn @click="barTest2">finish</v-btn>
      <v-btn @click="barTest3">fail</v-btn>
    </div>
    <h1>Notify Test</h1>
    <div>
      <v-btn @click="notifyTest1">Alert</v-btn>
      <v-btn @click="notifyTest2">Confirm</v-btn>
      <v-btn @click="notifyTest3">Prompt</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data(){
    return{
      title : "My App",
    }
  },
  title() {
		return "My home";
	},
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
  methods: {
    toastTest1() {
      this.$toast.info("Hello Info");
    },
    toastTest2() {
      this.$toast.success("Hello success");
    },
    toastTest3() {
      this.$toast.error("Hello error");
    },
    toastTest4() {
      this.$toast.warning("Hello warning");
    },
    toastTest5() {
      try {
        throw new Error("전역 에러");
      } catch (e) {
        this.$toast.error(e.message);
      }
    },
    barTest1() {
      this.$Progress.start();
    },
    barTest2() {
      this.$Progress.finish();
    },
    barTest3() {
      this.$Progress.fail();
    },
    async notifyTest1() {
      const res = await this.$notify.alert("테스트 내용입니다.", "안내", {
        icon: "mdi-video-4k-box",
      });
      console.log(res);
    },
    async notifyTest2() {
      const res = await this.$notify.confirm("테스트 내용입니다.", "");
      console.log(res);
    },
    async notifyTest3() {
      const res = await this.$notify.prompt(
        "테스트 내용입니다.",
        "프롬프트",
        { width: 200 }
      );
      console.log(res);
    },
  },
};
</script>
