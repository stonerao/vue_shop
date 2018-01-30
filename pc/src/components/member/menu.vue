<template>
  <ul class="m-memu-list">
     <router-link tag="li" :to="`/member${item.path}`" v-for="(item,index) in model" :key="index" class="m-memu-title m-memu-items">
       <span>{{item.name}}</span> 
        <menus v-if="item.children" :model="item.children" class="m-memu-children"></menus>
     </router-link>
  </ul>
</template>

<script>
export default {
  name: "menus" /* 自身组件的名字 可以在当前vue组件调用 */,
  props: {
    model: Array
  },
  data() {
    return {};
  },
  created() { 
  }
};
</script>

<style lang="less">
@color:#f09f0b;
.m-memu-list { 
  .m-memu-children {
    .active {
      color: @color;
    }
    .m-memu-title {
      font-size: 14px;
      line-height: 24px;
      margin-top:3px;
      margin-bottom:3px;
      font-weight: 400;
      cursor: pointer;
      color: #888;
      transition:all .2s;
    }
    .m-memu-title.active{
        color:@color;
    }
    .m-memu-title:hover{
        color:@color;
    }
    .m-memu-items {
      margin-bottom: 0;
    }
  }
  .m-memu-title {
    font-size: 16px;
    color: #222;
    line-height: 34px;
    font-weight: 700;
  }
  .m-memu-items {
    margin-bottom: 26px;
  }
}
</style>
