<template>
  <div class="recharge">
    <div class="re-money re-item">
      <p class="title">选择充值金额</p>
      <ul class="re-money-item">
        <li v-for="(m_item,index) in mon" :key="index">
          <span>{{m_item.num}}</span>元
          <div class="act-show">
            <img src="../../../assets/member/pay3.png" alt="">
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
//* 充值 */
export default {
  data(){
    return{
      mon:[
        {num:'10'},
        {num:'20'},
        {num:'50'},
        {num:'100'}
      ]
    }
  }
};
</script>
<style lang="less" scoped>
.border{
  border:1px solid #eaeaea;
}
@color: #f09f0b;
@f8-color:#f8f8f8;
.recharge{
  .border;
  padding-left: 55px;
  .re-item{
    margin-top: 50px;
  }
  .title{
    font-size: 18px;
    margin-bottom: 20px;
    color:#333;
  }
  .re-money-item{
    li{
      display: inline-block;
      width: 130px;
      height: 60px;
      border: 1px solid #ddd;
      color:@color;
      border-radius: 5px;
      text-align: center;
      line-height: 60px;
      background-color: @f8-color;
      margin-right: 30px;
      position: relative;
      span{
        color:@color;
        font-size: 22px;
        font-weight: 600;
        padding-right: 5px;
      }
      .act-show{
        width: 0; 
        height: 0; 
        border-bottom: 30px solid @color; 
        border-left: 30px solid transparent;
        position: absolute;
        bottom: 0;
        right: 0;
      }
    }
  }
}
</style>
