<template>
  <div class="content_mainBox">
    <div class="content_tableArea02">
      <table class="content_mainTable02">
        <colgroup>
          <col style="width: 10%;" />
          <col style="width: 15%;" />
          <col style="width: 10%;" />
          <col />
          <col style="width: 10%;" />
          <col style="width: 15%;" />
        </colgroup>
        <tr>
          <th>작성자</th>
          <td>이정훈</td>
          <th>제목</th>
          <td>안녕이정훈못난아</td>
          <th>날짜</th>
          <td>2020/1/1</td>
        </tr>
      </table>
    </div>

    <div class="content_mainCont">
      <!--내용넣기-->
    </div>
    <div class="content_reply">
      <div class="content_replyBefore">
        <table class="content_mainTable02">
          <colgroup>
            <col style="width: 10%;" />
            <col />
            <col style="width: 10%;" />
          </colgroup>
          <tr>
            <td><!--이미지--></td>
            <td><input type="text" class="reply" /></td>
            <td><button class="btn_basic">댓글달기</button></td>
          </tr>
        </table>
      </div>

      <div class="content_replyAfter">
        <table class="content_mainTable02">
          <colgroup>
            <col style="width: 10%;" />
            <col />
            <col style="width: 10%;" />
          </colgroup>
          <tr>
            <td><!--이미지--></td>
            <td><!--입력된 내용--></td>
            <td><button class="btn_basic">삭제</button></td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped src="../../assets/css/post/form.css"></style>
