<template>
  <div class="main-box m-index"> 
      <el-breadcrumb separator-class="el-icon-arrow-right" class="m-breadcrumb">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>我的e菜市</el-breadcrumb-item> 
      </el-breadcrumb>
      <div class="m-box">
        <div class="m-menu menu-border float-left">
          <menus :model="menu" class="m-menu-view"/>
        </div>
        <router-view class="m-view float-right"></router-view>
      </div>
  </div>
</template>

<script>
import { Breadcrumb, BreadcrumbItem } from "element-ui";
import menu from "@/components/member/menu";
export default {
  data() {
    return {
      menu: [
        {
          name: "个人中心",
          path: "/",
          children: [{ name: "我的e菜市", path: "/index" }]
        },
        {
          name: "交易信息",
          path: "/order",
          children: [
            { name: "我的订单", path: "/order" },
            { name: "我的优惠券", path: "/coupon" },
            { name: "我的积分", path: "/integral" },
            { name: "商品收藏", path: "/collection" },
            { name: "线下菜市收藏", path: "/superCollection" },
            { name: "购买过的商品", path: "/parst" }
          ]
        },
        {
          name: "账户安全",
          path: "/month",
          children: [
            { name: "账户余额", path: "/month" },
            { name: "个人资料", path: "/information" },
            { name: "账户安全", path: "/safety" },
            { name: "收货地址", path: "/address" },
            { name: "收货自提柜子", path: "/cabinet" }
          ]
        }
      ]
    };
  },
  components: {
    "el-breadcrumb": Breadcrumb,
    "el-breadcrumb-item": BreadcrumbItem,
    menus: menu
  },
  mounted () { 
    console.log(this.$route)
  }
};
</script>

<style lang="less">
.m-index {
  .m-box {
    overflow: hidden;
    margin-bottom: 40px;
  }
  .m-menu {
    width: 190px;
    padding: 28px 0;
  }
  .m-view {
    width: 970px;
  }
}
.m-menu-view {
  > li {
    > span {
      padding-left: 40px;
    }
    > .m-memu-children {
      .active {
        border-left: 3px solid #f09f0b;
        span {
          color: #f09f0b;
        }
      }
      li {
        border-left: 3px solid transparent;
        padding-left: 37px;
      }
    }
  }
}
</style>
