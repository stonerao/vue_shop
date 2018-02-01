<template>
    <ul >
        <router-link tag="li" :to="`/system${item.path}`" v-for="(item,index) in model" :key="index" class="cur s-menu-item">
            {{item.name}}
        </router-link>
    </ul>
</template>

<script>
export default {
  props: {
    model: Array
  },
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
.s-menu-item {
  @h: 42px;
  line-height: @h;
  height: @h;
  text-indent: 56px;
  border-bottom: 1px solid #eaeaea;
}

.s-menu-item:last-child{
  border-bottom:0;
}
.s-menu-item.active {
  background-color: #f5f5f5;
  transition: all 0.2s;
}
.s-menu-item:hover {
  background-color: #f5f5f5;
}
</style>

