<template>
  <div id="login">

    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="用户名" prop="username">
        <el-input v-model.number="ruleForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm">登录</el-button>
        <el-button @click="resetForm">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    data() {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('用户名不能为空'));
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        }
      };
      return {
        ruleForm: {
          password: '',
          username: ''
        },
        rules: {
          password: [
            {validator: validatePass, trigger: 'blur'}
          ],
          username: [
            {validator: checkAge, trigger: 'blur'}
          ]
        }
      };
    },
    methods: {
      submitForm() {
        if (this.ruleForm.password !== '' && this.ruleForm.username !== '') {
          // var obj = this.ruleForm
          this.$http.post('user/login', {"username": `${this.ruleForm.username}`,"password": `${this.ruleForm.password}`}).then(result => {
            console.log(result.body);
          })
        }
      },
      resetForm(formName) {

      }
    }
  }
</script>

<style scoped lang="less">
#login {
  padding-top: 50px;
  .el-form-item {
    float: left;
  }
}
</style>