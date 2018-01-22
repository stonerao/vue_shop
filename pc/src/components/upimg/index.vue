<template>
	<div class="a">
		<file v-if="$store.state.file.isFile"></file>
		<button @click="files" class="btn-submit">click</button>
	</div>
</template>
<script>
import utils from '@/assets/js/utils'
import {mapState} from 'vuex'
import file from '@/comments/file'
 export default {
 	data() {
 			return {
 				 val:""
 			}
 		},
 		methods: {
 			files(){
				this.$store.state.file.isFile=true;
				console.log(this.val)
 			},
 			upd(res){
 				console.log(res)
 			}
 		},
 		created() {
 			this.val = this.$store.state.file.src;
 		},
 		components: {
 			 file
 		},
 		watch:{
 			val:function(){
 				 
 			}
 		}
 }
</script>
<style  lang="less">

 
	
</style>