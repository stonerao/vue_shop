<template>
  <div class="recharge">
    <div class="re-money re-item">
      <p class="title">选择充值金额</p>
      <ul class="re-money-item">
        <li v-for="(mitem,index) in mon" :key="index" :class="{'act':state==index}" @click="stateClick(index)">
          <span>{{mitem.num}}</span>元
          <div v-if="state==index">
            <div class="act-show"></div>
            <img src="../../../assets/member/pay3.png" alt="">
          </div>
        </li>
      </ul>
    </div>

    <div class="re-item any-money">
      <p class="title">充值任意金额</p>
      <div>
        <input type="text" placeholder="可输入整数金额" v-model="inp">
        <span>元</span>
      </div>
    </div>

    <div class="pay-methods re-item">
      <p class="title">选择支付方式</p>
      <div>
        <el-radio class="radio" v-model="radio" label="1">
          <img src="../../../assets/member/pay1.png" alt="">
        </el-radio>
        <el-radio class="radio" v-model="radio" label="2">
          <img src="../../../assets/member/pay2.png" alt="">
        </el-radio>
      </div>
    </div>

    <div class="re-confirm">
      <a href="javascript:void(0)">确认充值</a>
    </div>
  </div>
</template>

<script>
//* 充值 */
import { Radio } from "element-ui"; 
export default {
  data() {
    return {
      state: -1,
      radio: "1",
      inp: "",
      mon: [{ num: "10" }, { num: "20" }, { num: "50" }, { num: "100" }]
    };
  },
  components: {
    "el-radio": Radio
  },
  methods: {
    stateClick(index) {
      this.state = index;
      this.inp = "";
    }
  },
  watch: {
    inp(state) {
      console.log(state);
      if (state !== "") {
        this.state = null;
      }
    }
  }
};
</script>
<style lang="less" scoped>
@import "../../../styles/common.less";
.border {
  border: 1px solid #eaeaea;
}
@color: #f09f0b;
@f8-color: #f8f8f8;
.recharge {
  .border;
  padding-left: 55px;
  height: 726px;
  .re-item {
    margin-top: 60px;
  }
  .title {
    font-size: 18px;
    margin-bottom: 20px;
    color: #333;
  }
  .re-money-item {
    li {
      display: inline-block;
      width: 130px;
      height: 60px;
      border: 1px solid #ddd;
      color: @color;
      border-radius: 5px;
      text-align: center;
      line-height: 60px;
      background-color: @f8-color;
      margin-right: 30px;
      position: relative;
      cursor: pointer;
      span {
        color: @color;
        font-size: 22px;
        font-weight: 600;
        padding-right: 5px;
      }
      > div {
        position: absolute;
        bottom: 0px;
        left: 77%;
        width: 30px;
        height: 30px;
        img {
          position: absolute;
          top: 45%;
          left: 14px;
          width: 15px;
        }
      }
      .act-show {
        width: 0;
        height: 0;
        border-bottom: 30px solid @color;
        border-left: 30px solid transparent;
        position: absolute;
        bottom: 0;
        right: 0;
      }
    }
  }
  li.act {
    border: 1px solid @color;
    background-color: #fff;
  }

  .any-money {
    input {
      width: 314px;
      height: 42px;
      border-radius: 2px;
      border: 1px solid #ddd;
      padding-left: 20px;
    }
    input::-webkit-input-placeholder {
      color: #999;
    }
    span {
      padding-left: 15px;
      font-size: 16px;
    }
  }

  .pay-methods {
    .el-radio__label {
      display: inline-block;
      height: 100%;
      line-height: 48px;
      img {
        vertical-align: middle;
      }
    }
    .el-radio__input.is-checked + .el-radio__label {
      color: @color;
    }
    .el-radio__input.is-checked .el-radio__inner {
      background-color: @color;
      border-color: @color;
    }
  }

  .re-confirm {
    margin: 75px 0 130px 0;
    a {
      display: inline-block;
      width: 200px;
      height: 48px;
      border-radius: 4px;
      color: #fff;
      background-color: #f09f0b;
      text-align: center;
      line-height: 48px;
      font-size: 16px;
    }
    a:hover {
      background-color: #f6b337;
    }
  }
}
</style>
