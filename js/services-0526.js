angular.module("starter.services", []).factory("Chats", function ($scope,$http) {
    var chats = [];
    $http.get("http://dongyh.cn/gongwuzhushou/js/data.json")
        .success(function(data){
            chats = data;
        })
        .error(function(){
            return null;
        }

    )

    return {
        all: function () {

            console.log(chats);
            return chats
        }, get: function (chatId) {
            for (var i = 0; i < chats.length; i++) {
                if (chats[i].province === chatId) {
                    return chats[i]
                }
            }
            return null
        }
    }
}).factory("Travel", function () {
    var travel = [{
        "title": "中共中央、国务院印发 《党政机关厉行节约反对浪费条例》",
        "info": "为了进一步弘扬艰苦奋斗、勤俭节约的优良作风，推进党政机关厉行节约反对浪费，建设节约型机关，根据国家有关法律法规和中央有关规定，制定本条例。",
        "url": "http://mp.weixin.qq.com/s?__biz=MjM5MDc1Mjc2MQ==&mid=503749009&idx=1&sn=1350efbb70491ddbcb3cbc57d6eb229d#rd"
    }, {
        "title": "关于印发《中央和国家机关差旅费管理办法》的通知",
        "info": "为贯彻落实中央关于改进工作作风，密切联系群众八项规定及其实施细则，推进厉行节约反对浪费制度建设，加强和规范中央和国家机关差旅费管理，根据《党政机关厉行节约反对浪费条例》，我们制定了《中央和国家机关差旅费管理办法》。",
        "url": "http://mp.weixin.qq.com/s?__biz=MjM5MDc1Mjc2MQ==&mid=503749009&idx=2&sn=78dae613a542d3abdd370befaef7773e#rd"
    }, {
        "title": "国家工作人员外出公务报销有关规定",
        "info": "国家工作人员外出公务报销有关规定",
        "url": "http://mp.weixin.qq.com/s?__biz=MjM5MDc1Mjc2MQ==&mid=503749009&idx=3&sn=3a90f77fceddca1084c9377cd705707c#rd"
    }];
    return {
        all: function () {
            return travel
        }
    }
});