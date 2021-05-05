<template>
  <div class="content_comment">
    <div class="comment_header">
      <i class="far fa-comment-dots comment_img"></i>
      <span class="comment_title">댓글</span>
      <span class="comment_cnt">{{ boardInfo.commentCnt }}</span>
    </div>

    <div
      class="comment_list"
      v-for="(list, index) in commentList"
      v-bind:key="index"
    >
      <table class="content_mainTable02">
        <colgroup>
          <col style="width: 2%;" />
          <col />
          <col style="width: 12%;" />
        </colgroup>
        <tr>
          <td></td>
          <td>
            <div class="comment_list_name">
              {{ list.memberName }}
            </div>
            <div class="comment_list_content">
              {{ list.content }}
            </div>
            <div class="comment_list_date">
              {{ list.regDate }}
            </div>
          </td>
          <td><button class="btn_basic">삭제</button></td>
        </tr>
      </table>

      <hr v-if="index != commentList.length - 1" />
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
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      boardNo: this.$route.params.boardNo,
      content: "",
      commentList: []
    };
  },
  computed: {
    ...mapState({
      boardInfo: state => state.board.boardInfo,
      memberName: state => state.member.memberName
    })
  },
  methods: {
    ...mapActions(["addComment", "getCommentList"]),
    async addCommentMethod() {
      try {
        const param = {
          boardNo: this.boardNo,
          content: this.content
        };

        await this.addComment(param);
        await this.getCommentListMethod();
      } catch (error) {
        console.log(error.response);
        alert(error.response.data.message);
      }
    },
    async getCommentListMethod() {
      try {
        const param = {
          boardNo: this.boardNo
        };

        this.commentList = await this.getCommentList(param);
        console.log(this.commentList);
      } catch (error) {
        console.log(error.response);
      }
    }
  },
  created() {
    this.getCommentListMethod();
  }
};
</script>

<style scoped src="../../assets/css/post/comment.css"></style>
