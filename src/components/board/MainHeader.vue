<template>
  <div class="title_mainTop">
    <div class="title_leftNav">
      <button class="btn_basic" @click="addPost">글쓰기</button>
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
    addPost() {
      this.$router.push("/post/add");
    },
    routeMainPage() {
      if (
        this.$route.query.searchWord === "" &&
        this.$route.query.currentPageNo == 1
      ) {
        return;
      }
      this.$router.push({
        path: "/main",
        query: {
          searchWord: "",
          currentPageNo: 1
        }
      });
    }
  }
};
</script>

<style scoped src="../../assets/css/board/mainHeader.css"></style>
