 <template>
  <div>
      <div class="line">
          <span>
            以保存收获地址（最多保存10条，还能保存9条）
          </span>
          <span class="cur" @click="++state">刷新 {{state}}</span>
           <router-link to="./items" class="color-g float-right">+ 新建地址</router-link>
      </div>
      <div class="border ad_group"> 
          <table class="ad_items center">
              <thead class="ad_navs">
                  <tr>
                      <td>收货人</td>
                      <td>地址</td>
                      <td>联系方式</td>
                      <td>操作</td>
                      <td>&nbsp;</td>
                  </tr>
              </thead>
              <tbody>
                  <tr v-for="i in 10" :key="i">
                      <td class="ad__name">
                        {{$Mock.mock('@cname')}}
                      </td>
                      <td class="ad__adr">
                         {{$Mock.mock('@county(true)')}}{{$Mock.mock('@county')}}{{$Mock.mock('@ip')}}
                      </td>
                      <td class="ad__mobile"> 
                        {{$Mock.Random.integer(13500000000, 19500000000)}}
                      </td>
                      <td class="ad__cao">
                          <router-link to="./items" class="color-g ">编辑</router-link>
                          <router-link to="./items" class="color-g  margin-left20">删除</router-link>
                      </td>
                      <td class="ad__state">
                          <span v-if="i!==3">设为默认地址</span>
                          <span v-else class="ad__state_m tran cur">默认地址</span>
                      </td>
                  </tr>
              </tbody>
          </table>
      </div>
  </div>
</template>

<script> 
export default {
    data(){
        return{
            state:0
        }
    }
};
</script>
<style lang="less" scoped>
@import "../../../styles/member.less";
.ad_group {
  overflow: hidden;
  margin-top: 5px;
  .ad_navs {
    line-height: 50px;
    height: 50px;
    background: #f4f4f4;
  }
  .ad_items {
    width: 100%;
    tbody {
      tr {
       
        td{
            height:60px; 
            padding-top:45px; 
            line-height:24px;
        }
      }
    }
  }
  .ad__name {
    width: 150px;
  }
  .ad__adr {
    width: 290px;
    
  }
  .ad__mobile {
    width: 190px;
  }
  .ad__cao {
    width: 150px;
  }
  .ad__state_m{
      display:inline-block;
      color:@color;
      border:1px solid @color;
      border-radius:4px;
      padding:10px 25px;
      background:#fff5e2;
      
  }
  .ad__state_m:hover{
      background: @color;
      color:#fff;
  }
}
</style>
