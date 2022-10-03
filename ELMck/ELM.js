
/**
 * @fileoverview Example to compose HTTP request
 * and handle the response.
 */

ck =$response.headers.Cookie
var CookieValue = ck.match(/isg=.+?;/)

data=JSON.parse($response.body)
    data = data.userInfoSns.unickName
    url = '%E6%81%AD%E5%96%9C%E6%82%A8'


console.log(ck)
$notify("饿了么ck获取成功", data + CookieValue);
    $done();
