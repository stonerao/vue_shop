<template>
	<div class="index"> 
        <!-- 顶部广告 -->
        <div class="index-top-advertising" v-if="imgs.advertising&&this.$route.name==='index'"> 
        <div class="advertising-img cur" :style="{'background-image': `url(${imgs.advertising})`}" @click="$store.commit('href','http://www.baidu.com')"></div>
        <img v-lazy="icons.over" class="advertising-over cur" @click="imgs.advertising=null">
        </div>
        <div class="index-top">
          <div class="main-box"> 
              <div>
              <span>欢迎您光临</span> 
                <router-link to="/member" class="color">e菜市</router-link>!
              </div>
              <div class="float-right index-top-box">
              <div>
                  <a href="javascript:void(0)">登陆</a>
                  <span href="javascript:void(0)">&nbsp;|&nbsp;</span>
                  <a href="javascript:void(0)">注册</a>
              </div>
              <div class="relative">
                  <router-link to="/member">我的{{name}}<i class="el-icon-caret-bottom"></i></router-link>
                  <div class="index-top-hover">
                    <router-link to="/">订单</router-link>
                  </div>
              </div>
              <div class="relative">
                  <a href="javascript:void(0)">手机{{name}}<i class="el-icon-caret-bottom"></i></a>
              </div>
              </div>
          </div>
        </div>

        <div class="index-search main-box"> 
        <el-row :gutter="10">
            <el-col :span="4" class="index-logo">  
            <router-link to="/" href="javascript:void(0)"><img :src="imgs.logo" alt="" class="width100 cur"> </router-link> 
            </el-col>
            <el-col :span="12" :offset="3">
            <div class="index-search-box">
                <div>
                <span class="color-b index-search-title">
                    商品
                </span>
                </div>
                <div class="overflow">
                <input class="index-search-inp float-left" type="text" v-model="serach.val" @input="serachInput" placeholder="请输入您要搜索的商品关键字">
                <button class="color-b index-search-btn float-left cur" @click="searchBtn">搜索</button>
                </div>
                <div class="index-search-pop">
                <span>热门搜索:</span>
                 <a href="javascript:void(0)">蔬菜</a>
                </div>
            </div> 
            <div class="index-search-list" v-if="serach.items.length>0"> 
                <ul>
                    <li class="text-over" v-for="(item,index) in serach.items" :key="index" @click="searchLink(item)">{{item.name}}</li>
                </ul>
            </div>
            </el-col>
            <el-col :span="5" class="overflow">
                <div class="index-shop-cart cur">
                    <i class="index-icon icon-shop-cart"></i>
                        <router-link to="/cart">购物车</router-link>
                    <i class="el-icon-caret-bottom"></i>
                </div></el-col>
        </el-row> 
        </div>  
        <div class="navs">
          <div class="main-box nav"> 
            <div class="nav-box" @mouseout="navView(false)" @mouseover="navView(true)">
              <div class="nav-title">
                <i class="index-icon icon-navs"></i>
                  全部商品分类
                <i class="index-icon icon-bom"></i>
              </div>
              <div class="navs-list" v-show="navs.listView">
              <ul class="navs-list-items">
                <li v-for="(item,index) in navs.items" :key="index">
                  <div class="navs-imgbox"><img :src="item.icon" :alt="item.name"></div> 
                  <span>{{item.name}}</span>
                </li>
              </ul>
            </div>
            </div> 
            <ul class="nav-items" v>
              <router-link to="/" tag="li">
                首页
              </router-link>
              <router-link v-for="(item,index) in navs.list" :to="item.path" tag="li" :key="index">
                {{item.name}}
              </router-link>
            </ul> 
        </div> 
      </div>
	</div>
</template>
<script>
import { navs } from "@/assets/index";
export default {
  data() {
    return {
      name: "e菜市",
      imgs: {
        advertising: require("@/assets/index/top.jpg"), //top 广告
        logo: require("@/assets/index/logo.png")
      },
      icons: {
        over: require("@/assets/index/icon-over.png") // over icon
      },
      serach: {
        val: "",
        items: []
      },
      navs: {
        list: [
          {
            name: "线下超市",
            path: "/shop"
          },
          {
            name: "活动中心",
            path: "/hd"
          },
          {
            name: "关于e市场",
            path: "/e"
          }
        ],
        items: navs,
        listView: false
      }
    };
  },
  methods: {
    serachInput(e) {
      if (this.serach.val === "") {
        return;
      }
      /* ajax */
      this.$http("/apis/indexSearchList", {
        srach: this.serach.val
      }).then(res => {
        if (typeof res.data.data.list !== "object") {
          return;
        }
        this.serach.items = res.data.data.list;
      });
    },
    searchLink(item) {
      /* 点击搜索后 清楚当前数据*/

      this.searchClear();
    },
    searchBtn() {
      /* 点击搜索 */
      this.searchClear();
    },
    async searchClear() {
      this.serach.val = "";
      this.serach.items = [];
    },
    navView(e) {
      this.navs.listView = e;
    }
  },
  created() {
     
  },
  components: {},
  watch: {
    ["serach.val"](val) {
      if (val === "") {
        this.serach.items = [];
      }
    }
  }
};
</script>
<style  lang="less" scoped>
@import "../styles/public.less";
</style>