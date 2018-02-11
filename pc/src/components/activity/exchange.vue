<template>
	<div class="main-box">
        <el-breadcrumb separator-class="el-icon-arrow-right" class="m-breadcrumb">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{path: '/activity/index'}">活动中心</el-breadcrumb-item>
            <el-breadcrumb-item>积分换购</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="ex_box">
        	<div class="ex_box_title">
        		<span></span>
        		<i class="_title">积分兑换</i>
        	</div>
        	<div class="ex_box_cont">
        		<div v-for="item in 8" :key="item">
                    <div>
                        <img v-lazy='$Mock.Random.dataImage("291px291")' alt="" class="img-center">
                    </div>
                    <p class="goods_text">
                        绿鲜知 上海青 小油菜 约400g 火锅刷菜 新鲜蔬菜
                    </p>
                    <p class="color-p font-4">
                        188积分
                    </p>
                    <p>
                        <router-link to='/' class="ex_btn">立即兑换</router-link>
                    </p>
                </div>
        	</div>
        </div>
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
</template>
<script>
import { Breadcrumb, BreadcrumbItem ,Pagination} from "element-ui";
export default {
  components: {
    "el-breadcrumb": Breadcrumb,
    "el-breadcrumb-item": BreadcrumbItem,
    "el-pagination": Pagination
  },
  data(){
  	return{
  		 /* 页数 */
      page: {
        curpage: 3,
        total: 100,
        size: 10
      }
  	}
  },
  methods:{
  	pageSize(e) {
      /* 页数发生改变的时候 */
    },
    curChange(e) {
      /* 翻页 */
    }
  }

};
</script>
<style lang="less" scoped>
    @back:#fff;
	.ex_box{
		.ex_box_title{
			padding:15px 10px;
			background-color: @back;
			margin-bottom: 20px;
			@tit_color:#43b554;
			span{
				display:inline-block;
				height: 30px;
				width:4px;
				background-color: @tit_color;
				float: left;
			}
			._title{
				display: inline-block;
				font-size: 30px;
				color:@tit_color;
				font-weight: bold; 
				height: 30px;
				line-height: 30px;
				margin-left: 22px;
			}
		}
		.ex_box_cont{
			width:1212px;
			&:after{
				content: '';
				visibility: hidden;
				display: block;
				clear: both;
			}
			>div{
				background-color: @back;
				width:291px;
				float: left;
				margin-right: 12px;
				margin-bottom: 20px;
				overflow: hidden;
			}
			.goods_text{
				height: 44px;
				line-height:22px;
				overflow: hidden;
				text-overflow: ellipsis;
				-webkit-line-clamp: 2;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				margin:5px 0;
				font-size: 14px;
				padding:0 25px;
			}
			.color-p{
				color: #e01321;
				margin:13px 0 25px 0;
				padding:0 25px;
			}
			.ex_btn{
				display: block;
				height: 50px;
				line-height: 50px;
				background-color: #41b752;
				text-align: center;
				color: #fff;
				font-size: 16px;
			}
		}
	}
</style>