<template>
  <div class="content_mainBox">
    <div class="content_tableArea02">
      <table class="content_mainTable02">
        <colgroup>
          <col style="width: 5%;" />
          <col />
        </colgroup>
        <tr>
          <th>제목</th>
          <td>
            <input
              type="text"
              class="board_write"
              placeholder="제목을 입력해 주세요."
            />
          </td>
        </tr>
      </table>
    </div>
    <div class="content_mainCont">
      <textarea placeholder="내용을 입력하세요."></textarea>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped src="../../assets/css/post/form.css"></style>
