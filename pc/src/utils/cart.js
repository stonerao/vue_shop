/* 关于购物车的js */
import { getToken } from '@/utils/cookie'
export default {
    add(id) {
        /* 添加进入购物车 */
        if (!getToken()) {
            /* 如果没有登录 */
        }
        console.log(id);

    }
}