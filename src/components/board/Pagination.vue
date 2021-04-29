<template>
  <div class="pagiNation">
    <ul>
      <li>
        <a v-if="prev" @click="changeLink(startPageIndex - 1)">prev</a>
      </li>
      <li v-for="index in endPageIndex - startPageIndex + 1" :key="index">
        <a
          :class="{ on: startPageIndex + index - 1 == currentPageNo }"
          @click="changePage(index)"
        >
          {{ startPageIndex + index - 1 }}
        </a>
      </li>
      <li>
        <a v-if="next" @click="changeLink(endPageIndex + 1)">next</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["currentPageNo", "totalCnt", "recordsPerPage", "pagePerLink"], // totalCnt: 총 리스트 개수, recordsPerPage: 한 페이지당 리스트 개수, pagePerLink: 링크당 페이지 개수
  data() {
    return {
      pageCount: 0, //페이지 개수
      startPageIndex: 0, //링크에서 페이지 시작 인덱스
      endPageIndex: 0, //링크에서 페이지 마지막 인덱스
      prev: false,
      next: false
    };
  },
  methods: {
    initUI() {
      this.pageCount = Math.ceil(this.totalCnt / this.recordsPerPage);

      if (this.currentPageNo % this.pagePerLink == 0) {
        this.startPageIndex =
          (this.currentPageNo / this.pagePerLink - 1) * this.pagePerLink + 1;
      } else {
        this.startPageIndex =
          Math.floor(this.currentPageNo / this.pagePerLink) * this.pagePerLink +
          1;
      }

      if (this.currentPageNo % this.pagePerLink == 0) {
        this.endPageIndex =
          (this.currentPageNo / this.pagePerLink - 1) * this.pagePerLink +
          this.pagePerLink;
      } else {
        this.endPageIndex =
          Math.floor(this.currentPageNo / this.pagePerLink) * this.pagePerLink +
          this.pagePerLink;
      }

      if (this.currentPageNo <= this.pagePerLink) {
        this.prev = false;
      } else {
        this.prev = true;
      }

      if (this.endPageIndex >= this.pageCount) {
        this.endPageIndex = this.pageCount;
        this.next = false;
      } else {
        this.next = true;
      }
    },
    changePage(index) {
      let selectedPage = this.startPageIndex + index - 1;
      this.$emit("update", selectedPage);
    },
    changeLink(index) {
      this.$emit("update", index);
    }
  },
  watch: {
    currentPageNo: function() {
      this.initUI();
    },
    totalCnt: function() {
      this.initUI();
    },
    recordsPerPage: function() {
      this.initUI();
    },
    pagePerLink: function() {
      this.initUI();
    }
  },
  created() {
    if (this.currentPageNo !== undefined) {
      this.initUI();
    }
  }
};
</script>

<style scoped src="../../assets/css/board/pagination.css"></style>
