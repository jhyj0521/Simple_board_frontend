<template>
  <div>
    <PostHeader v-on:addPost="addPost"></PostHeader>
    <PostForm ref="postForm"></PostForm>
  </div>
</template>

<script>
import PostHeader from "@/components/post/PostHeader.vue";
import PostForm from "@/components/post/PostForm.vue";
import { mapActions } from "vuex";

export default {
  components: {
    PostHeader,
    PostForm
  },
  methods: {
    ...mapActions(["getJwtInfo"]),
    addPost() {
      this.$refs.postForm.addPostMethod();
    }
  },
  created() {
    this.getJwtInfo();
  }
};
</script>

<style></style>
