<template>
  <div>
    <PostHeader v-on:addPost="addPost"></PostHeader>
    <PostForm ref="postForm"></PostForm>
  </div>
</template>

<script>
import PostHeader from "@/components/post/PostHeader.vue";
import PostForm from "@/components/post/PostForm.vue";
export default {
  components: {
    PostHeader,
    PostForm
  },
  methods: {
    addPost() {
      this.$refs.postForm.addPostMethod();
    }
  }
};
</script>

<style></style>
