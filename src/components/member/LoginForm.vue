<template>
  <div class="main_loginBox">
    <input type="text" class="login_id" placeholder="아이디" />
    <input type="password" class="login_pw" placeholder="비밀번호" />
    <button class="btn_login">로그인</button>
    <router-link to="/signup">
      <button class="btn_signup">회원가입</button>
    </router-link>
  </div>
</template>

<style scoped src="../../assets/css/member/form.css"></style>
