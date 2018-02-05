<template>
	<div class="order">
		<div class="main-box">
			<div class="while-b o_p">
				<div class="o_p_t">
					<span class="font-3">配送方式</span>
				</div>
				<div class="o_p_box">
					<div class="o_p_select">
						自提柜提取
					</div>
					<div class="o_p_select">
						送货上门
					</div>
				</div>
			</div>

			<div class="while-b o_p">
				<div class="o_p_t">
					<span class="font-3">自提柜</span>
					<span class="float-right cur">添加自提柜</span>
				</div>
				<div class="o_p_box">
					<p class="p_selct_wi">
						<el-radio v-model="radio" label="1">&nbsp;</el-radio>
						<span class="cur">四川成都市龙泉驿大面镇816</span>
						<span class="o_default margin-left20 ">默认地址</span>
						<span class="float-right">
							<a class="hui-color">编辑</a>
							<a class="margin-left20 hui-color">删除</a>
						</span>
					</p>
					<p class="color o_mord_adr cur">更多地址v</p>
				</div>
			</div>

			<div class="while-b o_p">
				<div class="o_p_t">
					<span class="font-3">收获地址</span>
				</div>
				<div class="o_p_box overflow">
					<!--  -->
					<div class="o_p_address" v-for="item in 5" :key="item">
						<p class="overflow o_p_address_t">
							<span>张小飞</span>
							<span class="float-right">18583671750</span>
						</p>
						<div class="o_p_address_c">
							四川成都市龙泉驿成龙大道大面街道云立方14-15-03
						</div>
						<p class="o_p_address_s">
							<a class="hui-color cur">编辑</a>
							<a class="margin-left20 hui-color cur">删除</a>
						</p>
					</div>

				</div>
			</div>

			<div class="while-b o_p">
				<p class="confirm_title">
					确认订单
				</p>
				<table class="order_table">
					<thead>
						<tr>
							<td>&nbsp;</td>
							<td>商品</td>
							<td class="center">规格</td>
							<td class="center">单价</td>
							<td class="center">数量</td>
							<td class="center">小计</td>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(item,index) in items" :key="index">
							<td style="width:160px" class="center">
								<img v-lazy="item.img_url" class="img-center">
							</td>
							<td class="c_t_i" style="width:320px">
								<div class="c_t_t shop__text d- line-18">
									{{item.name}}
								</div>
							</td>
							<td class="center font-3" style="width:120px">￥{{item.price}}</td>
							<td class="center font-3" style="width:205px">
								{{item.price}}
							</td>
							<td class="center font-3" style="width:95px">{{item.number}}</td>
							<td class="center c_c red-color font-3" style="width:200px">
								￥{{parseFloat(item.price*item.number).toFixed(2)}}
							</td>
						</tr>
					</tbody>
					<tfoot>
						<tr>
							<td colspan="6" class="text-left">
								<div class="order_table_foot">
									<div class="d_i">
										<span class="align_top">备注：</span>
										<textarea name="" id="" cols="30" rows="10" placeholder="备注"></textarea>
										<span class="float-right">
											<a class="font-3">合计：</a>
											<a class="red-color font-5">￥1500.00</a>
										</span>
									</div>
								</div>
							</td>
						</tr>
					</tfoot>
				</table>
			</div>

			<div class="while-b o_p">
				<div>
					<p class="confirm_title">
						优惠抵扣
					</p>
					<ul class="coupon_items coupon_flow">
						<li class="coupon__type_1 cur" v-for="item in 2" :key="item">
							<div class="coupon__action_1 coupon__action_b center">
								<p class="coupon__action_t">满1000-100</p>
								<p>2018-2-5 15:30:56</p>
							</div>
							<div class="coupon__action_q">
								券号：654654654654
							</div>
						</li>

						<li class="coupon__type_1 cur">
							<div class="coupon__action_2 coupon__action_b center">
								<p class="coupon__action_t">满1000-100</p>
								<p>2018-2-5 15:30:56</p>
							</div>
							<div class="coupon__action_q">
								券号：654654654654
							</div>
						</li>

					</ul>
				</div>
				<div>
					<p class="confirm_title">
						代金券抵扣
					</p>
					<ul class="coupon_items coupon_flow">
						<li class="coupon__type_1 cur" v-for="item in 2" :key="item">
							<div class="coupon__action_1 coupon__action_b center">
								<p class="coupon__action_t">满1000-100</p>
								<p>2018-2-5 15:30:56</p>
							</div>
							<div class="coupon__action_q">
								券号：654654654654
							</div>
						</li>

						<li class="coupon__type_1 cur">
							<div class="coupon__action_2 coupon__action_b center">
								<p class="coupon__action_t">满1000-100</p>
								<p>2018-2-5 15:30:56</p>
							</div>
							<div class="coupon__action_q">
								券号：654654654654
							</div>
						</li>
					</ul>
				</div>
				<p class="line coupon_tx">
					已选择
					<span class="color-g">1</span> 张优惠券
					<span>1</span>张代金券（可叠加使用），总抵现￥
					<span class="red-color">15.00</span>
				</p>
			</div>
			<div class="while-b o_p">
				<p class="confirm_title">
					选择支付方式
				</p>
				<div class="order_pay">
					<ul>
						<li>
							<div>
								支付宝
							</div>
							<div class="order_pay_radio">
								<span>
									<el-radio v-model="radio" label="2">&nbsp;</el-radio>
								</span>
								<img :src='$Mock.Random.dataImage("110x40")' alt="" class="img-center">
							</div>
						</li>

						<li>
							<div>
								微信支付
							</div>
							<div class="order_pay_radio">
								<span>
									<el-radio v-model="radio" label="2">&nbsp;</el-radio>
								</span>
								<img :src='$Mock.Random.dataImage("110x40")' alt="" class="img-center">
							</div>
						</li>

						<li>
							<div>
								预存款
							</div>
							<div class="order_pay_radio">
								<p>您当前的余额
									<span class="red-color">3000.00</span> 元</p>
								<p>
									<input type="text" class="order_pay_inp" placeholder="请输入支付密码">
								</p>
							</div>
						</li>
					</ul>
				</div>
				<div class="order_pay_infos">
					<p>
						<span>总金额</span>
						<span class="float-right">￥3557.00</span>
					</p>
					<p>
						<span>运费</span>
						<span class="float-right">￥0.00</span>
					</p>
					<p>
						<span>优惠抵扣</span>
						<span class="float-right color-g">￥3557.00</span>
					</p>
					<p class="margin-top20">
						<span>应付</span>
						<span class="float-right red-color">￥3557.00</span>
					</p>
					<p>
						<button class="float-right order_btn">提交订单</button>
					</p>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
import { Radio } from "element-ui";
export default {
  data() {
    return {
      radio: "",
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
    "el-radio": Radio
  },
  mounted() {}
};
</script>
<style lang="less" scoped>
@import "../../styles/base.less";
.order_btn {
  width: 96px;
  height: 36px;
  color: #fff;
  border-radius: 5px;
  background: @color-g;
  border:0;
  cursor: pointer;
}
.order_btn:hover{
	background: @color-g*0.9;
}
.order_pay_infos {
  line-height: 38px;
  width: 310px;
  float: right;
  padding: 25px 0;
  .margin-top20 {
    border-top: 1px solid #ededed;
    padding-top: 10px;
    margin-bottom: 20px;
    .red-color {
      font-size: 16px;
    }
  }
}
.order_pay_radio {
  width: 700px;
  float: left;
  img {
    height: 40px;
  }
}
.order_pay_inp {
  height: 38px;
  border: 1px solid #ededed;
  padding-left: 20px;
  width: 260px;
}
.order_pay {
  padding: 0 50px;
  border: 1px solid #ededed;
  li {
    padding: 25px 0;
    min-height: 40px;
    overflow: hidden;
    line-height: 40px;
    > div:first-child {
      display: inline-block;
      width: 85px;
      float: left;
    }
  }
}
.coupon_tx {
  padding-left: 20px;
  margin-bottom: 20px;
}
.color-g {
  color: @color-g;
}
.coupon_flow {
  overflow-y: auto;
  max-height: 245px;
}

.coupon__type_1:nth-child(5n) {
  margin-right: 0;
}

.coupon__type_1 {
  height: 112px;
  width: 209px;
  border: 2px solid transparent;
  background: #f9f9f9;
  float: left;
  margin-right: 10px;
  margin-bottom: 15px;
  .coupon__action_1 {
    background-color: #fe7352;
    background-color: -prefix-linear-zgradient(top, #fe7352, #ef9e0b);
    background: linear-gradient(to bottom, #fe7352, #ef9e0b);
  }
  .coupon__action_2 {
    background-color: #b2b2b2;
    background-color: -prefix-linear-zgradient(top, #b2b2b2, #d3d4d3);
    background: linear-gradient(to bottom, #b2b2b2, #d3d4d3);
  }
  .coupon__action_b::before {
    position: absolute;
    content: " ";
    width: 100%;
    height: 2px;
    background-image: url(/static/img/coupon_oi.8254117.png);
    bottom: 0;
    left: 0;
    background-repeat: repeat-x;
    background-size: 8px auto;
  }
  .coupon__action_b {
    overflow: hidden;
    position: relative;
    height: 82px;
    width: 100%;
    color: #fff;
    span,
    p,
    a {
      color: #fff;
    }
  }
  .coupon__action_q {
    padding-left: 10px;
    color: #666;
    line-height: 28px;
    height: 28px;
    font-size: 12px;
  }
  .coupon__action_t {
    line-height: 50px;
    font-weight: 700;
    font-size: 22px;
    margin-top: 5px;
  }
}

.coupon__type_1:hover,
.coupon__type_1.active {
  border-color: @color-g;
}

.align_top {
  vertical-align: top;
}

.line-18 {
  line-height: 18px;
}

.order_table_foot {
  padding: 24px;
  textarea {
    max-width: 550px;
    width: 550px;
    font-size: 14px;
    height: 40px;
    max-height: 40px;
    resize: none;
    padding: 5px;
    border: 1px solid #ededed;
  }
}

.order_table {
  border: 1px solid #efefef;
  margin-bottom: 30px;
  tbody {
    tr {
      border-bottom: 1px solid #efefef;
      td {
        padding: 10px 0;
      }
    }
  }
  thead {
    tr {
      border-bottom: 1px solid #efefef;
      td {
        font-size: 16px;
      }
      line-height: 60px;
      font-weight: 700;
    }
  }
  tfoot {
    height: 100px;
    background: #f5f5f5;
  }
}

.confirm_title {
  line-height: 67px;
  //   border-bottom: 1px solid #ededed;
  font-size: 16px;
}

.o_p_address {
  width: 240px;
  height: 140px;
  border: 1px solid #efefef;
  padding: 0 15px;
  float: left;
  margin-right: 12px;
  margin-bottom: 20px;
  cursor: pointer;
  .o_p_address_t {
    line-height: 39px;
    border-bottom: 1px solid #efefef;
  }
  .o_p_address_c {
    line-height: 18px;
    margin-top: 8px;
  }
  .o_p_address_s {
    margin-top: 20px;
  }
}

.o_p_address:nth-child(4n) {
  margin-right: 0;
}

.o_p_address:hover,
.o_p_address.active {
  border-color: @color-g;
}

.o_mord_adr {
  margin-top: 20px;
  margin-left: 35px;
}

.o_p {
  padding: 0 38px;
  margin-bottom: 20px;
  overflow: hidden;
}

.o_p_t {
  line-height: 66px;
  border-bottom: 1px solid #ededed;
}

.order {
  background: #f5f5f5;
  padding: 0 40px;
  overflow: hidden;
}

.o_p_box {
  padding: 30px 0;
  .o_p_select {
    width: 240px;
    height: 63px;
    display: inline-block;
    border: 2px solid #ddd;
    line-height: 63px;
    text-align: center;
    margin-right: 85px;
    cursor: pointer;
  }
  .o_p_select:last-child {
    margin-right: 0;
  }
  .o_p_select:hover,
  .o_p_select.active {
    border-color: @color-g;
    color: @color-g;
  }
}

.o_default {
  padding: 5px 10px;
  color: #fff;
  background: #bbb;
}

.p_selct_wi {
  width: 740px;
  margin-bottom: 20px;
}
</style>