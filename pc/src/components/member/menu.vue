<template>
  <ul class="m-memu-list">
     <li v-for="(item,index) in model" :key="index" class="m-memu-items">
        <router-link :to="`/member${item.path}`" class="m-memu-title">{{item.name}}</router-link>
        <menus v-if="item.children" :model="item.children" class="m-memu-children"></menus>
     </li>
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
      line-height: 30px;
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
