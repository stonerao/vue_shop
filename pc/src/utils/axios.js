 import axios from 'axios'
 export const url = '';
 /* 封装请求参数 */
 /* export const req = (url, data, type = "get") => {
     return {
         methods: !type ? "get" : type,
         url: url,
         params: type == "get" ? data : "",
         data: type == "post" ? data : ""
     };
 };
  
 export const $_ajax = (data, g, e) => {
     return new Promise((resolve, reject) => {
         this.$http(data).then(res => {
             resolve(data)
         });
     });
 }; */
 /* 请求 */
 /* 
 timeout(req("/stone/api", { a: 1 }), () => {}).then(value => {
     console.log(value);
 }); 
 */

 const req = (url, data, type = "get") => {
     type = type.toUpperCase();
     /* 如果类型不对 */
     if (typeof type !== "string") {
         throw "ajax请求错误";
         return;
     } else if (type == 'POST' || type == 'DELETE' || type == 'PUT' || type == 'GET') {
         return {
             methods: !type ? "GET" : type,
             url: url,
             params: type == "GET" ? data || {} : { a: 1 },
             data: type == "POST" ? data || {} : {}
         };
     } else {
         throw "methods错误";
     }

 };
 export async function $_ajax(obj) {
     const data = await axios(req(...arguments)).then((res) => {
         /* 可以写公用条件 */
         return res
     });
     return data;
 }