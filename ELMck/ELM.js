//获取cookie 
function fhxzck() {
  if ($request.url.indexOf("svip") > -1) {
    const elmck = $request.headers['Cookie']
    if (elmck) $.setdata(elmck, `elmck${status}`)
    $.log(elmck)
    $.msg($.name, "", `饿了么${status}数据获取成功`)
  }
}
