<template>
	<div class="index">
		<h1>hello</h1>
      <Button>默认按钮</Button>
	</div>
</template>
<script> 
import axios from 'axios'
import { Button, Select } from 'element-ui'
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
  components: {Button} 
};
</script>
<style  lang="less">

</style>