<template>
  <div class="main-box">
        <el-breadcrumb separator-class="el-icon-arrow-right" class="m-breadcrumb">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{path: '/activity/index'}">活动中心</el-breadcrumb-item>
            <el-breadcrumb-item>限时抢购</el-breadcrumb-item>
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
                <p class="color-p">
                    剩余时间 13:23:23
                </p>
                <p  class="buy_btn buy_01">
                    <span class="buy_l">
                      <p class="buy_l_top"><em>¥</em>36.00</p>
                      <p class="buy_l_bottom">剩余8件
                        <el-progress :percentage="70" class="reset_progress" stroke-width="10" :show-text="istxt"></el-progress>
                      </p>
                    </span>
                    <router-link to='/' class="buy_r">立即抢购</router-link>
                </p>
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
    </div>
</template>
<script>
import { Breadcrumb, BreadcrumbItem ,Pagination, Progress} from "element-ui";

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
        background-image: url(../../assets/activity/r_back.png);
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
      .color-p{
        color: #666;
        margin:13px 0 25px 0;
        padding:0 25px;
      }
      .buy_btn{
        display: block;
        box-sizing: border-box;
        height:65px;
        .buy_l{
          display: block;
          float: left;
          width:149px;
          padding:12px 25px 10px 25px;
          .buy_l_top{
            font-size: 22px;
            margin-bottom:7px;
            em{font-size: 14px;font-style: normal;margin-right: 6px;}
          }
          
          .buy_l_bottom{
            font-size: 12px;
            color: #666;
          }
        }
        .buy_r{
          display: block;
          width:90px;
          height: 63px;
          line-height: 63px;
          float: right;
          text-align: center;
          color: #fff;
          font-size: 16px;
        }
      }
      .buy_01{
        @color_01:#e01321;
        border:1px solid @color_01;
        .buy_l_top{color:@color_01;}
        .buy_l_top em{color:@color_01;}
        .buy_r{background-color:@color_01; }
      }
      .buy_02{
        @color_02:#f3ac02;
        border:1px solid @color_02;
        .buy_l_top{color:@color_02;}
        .buy_l_top em{color:@color_02;}
        .buy_r{background-color:@color_02; }
      }
      .buy_03{
        @color_03:#b8b8b8;
        border:1px solid @color_03;
        .buy_l_top{color:@color_03;}
        .buy_l_top em{color:@color_03;}
        .buy_r{background-color:@color_03; }
      }
    }
  }
</style>