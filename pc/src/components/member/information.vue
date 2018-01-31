<template>
  <div class="border">
    <div class="m_nav font-4">基本资料</div>
    <div class="m_i_form margin-left20 line-40">
      <div class="m_form_items line-65">
        <div class="m_f_name">用户头像</div>
        <div class="line-65"><img v-lazy="form.ava" alt="" class="img-center radius cur m_i_form_img" @click="cropperClick"></div>
      </div>
      <div class="m_form_items">
        <div class="m_f_name">账户</div>
        <div>小虎</div>
      </div>
      <div class="m_form_items">
        <div class="m_f_name">真实姓名</div>
        <div><el-input v-model="form.name" placeholder="请输入姓名" class="width-208"></el-input></div>
      </div>
      <div class="m_form_items">
        <div class="m_f_name">手机号码</div>
        <div><span>18583671750</span><router-link to="/" class="margin-left40 color-bulr">修改手机号码</router-link></div>
      </div>
      <div class="m_form_items">
        <div class="m_f_name">性别</div>
        <div>
          <el-radio v-model="form.radio" label="1">男</el-radio>
          <el-radio v-model="form.radio" label="2">女</el-radio>
          <el-radio v-model="form.radio" label="3">保密</el-radio>
        </div>
      </div> 
       <div class="m_form_items">
        <div class="m_f_name">出生日期</div>
        <div>
          <el-date-picker
            v-model="form.date"
            type="date"
            placeholder="选择日期">
          </el-date-picker> 
        </div>
      </div> 
       <div class="m_form_items m_border-top  ">
        <div class="m_f_name">&nbsp;</div>
        <div>
         <button class="m_f_btn font-3 cur" @click="sub">保存</button>
        </div>
      </div>
    </div>
    <div>
      <div class="m_cropper" v-if="cropperBoolen"  @click="cropperOver" id="cropper">
        <div class="m_cropper_box position_center">  
          <div class="i_b ">
            <vueCropper class="m_cropper_item  " style="width:300px;height:300px"
                ref="cropper"
                :img="example.img"
                :outputSize="example.size"
                :outputType="example.outputType"
                :info="example.info"
                :canScale="example.canScale"
                :autoCrop="example.autoCrop"
                :autoCropWidth="example.autoCropWidth"
                :autoCropHeight="example.autoCropHeight"
                :fixed="example.fixed"
                :fixedNumber="example.fixedNumber"
              ></vueCropper> 
            </div>
            <div class="i_b m_cropper_btn"> 
              <label for="m_img" class="cur">
                选择头像 
              </label>
                <input type="file" id="m_img" hidden  accept="image/*" @change="cropperFile">
              <p class="margin-top20"><span class="cur"  @click="cropperBtn">查看效果</span></p> 
              <p class="margin-top20"><el-button @click="cropperSub">确认</el-button></p> 
               <p class="margin-top20"><span class="cur"  @click="cropperBoolen=false">关闭</span></p> 
              <!-- :loading="true" -->
            </div>
            <div class="m_cropper_parst">
              <img v-lazy="example.goImg" alt="" class="img-center radius cur m_cropperform_img">
            </div>
          </div>
      </div>
   
    </div>
  </div>
</template>

<script>
import { Input, Radio, DatePicker, Button, Message } from "element-ui";
import VueCropper from "vue-cropper";
export default {
  data() {
    return {
      form: {
        name: "",
        ava: this.$Mock.Random.dataImage("65x65"),
        radio: "",
        date: ""
      },
      example: {
        img: "",
        info: true,
        size: 1,
        outputType: "jpeg",
        canScale: true,
        autoCrop: true,
        // 只有自动截图开启 宽度高度才生效
        autoCropWidth: 200,
        autoCropHeight: 200,
        // 开启宽度和高度比例
        fixed: true,
        fixedNumber: [4, 4],
        goImg: ""
      },
      cropperBoolen: false, //是否开启
      Mssage: Message
    };
  },
  created() {},
  components: {
    "el-input": Input,
    "el-radio": Radio,
    "el-date-picker": DatePicker,
    "el-button": Button,
    VueCropper
  },
  mounted() {},
  methods: {
    sub() {
      /* 确认 */
    },
    cropperFile(e) {
      /* 选择图片 */

      let files = e.target.files || e.dataTransfer.files;
      if (!files.length > 0) return;
      let reader = new FileReader();
      let _this = this;
      reader.onload = function(readerData) {
        _this.example.img = readerData.target.result;
      };
      reader.readAsDataURL(files[0]);
    },
    cropperBtn() {
      if (this.example.img == "") {
        this.Mssage({
          message: "请选择图片",
          type: "warning"
        });
        return;
      }
      this.$refs.cropper.getCropData(data => {
        // do something
        this.example.goImg = data;
      });
    },
    cropperClick() {
      /* 打开截图 */
      if (this.cropperBoolen === false) {
        this.example.goImg = this.form.ava;
      }
      this.cropperBoolen = !this.cropperBoolen;
    },
    cropperSub() {
      /* 确认上传头像 */
      this.$refs.cropper.getCropData(data => {
        // do something
        this.form.ava = data;
        this.cropperClick();
      });
    },
    cropperOver(e) {
      // 关闭
      if (e.target.id === "cropper") {
        this.cropperBoolen = false;
      }
    }
  }
};
</script>
<style lang="less" scoped>
@color: #f09f0b;
@import "../../styles/member.less";
.m_i_form_img {
  width: 65px;
  height: 65px;
}
.m_i_form {
  padding: 60px 20px;
  .m_form_items {
    overflow: hidden;
    margin: 15px 0;
    > div {
      float: left;
      display: inline-block;
    }
    .m_f_name {
      width: 70px;
      text-align: right;
      margin-right: 65px;
    }
  }
}

.m_border-top {
  border-top: 1px #eaeaea dashed;
  position: relative;
  top: 20px;
}
.position_center {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.m_cropper {
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 1001;
  .m_cropper_box {
    width: 700px;
    height: 300px;
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    overflow: hidden;
    > div {
      height: 300px;
      float: left;
    }
  }
  .m_cropper_parst {
    width: 200px;
    text-align: center;
    line-height: 300px;
  }
  .m_cropper_item {
  }
  .m_cropper_btn {
    text-align: center;
    width: 200px;
    padding-top: 50px;
    button {
    }
  }
  .m_cropperform_img {
    width: 200px;
    height: 200px;
    line-height: 300px;
  }
}
</style>
