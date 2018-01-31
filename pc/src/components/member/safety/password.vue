<template>
  <div class="m_mobile border">
    <div class="m_nav font-4">基本资料</div>
    <div class="m_mobile_box">
      <el-steps :active="action" align-center>
        <el-step title="身份验证"  ></el-step>
        <el-step title="变更密码" ></el-step>
        <el-step title="完成" ></el-step> 
      </el-steps>
    </div>
    <div class="center"> 
      <div v-if="action===1" >
        <p class="center hei-color">请先进行身份验证</p>
        <p> 
          <el-input :placeholder="`输入${e_name}`" v-model="mobile" class="input_mobile margin-top20">  
          </el-input>
        </p>
        <p>
          <el-input placeholder="请输入验证码" v-model="mobile" class="input_mobile margin-top20"> 
            <el-button slot="append">获取验证码 </el-button>
          </el-input>
        </p>
        <p>
          <button class="m_f_btn font-3 cur" @click="step(1)">下一步</button>
        </p>
      </div>
      <div v-else-if="action===2">
        <p> 
          <el-input :placeholder="`输入${e_name}`" v-model="mobile" class="input_mobile margin-top20">  
          </el-input>
        </p>
        <p>
         <el-input :placeholder="`请确认${e_name}`" v-model="mobile" class="input_mobile margin-top20">  
          </el-input>
        </p>
        <p>
          <button class="m_f_btn font-3 cur" @click="step(2)">下一步</button>
        </p>
      </div>
      <div v-else-if="action===3">
          <img :src="icon.good" alt="">
          <p class="font-3  margin-top20">恭喜您，{{e_name}}更改成功</p>
          <p class="margin-top20 hui-color font-1">五秒钟后跳转首页，{{time}} 。 <router-link to="/" class="font-1">立即跳转</router-link> </p>
      </div>
    </div>
  </div>
</template>

<script>
import { Steps, Step, Input, Button } from "element-ui";
import icon from "@/assets/icon/icon-good.png";
export default {
  name: "",
  data() {
    return {
      e_name:"密码",
      action: 1,
      mobile: "",
      icon: {
        good: icon
      },
      time: 5,
      timeFun:null
    };
  },
  components: {
    "el-steps": Steps,
    "el-step": Step,
    "el-input": Input,
    "el-button": Button
  },
  mounted() {},
  methods: {
    step(state) {
      switch (state) {
        case 1:
          this.action = 2;
          break;
        case 2:
          this.action = 3;
          this.allGood(5);
          break; 
      }
    },
    allGood(state=5) {
      this.time=state;
      this.timeFun = setInterval(() => {
        if (this.time == 0) {
          clearInterval(this.timeFun);
          this.$router.push("/");
          return;
        }
        this.time--;
      }, 1000);
    }
  },
  destroyed() {
    clearInterval(this.timeFun);
  }
};
</script>
<style lang="less" scoped>
@import "../../../styles/member.less";
.m_mobile_box {
  width: 350px;
  margin: 0 auto;
  padding: 38px 0 55px 0;
}
.m_mobile {
  padding-bottom: 70px;
}
.input_mobile {
  width: 300px;
}
</style>
