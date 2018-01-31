<template>
  <div class="order-info">
      <div class="order-process">
        <div class="title">
          <span>订单号：{{$Mock.Random.natural()}}</span>
          <span>下单时间：{{$Mock.Random.date()}} {{$Mock.Random.time()}}</span>
        </div>
        <ul class="pro-detail">
          <li class="pro-detail-item" v-for="(imgI,index) in imgLi" :key="index">
            <img :src="imgI.img1" alt="">
            <img :src="imgI.img2" alt="">
          </li>
          <!-- <li class="pro-detail-item">
            <img src="../../../assets/member/order3.png" alt="">
            <img src="../../../assets/member/order6.png" alt="">
          </li>
          <li class="pro-detail-item">
            <img src="../../../assets/member/order2.png" alt="">
            <img src="../../../assets/member/order5.png" alt="">
          </li>
          <li class="pro-detail-item">
            <img src="../../../assets/member/order1.png" alt="">
          </li> -->
          <!-- 1 -->
          
        </ul>
        <li v-for="i in 4" :key="i" :class="{'acitve':i<=2?true:false}">
            {{i}}
          </li>
        <div class="order-status">
          <div class="status-detail">
            <div class="order-status-item">
              <span>{{$Mock.Random.date()}}</span>
              <ul>
                <li v-for="item in 5" :key="item">
                  <div>
                    <span class="o-dots"></span>
                    <span>{{$Mock.Random.time()}}</span>
                    <span>{{$Mock.Random.csentence(5,20)}}</span>
                  </div>
                  <div class="o-line"></div>
                </li>
              </ul>
            </div>
          </div>
          <div class="go-to-eva">
            <p><span>订单状态：</span>已完成</p>
            <router-link to="/member/order/evaluation">立即评价</router-link>
          </div>
        </div>
      </div>

      <div class="product-info">
        <div class="title">
          <span>商品信息</span>
        </div>
        <table>
          <tr>
            <th v-for="(p_item,index) in info" :key="index">{{p_item.name}}</th>
          </tr>
          <tr v-for="(pro,index) in list" :key="index">
            <td>
              <img v-lazy="$Mock.Random.dataImage('120x120')" alt="">
              <div>
                <p>{{$Mock.Random.csentence(5,20)}}</p>
                <span>规格：{{pro.intro}}</span>
              </div>
            </td>
            <td>￥{{pro.price}}</td>
            <td>{{pro.count}}</td>
            <td>￥{{parseFloat(pro.price*pro.count).toFixed(2)}}</td>
            <td>
              <a href="javascript:void(0)">加入购物车</a>
            </td>
          </tr>
        </table>
      </div>

      <div class="delivery-info">
        <div class="title">
          <span>收货信息</span>
        </div>
        <div class="del-info">
          <ul class="del-info-l">
            <li>
              <i>收件人:</i>
              <span>{{$Mock.Random.csentence(2,3)}}</span>
            </li>
            <li>
              <i>联系方式:</i>
              <span>186****6408</span>
            </li>
            <li>
              <i>收货地址:</i>
              <span>{{$Mock.Random.csentence(5,30)}}</span>
            </li>
          </ul>
          <ul class="del-info-r">
              <li>
                <i>商品合计:</i>
                <span>￥168.00</span>
              </li>
              <li>
                <i>运费:</i>
                <span>￥0.00</span>
              </li>
              <li>
                <i>优惠券:</i>
                <span>-￥150.00</span>
              </li>
              <li>
                <i>应付:</i>
                <span>168.00</span>
              </li>
          </ul>
        </div>
      </div>
  </div>
</template>

<script>
// import { list } from "@/assets/member";
export default {
  data() {  
    return {
      active:true,
      imgLi:[
        {img1:'',img2:'',aimg1:'',aimg2:''},
        {img1:'',img2:'',aimg1:'',aimg2:''},
        {img1:'',img2:'',aimg1:'',aimg2:''},
        {img1:'',img2:'',aimg1:'',aimg2:''}
      ],
      info: [
        { name: "商品信息" },
        { name: "单价" },
        { name: "数量" },
        { name: "小计" },
        { name: "操作" }
      ],
      list:[
        {intro:'约600g/份',price:64.0112,count:1,total:64.0220},
        {intro:'约600g/份',price:64.0112,count:1,total:64.0220},
        {intro:'约600g/份',price:64.0112,count:1,total:64.0220}
      ]
    };
  }
};
</script>
<style lang="less" scoped>
@o-color: #b6b6b6;
@r-color:#be4141;
.border {
  border: 1px solid #eaeaea;
}
.o-dots {
  display: inline-block;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: @o-color;
}
.o-line {
  width: 1px;
  height: 20px;
  background-color: @o-color;
  margin: 0 2px;
}
.title {
  background-color: #f4f4f4;
  height: 42px;
  line-height: 42px;
  span {
    padding: 0 15px;
  }
}
.order-process {
  .border;
}
.pro-detail {
  height: 160px;
  margin: 0 20px;
  border-bottom: 1px dashed #eaeaea;
  text-align: center;
  li {
    display: inline-block;
    line-height: 160px;
    img {
      vertical-align: middle;
      margin: 0 5px;
    }
  }
}
.order-status {
  width: 100%;
  overflow: hidden;
}
.status-detail {
  margin: 20px;
  margin-right: 0;
  width: 75%;
  float: left;
  border-right: 1px dashed #eaeaea;
}
.order-status-item {
  padding: 0 10px;
  > ul,
  > span {
    display: inline-block;
    margin: 0 10px;
    float: left;
    li {
      > div {
        span:nth-child(2) {
          padding: 0 20px;
        }
        span.o-dots {
          margin-bottom: 2px;
        }
      }
    }
    li:last-child {
      > div.o-line {
        display: none;
      }
    }
  }
}
.go-to-eva {
  float: right;
  width: 22%;
  text-align: center;
  p {
    text-align: center;
    margin: 25% 0 15px 0;
    span {
      color: #999;
    }
  }
  a {
    display: inline-block;
    margin: 0 auto;
    width: 130px;
    height: 40px;
    border-radius: 5px;
    background-color: #29b43d;
    color: #fff;
    text-align: center;
    line-height: 40px;
  }
  a:hover {
    background-color: #2dc844;
  }
}

.product-info {
  .border;
  margin-top: 20px;
  table {
    width: 95%;
    margin: 0 auto;
    th {
      height: 55px;
      border-bottom: 1px dashed #eaeaea;
      line-height: 55px;
      font-weight: normal;
    }
    th:first-child {
      text-align: left;
      width: 45%;
      padding-left: 20px;
    }
    td {
      text-align: center;
      padding: 10px 0;
      vertical-align: middle;
    }
    td:first-child {
      padding-left: 20px;
      overflow: hidden;
      img,div {
        float: left;
      }
      div{
        margin-left: 20px;
        text-align: left;
        width:64%;
        span{
          color:#999;
        }
        p{
          
          margin-bottom: 15px;
          overflow: hidden;
          text-overflow:ellipsis;
          white-space: nowrap;
        }
      }
    }
    td:last-child{
      a{
        display: inline-block;
        width: 86px;
        height:26px;
        border-radius: 3px;
        background-color: #f8f8f8;
        .border;
        line-height: 28px;
      }
      a:hover{
        background-color: #EBEBEB;
      }
    }
  }
}

.delivery-info{
  .border;
  margin-top: 20px;
  .del-info{
    padding:20px;
    overflow: hidden;
    .del-info-l{
      width: 75%;
    }
    >ul{
      float: left;
      i{
        font-style: normal;
        color:#999;
        display: inline-block;
        width:65px;
        text-align: justify;
        text-align-last:justify;
      }
      li{
        margin: 10px 0;
        line-height: 20px;
      }
    }
    .del-info-r{
      width: 25%;
      li{
        text-align: right;
      }
      li:nth-child(3){  
        border-bottom: 1px dashed #eaeaea;
        span,i{
          padding-bottom: 20px;
        }
      }
      li:last-child{
        span,i{
          padding-top: 10px;
        }
        span{
          font-size: 20px;
          color:@r-color;
          font-weight: 600;
        }
      }
      i{
        text-align: right;
        text-align-last: auto;
      }
      span{
        width: 100px;
        display: inline-block;
      }
    }
  }
}
</style>
