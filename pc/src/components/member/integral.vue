<template>
  <div  class="integral">
    <div class="my-integral">
      <div class="my-inte-l">
        <p>
          <span>我的积分:</span>
          <i>{{inte}}</i>
        </p>
        <router-link to="/">如何获取积分?</router-link>
      </div>
      <div class="my-inte-r">
        <router-link to="/">兑换商品</router-link>
      </div>
    </div>

    <div class="inte-search">
      <el-select  v-model="value1" placeholder="近三个月内的订单" class="i_border" size="mini">
        <el-option v-for="item in 3"  :key="item"  :label="item" :value="item">
        </el-option>
      </el-select>
      <el-select  v-model="value2" placeholder="全部" class="i_border" size="mini">
        <el-option v-for="item in 3"  :key="item"  :label="item" :value="item">
        </el-option>
      </el-select>
    </div>

    <div class="inte-list">
      <table class="my-order-table border">
        <thead>
          <tr  class="my-order-nav">
            <th v-for="(tab,index) in nav" :key="index">{{tab.name}}</th>
          </tr>         
        </thead>
        <tbody>
          <tr  v-for="index in 5" :key="index">
            <td>{{$Mock.Random.date()}} {{$Mock.Random.time()}}</td>
            <td>+50</td>
            <td>{{$Mock.Random.csentence()}}</td>
            <td>+50</td>
          </tr>
        </tbody>    
      </table> 
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
  </div>
</template>

<script>
import { Select, Option, Pagination } from "element-ui";
export default {
  data() {
    return {
      inte: 666,
      value1: "",
      value2: "",
      list: [{}, {}, {}],
      nav: [
        { name: "时间" },
        { name: "收入/支出" },
        { name: "详细说明" },
        { name: "余额" }
      ],
      /* 页数 */
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
    "el-select": Select,
    "el-option": Option,
    "el-pagination": Pagination
  }
};
</script>
<style lang="less" scoped>
@import "../../styles/member.less";
@color: #f09f0b;
.my-integral {
  border:1px solid #eaeaea;
  padding: 0 50px;
  height: 140px;
  line-height: 140px;
  > div {
    height: 100%;
  }
  .my-inte-l {
    float: left;
    p {
      display: inline-block;
      margin-right: 50px;
      span {
        font-size: 16px;
      }
      i {
        color: @color;
        font-size: 32px;
        font-style: normal;
        padding: 0 10px;
      }
    }
    a {
      color: #999;
    }
  }
  .my-inte-r {
    float: right;
    a {
      display: inline-block;
      width: 130px;
      height: 40px;
      border-radius: 40px;
      background-color: #29b43d;
      color: #fff;
      text-align: center;
      line-height: 40px;
    }
  }
}
.inte-search {
  margin: 20px 0 10px 0;
  > div {
    margin-right: 15px;
  }
  > div:last-child {
    width: 144px;
  }
}
.inte-list {
  .my-order-table {
    border-bottom: none;
    tr {
      margin: 0 15px;
      border-bottom: 1px dashed #eaeaea;
      td {
        height: 60px;
        line-height: 60px;
        border: none;
        text-align: center;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
        width: 25%;
      }
      th {
        font-weight: normal;
      }
    }
    .my-order-nav {
      border-bottom: none;
    }
  }
  .o_page{
    border: 1px solid #eaeaea;
    border-top: none;
    padding: 30px 0;
  }
  tbody tr td:nth-child(3){
    text-align: left;
  }
}
</style>
