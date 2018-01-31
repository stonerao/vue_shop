<template>
  <div class="order">
    <div class="order_navs  ">
      <ul class="order_nav float-left ">
        <li @click="state=index" class="cur float-left font-3" :class="{'active':index===state}" v-for="(item,index) in navs" :key="index">
          {{item.title}}
        </li> 
      </ul>
      <el-select  v-model="value" placeholder="近三个月内的订单" class="i_border float-right" size="mini">
        <el-option v-for="item in 3"  :key="item"  :label="item" :value="item">
        </el-option>
      </el-select>
      <div class="clear"></div>
    </div> 

    <div>
      <div class="my-order top25 menu-border" v-for="i in 2" :key="i">
        <div class="my-order-nav overflow">
          <span class="font-2 hui-color">2018-1-29 15:16:56</span>
          <span class="font-2 margin-left20">订单号：4654654654654</span>
        </div>
        <table class="my-order-table">
          <tr class="height-183" v-for="(item,index) in orders" :key="index">
            <td class="width-495">
              <div class="my__order_info "> 
                <div class="my__order_img i-b float-left">
                  <img class="img-center img-avatar" v-lazy="$Mock.Random.dataImage('134x134')" alt="">
                </div>
                <div class="i-b width-250 line ">
                  <p>
                    海南精品水果，超级好吃，超级好吃海南精品水果，超级好吃
                  </p>
                  <p class="my_order_shop_price red-color-porce">￥1050.00</p>
                </div>
              </div>
            </td> 
            <td class=" center width-155" v-if="index===0" :rowspan="orders.length">
              <p class="hui-color margin-top60">1件商品</p> 
              <p class="margin-top20">￥18.00</p>
            </td> 
            <td class=" center width-155" v-if="index===0" :rowspan="orders.length">
                <div class="my_order__btn " style="padding-top:5px">  
                  <p class="margin-bottom10">配送中</p> 
                  <p class="margin-bottom10 margin-top5"><router-link to="/member/order/info" class=" font-1">查看详情</router-link></p>
                </div>
            </td> 
            <td  class="width-155">
              <div class="my_order__btn "> 
                <router-link to="/member/order/evaluation" class="m_btn margin-bottom10" v-if="i%2==0">评价</router-link>
                <router-link to="/" class="m_btn margin-bottom10 btn_type_2" v-else>立即付款</router-link>
                <p class="margin-bottom10 margin-top5"> <router-link to="/member/order/info" class=" font-1">查看详情</router-link></p> 
                <p class="margin-bottom10 margin-top5"><router-link to="/" class=" font-1">再次购买</router-link></p>
              </div>
            </td>
          </tr>  
        </table> 
      </div> 
      <!-- 分页 -->
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
      navs: [
        { title: "全部订单", type: 0 },
        { title: "待付款", type: 1 },
        { title: "待收货", type: 2 },
        { title: "待评价", type: 3 },
        { title: "待评价", type: 4 },
        { title: "已完成", type: 5 },
        { title: "已取消", type: 6 }
      ],
      state: 0,
      value: "",
      orders: [{}, {}],
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
  },
  watch: {
    state(val) {
      /* navs */
    }
  }
};
</script>
<style lang="less" scoped>
@import "../../../styles/member.less";
@color: #f09f0b;
.order_navs {
  border-bottom: 2px solid #eaeaea;
}
.order_nav {
  li {
    padding: 0 18px;
    line-height: 38px;
  }
  li.active {
    color: @color;
    position: relative;
  }
  li.active::after {
    position: absolute;
    content: " ";
    bottom: -2px;
    width: 100%;
    height: 2px;
    background: @color;
    left: 0;
    z-index: 100;
  }
}
</style>
