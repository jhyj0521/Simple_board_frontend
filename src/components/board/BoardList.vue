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
        <tr v-for="(board, index) in boardList.list" v-bind:key="index">
          <td>{{ board.boardNo }}</td>
          <td>
            <a href="">{{ board.title }}</a>
          </td>
          <td>{{ board.memberName }}</td>
          <td>{{ board.regDate }}</td>
          <td>{{ board.likeCnt }}</td>
        </tr>
      </table>
    </div>
    <pagination
      @update="changePage"
      v-bind:currentPageNo="boardList.currentPageNo"
      v-bind:totalCnt="boardList.totalCnt"
      v-bind:recordsPerPage="boardList.recordsPerPage"
      v-bind:pagePerLink="5"
    >
    </pagination>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Pagination from "./Pagination";

export default {
  data() {
    return {
      boardList: {},
      currentPageNo: 1
    };
  },
  methods: {
    ...mapActions(["getBoardList"]),
    async getBoardListMethod() {
      try {
        const param = {
          currentPageNo: this.currentPageNo
        };
        this.boardList = await this.getBoardList(param);
        console.log(this.boardList);
      } catch (error) {
        console.log(error.response);
      }
    },
    changePage(pageNo) {
      this.currentPageNo = pageNo;
      this.getBoardListMethod();
    }
  },
  created() {
    this.getBoardListMethod();
  },
  components: {
    Pagination
  }
};
</script>

<style scoped src="../../assets/css/board/boardList.css"></style>
