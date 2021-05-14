<template>
  <div class="content_mainBox">
    <div class="error_message">페이지를 찾을 수 없습니다.</div>
    <button class="btn_basic" @click="routeMain">홈페이지 이동</button>
  </div>
</template>
<script>
export default {
  methods: {
    routeMain() {
      this.$router.push("/main");
    }
  }
};
</script>

<style scoped src="@/assets/css/notFoundPage.css"></style>
