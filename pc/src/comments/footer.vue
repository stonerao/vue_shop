<template>
	<footer id="footer">
		<ul>
			<router-link to="/index" tag="li">主页</router-link>
			<router-link to="/upimg" tag="li">upimg</router-link>
			<router-link to="/reg" tag="li">注册</router-link>
			<router-link to="/login" tag="li">登录</router-link>
		</ul>
	</footer>
</template>
<script>
import utils from '@/assets/js/utils'
 export default {
 	props: ['active'],
 	data() {
 			return {
 				
 			}
 		},
 		 created(){
 		 	console.log(this.active)
 		 }

 }
</script>
<style lang="less">
	#footer{
		position:fixed;
		bottom:0;
		left:0;
		right:0;
		height:0.9rem;
		background-color:#fff;
		border-top:0.02rem solid #ededed;
		line-height:0.9rem;
		text-align:center;
		z-index:10000;
		ul{
			display:flex;
			li{
				flex:1;
			}
		}
	}
	
</style>