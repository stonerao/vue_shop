<template>
  <div>
    <!-- 顶部 -->
    <Headers/>
    <!-- banners -->
    <div class="index-banner"> 
      <el-carousel trigger="hover" height="540px">
        <el-carousel-item v-for="item in 4" :key="item">
           <img v-lazy="banner" alt="" class="index-banner-imgs">
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="index-box">
      <!-- 推荐商品 -->
      <div class="main-box index-recommend">
        <div class="recommend-navs">
          <div class="recommend-nav" v-for="(item,index) in recommend.list" :key="index" :class="{'active':recommend.index===item.state?true:false}" v-html="item.name"></div> 
        </div>
        <div class="recommend-items">
          <div class="recommend-item" v-for="(item,index) in recommend.items" :key="index">
            <div class="recommend-items-img" v-if="item.img">
              <img v-lazy="item.img" :alt="item.content">
            </div>
            <div class="recommend-items-text">
              <p v-html="item.content" class="recommend-items-content"></p>
              <p v-html="item.price" class="recommend-items-price"></p>
            </div>
          </div>
        </div>
      </div>
      <!-- 广告商品 -->
      <div class="main-box index-adv box-float shop-box" v-if="recommend.adv.img0"> 
        <div>
           <router-link to="/" > <img v-lazy="recommend.adv.img0.img"></router-link>
        </div>
        <div>
          <router-link to="/"> <img v-lazy="recommend.adv.img1.img"></router-link>
           <router-link to="/"> <img v-lazy="recommend.adv.img2.img"></router-link>
        </div>
        <div>
           <router-link to="/"> <img v-lazy="recommend.adv.img3.img"></router-link>
        </div>
      </div>  

      <div class="main-box shop1 shop-box" v-for="item in 5" :key="item">
        <div class="shop-nav"> 
          <img :src="require('../../assets/index/icon-b-1.png')" alt="" class="shop-nav-icon">
          <span class="shop-nav-title">精品蔬菜</span>
          <span  class="shop-nav-text hui-color">/为耕者牟利，为吃者造福/</span>
          <div class="shop-nav-more">
            <router-link to="/">新品上市</router-link>
            <router-link to="/">热销商品</router-link>
            <router-link to="/">推荐商品</router-link>
          </div>
        </div> 
        <div class="shop-group while-b">
          <div class="shop-group-rom">
            <div class="group-rom-img">
              <img v-lazy="$Mock.Random.dataImage('283x358')" alt="">
            </div>   
            <el-row class="group-rom-list">
              <el-col :span="8" v-for="item in 6" :key="item"><router-link to="/" class="group-rom-link">{{$Mock.mock('@cname')}}</router-link></el-col>
            </el-row>
          </div>
          <div class="shop-group-items">
            <el-row>
              <el-col :span="6" v-for="item in 8" :key="item" class="shop-group-e">
                <div class="shop-group-item">
                  <div class="shop-group-img img-center">
                    <img class="img-center" v-lazy="$Mock.Random.dataImage('200x180')">
                  </div>
                  <p class="text-over">{{$Mock.Random.csentence()}}</p>
                  <p class="red-color-porce">￥{{$Mock.Random.float(60, 100, 2, 2)}}</p>
                </div>
              </el-col>
            </el-row>
            
          </div>
        </div>

      </div>
  
    </div> 
  </div>
</template>

<script>
import Headers from "@/components/header";
import { Carousel, CarouselItem } from "element-ui";
 
export default {
  data() {
    return {
      banner: require("@/assets/index/banner.jpg"),
      recommend: {
        index: 0,
        list: [],
        items: [],
        adv: {}
      },
      shop:[]
    };
  },
  components: {
    Headers,
    "el-carousel": Carousel,
    "el-carousel-item": CarouselItem
  },
  mounted() {
    /* 推荐 */
    this.$http("/apis/indexRecommend").then(res => {
      if (res.data.code === 200) {
        const data = res.data.data;
        this.recommend.list = [];
        this.recommend.items = [];

        data.list.map((x, i) => {
          this.recommend.list.push({
            name: x.name,
            state: x.state
          });
        });
        data.items.map((x, i) => {
          this.recommend.items.push({
            content: x.content,
            price: x.price,
            img: x.img
          });
        });
        this.recommend.adv = data.adv;
      }
    });
  }
};
</script>

<style lang="less" scoped>
@import "../../styles/shop.less";
.while-b {
  background-color: #fff;
}
.box-float {
  overflow: hidden;
  > div,
  li,
  ul,
  p {
    float: left;
  }
}
@color: #f09f0b;
.index-banner {
  position: relative;
  .index-banner-imgs {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
}
.index-box {
  overflow: hidden;
  background-color: #f6f2e2;
  padding-bottom: 95px;
  padding-top: 100px;
}
.index-recommend {
  overflow: hidden;
  .while-b;
}
.recommend-navs {
  width: 100%;
  overflow: hidden;
  .recommend-nav {
    width: 25%;
    float: left;
    display: inline-block;
    line-height: 70px;
    font-size: 16px;
    text-align: center;
    cursor: pointer;
    background-image: url(../../assets/index/icon-b.png);
    background-repeat: no-repeat;
    background-position: center 50px;
    background-size: 14px auto;
    transition: all 0.2s;
  }
  .recommend-nav.active {
    background-image: url(../../assets/index/icon-b-active.png);
    color: @color;
  }
  .recommend-nav:hover {
    .recommend-nav.active;
  }
}
.recommend-items {
  overflow: hidden;
  width: 100%;
  .recommend-item {
    float: left;
    width: 25%;
    text-align: center;
    cursor: pointer;
  }
  .recommend-item:hover {
    box-shadow: 0 3px 10px 0 #aaa;
  }
  .recommend-items-text {
    line-height: 28px;
    margin-top: 10px;
    padding-bottom: 15px;
  }
  .recommend-items-price {
    color: #ff1f00;
    font-size: 16px;
  }
  .recommend-items-img {
    line-height: 230px;
    img {
      line-height: 230px;
      display: inline-block;
      vertical-align: middle;
    }
  }
}
.index-adv {
  img {
    width: 100%;
    margin: 0;
    padding: 0;
  }
  > div:first-child,
  > div:last-child {
    width: 354px;
    height: 100%;
    img {
      width: 354px;
      height: 474px;
    }
  }
  > div:nth-child(2) {
    width: 476px;
    a:last-child img {
      margin-top: 4px;
    }
    img {
      width: 476px;
      height: 234px;
    }
  }
  > div {
    margin-right: 8px;
  }
  > div:last-child {
    margin-right: 0;
  }
}
</style>
