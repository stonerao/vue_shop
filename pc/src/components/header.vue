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
            <router-link to="/login" class="cur">登陆</router-link>
            <span href="javascript:void(0)">&nbsp;|&nbsp;</span>
            <router-link to="/reg" class="cur">注册</router-link>
          </div>
          <div class="relative">
            <router-link to="/member">我的{{name}}
              <i class="el-icon-caret-bottom"></i>
            </router-link>
            <div class="index-top-hover">
              <router-link to="/">订单</router-link>
            </div>
          </div>
          <div class="relative">
            <a href="javascript:void(0)">手机{{name}}
              <i class="el-icon-caret-bottom"></i>
            </a>
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
        <el-col :span="5">
          <div class="index-shop-cart cur">
            <i class="index-icon icon-shop-cart"></i>
            <router-link to="/cart">购物车</router-link>
            <i class="el-icon-caret-bottom"></i>
            <div class="index-shop_cart">
              <div class="shop_cart_list">
                <img v-lazy='  this.$Mock.Random.dataImage("50x50")' alt="">
                <div>
                  <p class="shop__text font-1">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat consectetur aliquid, voluptate veritatis qui earum error repellendus sapiente fuga perferendis nam minima velit nisi quia incidunt, quaerat hic nihil voluptates.
                  </p>
                  <p>
                    <b class="font-1 margin-left10 line">￥54.0</b>
                    <a class="font-1">x1</a>
                    <span class="cur font-1 float-right line cur">删除</span>
                  </p>
                </div>
              </div>
              <div class="cart_go overflow">
                <span class="font-1">共两件商品，总计4110.90远</span>
                <button class="font-1 float-right cur">去购物车</button>
              </div>
            </div>
          </div>
        </el-col>
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
              <li v-for="(item,index) in navs.items" :key="index" class="navs-items-hover">
                <div class="navs-imgbox"><img :src="item.icon" :alt="item.name"></div>
                <span>{{item.name}}</span>
                <div class="navs-items-group">
                  <ul>
                    <li v-for="item in 10" :key="item" :class="item===2?'active':''">
                      {{$Mock.Random.cword(3, 5)}}
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <ul class="nav-items">
          <router-link to="/index" tag="li">
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
            path: "/activity"
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
      this.searchClear().then(() => {
        this.$router.push({ name: "list", params: { a: 1 } });
      });
    },
    async searchClear() {
      this.serach.val = "";
      this.serach.items = [];
    },
    navView(e) {
      this.navs.listView = e;
    }
  },
  created() {},
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