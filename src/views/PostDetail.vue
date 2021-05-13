<template>
  <div>
    <PostDetailHeader></PostDetailHeader>
    <PostContent></PostContent>
  </div>
</template>

<script>
import PostDetailHeader from "@/components/post/detail/PostDetailHeader.vue";
import PostContent from "@/components/post/detail/PostContent.vue";
import { mapActions } from "vuex";

export default {
  components: {
    PostDetailHeader,
    PostContent
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
