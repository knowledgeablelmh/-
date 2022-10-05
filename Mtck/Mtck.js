ck =$request.headers.Cookie
var CookieValue = ck.match(/token=.+?;/)


data=JSON.parse($request)
    data = data.url.split("userId=")[1]
    url = '%E6%81%AD%E5%96%9C%E6%82%A8'


console.log(ck)
$notify(decodeURI(url), "美团ck获取成功", "userid="+data+";"+CookieValue);
    $done();
