<template>
  <div>
    <ul class="m_coll overflow">
      <li v-for="item in 15" :key="item" class="border">
        <div>

        </div>
        <div>
          <span>取消</span>
          <span>收藏</span>
        </div>
      </li>
    </ul>
    <div class="o_page">
      <el-pagination class="center" background @size-change="pageSize" @current-change="curChange" :current-page.sync="page.curpage" :page-size="page.size" layout="prev, pager, next, jumper" :total="page.total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { Pagination } from "element-ui";
export default {
  name: "collection",
  data() {
    return {
      page: {
        curpage: 3,
        total: 100,
        size: 10
      }
    };
  },
  methods: {
    pageSize(e) {
      /* 页数发生改变的时候 */
    },
    curChange(e) {
      /* 翻页 */
    }
  },
  components: {
    "el-pagination": Pagination
  }
};
</script>
<style lang="less" scoped>
.m_coll {
  li {
    width: 228px;
    height: 360px;
    float: left;
    margin-right:18px;
  }
  li:nth-child(4n){
    margin-right:0;
  }
}
</style>
