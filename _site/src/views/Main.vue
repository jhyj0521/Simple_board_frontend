<template>
  <div>
    <MainHeader></MainHeader>
    <BoardList></BoardList>
  </div>
</template>

<script>
import MainHeader from "@/components/board/MainHeader.vue";
import BoardList from "@/components/board/BoardList.vue";
export default {
  components: {
    MainHeader,
    BoardList
  }
};
</script>

<style></style>
