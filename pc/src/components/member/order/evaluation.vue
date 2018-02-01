<template>
  <div class="order-evaluation">
    <div class="eva-detail">
      <div class="eva-detail-l">
        <div><img v-lazy="$Mock.Random.dataImage('180x180')" alt=""></div>
        <div>
          <p>{{$Mock.Random.csentence(5, 30)}}</p>
          <span>￥18.00</span>
        </div>
      </div>
      <div class="eva-detail-r">
        <ul>
          <li v-for="(item,ind) in evaLis" :key="ind">
            <div>
              <span>{{item.title}}</span>
              <div class="eva-star">
                <div>
                  <img :src="i<=item.sate?evaIcon.star2:evaIcon.star1" alt="" v-for="i in 5" :key="i" @click="item.sate=i">
                  <span>{{lis.num}}分</span>
                  <span>{{stateText(lis.num)}}</span>
                </div>
              </div>              
            </div> 
          </li> 
          <li>
            <div>
              <span>评价</span>
              <el-input type="textarea" :rows="6" placeholder="快和小伙伴们分享您的购物体验吧" v-model="textarea" v-if="has_msg==false"> </el-input>
              <p v-else-if="has_msg==true">{{msg}}</p>
            </div>
          </li>
          <li>
            <a href="javascript:void(0)" @click="send" v-if="has_msg==false">发表评论</a>
            <div v-else-if="has_msg==true">
              <span>评价时间</span>
              <p>{{$Mock.Random.date()}} {{$Mock.Random.time()}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { Input } from "element-ui";
import {evaIcon} from "@/assets/member";
export default {
    name:"orderEvaluation",
    data(){
      return{
        textarea:'',
        msg:'',
        has_msg:false,
        evaIcon:evaIcon,
        stateText(state){
          switch(state){
            case 1:
            return '很差';
            case 2:
            return '较差';
            case 3:
            return '一般';
            case 4:
            return '满意';
            case 5:
            return '非常满意';
          }
        },
        lis:{
          num:0,
          state:0,
          index:0,
        },
        evaLis:[
          {title:'商品满意度',sate:0},
          {title:'商品包装',sate:0},
          {title:'配送服务',sate:0}
        ]
      }
    },
    components:{
      "el-input":Input
    },
    methods:{
      send(){
        this.msg=this.textarea;
        this.has_msg=true;
      },
     
    }
};
</script>
<style lang="less" scoped>
@r-color:#ff0000;
@color: #f09f0b;
.center{
  text-align:center;
}
.border{
  border:1px solid #eaeaea;
}
.el-rate__item .el-rate__icon{
  font-size: 24px !important;
}
.eva-detail{
  .border;
  overflow: hidden;
  .eva-detail-l{
    float: left;
    width: 290px;
    .center;
    padding: 30px 0;
    >div{
      margin: 20px 0;
      .center;
      img{
        width: 180px;
        height: 180px;
      }
      span{
        color:@r-color;
        font-size: 16px;
      }
      p{
        color:#333;
        width: 75%;
        margin: 0 auto 10px auto;
      }
    }
  }
  
  .eva-detail-r{
    float: right;
    width: 645px;
    padding: 20px 0 30px 30px;
    border-left: 1px solid #eaeaea;
    min-height: 440px;
    li{
      margin: 10px 0;
      line-height:30px;
      >div{
        >span{
            display: inline-block;
            width: 12%;
            margin-right: 15px;
            text-align: justify;
            text-align-last: justify;
            float: left;
        }
        .el-textarea{
          width: 80%;
        }
        p{
          color:#333;
        }
      }
      >a{
          display: inline-block;
          margin: 0 auto;
          width: 130px;
          height: 40px;
          border-radius: 5px;
          background-color: #29b43d;
          color: #fff;
          text-align: center;
          line-height: 40px;
          margin-left: 14.4%;
          margin-top: 20px;
      } 
      a:hover {
        background-color: #2dc844;
      }
    }
    li:nth-child(4){
      margin-top: 30px;
    }
    div.eva-star{
      display: inline-block;
      position: relative;
      height: 30px;
      img{
        margin: 0 2px;
        width: 26px;
        height: 25px;
        float: left;
        cursor: pointer;
      }
      span{
        display: inline-block;
        margin-left: 10px;
        color:@color;
      }
    }
  }
}
</style>
