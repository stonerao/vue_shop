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
          <li>
            <div>
              <span>商品满意度</span>
              <el-rate v-model="value1" show-text></el-rate>
            </div> 
          </li>
          <li>
            <div>
              <span>商品包装</span>
              <el-rate v-model="value2" show-text></el-rate>
            </div>
          </li>
          <li>
            <div>
              <span>配送服务</span>
              <el-rate v-model="value3" show-text></el-rate>
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
import { Rate,Input } from "element-ui";
export default {
    name:"orderEvaluation",
    data(){
      return{
        value1:null,
        value2:null,
        value3:null,
        textarea:'',
        msg:'',
        has_msg:false,
      }
    },
    components:{
      "el-rate": Rate,
      "el-input":Input
    },
    methods:{
      send(){
        this.msg=this.textarea;
        this.has_msg=true;
      }
    }
};
</script>
<style lang="less" scoped>
@r-color:#ff0000;
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
        margin-bottom: 10px;
        color:#333;
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
        >div{
          display: inline-block;
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
  }
}
</style>
