<template>
  <div class="content_loginPage">
    <Header></Header>
    <LoginForm></LoginForm>
  </div>
</template>

<script>
import Header from "@/components/member/LoginHeader.vue";
import LoginForm from "@/components/member/LoginForm.vue";

export default {
  components: {
    Header,
    LoginForm
  }
};
</script>

<style>
.content_loginPage {
  position: relative;
  top: 50px;
}
</style>
