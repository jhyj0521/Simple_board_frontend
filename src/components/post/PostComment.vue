<template>
  <div class="content_comment">
    <div class="comment_header">
      <i class="far fa-comment-dots comment_img"></i>
      <span class="comment_title">댓글</span>
      <span class="comment_cnt">{{ boardInfo.commentCnt }}</span>
    </div>

    <div class="comment_input">
      <div class="comment_input_name">{{ memberName }}</div>
      <table class="content_mainTable02">
        <colgroup>
          <col />
          <col style="width: 10%;" />
        </colgroup>
        <tr>
          <td>
            <textarea
              placeholder="댓글을 남겨보세요"
              class="comment_input_text"
              v-model="content"
            />
          </td>
          <td>
            <button class="btn_basic" @click="addCommentMethod">등록</button>
          </td>
        </tr>
      </table>
    </div>

    <div class="content_commentAfter">
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
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      boardNo: this.$route.params.boardNo,
      content: ""
    };
  },
  computed: {
    ...mapState({
      boardInfo: state => state.board.boardInfo,
      memberName: state => state.member.memberName
    })
  },
  methods: {
    ...mapActions(["addComment"]),
    async addCommentMethod() {
      try {
        const param = {
          boardNo: this.boardNo,
          content: this.content
        };

        const result = await this.addComment(param);
        console.log(result);
      } catch (error) {
        console.log(error.response);
        alert(error.response.data.message);
      }
    }
  }
};
</script>

<style scoped src="../../assets/css/post/comment.css"></style>
