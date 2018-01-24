<template>
  <div>
    <!-- 顶部 -->
    <Headers/>
    <!-- banners -->
    <div class="index-banner"> 
      <el-carousel trigger="hover" height="540px">
        <el-carousel-item v-for="item in 4" :key="item">
           <img v-lazy="banner" alt="" class="index-banner-imgs">
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
import Headers from "@/components/header";
import { Carousel, CarouselItem } from "element-ui";

export default {
  data() {
    return {
      banner: require("@/assets/index/banner.jpg")
    };
  },
  components: {
    Headers,
    "el-carousel": Carousel,
    "el-carousel-item": CarouselItem
  }
};
</script>

<style lang="less" scoped>
.index-banner {
  position: relative;
  .index-banner-imgs {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
