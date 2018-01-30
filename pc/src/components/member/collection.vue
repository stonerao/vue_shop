<template>
  <div>
    <ul class="m_coll overflow">
      <li v-for="item in 16" :key="item" class="border tran">
        <div class="m_coll_shop">
          <div class="m_coll_img center cur">
            <img class="img-center" v-lazy="$Mock.Random.dataImage('200x200')" alt="">
          </div>
          <div class="m_coll_title font-2 line shop__text">
            {{$Mock.mock('@cparagraph(1, 3)')}}
          </div>
          <div class="m_coll_price price font-3">
            ￥{{$Mock.Random.float(60, 100, 2, 2)}}
          </div>
        </div>
        <div class="m_coll_c">
          <span class="cur">取消收藏</span>
          <span class="cur color-g">加入购物车</span>
        </div>
      </li>
    </ul>
    <div class="o_page">
      <el-pagination class="center" background @size-change="pageSize" @current-change="curChange" :current-page.sync="page.curpage" :page-size="page.size" layout="prev, pager, next, jumper" :total="page.total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { Pagination } from "element-ui";
export default {
  name: "collection",
  data() {
    return {
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
    "el-pagination": Pagination
  }
};
</script>
<style lang="less" scoped>
.m_coll {
  li {
    width: 228px;
    height: 360px;
    float: left;
    margin-right:16px;
    margin-bottom:18px;
    background:#fff;
    >div{
      padding:0 10px;
    }
  }
  li:hover{
    box-shadow:0 0 8px 0 #ccc;
  }
  li:nth-child(4n){
    margin-right:0;
  }
  .m_coll_shop{
    height:317px;
  }
  .m_coll_img{
    height:225px;
    line-height:225px;
    width:100%;
    img{
      max-width:100%;
      max-height:100%; 
    }
  }
  .m_coll_title{
    height:45px;
    margin-bottom:15px;
  }
  .m_coll_price{
    color:#ff0000;
    font-weight:600;
  }
  .m_coll_c{
    border-top:1px solid #ededed;
    span{
      display: inline-block;
      width:48%;
      text-align:center;
      line-height:42px;
      
    } 
    span:first-child{
      border-right:1px solid #ededed;
    }
  }
  
}
</style>
