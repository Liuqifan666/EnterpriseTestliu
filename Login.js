function requestMethod(par1,par2,par3,callback){
    var xhr = new XMLHttpRequest();//第一步创建请求对

    xhr.open(par1,'')
    xhr.setRequestHeader("content-type","application/x-www-form-uelencoded");
    xhr.send(par3);
    xhr.onreadstatechange = function () {
        if (xhr.readyState == 4  && xhr.responsetext)
    }
}