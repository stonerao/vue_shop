<template>
	<div class="loading" id="loading" v-if="isLoading">
		{{string.string}}
	</div>
</template>
<script>
 
import {mapState} from 'vuex'
 export default {
 	props: ['string'],
 	data() {
 		return {
 			isLoading:false,
 		}
 	},
 	computed:{
 	 	 if_alert(){
 	 	 	console.log(1)
 	 	 	return this.string.isString
 	 	 }
 	},
 	created(){
 		
 	}
 	,
 	watch:{
 		if_alert(){
 			let isLoading = this.isLoading;
 			this.isLoading=true;
 			setTimeout(()=>{
 				this.isLoading=false
 			},2000)
 		}
 	}
 }
</script>
<style  lang="less">
	.loading{
		padding:0.3rem;
		border-radius:0.08rem;
		background:rgba(100, 100, 100, 0.5);
		position:fixed;
		top:50%;
		left:50%;
		transform: translate(-50%,-50%);
		color:#fff;
	}

</style>