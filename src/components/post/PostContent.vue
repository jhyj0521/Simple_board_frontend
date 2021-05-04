<template>
  <div class="content_mainBox">
    <div class="info_area">
      <span class="title">{{ boardInfo.title }}</span>
      <div class="sub_info">
        <span class="member_name">by {{ boardInfo.memberName }}</span>
        <span class="date">{{ boardInfo.regDate }}</span>
      </div>
    </div>
    <hr />

    <div class="content_mainCont">
      <div class="content">
        {{ boardInfo.content }}
      </div>
      <div class="like">
        <i
          class="far fa-heart heart"
          v-if="boardInfo.likeYn == 'N'"
          @click="clickLikeMethod"
        >
        </i>
        <i
          class="fas fa-heart heart"
          v-if="boardInfo.likeYn == 'Y'"
          @click="clickLikeMethod"
        >
        </i>
        <span class="heart_cnt">좋아요 {{ boardInfo.likeCnt }}</span>
      </div>
    </div>
    <hr />

    <Comment></Comment>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Comment from "./PostComment";

export default {
  data() {
    return {
      boardNo: this.$route.params.boardNo
    };
  },
  computed: {
    ...mapState({
      boardInfo: state => state.board.boardInfo
    })
  },
  methods: {
    ...mapActions(["getBoardDetail", "clickLike"]),
    async getBoardDetailMethod() {
      try {
        await this.getBoardDetail(this.boardNo);
      } catch (error) {
        console.log(error.response);
      }
    },
    async clickLikeMethod() {
      try {
        const boardNo = {
          boardNo: this.boardNo
        };
        await this.clickLike(boardNo);
        await this.getBoardDetailMethod();
      } catch (error) {
        console.log(error.response);
      }
    }
  },
  created() {
    this.getBoardDetailMethod();
  },
  components: {
    Comment
  }
};
</script>

<style scoped src="../../assets/css/post/content.css"></style>
