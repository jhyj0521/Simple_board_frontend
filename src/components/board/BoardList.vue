<template>
  <div class="content_mainBox">
    <div class="content_search">
      <input type="text" class="login_id" placeholder="검색어를 입력해주세요" />
      <a class="searchBtn" title="search">search</a>
    </div>

    <div class="content_tableArea">
      <table class="content_mainTable">
        <colgroup>
          <col style="width: 10%;" />
          <col />
          <col style="width: 15%;" />
          <col style="width: 15%;" />
          <col style="width: 10%;" />
        </colgroup>
        <tr>
          <th>No</th>
          <th>제목</th>
          <th>작성자</th>
          <th>작성일</th>
          <th>좋아요</th>
        </tr>
        <tr v-for="(board, index) in boardList" v-bind:key="index">
          <td>{{ board.boardNo }}</td>
          <td>{{ board.title }}</td>
          <td>{{ board.memberName }}</td>
          <td>{{ board.regDate }}</td>
          <td>{{ board.likeCnt }}</td>
        </tr>
      </table>
    </div>

    <div class="pageNation">
      <ul>
        <li><a href="">prev</a></li>
        <li><a href="">1</a></li>
        <li><a href="">2</a></li>
        <li><a href="">3</a></li>
        <li><a href="">4</a></li>
        <li class="on"><a href="">5</a></li>
        <li><a href="">next</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      boardList: {}
    };
  },
  methods: {
    ...mapActions(["getBoardList"]),
    async getBoardListMethod() {
      try {
        const result = await this.getBoardList();
        this.boardList = result.list;
        console.log(this.boardList);
      } catch (error) {
        console.log(error.response);
      }
    }
  },
  created() {
    this.getBoardListMethod();
  }
};
</script>

<style scoped src="../../assets/css/board/boardList.css"></style>
