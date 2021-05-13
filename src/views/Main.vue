<template>
  <div>
    <MainHeader></MainHeader>
    <BoardList></BoardList>
  </div>
</template>

<script>
import MainHeader from "@/components/board/MainHeader.vue";
import BoardList from "@/components/board/BoardList.vue";
import { mapActions } from "vuex";

export default {
  components: {
    MainHeader,
    BoardList
  },
  methods: {
    ...mapActions(["getJwtInfo"])
  },
  created() {
    this.getJwtInfo();
  }
};
</script>

<style></style>
