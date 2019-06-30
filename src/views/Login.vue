<template>
    <div>
      <el-form ref="form" :model="form" label-width="80px" class="login-box">
        <h2 class="login-title">欢迎登录</h2>
        <el-form-item label="账号">
          <el-input v-model="form.username" type="text" placeholder="请输入账号"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit" >登录</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
    export default {
        name: "login",
        data() {
          return{
            form: {
              username: '',
              password: ''
            }
          }
      },
      methods: {
          onSubmit(){
            // sessionStorage只支持字符串
            sessionStorage.setItem("isLogin", 'true');
            //调用的是action的方法
            this.$store.dispatch('asyncUpdateUser', {username: this.form.username});
            // this.$router.push({name: 'Main', params: {username: this.form.username}})
            this.$router.push({name: 'Main'})
          }
      }
    }
</script>

<style lang="scss" scoped>
  .login-box {
    width: 350px;
    margin: 180px auto;
    border: 1px solid #DCDFE6;
    padding: 35px;
    border-radius: 5px;
    box-shadow: 0 0 25px #DCDFE6;
  }

  .login-title {
    text-align: center;
  }
</style>
