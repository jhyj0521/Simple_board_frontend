<template>
  <div class="content_mainBox">
    <div class="content_search">
      <input
        type="text"
        class="login_id"
        placeholder="검색어를 입력해주세요"
        v-model="searchWord"
        @keyup.enter="getSearchListMethod"
      />
      <button class="searchBtn" title="search" @click="getSearchListMethod">
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
          <td>{{ board.regDate | formatDate }}</td>
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
  filters: {
    formatDate(regDate) {
      const now = new Date();
      const year = now.getFullYear();
      const month = now.getMonth() + 1;
      const date = now.getDate();

      const regYear = regDate.slice(0, 4);
      let regMonth = "";
      if (regDate.charAt(5) == 0) {
        regMonth = regDate.charAt(6);
      } else {
        regMonth = regDate.slice(5, 7);
      }
      let regDay = "";
      if (regDate.charAt(8) == 0) {
        regDay = regDate.charAt(9);
      } else {
        regDay = regDate.slice(8, 10);
      }

      if (regYear == year && regMonth == month && regDay == date) {
        return regDate.slice(10, 16);
      } else {
        return regDate.slice(0, 10);
      }
    }
  },
  methods: {
    ...mapActions(["getBoardList", "getBoardSearchList"]),
    async getBoardListMethod() {
      try {
        const param = {
          searchWord: this.$route.query.searchWord,
          currentPageNo: this.$route.query.currentPageNo
        };

        if (param.searchWord === "") {
          this.boardList = await this.getBoardList(param);
        } else {
          this.searchWord = this.$route.query.searchWord;
          this.boardList = await this.getBoardSearchList(param);
        }
      } catch (error) {
        console.log(error.response);
      }
    },
    async getSearchListMethod() {
      try {
        const param = {
          searchWord: this.searchWord,
          currentPageNo: 1
        };

        if (this.searchWord.trim() !== this.$route.query.searchWord) {
          this.$router.push({ path: "/main", query: param });
        }
      } catch (error) {
        console.log(error.response);
      }
    },
    async changePage(pageNo) {
      try {
        this.currentPageNo = pageNo;

        const param = {
          searchWord: this.searchWord.trim(),
          currentPageNo: this.currentPageNo
        };

        if (this.$route.query.currentPageNo != pageNo) {
          this.$router.push({ path: "/main", query: param });
        }
      } catch (error) {
        console.log(error);
      }
    },
    async changeList(query) {
      try {
        this.searchWord = query.searchWord;

        if (query.searchWord === "") {
          this.boardList = await this.getBoardList(query);
        } else {
          this.boardList = await this.getBoardSearchList(query);
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
  watch: {
    $route(to) {
      this.changeList(to.query);
    }
  },
  components: {
    Pagination
  }
};
</script>

<style scoped src="../../assets/css/board/boardList.css"></style>
