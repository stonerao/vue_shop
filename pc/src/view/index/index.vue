<template>
	<div class="index"> 
    <!-- 顶部广告 -->
    <div class="index-top-advertising" v-if="imgs.advertising"> 
      <div class="advertising-img cur" :style="{'background-image': `url(${imgs.advertising})`}" @click="$store.commit('href','http://www.baidu.com')"></div>
      <img :src="icons.over" class="advertising-over cur" @click="imgs.advertising=null">
    </div>
    <div class="index-top">
      <div class="main-box"> 
        <div>
          <span>欢迎您光临</span>
          <a href="javascript:void(0)" class="color">e菜市</a>
        </div>
        <div class="float-right index-top-box">
          <div>
            <a href="javascript:void(0)">登陆</a>
            <span href="javascript:void(0)">&nbsp;|&nbsp;</span>
            <a href="javascript:void(0)">注册</a>
          </div>
          <div>
            <a href="javascript:void(0)">我的{{name}}<i class="el-icon-caret-bottom"></i></a>
          </div>
          <div>
            <a href="javascript:void(0)">手机{{name}}<i class="el-icon-caret-bottom"></i></a>
          </div>
        </div>
      </div>
    </div>

    <div class="index-search main-box"> 
      <el-row :gutter="10">
        <el-col :span="4" class="index-logo">  
          <a href="javascript:void(0)"><img :src="imgs.logo" alt="" class="width100 cur"> </a> 
        </el-col>
        <el-col :span="12" :offset="3">
          <div class="index-search-box">
            <div>
              <span class="color-b index-search-title">
                 商品
              </span>
            </div>
            <div class="overflow">
              <input class="index-search-inp float-left" type="text" placeholder="请输入您要搜索的商品关键字">
              <button class="color-b index-search-btn float-left cur">搜索</button>
            </div>
            <div class="index-search-pop">
              <span>热门搜索</span>
              <a href="javascript:void(0)">蔬菜</a>
            </div>
          </div> 
        </el-col>
        <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
      </el-row> 
    </div> 



	</div>
</template>
<script>
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
      }
    };
  },
  methods: {},
  created() {},
  components: {}
};
</script>
<style  lang="less" scoped>
@color: #f09f0b;
@h: 98px;
.index-top-advertising {
  position: relative;
  height: @h;
  .advertising-img {
    height: @h;
    width: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  .advertising-over {
    position: absolute;
    width: 32px;
    height: 32px;
    right: 55px;
    top: 10px;
  }
}
.index-top {
  height: 30px;
  line-height: 30px;
  overflow: hidden;
  background-color: #f5f5f5;
  border-bottom: 1px solid #e5e5e5;
  > div div {
    overflow: hidden;
    display: inline-block;
  }
  .index-top-box {
    > div {
      margin-left: 20px;
    }
    a,
    span {
      color: #5a5a5a;
      transition: all 0.2s;
    }
    a:hover {
      color: @color;
    }
  }
}
.index-search {
  padding-top: 22px; 
  .index-search-title {
    display: inline-block;
    line-height: 24px;
    height: 24px;
    width: 50px;
    text-align: center;
  }
  .index-search-inp,
  .index-search-btn {
    margin: 0;
    padding: 0;
    height: 38px;
    border: 1px solid @color;
    float: left;
  }
  .index-search-inp {
    @w:44px;
    width: 478px - @w;
    padding-left:@w;
    background-image:url(../../assets/index/search.png);
    background-repeat:no-repeat;
    background-size:20px auto;
    background-position:15px center;
  }
  .index-search-btn {
    width: 72px;
    height: 40px;
    transition: all 0.2s;
  }
  .index-search-btn:hover {
    background: #dd9c24;
    border-color: #dd9c24; 
  }
  .index-search-pop {
    width: 100%;
    overflow: hidden;
    line-height: 32px;
    span,
    a {
      font-size: 12px;
      color: #666;
     
    }
    a{
 margin-left:20px;
    }
  }
}
</style>