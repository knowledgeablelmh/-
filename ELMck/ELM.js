
/**
 * @fileoverview Example to compose HTTP request
 * and handle the response.
 */

ck =$request.headers.Cookie
var CookieValue = ck.match(/SID=.+?;/)

data=JSON.parse($request.body)
    data = data.userInfoSns.Oo12
    url = '%E6%81%AD%E5%96%9C%E6%82%A8'

console.log(ck)
$notify(decodeURI(url), ("饿了么ck获取成功", "USERID="+data+";"+CookieValue);
    $done();
