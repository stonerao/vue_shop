<template>
    <div class="border add_adr">
        <div class="m_nav font-4">添加地址</div>
        <div class="adr_items">
            <div class="adr_item">
                <div class="adr_item_title">
                    收货地址：
                </div>
                <div class="">
                    <el-select v-model="value" placeholder="请选择省区/直辖市" class="i_border width_inp">
                        <el-option v-for="item in 3" :key="item" :label="item" :value="item">
                        </el-option>
                    </el-select>
                    <el-select v-model="value" placeholder="请选择市" class="i_border width_inp">
                        <el-option v-for="item in 3" :key="item" :label="item" :value="item">
                        </el-option>
                    </el-select>
                    <el-select v-model="value" placeholder="请选择区/镇" class="i_border width_inp margin-right0">
                        <el-option v-for="item in 3" :key="item" :label="item" :value="item">
                        </el-option>
                    </el-select>
                </div>
            </div> 
            <div class="adr_item">
                <div class="adr_item_title">
                    地址详情：
                </div>   
                <div class="">   
                    <textarea name="" id="" cols="30" rows="10" placeholder="请输入详细的小区/街道" class="adr_textrea"></textarea>
                </div> 
            </div> 
            <div class="adr_item"> 
                <div> 
                    <div class="adr_item_title"> 
                        收货人： 
                    </div> 
                    <div class=""> 
                        <el-input v-model="value" placeholder="请输入收货人"></el-input> 
                    </div> 
                </div> 
                <div class="float-right"> 
                    <div class="adr_item_title"> 
                        收货人： 
                    </div> 
                    <div class=""> 
                        <el-input v-model="value" placeholder="请输入收货人"></el-input> 
                    </div> 
                </div>
            </div> 
            <div class="adr_item "> 
                    <div class="l_36">
                        <div class="adr_item_title">  
                        </div> 
                         <el-checkbox v-model="checked">设为默认地址</el-checkbox>
                    </div>
                     <div class="float-right"> 
                        <button class="adr_btn adr_btn_sub">
                             保存
                        </button>
                        <button  class="adr_btn adr_btn_quit">
                            取消
                        </button>
                    </div>
                    
            </div>
        </div> 
    </div>
</template>

<script>
import { Select, Option, Input, Checkbox } from "element-ui"; 
export default {
  data() {
    return {
      value: "",
      checked: ""
    };
  }, 
  components: {
    "el-select": Select, 
    "el-option": Option,
    "el-checkbox": Checkbox,
    "el-input": Input
  }
};
</script>
<style lang="less" scoped>
@import "../../../styles/member.less";

.adr_items {
    padding-bottom:95px;
    .adr_btn{
        width:124px;
        height:42px;
        border-radius:4px; border:1px solid @color-g;
        cursor: pointer;
        transition:all .2s;
    }
    .adr_btn_sub{
       background:@color-g;
       color:#fff;
    }
    .adr_btn_sub:hover{
        background:@color-g * 0.8;
    }
    .adr_btn_quit{
        background:#fff;
        color:@color-g;
        margin-left:20px;
    }
    .adr_btn_quit:hover{
        background:@color-g;
       color:#fff;
    }
  .adr_item {
    padding-left: 90px; 
    margin-top: 32px; 
    width: 727px; 
    overflow: hidden;
    div {
      display: inline-block;
    }
  }

  .adr_item_title {
    width: 94px;

    vertical-align: top;

    line-height: 36px;

    min-height: 36px;
  }

  .width_inp {
    width: 200px;

    margin-right: 10px;
  }

  .adr_textrea {
    width: 615px;

    border: 1px solid #dcdfe6;

    padding-top: 10px;

    padding-left: 10px;

    height: 82px;
  }

  .margin-right0 {
    margin-right: 0;
  }
  .l_36 {
    line-height: 36px;
  }
}
</style>
