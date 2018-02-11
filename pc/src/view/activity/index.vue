<template>
    <div class="main-box commodity">
    	<div class="relatvie">
	       <!-- <NavBar/> -->
	    </div>
        <router-view></router-view>
    </div>
</template>

<script>
import NavBar from "@/components/commodity/nav";
export default {
	components:{
		NavBar
    }

};
</script>
<style lang="less" scoped>
@import "../../styles/base.less";
.commodity {
  min-height: 400px;
}
.relatvie {
  position: relative;
  .absolute {
    position: absolute;
  }
  .common__h_list {
    background: #fff;
    border-radius: 4px;
    border: 1px solid #eaeaea;
    top: 32px;
    left: 30px;
    display: none;
    transition: all 0.2s;
    height: 0;
    overflow: hidden;
    li {
      line-height: 34px;
      cursor: pointer;
      padding: 0 20px;
    }
    li:hover {
      background: #f7f7f7;
    }
  }
  .common__h:hover {
    .common__h_list {
      display: block;
      height: auto;
    }
  }
}
</style>
