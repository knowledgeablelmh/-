
/**
 * @fileoverview Example to compose HTTP request
 * and handle the response.
 * https://raw.githubusercontent.com/a358594784/yuwen.github.io/main/ywwskey.js
 */

ck = $request.headers.Cookie
var CookieValue = ck

data = JSON.parse($response.body)
data = data.userInfoSns.unickName
url = '%E6%81%AD%E5%96%9C%E6%82%A8'

console.log(ck)
$.notify(decodeURI(url), "饿了么ck获取成功", CookieValue);
$.done();
