<template>
  <div class="main-box">
        <el-breadcrumb separator-class="el-icon-arrow-right" class="m-breadcrumb">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{path: '/activity/index'}">活动中心</el-breadcrumb-item>
            <el-breadcrumb-item>团购商品</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="flash_sale_box">
          <div class="flash_sale_title">
            <i v-for="(item,index) in titList" :key="index" :class="tit_ind==index?'sale_active':''" @click="tit_ind=index">{{item}}</i>
          </div>
          <div class="flash_sale_cont">
            <div v-for="item in 8" :key="item">
                <div>
                    <img v-lazy='$Mock.Random.dataImage("291px291")' alt="" class="img-center">
                </div>
                <p class="goods_text">
                    绿鲜知 上海青 小油菜 约400g 火锅刷菜 新鲜蔬菜 
                </p>
                <div class="join_pro">
                  <el-progress :percentage="70"  :stroke-width="10" :show-text="istxt"></el-progress>
                </div>
                <p class="join_info">
                    <span>已参团 12</span>
                    <span>总数 30</span>
                </p>
                <div class="ac_box_all">
                  <div class="ac_box_all_pirce">
                      <div>
                          <span>￥</span>
                          <span class="font-6">98.0</span>
                      </div>
                      <div>
                          <p class="font-1 text-through">距活动开始</p>
                          <p class="font-1">13：23：23</p>
                      </div>
                  </div>
                  <router-link to="/commodity/details" class="ac_box_all_btn cur">
                      参团
                  </router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="o_page">
          <el-pagination class="center"
            background
            @size-change="pageSize"
            @current-change="curChange"
            :current-page.sync="page.curpage"
            :page-size="page.size"
            layout="prev, pager, next, jumper"
            :total="page.total">
          </el-pagination>
      </div> 
      <div class="cover_back">
        <img src="../../assets/activity/back_img.png" alt="">
      </div>
    </div>
</template>
<script>
import { Breadcrumb, BreadcrumbItem ,Pagination, Progress} from "element-ui";
import "../../styles/common.css";

export default {
  components: {
    "el-breadcrumb": Breadcrumb,
    "el-breadcrumb-item": BreadcrumbItem,
    "el-pagination": Pagination,
    "el-progress" : Progress
  },
  data(){
    return{
      titList:['即将开始','正在进行','已结束'],
      tit_ind:1,
       /* 页数 */
      page: {
        curpage: 3,
        total: 100,
        size: 10
      },
      istxt:false
    }
  },
  methods:{
    pageSize(e) {
      /* 页数发生改变的时候 */
    },
    curChange(e) {
      /* 翻页 */
    }
  }

};
</script>
<style lang="less" scoped>
  @back:#fff;
  @tg_color: #ff366b;
  .flash_sale_box{
    .flash_sale_title{
      background-color: @back;
      margin-bottom: 20px;
      i{
        display:inline-block;
        height:54px;
        line-height:54px;
        width:170px;
        text-align: center;
        font-size: 24px;
        font-weight: bold;
        background-repeat: no-repeat;
        background-position: left top;
        background-size: 100%; 
        cursor: pointer;
      }
      .sale_active{
        background-image: url(../../assets/activity/p_back.png);
        color: #fff;
      }
    }
    .flash_sale_cont{
      width:1212px;
      &:after{
        content: '';
        visibility: hidden;
        display: block;
        clear: both;
      }
      >div{
        background-color: @back;
        width:291px;
        float: left;
        margin-right: 12px;
        margin-bottom: 20px;
        overflow: hidden;
      }
      .goods_text{
        height: 44px;
        line-height:22px;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        margin:5px 0;
        font-size: 14px;
        padding:0 25px;
      }
      .join_info{
        color: #666;
        margin:6px 0 16px 0;
        padding:0 25px;
        font-size: 12px;
        span:last-child{
          float:right;
        }
      }
      
    }
  }
.ac_box_all {
  height: 50px;
  background: @tg_color;
}
.ac_box_tg {
  background: @tg_color;
}
.ac_box_all_pirce{
    display:inline-block;
    width:152px;
    height:50px;
    color:#fff;
    padding:0 22px 0 26px;
    span,a,p{
        color:#fff;
    }
    >div:first-child{
        width:78px;
        overflow: hidden;
        height: 50px;
        line-height:50px;
        float: left;
        // padding-left:2px;
        >span:last-child{
            position: relative;
            left:-5px;
        }
    }
    >div:last-child{
        width:68px;
        overflow: hidden;
        line-height:20px;
        font-size:12px;
        padding-top:5px;
        text-align: right;
    }
    >div{
        display:inline-block;
    }
    .font-6{
      font-size: 22px;
    }
}
.ac_box_all_btn{
    display:inline-block;
    width:90px;
    text-align:center;
    line-height:50px;
    color:#e71514;
    background:#ffed64;
    font-size:18px;
    float:right; 
}
.cover_back{
  z-index:-9999;
  position: fixed;
  top:0;
  left:0;
  img{width:100%;}
}
</style>