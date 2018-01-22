<template>
	<header id="header">
		<span class="icon-center" @click="returns"><img :src="icon_tui" alt="" class=""></span>
		<span class="header_title">首页</span>
		<span class="header_more v-hidden">···</span>
	</header>
</template>
<script>
import utils from '@/assets/js/utils'
import icon_tui from '@/assets/images/icon-tui.png'
 export default {
 	props: ['active'],
 	data() {
 		return {
 			icon_tui: icon_tui
 		}
 	},
 	created() {
 		console.log(this.active)
 	},
 	methods:{
 		returns(){
 			history.go(-1);
 		}
 	}
 }
</script>
<style lang="less">
	#header{
		position:fixed;
		top:0;
		left:0;
		right:0;
		height:0.9rem;
		background-color:#fff;
		line-height:0.9rem;
		text-align:center;
		z-index:10000;
		padding:0 0.2rem;
		display:flex;
		flex-wrap:nowrap;
		justify-content:space-between;
		border-bottom:0.02rem solid #ededed;
		.header_more{
			color:#999;
			font-weight:bold;
		}
		.header_title{
			color:#333;
		}
	}
	.v-hidden{
		visibility:hidden;
	}
	
</style>