<template>
	<div class="index">
		 
	</div>
</template>
<script>
import {mapState} from 'vuex'
 export default {
 	data() {
 			return {

 			}
 		},
 		methods: {

 		},
 		created() {
 			
 		},
 		components: {
 			 
 		},
 		computed: mapState({
 			count: state => state.count,
 			countAlias: 'count',
 			countPlusLocalState(state) {
 				return state.count + this.localCount
 			}
 		})

 }
</script>
<style  lang="less">
 
	
</style>