ck = $request.headers.Cookie
var CookieValue = ck.match(/token=.+?;/)






url = '%E6%81%AD%E5%96%9C%E6%82%A8'

console.log(ck)
$notify(decodeURI(url), "美团ck获取成功", CookieValue);
$done();
