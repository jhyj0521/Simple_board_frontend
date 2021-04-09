<template>
  <div class="main_loginBox">
    <input
      type="text"
      class="login_id"
      placeholder="아이디"
      v-model="member.memberId"
    />
    <input
      type="text"
      class="login_name"
      placeholder="이름"
      v-model="member.memberName"
    />
    <input
      type="password"
      class="login_pw"
      placeholder="비밀번호"
      v-model="member.password"
    />
    <input type="password" class="login_pw" placeholder="비밀번호 확인" />
    <button class="btn_signup" @click="signupMethod">회원가입</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      member: {
        memberId: "",
        memberName: "",
        password: ""
      }
    };
  },
  methods: {
    async signupMethod() {
      const result = await this.$store.dispatch('register', this.member);

      console.log(result);
    }
  }
};
</script>

<style scoped src="../../assets/css/member/form.css"></style>
