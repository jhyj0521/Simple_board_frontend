<template>
  <div class="main_loginBox">
    <ValidationObserver v-slot="{ handleSubmit }">
      <form @submit.prevent="handleSubmit(submitForm)">
        <ValidationProvider
          name="아이디"
          rules="required|email"
          v-slot="{ errors }"
        >
          <input
            type="text"
            class="login_id"
            placeholder="아이디"
            v-model="member.memberId"
          />
          <span>{{ errors[0] }}</span>
        </ValidationProvider>
        <ValidationProvider name="이름" rules="required" v-slot="{ errors }">
          <input
            type="text"
            class="login_name"
            placeholder="이름"
            v-model="member.memberName"
          />
          <span>{{ errors[0] }}</span>
        </ValidationProvider>
        <ValidationProvider
          name="비밀번호"
          vid="password"
          rules="required|checkSpace|regex|min:10|max:32"
          v-slot="{ errors }"
        >
          <input
            type="password"
            class="login_pw"
            placeholder="비밀번호"
            v-model="member.password"
          />
          <span>{{ errors[0] }}</span>
        </ValidationProvider>
        <ValidationProvider
          name="비밀번호 확인"
          rules="required|confirmed:password"
          v-slot="{ errors }"
        >
          <input
            type="password"
            class="login_pw"
            placeholder="비밀번호 확인"
            v-model="reEnterPassword"
          />
          <span>{{ errors[0] }}</span>
        </ValidationProvider>
        <button type="submit" class="btn_signup">회원가입</button>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { extend, ValidationProvider, ValidationObserver } from "vee-validate";
import { required, email, min, max, confirmed } from "vee-validate/dist/rules";

extend("required", {
  ...required,
  message: "{_field_}은(는) 필수 입력 사항입니다."
});

extend("email", {
  ...email,
  message: "{_field_}은(는) 이메일 형식으로 작성해야 합니다."
});

extend("checkSpace", {
  validate: value => {
    if (value.search(/\s/) === -1) {
      return true;
    }
  },
  message: "공백은 입력이 불가능합니다."
});

extend("regex", {
  validate: value => {
    if (
      // 정규 표현식을 만족한다면 true
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]*$/.test(
        value
      )
    ) {
      return true;
    }
  },
  message: "영문과 숫자와 특수문자를 최소 1자 이상 입력해주세요."
});

extend("min", {
  ...min,
  message: "{_field_}은(는) 최소 10자 이상 32자 이하로 입력해주세요."
});

extend("max", {
  ...max,
  message: "{_field_}은(는) 최소 10자 이상 32자 이하로 입력해주세요."
});

extend("confirmed", {
  ...confirmed,
  message: "비밀번호가 일치하지 않습니다."
});

export default {
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data() {
    return {
      member: {
        memberId: "",
        memberName: "",
        password: ""
      },
      reEnterPassword: ""
    };
  },
  methods: {
    ...mapActions(["register"]),
    async submitForm() {
      try {
        await this.register(this.member);
        alert("정상적으로 회원 가입이 완료되었습니다.");
        this.$router.push("/login");
      } catch (error) {
        console.log(error.response);
        alert(error.response.data.message);
      } finally {
        this.initForm();
      }
    },
    initForm() {
      this.member.memberId = "";
      this.member.memberName = "";
      this.member.password = "";
      this.reEnterPassword = "";
    }
  }
};
</script>

<style scoped src="../../assets/css/member/form.css"></style>
