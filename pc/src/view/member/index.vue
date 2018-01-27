<template>
  <div class="main-box m-index"> 
      <el-breadcrumb separator-class="el-icon-arrow-right" class="m-breadcrumb">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>我的e菜市</el-breadcrumb-item> 
      </el-breadcrumb>
      <div class="m-box">
        <div class="m-menu float-left">
          <memu :model="memu" class="m-menu-view"/>
        </div>
        <router-view class="m-view float-right"></router-view>
      </div>
  </div>
</template>

<script>
import { Breadcrumb, BreadcrumbItem } from "element-ui";
import memu from "@/components/member/memu";
export default {
  data() {
    return {
      memu: [
        {
          name: "个人中心",
          path: "/",
          children: [{ name: "我的e菜市", path: "/index" }]
        },
        {
          name: "交易信息",
          path: "/",
          children: [
            { name: "我的订单", path: "/order" },
            { name: "我的优惠券", path: "/order" },
            { name: "我的积分", path: "/order" },
            { name: "商品收藏", path: "/order" },
            { name: "线下菜市收场", path: "/order" },
            { name: "购买过的商品", path: "/order" }
          ]
        },
        {
          name: "账户安全",
          path: "/",
          children: [
            { name: "账户余额", path: "/order" },
            { name: "个人资料", path: "/order" },
            { name: "账务安全", path: "/order" },
            { name: "收货地址", path: "/order" },
            { name: "收货自提柜子", path: "/order" }
          ]
        }
      ]
    };
  },
  components: {
    "el-breadcrumb": Breadcrumb,
    "el-breadcrumb-item": BreadcrumbItem,
    memu
  }
};
</script>

<style lang="less" scoped>
.m-index {
  .m-box {
    overflow: hidden;
  }
  .m-menu {
    width: 190px;
    border: 1px solid #eaeaea;
    padding: 28px 0;
  }
  .m-view {
    width: 958px;
  }
  .m-menu-view {
    padding-left: 40px;
  }
}
</style>
