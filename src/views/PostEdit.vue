<template>
  <div>
    <PostEditHeader v-on:editPost="editPost"></PostEditHeader>
    <PostEditForm ref="PostEditForm"></PostEditForm>
  </div>
</template>

<script>
import PostEditHeader from "@/components/post/edit/PostEditHeader.vue";
import PostEditForm from "@/components/post/edit/PostEditForm.vue";
export default {
  components: {
    PostEditHeader,
    PostEditForm
  },
  methods: {
    editPost() {
      this.$refs.PostEditForm.editPostMethod();
    }
  }
};
</script>

<style></style>
