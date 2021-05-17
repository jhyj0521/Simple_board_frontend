<template>
  <div class="content_mainBox">
    <div class="content_tableArea02">
      <table class="content_mainTable02">
        <colgroup>
          <col style="width: 8%;" />
          <col />
        </colgroup>
        <tr>
          <th>제목</th>
          <td>
            <input
              type="text"
              class="board_write"
              placeholder="제목을 입력해 주세요."
              v-model="title"
            />
          </td>
        </tr>
      </table>
    </div>
    <div class="content_mainCont">
      <textarea placeholder="내용을 입력하세요." v-model="content"></textarea>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      boardNo: this.$route.params.boardNo,
      title: "",
      content: ""
    };
  },
  computed: {
    ...mapState({
      boardInfo: state => state.board.boardInfo
    })
  },
  methods: {
    ...mapActions(["getBoardDetail", "editPost"]),
    async getBoardDetailMethod() {
      try {
        await this.getBoardDetail(this.boardNo);
        this.title = this.boardInfo.title;
        this.content = this.formatEditContent(this.boardInfo.content);
      } catch (error) {
        console.log(error.response);
      }
    },
    async editPostMethod() {
      try {
        if (this.title.length > 30) {
          alert("제목을 30자 이내로 입력하세요.");
          return;
        }

        if (this.content.length > 1000) {
          alert("내용을 1000자 이내로 입력하세요.");
          return;
        }

        const post = {
          boardNo: this.boardNo,
          title: this.title,
          content: this.content
        };

        await this.editPost(post);
        this.$router.push(`/post/${this.boardNo}`);
      } catch (error) {
        console.log(error.response);
        alert(error.response.data.message);
      }
    },
    formatEditContent(str) {
      str = str.replace(/(<br\/>)/g, "\n");
      return str.replace(/&nbsp;&nbsp;/g, " ");
    }
  },
  created() {
    this.getBoardDetailMethod();
  }
};
</script>

<style scoped src="@/assets/css/post/form.css"></style>
