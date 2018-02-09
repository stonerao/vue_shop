<template>
  <div class="de_box">
    <div class="de_head">
      <div class="de_head_com">
        <div class="de_head_img">
          <vue-magnify :previewImg="magnify.min" :zoomImg="magnify.max" :width="magnify.width" :height="magnify.height"></vue-magnify>
        </div>
        <ul class="de_head_imgs">
          <li v-for="(item,index) in items" :key="index" @click="imgState=index">
            <img v-lazy='$Mock.Random.dataImage("110x110")' alt="">
          </li>
        </ul>
      </div>
      <div class="de_head_info">
        <div class="de_head_title lin_36 font-4">
          i architecto nihil, sunt doloremque. Eveniet, dicta repellat.
        </div>
        <p class="hui-color line margin-top20">
          <span>商业编号：</span>
          <span>654654654654</span>
        </p>
        <div class="de_head_price">
          <p>
            <span>零售价：</span>
            <span class="red-color margin-left20">
              <a class="red-color">￥</a>
              <a class="red-color font-5">19.00</a>
            </span>

          </p>
          <p>
            <span>会员价：</span>
            <span class=" margin-left20 p-color">
              <a class=" p-color">￥</a>
              <a class="p-color font-5">19.00</a>
            </span>
          </p>
        </div>
        <div class="de_nums">
          <span class="lin_36">数量：</span>
          <div class="r_number margin-left10">
            <div class="r_number_btn" @click="num>1?num--:''">
              -
            </div>
            <div class="r_number_inp">
              <input type="text" v-model="num">
            </div>
            <div class="r_number_btn" @click="num++">
              +
            </div>
          </div>
        </div>
        <!-- btn -->
        <div class="de_head_btns">
          <button class="btn btn-g">立即购买</button>
          <button class="btn btn-c margin-left10">加入购物车</button>
        </div>
        <p class="de-head_s">
          收藏商品
        </p>
      </div>

    </div>

    <div class="overflow">
      <!-- left -->
      <div class="de_box_left">
        <div class="de_box_title">
          推荐商品
        </div>
        <div v-for="item in 10" :key="item" class="de_box_list">
          <div>
            <img v-lazy="$Mock.Random.dataImage('400x400')" alt="">
          </div>
          <p class="center shop__text lin_36">上海青 小油菜 400kg 可火锅 新鲜</p>
          <p class="center font-3 red-color lin_36">￥15.00</p>
        </div>
      </div>
      <!-- right -->
      <div class="de_box_right">
        <div class="de_r_title">
          <span :class="{'active':tabIndex===0}" @click="tabIndex=0">商品详情</span>
          <span class="" :class="{'active':tabIndex===1}" @click="tabIndex=1">商品评价</span>
        </div>
        <div class="main-edito" v-if="tabIndex===0">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi nam nihil nulla exercitationem sequi. Quos, impedit dolore nobis quod eum excepturi natus veniam pariatur inventore iste suscipit possimus unde voluptas.
        </div>
        <div class="de-r" v-if="tabIndex===1">
          <div class="de_r_head">
            <div class="de_r_stat">
              <p class="de_r_stat_title font-3">总体满意</p>
              <p class="de_r_stat_price">4.8</p>
              <p class="de_r_stat_s">
                <img :src="item<=stateIcon.state?stateIcon.icon1:stateIcon.icon" alt="" v-for="item in 5" :key="item" class="cur">
              </p>
              <p>评论人数</p>
            </div>
            <div class="de_r_num">
              <ul>
                <li>
                  <div>好评</div>
                  <div>
                    <img :src="item<=stateIcon.state?stateIcon.icon1:stateIcon.icon" alt="" v-for="item in 5" :key="item" class="cur img-center">
                  </div>
                  <div class="margin-left20">
                    66%
                  </div>
                </li>
                <li>
                  <div>中评</div>
                  <div>
                    <img :src="item<=stateIcon.state?stateIcon.icon1:stateIcon.icon" alt="" v-for="item in 5" :key="item" class="cur img-center">
                  </div>
                  <div class="margin-left20">
                    66%
                  </div>
                </li>
                <li>
                  <div>差评</div>
                  <div>
                    <img :src="item<=stateIcon.state?stateIcon.icon1:stateIcon.icon" alt="" v-for="item in 5" :key="item" class="cur img-center">
                  </div>
                  <div class="margin-left20">
                    66%
                  </div>
                </li>
              </ul>
            </div>
            <div class="de_evaluate margin-top20">
              <p>
                <button class="font-3 cur">我要评价</button>
              </p>
              <p class="  font-1 margin-top20">只有购买商品才能评价</p>
            </div>
          </div>
          <div class="evaluate">
            <span class="active">全部评论（154）</span>
            <span>好评（54）</span>
            <span>中评（50）</span>
            <span>差评（50）</span>
          </div>
          <div class="evaluate_list">
            <div class="evaluate_group" v-for="item in 10" :key="item">
              <div class="evaluate_tou">
                <img :src="$Mock.Random.dataImage('400x400')" alt="">
                <p class="margin-top10">
                  <span class="evaluate_dj">
                    <a class="font-1">V1</a>
                  </span>
                  <span class="font-1">stonerao</span>
                </p>
              </div>
              <div class="evaluate_ev">
                <p class="de_r_stat_s">
                  <img :src="item<=stateIcon.state?stateIcon.icon1:stateIcon.icon" alt="" v-for="item in 5" :key="item" class="cur">
                </p>
                <p class="font-1 hui-color">
                  2018-2-8 09:55:36
                </p>
                <p class="line shop__text font-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ad ea, eius molestiae fuga necessitatibus, repellat voluptate commodi fugiat consequatur, architecto aut officia esse ducimus vel animi a quidem atque!</p>
                <div class="font-1 evaluate_shop">
                  <span class="color-g font-1">e菜市回复：</span>
                  <a class="font-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate voluptatem nam maxime dolorem. Qui, deserunt tempore et velit vel saepe animi, maiores vitae assumenda corporis voluptates! Officia reprehenderit rerum mollitia.</a>
                </div>
              </div>
            </div>
            <!-- page -->
            <div class="o_page">
              <el-pagination class="center" background @size-change="pageSize" @current-change="curChange" :current-page.sync="page.curpage" :page-size="page.size" layout="prev, pager, next, jumper" :total="page.total">
              </el-pagination>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Number from "@/components/component/number";
import vueMagnify from "@/components/magnify";
import icon from "@/assets/member/eva1.png";
import icon1 from "@/assets/member/eva2.png";
import { Pagination } from "element-ui";
export default {
  data() {
    return {
      imgState: 0,
      items: [
        this.$Mock.Random.dataImage("610x610"),
        this.$Mock.Random.dataImage("110x110"),
        this.$Mock.Random.dataImage("110x110"),
        this.$Mock.Random.dataImage("110x110"),
        this.$Mock.Random.dataImage("110x110")
      ],
      magnify: {
        min: this.$Mock.Random.dataImage("610x610"),
        max: this.$Mock.Random.dataImage("610x610"),
        width: 448,
        height: 448
      },
      num: 10,
      tabIndex: 0,//商品介绍和评价tab
      stateIcon: {
        icon: icon,
        icon1: icon1,
        state: 3
      },/* 评论星星 */
      page: {
        curpage: 3,
        total: 100,
        size: 10
      }
    };
  },
  methods: {
    pageSize(e) {
      /* 页数发生改变的时候 */
    },
    curChange(e) {
      /* 翻页 */
    }
  },
  components: {
    vueMagnify,
    Number,
    "el-pagination": Pagination
  },
  watch: {},
  mounted() {}
};
</script>

 <style lang="less" scoped>
@import "../../styles/base.less";
.margin-top10 {
  margin-top: 10px;
}
.evaluate_list {
  border-top: 1px solid #ddd;
  margin: 0 30px;
  .evaluate_ev {
    width: 655px;
    display: inline-block;
    .de_r_stat_s {
      position: relative;
      left: -5px;
    }
    .shop__text {
      margin-top: 10px;
    }
  }
  .evaluate_group {
    padding: 20px 0;
    border-bottom: 1px dashed #ddd;
  }
  .evaluate_tou {
    display: inline-block;
    text-align: center;
    width: 140px;
    vertical-align: top;
    > img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }
  }
  .evaluate_shop {
    background: #f5f5f5;
    padding: 10px;
    line-height: 18px;
  }
  .evaluate_dj {
    display: inline-block;
    padding: 2px;
    background: @color-j;
    color: #fff;
    a,
    i {
      color: #fff;
    }
  }
}
.evaluate {
  padding-left: 15px;
  border-top: 1px dashed #ddd;
  margin: 0 30px;
  span {
    margin: 0 30px 0 0px;
    line-height: 42px;
    cursor: pointer;
  }
  span.active {
    color: @color;
  }
}
.de_evaluate {
  text-align: center;
  button {
    width: 160px;
    height: 48px;
    background: @color-g;
    color: #fff;
    border: 0;
    border-radius: 5px;
    transition: all 0.2s;
  }
  button:hover {
    background: @color-g*0.8;
  }
}
.de_r_num {
  float: left;
  width: 390px;
  margin-left: 25px;
  li {
    line-height: 44px;
    > div:first-child {
      width: 40px;
    }
    div {
      display: inline-block;
    }
    img {
      height: 18px;
      margin: 0 3px;
    }
  }
}
.de_r_stat_s {
  margin-top: 4px;
  margin-bottom: 9px;
  img {
    height: 18px;
    margin: 0 3px;
  }
}
.de_r_stat_price {
  font-size: 40px;
  color: #d7282d;
  font-weight: 700;
}
.de_r_head {
  margin-top: 20px;
  overflow: hidden;
}
.de_r_stat_title {
  line-height: 42px;
}
.de_r_stat {
  width: 180px;
  float: left;
  text-align: center;
  border-right: 1px solid #ddd;
  margin-bottom: 20px;
}
.main-edito {
  padding: 20px 10px;
  img {
    max-width: 100%;
  }
}
.de_box_right {
  width: 862px;
  float: right;
  border: 1px solid #ddd;
  min-height: 200px;
  .de_r_title {
    border-bottom: 1px solid #ddd;
    line-height: 48px;
    background: #f4f4f5;
    font-size: 16px;
    > span {
      display: inline-block;
      height: 100%;
      width: 160px;
      border-top: 2px solid transparent;
      text-align: center;
      cursor: pointer;
      transition: all 0.2s;
    }
    > span.active {
      color: @color;
      background: #fff;
      border-color: @color;
    }
  }
}
.de_box_title {
  line-height: 48px;
  font-size: 16px;
  background: #f4f4f5;
  border-bottom: 1px solid #ddd;
  padding-left: 30px;
}
.de_box_left {
  width: 298px;
  float: left;
  border: 1px solid #ddd;

  img {
    max-width: 80%;
  }
  .de_box_list {
    margin: 15px;
    border-bottom: 1px #ddd dashed;
    padding-bottom: 15px;
    text-align: center;
  }
}
.de-head_s {
  margin: 30px 0 0 30px;
  color: #999;
}
.de_head_btns {
  padding-left: 30px;
  .btn {
    width: 170px;
    height: 50px;
    border: 0;
    padding: 0;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    font-size: 16px;
  }
  .btn-g {
    background: @color-g;
  }
  .btn-g:hover {
    background: @color-g *0.8;
  }
  .btn-c {
    background: @color;
  }
  .btn-c:hover {
    background: @color*0.8;
  }
}
.de_head_price {
  background: #f5f5f5;
  line-height: 40px;
  padding: 10px 25px;
  a {
    font-weight: 700;
  }
}
.p-color {
  color: @color-j;
}
.lin_36 {
  line-height: 36px;
}
.de_head_info {
  width: 700px;
  float: right;
}
.de_nums {
  line-height: 34px;
  padding: 35px 30px;
  overflow: hidden;
  > span,
  > div {
    float: left;
  }
}
.r_number {
  display: inline-block;
  overflow: hidden;
  border: 1px solid #ddd;
  > div {
    float: left;
    line-height: 32px;
  }
  .r_number_btn {
    height: 32px;
    width: 36px;
    line-height: 32px;
    text-align: center;
    cursor: pointer;
    color: #999;
    font-weight: 700;
    font-size: 16px;
  }
  .r_number_inp {
    border-left: 1px solid #ddd;
    border-right: 1px solid #ddd;
    input {
      padding: 0;
      margin: 0;
      border: 0;
      width: 46px;
      padding: 0 10px;
    }
  }
}
.de_box {
  padding-bottom: 40px;
}
.de_head {
  position: relative;
  overflow: hidden;
  margin-bottom: 70px;
}
.de_head_com {
  width: 450px;
  float: left;
}
.de_head_img {
  width: 448px;
  border: 1px solid #ededed;
  height: 448px;
  img {
    max-width: 480px;
    max-height: 480px;
    cursor: pointer;
  }
}
.de_head_imgs {
  width: 100%;
  overflow: hidden;
  position: relative;
  margin-top: 15px;
  li {
    float: left;
    width: 76px;
    height: 76px;
    margin-right: 15px;
    border: 1px solid #ededed;
    cursor: pointer;
    img {
      width: 100%;
      max-height: 100%;
    }
  }
  li:last-child {
    margin-right: 0;
  }
}
</style>
