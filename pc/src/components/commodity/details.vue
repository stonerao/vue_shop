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
          <span :class="{'active':tabIndex===0}">商品详情</span>
          <span class="" :class="{'active':tabIndex===1}">商品评价</span>
        </div>
        <div class="main-edito" v-if="tabIndex===0">

        </div>
        <div class="de-r" v-if="tabIndex===1">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Number from "@/components/component/number";
import vueMagnify from "@/components/magnify";
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
      tabIndex: 0
    };
  },
  methods: {},
  components: {
    vueMagnify,
    Number
  },
  watch: {},
  mounted() {}
};
</script>

 <style lang="less" scoped>
@import "../../styles/base.less";
.main-edito {
  img {
    max-width: 100%;
  }
}
.de_box_right {
  width: 862px;
  float: right;
  .de_r_title {
    border: 1px solid #ddd;
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
  color: #b4a078;
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
