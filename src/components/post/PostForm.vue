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
import { mapActions } from "vuex";

export default {
  data() {
    return {
      title: "",
      content: ""
    };
  },
  methods: {
    ...mapActions(["addPost"]),
    async addPostMethod() {
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
          title: this.title,
          content: this.content
        };
        const result = await this.addPost(post);
        console.log(result);
        this.$router.push({
          path: "/main",
          query: {
            searchWord: "",
            currentPageNo: 1
          }
        });
      } catch (error) {
        console.log(error.response);
        alert(error.response.data.message);
      }
    }
  }
};
</script>

<style scoped src="../../assets/css/post/form.css"></style>
