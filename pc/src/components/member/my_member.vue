<template>
  <div class="m-my">
    <div class="menu-border m-my-details"> 
      <div class="my-info">
        <div class="my-info-infos">
          <div class="my-info-avatar center">
            <img class="img-center img-avatar" v-lazy="$Mock.Random.dataImage('90x90')"> 
          </div> 
          <div class="my-experience">
              <div class="m-experience" :style="{'width':`${experience}%`}"></div>
          </div>
          <p class="text-right my-vip">V2</p>
        </div>
        <ul class="my-info-items">
          <li><span>小虎</span></li>
          <li><span>普通会员</span><router-link to="/" class="hui-color float-right">会员制度</router-link> </li>
          <li><span>18583671750</span><router-link to="/" class="hui-color float-right">修改手机</router-link></li>
          <li><span>系统消息(2)</span></li>
        </ul>
        <div></div>
      </div>
      <div class="my-groups">
        <div class="my-group center">
          <p>账户余额</p>
          <p class="my-groups-price">￥999.00</p>
          <p><router-link to="/t" class="m-btn my-group-btn">充值</router-link></p>
        </div>
       <div class="my-group center">
          <p>我的积分</p>
          <p class="my-groups-price">￥100</p>
          <p><router-link to="/t" class="m-btn my-group-btn">兑换</router-link></p>
        </div>
        <div class="my-group center">
          <p>我的优惠券</p>
          <p class="my-groups-price">3张</p>
          <p><router-link to="/t" class="m-btn my-group-btn">查看</router-link></p>
        </div>
      </div>
    </div>  

    <!-- 订单 -->
    <div class="my-order top25 menu-border">
      <div class="my-order-nav overflow">
        <span class="font-1">我的订单</span>
        <router-link to="/test"  class="font-1 float-right">全部订单</router-link>
      </div>
      <table class="my-order-table">
        <tr class="height-183">
          <td class="width-185 center">
            <div class="my__order_code"> 
              <p>订单号：859911111111</p>
              <p class="hui-color">2018-1-27 17:12:16</p>
            </div>
          </td>
          <td class="width-395 my__order_img" >
            <img class="img-center img-avatar" v-lazy="$Mock.Random.dataImage('105x105')" v-for="i in 3" :key='i'> 
          </td>
          <td class="width-107 center">
            <p style="line-height:183px;" class="color-g my_order__line"> 已支付</p> 
          </td>
          <td class="width-130 center ">
            <div class="my_order_shop">
            <p>5物件商品</p>
            <p class="my_order_shop_price red-color-porce">￥1050.00</p>
            </div>
          </td>
          <td class="width-120 ">
            <div class="my_order__btn"> 
            <router-link to="/" class="m_btn margin-bottom10 btn_type_1">再次购买</router-link>
            <p class="margin-bottom10 margin-top5"> <router-link to="/" class=" font-1">查看详情</router-link></p>
            <p class="margin-bottom10 margin-top5"><router-link to="/" class=" font-1">再次购买</router-link></p>
            </div>
          </td>
        </tr> 
        <tr class="height-183">
          <td class="width-185 center">
            <div class="my__order_code"> 
              <p>订单号：859911111111</p>
              <p class="hui-color">2018-1-27 17:12:16</p>
            </div>
          </td>
          <td class="width-395 my__order_img" >
            <img class="img-center img-avatar" v-lazy="$Mock.Random.dataImage('105x105')" v-for="i in 3" :key='i'> 
          </td>
          <td class="width-107 center">
            <p style="line-height:183px;" class="color-g my_order__line"> 已支付</p> 
          </td>
          <td class="width-130 center ">
            <div class="my_order_shop">
            <p>5物件商品</p>
            <p class="my_order_shop_price red-color-porce">￥1050.00</p>
            </div>
          </td>
          <td class=" ">
            <div class="my_order__btn"> 
            <router-link to="/" class="m_btn margin-bottom10 btn_type_1">再次购买</router-link>
            <p class="margin-bottom10 margin-top5"> <router-link to="/" class=" font-1">查看详情</router-link></p>
            <p class="margin-bottom10 margin-top5"><router-link to="/" class=" font-1">再次购买</router-link></p>
            </div>
          </td>
        </tr>
      </table>
      
    </div>


    <div class="my-order top25 menu-border">
      <div class="my-order-nav overflow">
        <span class="font-1">购买过的商品</span>
        <router-link to="/test"  class="font-1 float-right">查看全部商品</router-link>
      </div>
      <table class="my-order-table">
        <tr class="height-183">
          <td class="width-495">
            <div class="my__order_info "> 
              <div class="my__order_img i-b float-left">
                <img class="img-center img-avatar" v-lazy="$Mock.Random.dataImage('134x134')" alt="">
              </div>
              <div class="i-b width-250 line ">
                <p>
                  海南精品水果，超级好吃，超级好吃海南精品水果，超级好吃
                </p>
                <p class="my_order_shop_price red-color-porce">￥1050.00</p>
              </div>
            </div>
          </td>
         
          <td class=" center width-155">
            <p class="hui-color margin-top60">购买过</p> 
            <p class="margin-top20">2次</p>
          </td> 
          <td class=" center width-155">
            <p style="line-height:183px;" class="  my_order__line " :class="{'color-g':true}">销售中</p> 
          </td> 
          <td  class="width-155">
            <div class="my_order__btn "> 
            <router-link to="/" class="m_btn margin-bottom10 btn_type_1">再次购买</router-link>
            <p class="margin-bottom10 margin-top5"> <router-link to="/" class=" font-1">查看详情</router-link></p>
            <p class="margin-bottom10 margin-top5"><router-link to="/" class=" font-1">再次购买</router-link></p>
            </div>
          </td>
        </tr> 
         
      </table>
      
    </div>
  </div>
</template>

<script>
import { Loading } from "element-ui";
export default {
  data() {
    return {
      experience: 0 /* 经验值 */
    };
  },
  mounted() {
    this.experience = 50;
    let loadingInstance = Loading.service({
      lock: true,
      text: "正在加载中，请稍等",
      background: "rgba(0, 0, 0, 0.7)"
    });
    setTimeout(() => {
      loadingInstance.close();
    }, 500);
  } 
};
</script>

<style lang="less" scoped>
@import "../../styles/member.less";
@color: #f09f0b;
@color-g: #29b43d;
.m-my {
  @h: 136px;
  .my-order { 
   
  }
  .m-my-details {
    padding: 30px 0;
    overflow: hidden;
    > div {
      height: @h;
      float: left;
    }
    .my-info {
      width: 445px;
      overflow: hidden;
    }
    .my-groups {
      overflow: hidden;
    }
    .my-group {
      border-left: 1px dashed #eaeaea;
      width: 170px;
      height: @h;
      float: left;
      line-height: 40px;
    }
    .my-groups-price {
      margin: 10px 0;
      color: @color;
      font-size: 18px;
      font-weight: 700;
    }
    .my-info-infos {
      margin-left: 30px;
      width: 130px;
      float: left;
    }
    .my-info-avatar {
      width: 130px;
      .img-avatar {
        width: 90px;
        height: 90px;
        border-radius: 50%;
        box-shadow: 0 2px 5px #ccc;
      }
    }
    .my-experience {
      @he: 8px;
      background: #eee;
      width: 130px;
      height: @he;
      border-radius: @he / 2;
      margin-top: 20px;
      overflow: hidden;
      .m-experience {
        min-width: 10px;
        width: 10px;
        border-radius: @he / 2;
        height: @he;
        background: @color;
        transition: all 0.3s;
      }
    }
    .my-vip {
      font-size: 12px;
      line-height: 24px;
      font-style: italic;
      color: #b4a078;
    }
  }
  .my-info-items {
    float: left;
    line-height: 25px;
    font-size: 12px;
    margin-left: 40px;
    li {
      overflow: hidden;
      width: 200px;
      margin-bottom: 10px;
    }
    li,
    a {
      font-size: 12px;
    }
  }
  .my-group-btn {
    color: @color-g;
  }
  .my-group-btn.active {
    background: @color-g;
    color: #fff;
  }
  .my-group-btn:hover {
    background: @color-g;
    color: #fff;
  }
}

</style>