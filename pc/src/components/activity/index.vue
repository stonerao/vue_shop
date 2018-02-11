<template>
    <div class="main-box">
        <el-breadcrumb separator-class="el-icon-arrow-right" class="m-breadcrumb">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>我的e菜市</el-breadcrumb-item>
        </el-breadcrumb>
        <!--  -->
        <div class="ac_banner">
            <img v-lazy='$Mock.Random.dataImage("1200x350")' alt="">
        </div>
        <div class="ac_list_banner margin-top30">
            <div>
                <img v-lazy='$Mock.Random.dataImage("390x177")' alt="">
            </div>
            <div>
                <img v-lazy='$Mock.Random.dataImage("390x177")' alt="">
            </div>
            <div>
                <img v-lazy='$Mock.Random.dataImage("390x177")' alt="">
            </div>
        </div>
        <div class="ac_box">
            <div class="ac_box_title ac_box_j margin-top30">
                <i class="_title">积分换购</i>
                <router-link to="/activity/exchange" class="float-right more_ac">查看更多</router-link>
            </div>
            <div class="integral_list">
                <div v-for="item in 5" :key="item">
                    <div>
                        <img v-lazy='$Mock.Random.dataImage("200px200")' alt="" class="img-center">
                    </div>
                    <p class="integral_text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptatem asperiores architecto, cum et rerum facilis qui deserunt minima quaerat placeat officia ullam exercitationem minus veritatis. Voluptatem animi praesentium eos!
                    </p>
                    <p class="color-p font-4 center">
                        188积分
                    </p>
                    <p>
                        <router-link to='/' class="integral_btn ac_box_j">立即抢购</router-link>
                    </p>
                </div>
            </div>
        </div>

        <div class="ac_box">
            <div class="ac_box_title ac_box_q margin-top30">
                <i class="_title">显示抢购</i>
                <div class="ac_box_time  ">
                    <span class="font-3">还剩</span>
                    <span class="ac_box_inter">
                        <a>05</a>
                        <span>:</span>
                        <a>22</a>
                        <span>:</span>
                        <a>36</a>
                    </span>
                    <span class="font-3">结束</span>
                </div>
                <router-link to="/commodity" class="float-right more_ac">查看更多</router-link>
            </div>
            <div class="integral_list">
                <div v-for="item in 5" :key="item">
                    <div>
                        <img v-lazy='$Mock.Random.dataImage("200px200")' alt="" class="img-center">
                    </div>
                    <p class="integral_text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptatem asperiores architecto, cum et rerum facilis qui deserunt minima quaerat placeat officia ullam exercitationem minus veritatis. Voluptatem animi praesentium eos!
                    </p>
                    <p class="color-p font-4 center">
                        188积分
                    </p>
                    <div class="ac_box_qg">
                        <div class="ac_box_qg_i">
                            <p>
                                <span>
                                    <a class="font-1 color-p">￥</a>
                                    <a class="font-3 color-p">188.00</a>
                                </span>
                                <span>
                                    <a class="font-1">￥80.00</a>
                                </span>
                            </p>
                            <div class="ac_box_qg_jdt">
                                <span class="font-1">
                                    已售120%
                                </span>
                                <div class="ac_box_qg_jd">
                                    <div :style="{'width':`${50/60}%`}"> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="ac_box_qg_btn cur">
                            立即抢购
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Breadcrumb, BreadcrumbItem } from "element-ui";
export default {
  components: {
    "el-breadcrumb": Breadcrumb,
    "el-breadcrumb-item": BreadcrumbItem
  }
};
</script>

<style lang="less" scoped>
@import "../../styles/base.less";
.ac_box_qg {
  border: 1px solid @color;
  overflow: hidden;
  margin-top:5px;
  .ac_box_qg_i {
    width: 135px;
    display: inline-block;
    padding-left:5px; 
  }
  .ac_box_qg_btn {
    display: inline-block;
    width: 35px;
    padding: 10px;
    background:@color;
    color:#fff;
    text-align:center;  
  }
  .ac_box_qg_jd{
      margin-left:5px;
      background:#ccc;
      height:5px;
      width:60px;
      display:inline-block;
      position: relative;
      top:-2px;
  }
  .ac_box_qg_jd>div{
      background-color:@color; 
      height:5px;
      min-width:5px;
      float:left;
  }
  .ac_box_qg_jdt{
      position: relative;
      top:3px;
  }
}
.integral_list {
  border: 1px solid #ddd;
  padding: 20px 10px;
  overflow: hidden;
  > div {
    width: 201px;
    margin: 0 17px;
    float: left;
  }
}
.integral_btn {
  font-size: 12px;
  display: inline-block;
  border-radius: 4px;
  width: 100%;
  line-height: 30px;
  color: #fff;
  text-align: center;
  margin-top: 8px;
}
.integral_btn:hover {
  @colors: #30b763;
  background-color: @colors*0.8;
}
.integral_text {
  height: 30px;
  line-height: 16px;
  font-size: 12px;
  overflow: hidden;
  margin-top: 5px;
  margin-bottom: 5px;
}
.ac_box_j {
  background-color: #30b763;
}
.ac_box_q {
  background-color: @color;
}
.ac_box {
  .ac_box_time {
    display: inline-block;
    margin-left: 90px;
  }
  .ac_box_title {
    border-radius: 22px 22px 0 0;
    padding: 0 25px;
    line-height: 80px;
    height: 80px;
    max-width: 100%;
    .ac_box_inter {
      color: #222;
      line-height: 46px;
      padding: 0 10px;
      > span {
        color: #222;
        font-size: 32px;
      }
      > a {
        color: #fff;
        margin: 0 2px;
        display: inline-block;
        height: 46px;
        line-height: 46px;
        background: #222;
        font-size: 26px;
        padding: 0 6px;
      }
    }
    a,
    span,
    li,
    i {
      line-height: 80px;
      color: #fff;
    }
  }
  ._title {
    font-size: 32px;
    color: #fff;
  }

  .more_ac {
    font-size: 16px;
  }
}
.ac_banner {
  width: 100%;
  max-width: 1200px;
}
.ac_list_banner {
  height: 177px;
  > div {
    width: 390px;
    height: 177px;
    display: inline-block;
    float: left;
    margin-right: 15px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  > div:last-child {
    margin-right: 0;
  }
}
</style>
