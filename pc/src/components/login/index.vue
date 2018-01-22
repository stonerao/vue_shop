<template>
	<div class="login">
		<ul class="login_list inp_list">
			<li><input type="text" placeholder="用户名"></li>
			<li><input type="text" placeholder="密码"  ></li>
			<li><button class="btn-submit  ">登录</button></li>
		</ul>
		<loadings :string="str"></loadings>
	</div>
</template>
<script>
import utils from '@/assets/js/utils'
import {mapState} from 'vuex'
import loadings from '@/comments/comment/loading'
export default {
	data() {
			return {
				str:{
					string:"密码错误",
					isString:true,
				},
			}
		},
		methods: {
			 
		},
		created() {

		},
		components: {
			loadings
		},
}
</script>
<style  lang="less">
	input{
		width:100%;
	}

</style>