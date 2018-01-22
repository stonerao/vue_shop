<template>
	<div class="login">
		<ul class="login_list inp_list">
			<li class="input-min"><input type="text" placeholder="用户名"></li>
			<li class="input-min"><input type="text" placeholder="密码" v-model="str.string"></li>
			<li class="input-max"><input type="text" placeholder="验证码" v-model="str.string"><button class="btn">获取手机号</button></li>
			<li ><button class="btn-submit" @click="submit">登录</button></li>
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
			files() {
				this.$store.state.file.isFile=true;
			},
			submit(){
				this.str.isString=!this.str.isString;
			},
		},
		created() {

		},
		components: {
			loadings
		},
}
</script>
<style  lang="less">


</style>