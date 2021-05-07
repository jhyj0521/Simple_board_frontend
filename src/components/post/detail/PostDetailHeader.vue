<template>
  <div class="title_mainTop">
    <div class="title_leftNav">
      <button
        class="btn_basic"
        v-if="memberNo === boardInfo.memberNo"
        @click="routeEditPage"
      >
        수정
      </button>
      <button
        class="btn_basic"
        v-if="memberNo === boardInfo.memberNo"
        @click="deletePostMethod"
      >
        삭제
      </button>
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
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  data() {
    return {
      boardNo: this.$route.params.boardNo
    };
  },
  computed: {
    ...mapState({
      memberName: state => state.member.memberName,
      memberNo: state => state.member.memberNo,
      boardInfo: state => state.board.boardInfo
    })
  },
  methods: {
    ...mapActions(["editPost", "deletePost"]),
    ...mapMutations(["logout"]),
    async editPostMethod() {
      try {
        await this.editPost();
      } catch (error) {
        console.log(error.response);
      }
    },
    async deletePostMethod() {
      try {
        if (!confirm("게시글을 삭제하시겠습니까?")) {
          return;
        }

        await this.deletePost(this.boardNo);
        this.$router.replace("/main");
      } catch (error) {
        console.log(error.response);
      }
    },
    routeEditPage() {
      this.$router.push(`/post/${this.boardNo}/edit`);
    },
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

<style scoped src="@/assets/css/post/header.css"></style>
