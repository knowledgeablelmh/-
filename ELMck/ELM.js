
/**
 * @fileoverview Example to compose HTTP request
 * and handle the response.
 */

ck =$request.headers.Cookie
var CookieValue = ck.match(/SID=.+?;/)


console.log(ck)
$notify("饿了么ck获取成功", CookieValue);
    $done();
