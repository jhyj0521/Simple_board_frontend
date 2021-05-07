<template>
  <div>
    <PostDetailHeader></PostDetailHeader>
    <PostContent></PostContent>
  </div>
</template>

<script>
import PostDetailHeader from "@/components/post/detail/PostDetailHeader.vue";
import PostContent from "@/components/post/detail/PostContent.vue";
export default {
  components: {
    PostDetailHeader,
    PostContent
  }
};
</script>

<style></style>
