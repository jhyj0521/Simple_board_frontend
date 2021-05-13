<template>
  <div>
    <PostEditHeader v-on:editPost="editPost"></PostEditHeader>
    <PostEditForm ref="PostEditForm"></PostEditForm>
  </div>
</template>

<script>
import PostEditHeader from "@/components/post/edit/PostEditHeader.vue";
import PostEditForm from "@/components/post/edit/PostEditForm.vue";
import { mapActions } from "vuex";

export default {
  components: {
    PostEditHeader,
    PostEditForm
  },
  methods: {
    ...mapActions(["getJwtInfo"]),
    editPost() {
      this.$refs.PostEditForm.editPostMethod();
    }
  },
  created() {
    this.getJwtInfo();
  }
};
</script>

<style></style>
