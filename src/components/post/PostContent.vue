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
        <button>좋아요</button>
        좋아요 {{ boardInfo.likeCnt }}
      </div>
    </div>
    <hr />

    <div class="content_reply">
      <div class="content_replyBefore">
        <table class="content_mainTable02">
          <colgroup>
            <col style="width: 10%;" />
            <col />
            <col style="width: 10%;" />
          </colgroup>
          <tr>
            <td><!--이미지--></td>
            <td><input type="text" class="reply" /></td>
            <td><button class="btn_basic">댓글 입력</button></td>
          </tr>
        </table>
      </div>

      <div class="content_replyAfter">
        <table class="content_mainTable02">
          <colgroup>
            <col style="width: 10%;" />
            <col />
            <col style="width: 10%;" />
          </colgroup>
          <tr>
            <td><!--이미지--></td>
            <td><!--입력된 내용--></td>
            <td><button class="btn_basic">삭제</button></td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      boardNo: this.$route.params.boardNo,
      boardInfo: {}
    };
  },
  methods: {
    ...mapActions(["getBoardDetail"]),
    async getBoardDetailMethod() {
      try {
        this.boardInfo = await this.getBoardDetail(this.boardNo);
        console.log(this.boardInfo);
      } catch (error) {
        console.log(error.response);
      }
    }
  },
  created() {
    this.getBoardDetailMethod();
  }
};
</script>

<style scoped src="../../assets/css/post/content.css"></style>
