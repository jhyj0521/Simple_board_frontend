<template>
  <div class="content_signupPage">
    <Header></Header>
    <SignupForm></SignupForm>
  </div>
</template>

<script>
import Header from "@/components/member/SignupHeader.vue";
import SignupForm from "@/components/member/SignupForm.vue";

export default {
  components: {
    Header,
    SignupForm
  }
};
</script>

<style>
.content_signupPage {
  position: relative;
  top: 50px;
}
</style>
