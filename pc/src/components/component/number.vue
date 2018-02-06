<template>
    
</template>

<script>
export default {
  props:['num'], 
  data(){
      return{

          nums:10
      }
  },
  methods:{
      js(){ 
          
      }
  },
  watch:{
      nums(val){ 
          this.$emit("numRef",val)
      }
  }
};
</script>

<style lang="less" scoped>
.r_number {
  display: inline-block;
  overflow: hidden;
  border: 1px solid #ddd;
  > div {
    float: left;
    line-height: 32px;
  }
  .r_number_btn {
    height: 32px;
    width: 36px;
    line-height: 32px;
    text-align: center;
    cursor: pointer;
    color: #999;
    font-weight: 700;
    font-size: 16px;
  }
  .r_number_inp {
    border-left: 1px solid #ddd;
    border-right: 1px solid #ddd;
    input {
      padding: 0;
      margin: 0;
      border: 0;
      width: 46px;
      padding: 0 10px;
    }
  }
}
</style> 
