<template>
  <div id="app"> 
    <Headers></Headers>
    <router-view id="router-view"></router-view> 
  </div>
</template>
<script> 
import Headers from "@/components/header";
import { mapState } from 'vuex'
export default { 
  components: {
    Headers
  },
  computed: mapState({
    // 箭头函数可使代码更简练
    count: state =>{console.log(state);return state.count} ,

    // 传字符串参数 'count' 等同于 `state => state.count`
    countAlias: 'count',

    // 为了能够使用 `this` 获取局部状态，必须使用常规函数
    countPlusLocalState (state) {
      return state.count + this.localCount
    }
  }),
  mounted () {
    setTimeout(()=>{
      console.log(this.$store.getters.toState)
    },1500)
  }
}
</script>
<style lang="less">
@import './styles/index.less';   
</style>