<template>
  <div>
    <PostDetailHeader></PostDetailHeader>
    <PostContent></PostContent>
  </div>
</template>

<script>
import PostDetailHeader from "@/components/post/PostDetailHeader.vue";
import PostContent from "@/components/post/PostContent.vue";
export default {
  components: {
    PostDetailHeader,
    PostContent
  }
};
</script>

<style></style>
