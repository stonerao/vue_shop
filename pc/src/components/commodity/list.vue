<template>
  <div class="main-box">
      <div class="list_select">
          <ul class="list_select_items">
              <li v-for="(box,i) in lists" :key="i">
                  <div class="list_select_title">
                      {{box.name}}：
                  </div>
                  <div class="list_select__b">
                      <div class="list_select__b_h">
                          <div> 
                            <a v-for="(item,index) in 22" :key="index" :class="{'active':index===1?true:false}">{{$Mock.mock('@cword(2, 5)')}}</a>
                          </div>
                      </div><span @click="expand" data-eval="true">展开</span>
                  </div>
              </li> 
          </ul>
      </div> 
      <ul class="sort_list">
        <li class="cur" :class="{'active':index==sortIndex}" v-for="(item,index) in sortList" :key="index" @click="sortClick(item)">
            {{item.name}}
        </li>
      </ul> 
      <div class="dity_group">
          <div class="dity_items">
              <div class="dity_item" v-for="item in 10" :key="item">
                  <div class="dity_item_img">
                      <img v-lazy="$Mock.Random.dataImage('190x190')" alt="">
                  </div>
                  <div class="dity_item_t shop__text">
                    {{$Mock.mock('@cparagraph(1, 3)')}}
                  </div>
                  <div class="overflow dity_item_cart">
                      <span class="price red-color">￥<a class="font-4  red-color">{{$Mock.mock('@integer(60, 100)')}}</a></span>
                      <span class="float-right font-1 cur">加入购物车</span>
                  </div>
              </div>
          </div>
            <div class="o_page">
                <el-pagination class="center" background @size-change="pageSize" @current-change="curChange" :current-page.sync="page.curpage" :page-size="page.size" layout="prev, pager, next, jumper" :total="page.total">
                </el-pagination>
            </div>
      </div>
  </div>
</template>

<script>
import { Pagination } from "element-ui";
export default {
  name: "Commodity",
  data() {
    return {
      lists: [
        { name: "商品分类", index: 0 },
        { name: "精品果蔬", index: 1 },
        { name: "叶菜类", index: 2 }
      ],
      sortList: [
        { name: "综合排序", sort: true, id: 0 },
        { name: "销量", sort: true, id: 1 },
        { name: "价格", sort: true, id: 2 },
        { name: "评价", sort: true, id: 3 }
      ],
      sortIndex:0,
      page: {
        curpage: 3,
        total: 100,
        size: 10
      }
    };
  },
  mounted() {
    this.h(false);
  },
  methods: {
    sortClick() {
      /* 排序 */
    },
    expand(ev) {
      /* 点击是否展开 */
      let e = ev.target;
      /* 获取到需要展开的元素 */
      this.h(true, [e.parentNode.firstChild.firstChild]);
    },
    async h(state, dom) {
      /* 
        获取需要选择的DOM
        state是判断是什么地方过来的
      */
      var all = state
        ? dom
        : document.querySelectorAll(".list_select__b_h div");
      all.forEach(x => {
        /* 获取到旁边的元素 */
        let span = x.parentNode.parentNode.lastChild;
        /* 如果是展开状态。那就缩回 否则就收回*/
        if (x.parentNode.offsetHeight > 60) {
          x.parentNode.style.height = x.offsetHeight > 60 ? "46px" : "auto";
          span.setAttribute("data-eval", "true");
          span.innerHTML = "展开";
        } else {
          x.parentNode.style.height = "auto";
          span.setAttribute("data-eval", "false");
          span.innerHTML = "收回";
        }
      });
    },
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
@import "../../styles/base.less";
.dity_group {
    padding-bottom:40px;
  .dity_items {
    overflow: hidden;
  }
  .dity_item {
    width: 18%;
    margin-right: 2.5%;
    float: left;
    margin-bottom: 40px;
  }
  .dity_item:nth-child(5n) {
    margin-right: 0;
  }
  .dity_item_t {
    height: 42px;
    line-height: 20px;
  }
  .dity_item_img {
    margin-bottom: 10px;
    img {
      width: 100%;
    }
  }
  .dity_item_cart {
    margin-top: 10px;
    text-align: bottom;
    .float-right {
      line-height: 20px;
    }
  }
}
.sort_list {
  padding: 7px 12px;
  background-color: #ececec;
  margin: 21px 0;
  li {
    display: inline-block;
    line-height: 26px;
    padding: 0 14px;
    background: #fff;
    box-shadow: 0 0 0 1px #ddd;
    transition: all 0.15s;
  }
  li:hover,
  li.active {
    background-color: @color;
    box-shadow: 0 0 0 1px @color;
    color: #fff;
  }
}
.list_select_items {
  padding: 10px 20px;
  border: 1px solid #ddd;
  > li {
    border-bottom: 1px dashed #ddd;
    line-height: 46px;
    overflow: hidden;
    .list_select_title {
      width: 80px;
      text-align: right;
      float: left;
    }
    .list_select__b {
      float: left;
      width: 1070px;
      overflow: hidden;
      > div > div > a {
        margin: 0 10px;
        cursor: pointer;
        display: inline-block;
      }
      a:hover,
      a.active {
        color: @color;
        cursor: pointer;
      }
      > div {
        float: left;
        width: 980px;
      }
      > span {
        display: inline-block;
        width: 59px;
        float: right;
        text-align: right;
        cursor: pointer;
        color: #999;
        padding-right: 25px;
        background-image: url(../../assets/index/icon-b.png);
        background-repeat: no-repeat;
        background-position: right 2px center;
        background-size: 20px auto;
        transition: all 0.2s;
      }
    }
  }
  li:last-child {
    border: 0;
  }
}
</style>
