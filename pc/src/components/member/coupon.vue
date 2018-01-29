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
      <li>
        <div>
          <p>优惠券</p>
          <p>￥<span>100</span></p>
          <p>满1000元可用</p>
          <p>2018-1-29 17:57:46</p>
        </div>
        <p><span>来源：</span>新人注册</p>
        <p><span>券号：</span>246465465464</p>
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
      state:0
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
      background:#fff;
    }
    li:hover{
      color: @color; 
      background:#fff;
    }
  }
  .coupon_nav_h{
    line-height:52px;
    margin-right:25px;
  }
}
</style>
