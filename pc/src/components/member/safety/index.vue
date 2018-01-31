<template>
  <div class="border">
    <div class="m_nav font-4">基本资料</div>
    <div class="safety_items">
      <div class="safety_item" >
        <div class="item__left">您当前的账号</div>  
        <div class="float-left"  style="padding-left:18px">xiaohu</div>  
      </div> 

      <div class="safety_item">
        <div class="item__left _active">密码修改</div>  
        <div class="float-left hui-color">建议您可以定期修改密码，可以使账号更安全</div>  
        <div class="item__right">
          <router-link to="/member/safety/password">修改</router-link>
          <router-link to="/member/safety/password">忘记密码</router-link>
        </div>
      </div> 

      <div class="safety_item">
        <div class="item__left _active">支付密码</div>  
        <div class="float-left hui-color">建议您可以定期修改密码，可以使账号更安全</div>  
        <div class="item__right">
          <router-link to="/member/safety/pay">修改</router-link>
          <router-link to="/member/safety/password">忘记密码</router-link>
        </div>
      </div> 
      
      <div class="safety_item">
        <div class="item__left _active">绑定手机</div>  
        <div class="float-left hui-color">绑定手机：<span>18583671750</span>，若手机丢失或停用，请及时更换</div>  
        <div class="item__right">
          <router-link to="/member/safety/mobile">更换</router-link> 
        </div>
      </div> 

      <div class="safety_item">
        <div class="item__left _active">绑定邮箱</div>  
        <div class="float-left hui-color">绑定邮箱：<span>stoneraoy@gmail.com</span>，若绑定丢失或停用，请及时更换</div>  
        <div class="item__right"> 
           <router-link to="/member/safety/mail">更换</router-link> 
        </div>
      </div>  
    </div>
  </div>
</template>

<script> 
export default {
  name: "SafetyIndex",
  created() { 
  }
};
</script>
<style lang="less" scoped>
@import "../../../styles/member.less";
.safety_items {
  padding:0 20px 60px 20px;
  .safety_item {
    padding: 0 20px;
    border-bottom: 1px #eaeaea dashed;
    overflow: hidden;
    height: 84px;
    line-height: 94px;
  }
  .safety_item:first-child {
    border-bottom: 1px #cacaca solid;
  }
  .item__left {
    width: 155px;
    float: left;
  }
  .item__left._active{
    background-position:0 center;
    background-size:14px;
    background-image: url('../../../assets/icon/icon-ok.png');
    background-repeat:no-repeat;
    padding-left:18px;
  }
  .item__right{
    float: right;
    a,li{
      color:@color-g;
      border-right:2px solid #87b78ee6;
      padding:0 10px;
    }
    a:last-child,li:last-child{
      border-right:0;
    }
  }
}
</style>
