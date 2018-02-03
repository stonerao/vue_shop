<template>
  <div class="cart">
      <div class="main-box">
          <table class="cart_table">
              <thead>
                  <tr>
                      <td><el-checkbox v-model="allChecked" size="small">&nbsp;全选</el-checkbox></td> 
                      <td class="center">商品</td>
                      <td class="center">单价（元）</td>
                      <td class="center">数量</td>
                      <td class="center">小计（元）</td>
                      <td class="center">操作</td>
                  </tr>
              </thead> 
              <tbody>
                  <tr v-for="(item,index) in items" :key="index">
                      <td  style="width:70px">
                       <el-checkbox v-model="checked" :label="item.id" size="small">&nbsp;</el-checkbox>
                      </td>
                      <td class="c_t_i" style="width:520px">
                          <img v-lazy="item.img_url" class="img-center">
                          <div class="c_t_t shop__text d-">
                              {{item.name}}
                          </div>
                      </td>
                      <td  class="center font-3" style="width:129px">￥{{item.price}}</td>
                      <td  class="center"  style="width:152px">
                          <el-input-number v-model="item.number" :min="1" label="描述文字"></el-input-number>
                      </td>
                      <td  class="center red-color font-3" style="width:159px">￥{{parseFloat(item.price*item.number).toFixed(2)}}</td>
                      <td  class="center c_c" style="width:100px">
                        <p>收藏</p>  
                        <p>删除</p>
                        </td> 
                  </tr>
              </tbody>
            <tfoot> 
                  <tr>
                      <td colspan="2" class="text-left">
                           <el-checkbox v-model="allChecked" size="small">&nbsp;全选</el-checkbox>  
                          <span class="margin-left20 hui-color cur">删除选中的商品</span>
                          <span class="margin-left40 hui-color">
                              共 
                              <a class="font-3">2 </a>件商品，已选择
                              <a class="font-3">2 </a>件
                          </span>
                      </td> 
                      <td colspan="4" class="text-right">
                        以优惠 <a class="red-color">0</a> 元，合计（不含运费）：<span class="red-color font-4">￥{{allPrice}}</span><button class="cart_btn">去结算</button>
                      </td> 
                  </tr> 
            </tfoot>
          </table> 
      </div>
  </div>
</template>

<script>
import { Checkbox, InputNumber } from "element-ui";
export default {
  name: "Cart",
  data() {
    return {
      num: "",
      checked: [],
      allChecked: "",
      items: [
        {
          img_url: this.$Mock.Random.dataImage("110x110"),
          name: this.$Mock.mock("@cparagraph(1, 3)"),
          id: 1,
          number: this.$Mock.mock("@integer(1, 10)"),
          price: this.$Mock.mock("@float(10, 100, 2, 2)")
        },
        {
          img_url: this.$Mock.Random.dataImage("110x110"),
          name: this.$Mock.mock("@cparagraph(2, 3)"),
          id: 2,
          number: this.$Mock.mock("@integer(1, 10)"),
          price: this.$Mock.mock("@float(10, 100, 2, 2)")
        },
        {
          img_url: this.$Mock.Random.dataImage("110x110"),
          name: this.$Mock.mock("@cparagraph(1, 3)"),
          id: 3,
          number: this.$Mock.mock("@integer(1, 10)"),
          price: this.$Mock.mock("@float(10, 100, 2, 2)")
        }
      ]
    };
  },
  components: {
    "el-checkbox": Checkbox,
    "el-input-number": InputNumber
  },
  methods: {},
  computed: {
    allPrice() {
      let num = 0;
      this.items.forEach(x => {
        num += parseFloat(parseFloat(x.price * x.number).toFixed(2));
      });
      return num.toFixed(2);
    }
  },
  watch: {
    allChecked(val) {
      /* true 为全选  false 取消 */
      if (val) {
        this.checked = [];
        this.items.forEach(x => {
          this.checked.push(x.id);
        });
      } else {
        if (this.checked.length === this.items.length) this.checked = [];
      }
    },
    checked(val) {
      if (val.length === this.items.length) {
        this.allChecked = true;
      } else {
        this.allChecked = false;
      }
    }
  }
};
</script> 
<style lang="less" scoped>
@import "../../styles/base.less";
.cart_btn {
  width: 100px;
  height: 38px;
  padding: 0;
  margin: 0;
  border: 0;
  background: @color-g;
  color: #fff;
  border-radius: 5px;
  margin-left: 30px;
  cursor: pointer;
  transition: all 0.2s;
}
.cart_btn:hover {
  background: @color-g*0.8;
}
.cart {
  padding: 35px 0;
  background-color: #f5f5f5;
}
.cart_table {
  width: 100%;
  thead {
    line-height: 50px;
    background: #fff;
  }
  tr {
    td:last-child {
      padding-right: 35px;
    }
    td:first-child {
      padding-left: 35px;
    }
  }
  .c_t_i {
    width: 165px;
    display: inline-block;
    img {
      width: 110px;
    }
  }
  .c_t_t {
    width: 350px;
    display: inline-block;
    float: right;
    padding-top: 25px;
  }
  tfoot {
    border-top: 20px solid #f5f5f5;
  }
  tbody,
  tfoot {
    background: #fff;
    tr {
      td {
        padding: 20px 0;
      }
    }
  }
  tbody tr {
    border-bottom: 1px solid #f5f5f5;
  }
  tbody tr:first-child {
    border-top: 1px solid #f5f5f5;
  }
  .c_c {
    line-height: 24px;
    position: relative;
    top: -15px;
    cursor: pointer;
    p {
      color: #999;
    }
    p:hover {
      color: @color;
    }
  }
}
</style>
