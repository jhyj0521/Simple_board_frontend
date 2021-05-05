<template>
  <div class="content_mainBox">
    <div class="content_search">
      <input
        type="text"
        class="login_id"
        placeholder="검색어를 입력해주세요"
        v-model="searchWord"
        @keyup.enter="getBoardListMethod"
      />
      <button class="searchBtn" title="search" @click="getBoardListMethod">
        검색
      </button>
    </div>

    <div class="result_total">검색결과 {{ boardList.totalCnt }}건</div>

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
            <a @click="routeDetailPage(board.boardNo)">{{ board.title }}</a>
            <span class="comment_cnt" v-if="board.commentCnt != 0">
              [{{ board.commentCnt }}]
            </span>
          </td>
          <td>{{ board.memberName }}</td>
          <td>{{ board.regDate }}</td>
          <td>{{ board.likeCnt }}</td>
        </tr>
      </table>
    </div>

    <div class="no_result" v-if="boardList.totalCnt == 0">
      검색 결과가 없습니다.
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
      currentPageNo: 1,
      searchWord: ""
    };
  },
  methods: {
    ...mapActions(["getBoardList", "getBoardSearchList"]),
    async getBoardListMethod() {
      try {
        const param = {
          searchWord: this.searchWord.trim(),
          currentPageNo: 1
        };

        if (param.searchWord === "") {
          this.boardList = await this.getBoardList(param);
          console.log(this.boardList);
        } else {
          this.boardList = await this.getBoardSearchList(param);
          console.log(this.boardList);
        }
      } catch (error) {
        console.log(error.response);
      }
    },
    async changePage(pageNo) {
      try {
        this.currentPageNo = pageNo;

        const param = {
          searchWord: this.searchWord,
          currentPageNo: this.currentPageNo
        };

        if (param.searchWord === "") {
          this.boardList = await this.getBoardList(param);
          console.log(this.boardList);
        } else {
          this.boardList = await this.getBoardSearchList(param);
          console.log(this.boardList);
        }
      } catch (error) {
        console.log(error.response);
      }
    },
    routeDetailPage(boardNo) {
      this.$router.push(`/post/${boardNo}`);
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
