<template>
  <div class="main-box not_ center" >
     <img v-lazy="NOT" alt="">
     <p class="hui-color">没有这个页面 -_-! </p>
  </div>
</template>

<script>
import NOT from '@/assets/404.png'
export default {
  data(){
    return{
      NOT:NOT
    }
  }
}
</script>
<style lang="less" scoped>
 .not_{
  padding-bottom:100px;
   img{
      margin-top:150px;
     display: inline-block;
    vertical-align: middle;
   }
   p{
      line-height:100px;
   }
 }
</style>
 
