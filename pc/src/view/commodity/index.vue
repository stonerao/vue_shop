<template>
  <div class="main-box commodity" >
        <div class="relatvie">
            <el-breadcrumb separator-class="el-icon-arrow-right" class="m-breadcrumb">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item class="common__h">
                    <span>精品果蔬</span>  
                    <ul class="absolute common__h_list" v-if="h_list">
                        <li v-for="(item,index) in hoverNavs" :key="index">{{item.name}}</li>
                    </ul>
                </el-breadcrumb-item> 
                <el-breadcrumb-item><span class="color cur">叶菜类</span></el-breadcrumb-item> 
            </el-breadcrumb> 
           
        </div>
        
      <router-view></router-view>
  </div>
</template>

<script>
import { Breadcrumb, BreadcrumbItem } from "element-ui";
import { navs } from "@/assets";
export default {
  name: "Commodity",
  data() {
    return {
      hoverNavs: navs,
      h_list:true
    };
  },
  components: {
    "el-breadcrumb": Breadcrumb,
    "el-breadcrumb-item": BreadcrumbItem
  }
};
</script>
 
<style lang="less" scoped>
@import "../../styles/base.less";
.commodity {
  min-height: 400px;
}
.relatvie {
  position: relative;
  .absolute {
    position: absolute;
  }
  .common__h_list {
    background: #fff;
    border-radius: 4px;
    border: 1px solid #eaeaea;
    top: 32px;
    left: 30px;
    display: none;
    transition:all .2s;
    height:0;
    overflow:hidden;
    li {
      line-height: 34px;
      cursor: pointer;
      padding: 0 20px;
    }
    li:hover {
      background: #f7f7f7;
    }
  } 
  .common__h:hover{
      .common__h_list{
          display:block;
          height:auto;
      }
  }
}
</style>
