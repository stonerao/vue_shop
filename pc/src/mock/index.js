import Mock from 'mockjs';
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
    Mock.mock("/apis/indexSearchList", res({
        'list|1-8': [{
            'name': Mock.mock('@csentence()'),
            "id|1-100": 202
        }]
    }))
}
export default datas();