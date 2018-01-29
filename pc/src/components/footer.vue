<template>
    <div class="footer" id="footer">
        <div class="main-box overflow">
            <div class="footer-info overflow">
                <div v-for="(item,index) in groups" :key="index" class="float-left footer_info_item" :class="{'footer__sh':index!=0}">
                    <div class="footer__img center float-left">
                        <img class="img-center" v-lazy="item.icon" :alt="item.name">
                    </div> 
                    <div class="footer_info_box float-left">
                        <p class="font-4 while-f">
                            {{item.name}}   
                        </p> 
                        <p class="font-1 while-f line"> 
                            {{item.text}} 
                        </p> 
                    </div> 
                </div> 
            </div> 
            <div class="footer_oper overflow">
                <div class="footer_oper_sao i-b">
                    <div class="float-left">
                        <img class="img-center" v-lazy="$Mock.Random.dataImage('140x140')" alt="">
                        <p>扫码下载App</p>
                    </div>
                    <div class="float-right">
                        <img class="img-center" v-lazy="$Mock.Random.dataImage('140x140')" alt="">
                        <p>微信二维码</p>
                    </div>
                </div>
                <div class="footer_guide i-b">
                    <ul v-for="(item,index) in guide" :key="index">
                        <li>
                            <p class="font-3">{{item.title}}</p>
                            <ul>
                                <router-link tag="li" v-for="(box,i) in item.items" :key="i" :to="box.path">{{box.title}}</router-link>
                            </ul>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <p class="font-3">联系客服</p>
                            <ul>
                                <li>在线服务 <span>点击交谈</span></li>
                                <li>售后电话 <span>点击交谈</span></li>
                                <li>售后时间 <span>09:00-24:00</span></li>
                                <li>反馈邮箱 <span>stoneraoy@gmail.com</span></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <p class="center font-1">Copyright ©2017-2018  新品川所有</p>
        </div>
    
    </div>
</template>

<script>
import { footers } from "@/assets/index";

export default {
  data() {
    return {
      groups: footers,
      guide:[
          {
              title:'购物指南',
              items:[
                  {title:"购物流程",path:"/"},
                  {title:"支付方式",path:"/"},
                  {title:"售后规则",path:"/"},
              ]
          },
          {
              title:'配送方式',
              items:[
                  {title:"配送运费",path:"/"},
                  {title:"配送范围",path:"/"},
                  {title:"配送时间",path:"/"},
              ]
          },
          {
              title:'商家服务',
              items:[
                  {title:"平台规则",path:"/"},
                  {title:"商家入住",path:"/"},
                  {title:"联系我们",path:"/"},
              ]
          }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
@import "../styles/public.less";
.footer_oper_sao{
    width:343px;
    float: left;
    >div{
        text-align:center;
        width:140px;
        p{
            line-height:50px;
            font-size:16px;
        }
    
    }
}
.footer_guide{
    overflow:hidden;
    margin-left:60px;
    >ul{
        width:195px;
        float: left; 
        ul{
            margin-top:14px;
            line-height:24px;
            li{
                display:block;
                width:100%;
            }
        }
    }
    >ul{
        width:195px;

    }
}
.footer_oper {
  padding: 40px 0 60px 0;
}
.footer {
  padding-bottom: 20px;
  a,li,p,span{
color:#fff;
  }
}
.footer_info_item {
  width: 20%;
}
.footer_info_box {
  position: relative;
  top: 2px;
}
.footer-info {
  margin-top: 56px;
  border-bottom: 1px solid #fff;
  padding-bottom: 42px;
}
.footer__img {
  width: 80px;
  height: 40px;
  line-height: 40px;
  position: relative;
  img {
    max-width: 36px;
    max-height: 36px;
    position: relative;
  }
}
.footer__sh {
  position: relative;
}
.footer__sh::after {
  position: absolute;
  content: " ";
  left: 0;
  width: 1px;
  height: 24px;
  background: #fff;
  top: 50%;
  transform: translateY(-50%);
}
</style>
