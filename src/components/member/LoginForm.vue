<template>
  <div class="main_loginBox">
    <input
      type="text"
      class="login_id"
      placeholder="아이디"
      v-model="memberId"
    />
    <input
      type="password"
      class="login_pw"
      placeholder="비밀번호"
      v-model="password"
      @keyup.enter="submitForm"
    />
    <button class="btn_login" @click="submitForm">로그인</button>
    <router-link to="/signup">
      <button class="btn_signup">회원가입</button>
    </router-link>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      memberId: "",
      password: ""
    };
  },
  methods: {
    ...mapActions(["login"]),
    async submitForm() {
      try {
        const member = {
          memberId: this.memberId,
          password: this.password
        };
        const result = await this.login(member);
        console.log(result);
        this.$router.push("/main");
      } catch (error) {
        console.log(error.response);
        alert(error.response.data.message);
      }
    }
  }
};
</script>

<style scoped src="../../assets/css/member/form.css"></style>
