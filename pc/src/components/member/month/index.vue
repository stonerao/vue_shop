 <template>
  <div class="balance">    
    <div class="bal_top">
        <div>
            <p>账户余额</p>
            <span>100.00</span>
        </div>
        <router-link to="/member/month/items">充值</router-link>
    </div>

    <div class="bal_list">
        <div class="bal-list-tab">
            <ul>
                <li v-for="(nav,index) in tab" :key="index" @click="state=index"  :class="{'active':state==index}">
                    <a href="javascript:void(0)">{{nav.name}}</a>
                </li>
            </ul>
            <el-select  v-model="value" placeholder="近三个月内的订单" class="i_border float-right" size="mini">
                <el-option v-for="item in 3"  :key="item"  :label="item" :value="item">
                </el-option>
            </el-select>
            <div class="clear"></div>
        </div>
        <table>
            <tr>
                <th v-for="(lis,index) in list" :key="index">{{lis.title}}</th>
            </tr>
            <tr v-for="record in 8" :key="record">
                <td>{{$Mock.Random.date()}} {{$Mock.Random.time()}}</td>
                <td>+50.00</td>
                <td>充值</td>
                <td>100.00</td>
            </tr>
        </table>
        <!-- 分页 -->
        <div class="o_page">
            <el-pagination class="center"
            background
            @size-change="pageSize"
            @current-change="curChange"
            :current-page.sync="page.curpage"
            :page-size="page.size"
            layout="prev, pager, next, jumper"
            :total="page.total">
            </el-pagination>
        </div> 
    </div>
  </div>
</template>

<script>
/* 查看历史记录 和当前金额 */
import { Select, Option, Pagination } from "element-ui";
export default {
    data(){
        return{
            value:'',
            state:0,
            tab:[
                {name:'全部'},
                {name:'收入'},
                {name:'支出'},
            ],
            list:[
                {title:'时间'},
                {title:'金额'},
                {title:'来源'},
                {title:'账户余额'},
            ],
            /* 页数 */
            page: {
                curpage: 3,
                total: 100,
                size: 10
            }
        }
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
        "el-select": Select,
        "el-option": Option,
        "el-pagination": Pagination
    },

};
</script>
<style lang="less" scoped>
@color: #f09f0b;
.border{
    border:1px solid #eaeaea;
}
.clear{
    clear: both;
}
.balance{
    .border;
    .bal_top{
        height: 180px;
        padding: 0 50px;
        div{
            display: inline-block;
            float: left;
            margin-top: 65px;
            p{
                margin-bottom: 10px;
                font-size: 18px;
            }
            span{
                font-size: 32px;
            }
        }
        a{
            float: right;
            width: 130px;
            height: 40px;
            border-radius: 5px;
            background-color: #29b43d;
            color: #fff;
            text-align: center;
            line-height: 40px;
            margin-top: 75px;
        }
        a:hover {
            background-color: #2dc844;
        }
    }

    .bal_list{
        width: 95%;
        margin: 0 auto;
        table{
            margin-top: 20px;
            width: 100%;
            tr{
                border-bottom: 1px solid #eaeaea;
                height: 70px;
                td{
                    text-align: center;
                    line-height: 70px;
                }
                th{
                    font-weight: normal;
                }
            }
            tr:first-child{
                background-color: #fbfbfc;
                height:44px;
                line-height: 44px;
                border-bottom: none;
                th:nth-child(3){
                    width: 50%;
                    text-align: center;
                }
            }
        }
    }
    .bal-list-tab{
        border-bottom: 2px solid #eaeaea;
        ul{
            width: 50%;
            height: 44px;
            float: left;
            li{
                width: 100px;
               
                display: inline-block;
                text-align: center;
                cursor: pointer;
                font-size: 16px;
                padding-bottom: 10px;
                a{
                    display: inline-block;
                    height: 34px;
                    width: 100%;
                    line-height: 34px;
                    border-right: 2px solid #eaeaea;
                }
            }
            li.active{              
                border-bottom: 2px solid @color;
                a{
                    color:@color;
                }
            }
        }
    }
    .o_page{
       padding: 30px 0;
    }
}
</style>
