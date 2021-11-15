function isEnglish(text){
    var res=/^[\u4e00-\u9fa5]+$/;
    if(!res.test(text)){
        return false;
    }
    return true;
}

function myFunction(){
    var appid = '20211108000993873';
    var key = '3583J8Eu81WOzTSEDbfz';
    var salt = (new Date).getTime();
    var query = prompt("请输入要翻译的单词(仅支持中英互译)",);
    // 多个query可以用\n连接  如 query='apple\norange\nbanana\npear'
    if(!isEnglish(query)){
        var from = 'en';
        var to = 'zh';
    }
    else {
        var from = 'zh';
        var to = 'en';
    }
    var str1 = appid + query + salt +key;
    var sign = MD5(str1);
    jQuery.ajax({
        url: 'https://fanyi-api.baidu.com/api/trans/vip/translate',
        type: 'get',
        dataType: 'jsonp',
        data: {
            q: query,
            appid: appid,
            salt: salt,
            from: from,
            to: to,
            sign: sign
        },
        success: function (data) {
            console.log(data);
            document.getElementById("from").innerHTML=data.from;
            document.getElementById("to").innerHTML=data.to;
            document.getElementById("src").innerHTML=data.trans_result[0].src;
            document.getElementById("dst").innerHTML=data.trans_result[0].dst;
        } 
    });
}

