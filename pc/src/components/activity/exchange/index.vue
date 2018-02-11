<template>
	<div class="main-box">
        <el-breadcrumb separator-class="el-icon-arrow-right" class="m-breadcrumb">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>活动中心</el-breadcrumb-item>
            <el-breadcrumb-item>积分换购</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="ex_box">
        	<div class="ex_box_title">
        		<span></span>
        		<i class="_title">积分兑换</i>
        	</div>
        	<div class="ex_box_cont">
        		<div v-for="item in 5" :key="item">
                    <div>
                        <img v-lazy='$Mock.Random.dataImage("291px291")' alt="" class="img-center">
                    </div>
                    <p class="goods_text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptatem asperiores architecto, cum et rerum facilis qui deserunt minima quaerat placeat officia ullam exercitationem minus veritatis. Voluptatem animi praesentium eos!
                    </p>
                    <p class="color-p font-4 center">
                        188积分
                    </p>
                    <p>
                        <router-link to='/' class="integral_btn ac_box_j">立即兑换</router-link>
                    </p>
                </div>
        	</div>
        </div>
    </div>
</template>
<script>
import { Breadcrumb, BreadcrumbItem } from "element-ui";
export default {
  components: {
    "el-breadcrumb": Breadcrumb,
    "el-breadcrumb-item": BreadcrumbItem
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
				width:6px;
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
				width:291px;
				float: left;
				margin-right: 12px;
			}
			.goods_text{

			}
		}
	}
</style>