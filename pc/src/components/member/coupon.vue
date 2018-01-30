<template>
  <div class="border">
    <div class="coupon_nav overflow">
      <ul class="overflow float-left">
        <li @click="state=index" class="float-left font-3 cur tran" :class="{'active':index===state}" v-for="(item,index) in navs" :key="index">
          {{item.name}}
        </li>
      </ul>
      <router-link to="/" class="float-right hui-color coupon_nav_h">
        优惠券领取说明
      </router-link>
    </div>
    <ul class="coupon_items">
      <li class="coupon__type_1 cur" v-for="item in 10" :key="item">
        <div class="coupon__action_1 coupon__action_b center">
          <p class="coupon__action_font margin-top30">优惠券</p>
          <p class="while-f coupon__action_price">￥<span class=" while-f">100</span></p>
          <p class="while-f">满1000元可用</p>
          <p class="coupon__action_font coupon__action_time">2018-1-29 17:57:46</p>
        </div>
        <p class="line font-1"><span class="font-1">来源：</span>新人注册</p>
        <p class="line font-1"><span class="font-1">券号：</span>246465465464</p>
        <p class="center coupon_btn">
          <a href="#" class="coupon__btn coupon__btn_1">立即使用</a>
        </p>
      </li>  

       <li class="coupon__type_2 cur">
        <div class="coupon__action_2 coupon__action_b center">
          <p class="coupon__action_font margin-top30">优惠券</p>
          <p class="while-f coupon__action_price">￥<span class=" while-f">100</span></p>
          <p class="while-f">满1000元可用</p>
          <p class="coupon__action_font coupon__action_time">2018-1-29 17:57:46</p>
        </div>
        <p class="line font-1"><span class="font-1">来源：</span>新人注册</p>
        <p class="line font-1"><span class="font-1">券号：</span>246465465464</p>
        <p class="center coupon_btn">
          <a href="#" class="coupon__btn ">立即使用</a>
        </p>
      </li> 
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navs: [
        { name: "全部", state: 0 },
        { name: "未使用", state: 1 },
        { name: "已使用", state: 2 }
      ],
      state: 0
    };
  }
};
</script>
<style lang="less" scoped>
@color: #f09f0b;
.coupon_nav {
  background: #f4f4f4;
  overflow: hidden;
  ul {
    li {
      line-height: 50px;
      padding: 0 50px;
      border-top: 3px solid transparent;
    }
    li.active {
      color: @color;
      border-color: @color;
      background: #fff;
    }
    li:hover {
      color: @color;
      background: #fff;
    }
  }
  .coupon_nav_h {
    line-height: 52px;
    margin-right: 25px;
  }
}
.coupon_items {
  @w: 217px;
  overflow: hidden;
  padding-left: 10px;
  padding-bottom:20px;
  li {
    width: @w;
    height: 324px;
    background: #f9f9f9;
    float: left;
    margin-left: 15px;
    margin-top:20px;
    transition: all .2s;
    border-radius:2px;
  }
  li:hover{
    box-shadow:0 3px  10px 0 #aaa;
  }
  .coupon__action_b::after {
    position: absolute;
    content: " ";
    width: 44px;
    height: 44px;
    background: #fff;
    border-radius: 50%;
    top: 0;
    left: 50%;
    transform: translate(-50%, -25px);
  }
  .coupon__action_b::before {
    position: absolute;
    content: " ";
    width: 100%;
    height: 2px;
    background-image: url("../../assets/icon/coupon_oi.png");
    bottom: 0;
    left: 0;
    background-repeat: repeat-x;
    background-size: 8px auto;
  }
  .line {
    padding-left: 18px;
  }
  .coupon__action_b {
    overflow: hidden;
    height: 184px;
    width: @w;
    position: relative;
    margin-bottom: 15px;
    .coupon__action_font {
      font-size: 12px;
    }
    .coupon__action_price {
      padding: 20px 0 8px 0;
      span {
        font-size: 28px;
        font-weight: 700;
      }
    }

    .coupon__action_time {
      margin-top: 35px;
    }
  }
  .coupon__action_1 {
    @back: #fe7352, #ef9e0b;
    background-color: #fe7352;
    background-color: -prefix-linear-zgradient(top, @back);
    background: linear-gradient(to bottom, @back);
    .coupon__action_font {
      color: #742600;
    }
  }
  .coupon__action_2 {
    @back: #b2b2b2, #d3d4d3;
    background-color: #b2b2b2;
    background-color: -prefix-linear-zgradient(top, @back);
    background: linear-gradient(to bottom, @back);
    .coupon__action_font {
      color: #666;
    }
  }

  .coupon__type_1 {
    @color1: #fe7352;
    .coupon_btn {
      .coupon__btn {
        border-color: @color1;
        color: @color1;
      }
      .coupon__btn:hover {
        background: @color1;
        color: #fff;
      }
    }
  }
  .coupon__type_2 {
    .coupon_btn {
      @color1: #999;
      .coupon__btn {
        border-color: @color1;
        color: @color1;
      }
      .coupon__btn:hover {
        background: @color1;
        color: #fff;
      }
    }
  }
  .coupon_btn {
    margin-top: 21px;
    .coupon__btn {
      display: inline-block;
      line-height: 32px;
      border: 1px solid transparent;
      width: 120px;
      border-radius: 16px;
      color: #f9f9f9;
    }
  }
}
</style>
