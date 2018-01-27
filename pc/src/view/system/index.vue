<template>
  <div class="main-box m-index"> 
      <el-breadcrumb separator-class="el-icon-arrow-right"  class="m-breadcrumb">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>活动管理</el-breadcrumb-item> 
      </el-breadcrumb>
      <div class="s-box"> 
        <l-menu :model="menue" class="s-menu menu-border float-left"/> 
        <router-view class="s-view menu-border float-right"></router-view>
      </div>
  </div>
</template>

<script>
import { Breadcrumb, BreadcrumbItem } from "element-ui";
import menus from "@/components/system/menu";
export default {
  data() {
    return {
      menue: [
        { name: "会员制度", path: "/member" },
        { name: "消息通知", path: "/member" },
        { name: "积分规则", path: "/member" },
        { name: "优惠券获取", path: "/member" },
        { name: "购物指南", path: "/member" },
        { name: "配送方式", path: "/member" },
        { name: "商家合作", path: "/member" }
      ]
    };
  },
  components: {
    "el-breadcrumb": Breadcrumb,
    "el-breadcrumb-item": BreadcrumbItem,
    "l-menu": menus
  }
};
</script>
<style lang="less" scoped> 
.s-box {
  .s-menu {
    width: 178px; 
  }
}
.s-view{
  width:975px; 
}
</style>
