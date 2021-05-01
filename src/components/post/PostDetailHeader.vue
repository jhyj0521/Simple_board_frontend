<template>
  <div class="title_mainTop">
    <div class="title_leftNav">
      <button class="btn_basic">수정</button>
      <button class="btn_basic">삭제</button>
    </div>
    <div class="title_center">
      <span @click="routeMainPage">Main</span>
    </div>
    <div class="title_rightNav">
      <ul>
        <li><img class="rightNav_profile" /></li>
        <li>
          <span title="사용자정보">{{ this.memberName }}님</span>
        </li>
        <li><button @click="logoutMethod">로그아웃</button></li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  computed: {
    ...mapState({
      memberName: state => state.member.memberName
    })
  },
  methods: {
    ...mapMutations(["logout"]),
    logoutMethod() {
      this.logout();
      this.$router.push("/login");
    },
    routeMainPage() {
      this.$router.push("/main");
    }
  }
};
</script>

<style scoped src="../../assets/css/post/header.css"></style>
