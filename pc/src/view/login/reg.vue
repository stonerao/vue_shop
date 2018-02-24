<template>
    <div class="login">
        <div class="login-box">
            <div class="login-logo">
                <img :src="logo" alt="">
            </div>
            <div class="login-main">
                <div class="login-title">
                    注册
                </div>
                <div class="login-from">
                    <div class="login-from-inp">
                        <input type="text" placeholder="用户名" class="">
                    </div>
                    <div class="login-from-inp">
                        <input type="text" placeholder="设置密码">
                    </div>
                    <div class="login-from-inp">
                        <input type="text" placeholder="确认密码">
                    </div>
                    <div class="login-from-inp">
                        <input type="text" placeholder="手机号">
                    </div>
                    <div class="login-from-code">
                        <input type="text" placeholder="验证码">
                        <button>获取验证码</button>
                    </div>
                    <div>
                        <button @click="sub" class="form-inline-sub cur">
                            注册
                        </button>
                    </div>
                    <div class="login-from-w center">
                    已有账号，
                        <router-link to="/login" class="login-from-g-c ">去登录</router-link>
                    </div>
                     
                </div>
            </div>
            <p class="center login-from-g-c margin-top30 font-3">
                <router-link to="/" class="login-from-g-c font-3">返回首页</router-link>
            </p>
        </div>
    </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      logo: require("@/assets/index/logo.png")
    };
  },
  mounted() {},
  methods: {
      sub(){

      }
  }
};
</script>

<style lang="less" scoped>
@import "../../styles/base.less";
.login-from-code {
  overflow: hidden;
  input {
    padding: 0;
    margin: 0;
    width: 148px;
    border: 1px solid #ddd;
    border-radius: 5px;
    height: 44px;
    padding-left: 10px;
  }
  button {
    float: right;
    padding: 0;
    margin: 0;
    border: 0;
    height: 44px;
    border-radius: 5px;
    width: 128px;
    background: @color-b;
    color: #fff;
    cursor: pointer;
  }
}
.login-from-d {
  line-height: 60px;
  img {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    .img-center;
    margin-left: 5px;
    cursor: pointer;
  }
}
.form-inline-sub {
  padding: 0;
  padding: 0;
  margin: 0;
  border: 0;
  width: 100%;
  height: 45px;
  background-color: #26c267;
  color: #fff;
  border-radius: 5px;
  transition: all 0.2s;
  margin-top: 30px;
}
.form-inline-sub:hover {
  background: @color-g;
}
.login-from-w {
  line-height: 46px;
  padding-bottom: 10px;
  border-bottom: 1px dashed #ddd;
}
.login-from-g-c {
  color: @color-g;
}
.login-title {
  line-height: 65px;
  font-size: 16px;
  color: @color-g;
  text-align: center;
  border-bottom: 1px solid #ddd;
}
.login-main {
  background: #fff;
  border-radius: 2px;

  background: #fff;
}
.login-from-inp {
  margin-bottom: 14px;
  input {
    padding: 0;
    margin: 0;
    width: 288px;
    border: 1px solid #ddd;
    border-radius: 5px;
    height: 44px;
    padding-left: 10px;
  }
}
.login-from {
  width: 300px;
  margin: 0 auto;
  padding: 35px 50px 0 50px;
}
.login {
  position: absolute;
  widows: 100%;
  right: 0;
  top: 0;
  left: 0;
  bottom: 0;
  background-image: url(../../assets/login/reg.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index:1000;
}
.login-box {
  width: 400px;
  min-height: 300px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  top: 45%;
  border-radius: 5px;
}
.login-logo {
  text-align: center;
  padding-bottom: 45px;
  img {
    height: 58px;
    max-width: 100%;
  }
}
</style>
