<template>
  <div id="app"> 
    <Headers v-if="$store.state.isHeaderFooter"></Headers>
    <router-view id="router-view"></router-view> 
    <Footers v-if="$store.state.isHeaderFooter"></Footers>
  </div>
</template>
<script> 
import Headers from "@/components/header";
import Footers from "@/components/footer";
import '@/utils/utils' 
export default { 
  data(){
    return{
      isView:true
    }
  },
  components: {
    Headers,Footers
  }, 
  mounted () {  
  }, 
}
</script>
<style lang="less" >
@import './styles/index.less';   
</style>