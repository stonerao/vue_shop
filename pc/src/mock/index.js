import Mock from 'mockjs';
import Vue from 'vue';
Vue.prototype.$Mock = Mock;
const Random = Mock.Random
let res = (data, num) => {
    return {
        code: 200,
        data
    }
}
const datas = () => {
    Mock.mock('/stone/api', {
            'list|1-10': [{
                'id|+1': 1
            }]
        })
        /* index */
        /* 搜索 */
    Mock.mock("/apis/indexSearchList", res({
            'list|1-8': [{
                'name': Mock.mock('@csentence()'),
                "id|1-100": 202
            }]
        }))
        /* 推荐 */
    Mock.mock("/apis/indexRecommend", res({
        'list': [
            { name: "热销推荐", state: 0 },
            { name: "时令蔬菜", state: 1 },
            { name: "新品推荐", state: 2 },
            { name: "有机健康", state: 3 }
        ],
        'items|4': [{ content: "有机蔬菜套餐 2-3口之家 包月", "price|123.2": 1, img: Random.dataImage('230x180') }],
        'adv': {
            img0: { 'id|10-1000': 1000, img: Random.dataImage('355x474') },
            img1: { 'id|10-1000': 1000, img: Random.dataImage('476x234') },
            img2: { 'id|10-1000': 1000, img: Random.dataImage('476x234') },
            img3: { 'id|10-1000': 1000, img: Random.dataImage('355x474') }
        }
    }))


}
export default datas();