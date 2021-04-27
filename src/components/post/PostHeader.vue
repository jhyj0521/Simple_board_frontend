<template>
  <div class="title_mainTop">
    <div class="title_leftNav">
      <button class="btn_basic" @click="addPostMethod">작성</button>
      <button class="btn_basic" @click="goMain">취소</button>
    </div>
    <div class="title_center">
      <span @click="goMain">Main</span>
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
      const result = confirm(
        "사이트에서 나가시겠습니까?\n변경사항이 저장되지 않을 수 있습니다."
      );
      if (result) {
        this.logout();
        this.$router.push("/login");
      }
    },
    addPostMethod() {
      this.$emit("addPost");
    },
    goMain() {
      const result = confirm(
        "사이트에서 나가시겠습니까?\n변경사항이 저장되지 않을 수 있습니다."
      );
      if (result) {
        this.$router.push("/main");
      }
    }
  }
};
</script>

<style scoped src="../../assets/css/post/header.css"></style>
