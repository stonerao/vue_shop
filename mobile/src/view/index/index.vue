<template>
	<div class="index">
		<h1>hello</h1>
	</div>
</template>
<script> 
import axios from 'axios'
export default {
  data() {
    return {};
  },
  methods: {},
  created() {
	  axios.get("/stone/api").then((res)=>{
		  console.log(res)
	  })
  },
  components: {} 
};
</script>
<style  lang="less">

</style>