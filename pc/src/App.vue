<template>
  <div id="app"> 
    <Headers></Headers>
    <router-view id="router-view"></router-view> 
    <Footers></Footers>
  </div>
</template>
<script> 
import Headers from "@/components/header";
import Footers from "@/components/footer";
import { mapState } from 'vuex'
export default { 
  components: {
    Headers,Footers
  }, 
  mounted () { 
     
  }
}
</script>
<style lang="less" >
@import './styles/index.less';   
</style>