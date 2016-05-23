/**
 * Created by dongyuhao on 2016/5/23.
 */
angular.module('starter.services', [])

    .factory('Chats', function() {
        // Might use a resource here that returns a JSON array

        // Some fake testing data
        var chats =[{
            "citys": [
                {"city":"全市","time":"全年","level1":"1100","level2":"650","level3":"500","hot":"0","default":"1"    }

            ], "province": "北京市","short": "北京"
        }, {
            "citys": [
                {"city":"其他地区","time":"全年","level1":"800","level2":"480","level3":"380","hot":"0","default":"1"},
                {"city":"宁河区","time":"全年","level1":"600","level2":"350","level3":"320","hot":"0","default":"0"}

            ], "province": "天津市","short": "天津"
        }, {
            "citys": [
                {"city":"石家庄市","time":"全年","level1":"800","level2":"450","level3":"350","hot":"0","default":"0"},
                {"city":"廊坊市","time":"全年","level1":"800","level2":"450","level3":"350","hot":"0","default":"0"},
                {"city":"保定市","time":"全年","level1":"800","level2":"450","level3":"350","hot":"0","default":"0"},
                {"city":"张家口市","time":"4-6月、10月","level1":"800","level2":"450","level3":"350","hot":"0","default":"0"},
                {"city":"张家口市","time":"7-9月、11-3月","level1":"1200","level2":"675","level3":"525","hot":"1","default":"0"},
                {"city":"秦皇岛市","time":"1-6月、9-12月","level1":"800","level2":"450","level3":"350","hot":"0","default":"0"},
                {"city":"秦皇岛市","time":"7-8月","level1":"1200","level2":"680","level3":"500","hot":"1","default":"0"},
                {"city":"承德市","time":"1-6月、10-12月","level1":"800","level2":"450","level3":"350","hot":"0","default":"0"},
                {"city":"承德市","time":"7-9月","level1":"1000","level2":"580","level3":"580","hot":"1","default":"0"},
                {"city":"其他地区","time":"全年","level1":"800","level2":"450","level3":"310","hot":"0","default":"1"}
            ], "province": "河北省","short": "河北"
        }, {
            "citys": [
                {"city":"太原市","time":"全年","level1":"800","level2":"480","level3":"350","hot":"0","default":"0"},
                {"city":"大同市","time":"全年","level1":"800","level2":"480","level3":"350","hot":"0","default":"0"},
                {"city":"晋城市","time":"全年","level1":"800","level2":"480","level3":"350","hot":"0","default":"0"},
                {"city":"临汾市","time":"全年","level1":"800","level2":"480","level3":"330","hot":"0","default":"0"},
                {"city":"晋中市","time":"全年","level1":"800","level2":"480","level3":"310","hot":"0","default":"0"},
                {"city":"长治市","time":"全年","level1":"800","level2":"480","level3":"310","hot":"0","default":"0"},
                {"city":"阳泉市","time":"全年","level1":"800","level2":"480","level3":"310","hot":"0","default":"0"},
                {"city":"其他地区","time":"全年","level1":"800","level2":"400","level3":"240","hot":"0","default":"1"}

            ], "province": "山西省","short": "山西"
        }, {
            "citys": [
                {"city":"呼和浩特市","time":"全年","level1":"800","level2":"460","level3":"350","hot":"0","default":"0"},
                {"city":"其他地区","time":"全年","level1":"800","level2":"460","level3":"320","hot":"0","default":"1"},
                {"city":"海拉尔市","time":"1-6月、10-12月","level1":"800","level2":"460","level3":"320","hot":"0","default":"0"},
                {"city":"海拉尔市","time":"7-9月","level1":"1200","level2":"690","level3":"480","hot":"1","default":"0"},
                {"city":"满洲里市","time":"1-6月、10-12月","level1":"800","level2":"460","level3":"320","hot":"0","default":"0"},
                {"city":"满洲里市","time":"7-9月","level1":"1200","level2":"690","level3":"480","hot":"1","default":"0"},
                {"city":"阿尔山市","time":"1-6月、10-12月","level1":"800","level2":"460","level3":"320","hot":"0","default":"0"},
                {"city":"阿尔山市","time":"7-9月","level1":"1200","level2":"690","level3":"480","hot":"1","default":"0"},
                {"city":"二连浩特市","time":"1-6月、10-12月","level1":"800","level2":"460","level3":"320","hot":"0","default":"0"},
                {"city":"二连浩特市","time":"7-9月","level1":"1000","level2":"580","level3":"400","hot":"1","default":"0"},
                {"city":"额济纳旗","time":"1-8月、11-12月","level1":"800","level2":"460","level3":"320","hot":"0","default":"0"},
                {"city":"额济纳旗","time":"9-10月","level1":"1200","level2":"690","level3":"480","hot":"1","default":"0"}

            ], "province": "内蒙古自治区","short": "内蒙古"
        }, {
            "citys": [
                {"city":"沈阳市","time":"全年","level1":"800","level2":"480","level3":"350","hot":"0","default":"0"},
                {"city":"其他地区","time":"全年","level1":"800","level2":"480","level3":"330","hot":"0","default":"1"},
                {"city":"大连市","time":"1-6月、10-12月","level1":"800","level2":"490","level3":"350","hot":"0","default":"0"},
                {"city":"大连市","time":"7-9月","level1":"960","level2":"590","level3":"420","hot":"1","default":"0"}

            ], "province": "辽宁省","short": "辽宁"
        }, {
            "citys": [
                {"city":"长春市","time":"全年","level1":"800","level2":"450","level3":"350","hot":"0","default":"0"},
                {"city":"其他地区","time":"全年","level1":"750","level2":"400","level3":"300","hot":"0","default":"1"},
                {"city":"吉林市","time":"1-6月、10-12月","level1":"800","level2":"450","level3":"350","hot":"0","default":"0"},
                {"city":"吉林市","time":"7-9月","level1":"960","level2":"540","level3":"420","hot":"1","default":"0"},
                {"city":"延边州","time":"1-6月、10-12月","level1":"800","level2":"450","level3":"350","hot":"0","default":"0"},
                {"city":"延边州","time":"7-9月","level1":"960","level2":"540","level3":"420","hot":"1","default":"0"},
                {"city":"长白山管理区","time":"1-6月、10-12月","level1":"800","level2":"450","level3":"350","hot":"0","default":"0"},
                {"city":"长白山管理区","time":"7-9月","level1":"960","level2":"540","level3":"420","hot":"1","default":"0"}

            ], "province": "吉林省","short": "吉林"
        }, {
            "citys": [
                {"city":"哈尔滨市","time":"1-6月、10-12月","level1":"800","level2":"450","level3":"350","hot":"0","default":"0"},
                {"city":"哈尔滨市","time":"7-9月","level1":"960","level2":"540","level3":"420","hot":"1","default":"0"},
                {"city":"其他地区","time":"全年","level1":"750","level2":"450","level3":"300","hot":"0","default":"1"},
                {"city":"牡丹江市","time":"1-5月、9-12月","level1":"750","level2":"450","level3":"300","hot":"0","default":"0"},
                {"city":"牡丹江市","time":"6-8月","level1":"900","level2":"540","level3":"360","hot":"1","default":"0"},
                {"city":"伊春市","time":"1-5月、9-12月","level1":"750","level2":"450","level3":"300","hot":"0","default":"0"},
                {"city":"伊春市","time":"6-8月","level1":"900","level2":"540","level3":"360","hot":"1","default":"0"},
                {"city":"大兴安岭地区","time":"1-5月、9-12月","level1":"750","level2":"450","level3":"300","hot":"0","default":"0"},
                {"city":"大兴安岭地区","time":"6-8月","level1":"900","level2":"540","level3":"360","hot":"1","default":"0"},
                {"city":"黑河市","time":"1-5月、9-12月","level1":"750","level2":"450","level3":"300","hot":"0","default":"0"},
                {"city":"黑河市","time":"6-8月","level1":"900","level2":"540","level3":"360","hot":"1","default":"0"},
                {"city":"佳木斯市","time":"1-5月、9-12月","level1":"750","level2":"450","level3":"300","hot":"0","default":"0"},
                {"city":"佳木斯市","time":"6-8月","level1":"900","level2":"540","level3":"360","hot":"1","default":"0"}

            ], "province": "黑龙江省","short": "黑龙江"
        }, {
            "citys": [
                {"city":"全市","time":"全年","level1":"1100","level2":"600","level3":"500","hot":"0","default":"1"}

            ], "province": "上海市","short": "上海"
        }, {
            "citys": [
                {"city":"南京市","time":"全年","level1":"900","level2":"490","level3":"380","hot":"0","default":"0"},
                {"city":"苏州市","time":"全年","level1":"900","level2":"490","level3":"380","hot":"0","default":"0"},
                {"city":"无锡市","time":"全年","level1":"900","level2":"490","level3":"380","hot":"0","default":"0"},
                {"city":"常州市","time":"全年","level1":"900","level2":"490","level3":"380","hot":"0","default":"0"},
                {"city":"镇江市","time":"全年","level1":"900","level2":"490","level3":"380","hot":"0","default":"0"},
                {"city":"其他地区","time":"全年","level1":"900","level2":"490","level3":"360","hot":"0","default":"1"}

            ], "province": "江苏省","short": "江苏"
        }, {
            "citys": [
                {"city":"杭州市","time":"全年","level1":"900","level2":"500","level3":"400","hot":"0","default":"0"},
                {"city":"其他地区","time":"全年","level1":"800","level2":"490","level3":"340","hot":"0","default":"1"},
                {"city":"宁波市","time":"全年","level1":"800","level2":"450","level3":"350","hot":"0","default":"0"}

            ], "province": "浙江省","short": "浙江"
        }, {
            "citys": [
                {"city":"全省","time":"全年","level1":"800","level2":"460","level3":"350","hot":"0","default":"1"}

            ], "province": "安徽省","short": "安徽"
        }, {
            "citys": [
                {"city":"福州市","time":"全年","level1":"900","level2":"480","level3":"380","hot":"0","default":"0"},
                {"city":"泉州市","time":"全年","level1":"900","level2":"480","level3":"380","hot":"0","default":"0"},
                {"city":"平潭综合实验区","time":"全年","level1":"900","level2":"480","level3":"380","hot":"0","default":"0"},
                {"city":"其他地区","time":"全年","level1":"900","level2":"480","level3":"350","hot":"0","default":"1"},
                {"city":"厦门市","time":"全年","level1":"900","level2":"500","level3":"400","hot":"0","default":"0"}

            ], "province": "福建省","short": "福建"
        }, {
            "citys": [
                {"city":"全省","time":"全年","level1":"800","level2":"470","level3":"350","hot":"0","default":"1"}

            ], "province": "江西省","short": "江西"
        }, {
            "citys": [
                {"city":"济南市","time":"全年","level1":"800","level2":"480","level3":"380","hot":"0","default":"0"},
                {"city":"淄博市","time":"全年","level1":"800","level2":"480","level3":"380","hot":"0","default":"0"},
                {"city":"枣庄市","time":"全年","level1":"800","level2":"480","level3":"380","hot":"0","default":"0"},
                {"city":"东营市","time":"全年","level1":"800","level2":"480","level3":"380","hot":"0","default":"0"},
                {"city":"潍坊市","time":"全年","level1":"800","level2":"480","level3":"380","hot":"0","default":"0"},
                {"city":"济宁市","time":"全年","level1":"800","level2":"480","level3":"380","hot":"0","default":"0"},
                {"city":"泰安市","time":"全年","level1":"800","level2":"480","level3":"380","hot":"0","default":"0"},
                {"city":"烟台市","time":"1-6月、10-12月","level1":"800","level2":"480","level3":"380","hot":"0","default":"0"},
                {"city":"烟台市","time":"7-9月","level1":"960","level2":"570","level3":"450","hot":"1","default":"0"},
                {"city":"威海市","time":"1-6月、10-12月","level1":"800","level2":"480","level3":"380","hot":"0","default":"0"},
                {"city":"威海市","time":"7-9月","level1":"960","level2":"570","level3":"450","hot":"1","default":"0"},
                {"city":"日照市","time":"1-6月、10-12月","level1":"800","level2":"480","level3":"380","hot":"0","default":"0"},
                {"city":"日照市","time":"7-9月","level1":"960","level2":"570","level3":"450","hot":"1","default":"0"},
                {"city":"青岛市","time":"1-6月、10-12月","level1":"800","level2":"490","level3":"380","hot":"0","default":"0"},
                {"city":"青岛市","time":"7-9月","level1":"960","level2":"590","level3":"450","hot":"1","default":"0"},
                {"city":"其他地区","time":"全年","level1":"800","level2":"460","level3":"360","hot":"0","default":"1"}


            ], "province": "山东省","short": "山东"
        }, {
            "citys": [
                {"city":"郑州市","time":"全年","level1":"900","level2":"480","level3":"380","hot":"0","default":"0"},
                {"city":"其他地区","time":"全年","level1":"800","level2":"480","level3":"330","hot":"0","default":"1"},
                {"city":"洛阳市","time":"4-5月上旬以外","level1":"800","level2":"480","level3":"330","hot":"0","default":"0"},
                {"city":"洛阳市","time":"4-5月上旬","level1":"1200","level2":"720","level3":"500","hot":"1","default":"0"}


            ], "province": "河南省","short": "河南"
        }, {
            "citys": [
                {"city":"武汉市","time":"全年","level1":"800","level2":"480","level3":"350","hot":"0","default":"0"},
                {"city":"其他地区","time":"全年","level1":"800","level2":"480","level3":"320","hot":"0","default":"1"}


            ], "province": "湖北省","short": "湖北"
        }, {
            "citys": [
                {"city":"长沙市","time":"全年","level1":"800","level2":"450","level3":"350","hot":"0","default":"0"},
                {"city":"其他地区","time":"全年","level1":"800","level2":"450","level3":"330","hot":"0","default":"1"}

            ], "province": "湖南省","short": "湖南"
        }, {
            "citys": [
                {"city":"广州市","time":"全年","level1":"900","level2":"550","level3":"450","hot":"0","default":"0"},
                {"city":"珠海市","time":"全年","level1":"900","level2":"550","level3":"450","hot":"0","default":"0"},
                {"city":"佛山市","time":"全年","level1":"900","level2":"550","level3":"450","hot":"0","default":"0"},
                {"city":"东莞市","time":"全年","level1":"900","level2":"550","level3":"450","hot":"0","default":"0"},
                {"city":"中山市","time":"全年","level1":"900","level2":"550","level3":"450","hot":"0","default":"0"},
                {"city":"江门市","time":"全年","level1":"900","level2":"550","level3":"450","hot":"0","default":"0"},
                {"city":"其他地区","time":"全年","level1":"850","level2":"530","level3":"420","hot":"0","default":"1"},
                {"city":"深圳","time":"全年","level1":"900","level2":"550","level3":"450","hot":"0","default":"0"}

            ], "province": "广东省","short": "广东"
        }, {
            "citys": [
                {"city":"南宁市","time":"全年","level1":"800","level2":"470","level3":"350","hot":"0","default":"0"},
                {"city":"其他地区","time":"全年","level1":"800","level2":"470","level3":"330","hot":"0","default":"1"},
                {"city":"桂林市","time":"3-6月、10-12月","level1":"800","level2":"470","level3":"330","hot":"0","default":"0"},
                {"city":"桂林市","time":"1-2月、7-9月","level1":"1040","level2":"610","level3":"430","hot":"1","default":"0"},
                {"city":"北海市","time":"3-6月、10-12月","level1":"800","level2":"470","level3":"330","hot":"0","default":"0"},
                {"city":"北海市","time":"1-2月、7-9月","level1":"1040","level2":"610","level3":"430","hot":"1","default":"0"}

            ], "province": "广西壮族自治区","short": "广西"
        }, {
            "citys": [

                {"city":"其他地区","time":"全年","level1":"800","level2":"500","level3":"350","hot":"0","default":"1"},
                {"city":"海口市","time":"3-10月","level1":"800","level2":"500","level3":"350","hot":"0","default":"0"},
                {"city":"海口市","time":"11-2月","level1":"1040","level2":"650","level3":"450","hot":"1","default":"0"},
                {"city":"文昌市","time":"3-10月","level1":"800","level2":"500","level3":"350","hot":"0","default":"0"},
                {"city":"文昌市","time":"11-2月","level1":"1040","level2":"650","level3":"450","hot":"1","default":"0"},
                {"city":"澄迈县","time":"3-10月","level1":"800","level2":"500","level3":"350","hot":"0","default":"0"},
                {"city":"澄迈县","time":"11-2月","level1":"1040","level2":"650","level3":"450","hot":"1","default":"0"},
                {"city":"琼海市","time":"4-10月","level1":"800","level2":"500","level3":"350","hot":"0","default":"0"},
                {"city":"琼海市","time":"11-3月","level1":"1040","level2":"650","level3":"450","hot":"1","default":"0"},
                {"city":"万宁市","time":"4-10月","level1":"800","level2":"500","level3":"350","hot":"0","default":"0"},
                {"city":"万宁市","time":"11-3月","level1":"1040","level2":"650","level3":"450","hot":"1","default":"0"},
                {"city":"陵水县","time":"4-10月","level1":"800","level2":"500","level3":"350","hot":"0","default":"0"},
                {"city":"陵水县","time":"11-3月","level1":"1040","level2":"650","level3":"450","hot":"1","default":"0"},
                {"city":"保亭县","time":"4-10月","level1":"800","level2":"500","level3":"350","hot":"0","default":"0"},
                {"city":"保亭县","time":"11-3月","level1":"1040","level2":"650","level3":"450","hot":"1","default":"0"},
                {"city":"三亚市","time":"5-9月","level1":"1000","level2":"600","level3":"400","hot":"0","default":"0"},
                {"city":"三亚市","time":"10-4月","level1":"1200","level2":"720","level3":"480","hot":"1","default":"0"}

            ],
            "province": "海南省","short": "海南"
        }, {
            "citys": [
                {"city":"渝中区","time":"全年","level1":"800","level2":"480","level3":"370","hot":"0","default":"0"},
                {"city":"沙坪坝区","time":"全年","level1":"800","level2":"480","level3":"370","hot":"0","default":"0"},
                {"city":"江北区","time":"全年","level1":"800","level2":"480","level3":"370","hot":"0","default":"0"},
                {"city":"南岸区","time":"全年","level1":"800","level2":"480","level3":"370","hot":"0","default":"0"},
                {"city":"大渡口区","time":"全年","level1":"800","level2":"480","level3":"370","hot":"0","default":"0"},
                {"city":"大渡口区","time":"全年","level1":"800","level2":"480","level3":"370","hot":"0","default":"0"},
                {"city":"九龙坡区","time":"全年","level1":"800","level2":"480","level3":"370","hot":"0","default":"0"},
                {"city":"渝北区","time":"全年","level1":"800","level2":"480","level3":"370","hot":"0","default":"0"},
                {"city":"巴南区","time":"全年","level1":"800","level2":"480","level3":"370","hot":"0","default":"0"},
                {"city":"北碚区","time":"全年","level1":"800","level2":"480","level3":"370","hot":"0","default":"0"},
                {"city":"北部新区","time":"全年","level1":"800","level2":"480","level3":"370","hot":"0","default":"0"},
                {"city":"其他地区","time":"全年","level1":"770","level2":"450","level3":"300","hot":"0","default":"1"}

            ], "province": "重庆市","short": "重庆"
        }, {
            "citys": [
                {"city":"成都市","time":"全年","level1":"900","level2":"470","level3":"370","hot":"0","default":"0"},
                {"city":"阿坝州","time":"全年","level1":"800","level2":"430","level3":"330","hot":"0","default":"0"},
                {"city":"甘孜州","time":"全年","level1":"800","level2":"430","level3":"330","hot":"0","default":"0"},
                {"city":"绵阳市","time":"全年","level1":"800","level2":"430","level3":"320","hot":"0","default":"0"},
                {"city":"乐山市","time":"全年","level1":"800","level2":"430","level3":"320","hot":"0","default":"0"},
                {"city":"雅安市","time":"全年","level1":"800","level2":"430","level3":"320","hot":"0","default":"0"},
                {"city":"宜宾市","time":"全年","level1":"800","level2":"430","level3":"300","hot":"0","default":"0"},
                {"city":"凉山州","time":"全年","level1":"750","level2":"430","level3":"330","hot":"0","default":"0"},
                {"city":"德阳市","time":"全年","level1":"750","level2":"430","level3":"310","hot":"0","default":"0"},
                {"city":"遂宁市","time":"全年","level1":"750","level2":"430","level3":"310","hot":"0","default":"0"},
                {"city":"巴中市","time":"全年","level1":"750","level2":"430","level3":"310","hot":"0","default":"0"},
                {"city":"其他地区","time":"全年","level1":"750","level2":"430","level3":"300","hot":"0","default":"0"}

            ], "province": "四川省","short": "四川"
        }, {
            "citys": [
                {"city":"贵阳市","time":"全年","level1":"800","level2":"470","level3":"370","hot":"0","default":"0"},
                {"city":"其他地区","time":"全年","level1":"750","level2":"450","level3":"300","hot":"0","default":"1"}

            ], "province": "贵州省","short": "贵州"
        }, {
            "citys": [
                {"city":"昆明市","time":"全年","level1":"900","level2":"480","level3":"380","hot":"0","default":"0"},
                {"city":"大理州","time":"全年","level1":"900","level2":"480","level3":"380","hot":"0","default":"0"},
                {"city":"丽江市","time":"全年","level1":"900","level2":"480","level3":"380","hot":"0","default":"0"},
                {"city":"迪庆州","time":"全年","level1":"900","level2":"480","level3":"380","hot":"0","default":"0"},
                {"city":"西双版纳州","time":"全年","level1":"900","level2":"480","level3":"380","hot":"0","default":"0"},
                {"city":"其他地区","time":"全年","level1":"900","level2":"480","level3":"330","hot":"0","default":"1"}

            ], "province": "云南省","short": "云南"
        }, {
            "citys": [
                {"city":"拉萨市","time":"1-5月、10-12月","level1":"800","level2":"500","level3":"350","hot":"0","default":"0"},
                {"city":"拉萨市","time":"6-9月","level1":"1200","level2":"750","level3":"530","hot":"1","default":"0"},
                {"city":"其他地区","time":"1-5月、10-12月","level1":"500","level2":"400","level3":"300","hot":"0","default":"1"},
                {"city":"其他地区","time":"6-9月","level1":"800","level2":"500","level3":"350","hot":"1","default":"1"}

            ],
            "province": "西藏自治区","short": "西藏"
        }, {
            "citys": [
                {"city":"西安市","time":"全年","level1":"800","level2":"460","level3":"350","hot":"0","default":"0"},
                {"city":"榆林市","time":"全年","level1":"680","level2":"350","level3":"300","hot":"0","default":"0"},
                {"city":"延安市","time":"全年","level1":"680","level2":"350","level3":"300","hot":"0","default":"0"},
                {"city":"杨凌区","time":"全年","level1":"680","level2":"320","level3":"260","hot":"0","default":"0"},
                {"city":"咸阳市","time":"全年","level1":"600","level2":"320","level3":"260","hot":"0","default":"0"},
                {"city":"宝鸡市","time":"全年","level1":"600","level2":"320","level3":"260","hot":"0","default":"0"},
                {"city":"渭南市","time":"全年","level1":"600","level2":"300","level3":"260","hot":"0","default":"0"},
                {"city":"韩城市","time":"全年","level1":"600","level2":"300","level3":"260","hot":"0","default":"0"},
                {"city":"其他地区","time":"全年","level1":"600","level2":"300","level3":"230","hot":"0","default":"1"}


            ], "province": "陕西省","short": "陕西"
        }, {
            "citys": [
                {"city":"兰州市","time":"全年","level1":"800","level2":"470","level3":"350","hot":"0","default":"0"},
                {"city":"其他地区","time":"全年","level1":"700","level2":"450","level3":"310","hot":"0","default":"0"}

            ], "province": "甘肃省","short": "甘肃"
        }, {
            "citys": [
                {"city":"西宁市","time":"1-5月、10-12月","level1":"800","level2":"500","level3":"350","hot":"0","default":"1"},
                {"city":"西宁市","time":"6-9月","level1":"1200","level2":"750","level3":"530","hot":"1","default":"0"},
                {"city":"果洛州","time":"全年","level1":"600","level2":"350","level3":"300","hot":"0","default":"0"},
                {"city":"玉树州","time":"1-4月、10-12月","level1":"600","level2":"350","level3":"300","hot":"0","default":"0"},
                {"city":"玉树州","time":"5-9月","level1":"900","level2":"525","level3":"450","hot":"1","default":"0"},
                {"city":"海北州","time":"1-4月、10-12月","level1":"600","level2":"350","level3":"250","hot":"0","default":"0"},
                {"city":"海北州","time":"5-9月","level1":"900","level2":"525","level3":"375","hot":"1","default":"0"},
                {"city":"黄南州","time":"1-4月、10-12月","level1":"600","level2":"350","level3":"250","hot":"0","default":"0"},
                {"city":"黄南州","time":"5-9月","level1":"900","level2":"525","level3":"375","hot":"1","default":"0"},
                {"city":"海东市","time":"1-4月、10-12月","level1":"600","level2":"300","level3":"250","hot":"0","default":"0"},
                {"city":"海东市","time":"5-9月","level1":"900","level2":"450","level3":"375","hot":"1","default":"0"},
                {"city":"海南州","time":"1-4月、10-12月","level1":"600","level2":"300","level3":"250","hot":"0","default":"0"},
                {"city":"海南州","time":"5-9月","level1":"900","level2":"450","level3":"375","hot":"1","default":"0"},
                {"city":"海西州","time":"1-4月、10-12月","level1":"600","level2":"300","level3":"200","hot":"0","default":"0"},
                {"city":"海西州","time":"5-9月","level1":"900","level2":"450","level3":"300","hot":"1","default":"0"}

            ],
            "province": "青海省","short": "青海"
        }, {
            "citys": [
                {"city":"银川市","time":"全年","level1":"800","level2":"470","level3":"350","hot":"0","default":"0"},
                {"city":"其他地区","time":"全年","level1":"800","level2":"430","level3":"330","hot":"0","default":"1"}

            ], "province": "宁夏回族自治区","short": "宁夏"
        }, {
            "citys": [
                {"city":"乌鲁木齐市","time":"全年","level1":"800","level2":"480","level3":"350","hot":"0","default":"0"},
                {"city":"其他地区","time":"全年","level1":"800","level2":"480","level3":"340","hot":"0","default":"1"},
                {"city":"克州","time":"全年","level1":"800","level2":"480","level3":"320","hot":"0","default":"0"},
                {"city":"喀什地区","time":"全年","level1":"780","level2":"480","level3":"300","hot":"0","default":"0"},
                {"city":"阿克苏地区","time":"全年","level1":"700","level2":"450","level3":"300","hot":"0","default":"0"},
                {"city":"塔城地区","time":"全年","level1":"700","level2":"400","level3":"300","hot":"0","default":"0"}

            ], "province": "新疆维吾尔自治区","short": "新疆"
        }];




        return {
            all: function() {
                return chats;
            },
            get: function(chatId) {
                for (var i = 0; i < chats.length; i++) {
                    if (chats[i].province === chatId) {
                        return chats[i];
                    }
                }
                return null;
            }
        };
    })
    .factory('Travel',function(){
        var travel =[
            {
                "title":"中共中央、国务院印发 《党政机关厉行节约反对浪费条例》",
                "info":"为了进一步弘扬艰苦奋斗、勤俭节约的优良作风，推进党政机关厉行节约反对浪费，建设节约型机关，根据国家有关法律法规和中央有关规定，制定本条例。",
                "url":"http://mp.weixin.qq.com/s?__biz=MjM5MDc1Mjc2MQ==&mid=503749009&idx=1&sn=1350efbb70491ddbcb3cbc57d6eb229d#rd"
            },{
                "title":"关于印发《中央和国家机关差旅费管理办法》的通知",
                "info":"为贯彻落实中央关于改进工作作风，密切联系群众八项规定及其实施细则，推进厉行节约反对浪费制度建设，加强和规范中央和国家机关差旅费管理，根据《党政机关厉行节约反对浪费条例》，我们制定了《中央和国家机关差旅费管理办法》。",
                "url":"http://mp.weixin.qq.com/s?__biz=MjM5MDc1Mjc2MQ==&mid=503749009&idx=2&sn=78dae613a542d3abdd370befaef7773e#rd"

            },{
                "title":"国家工作人员外出公务报销有关规定",
                "info":"国家工作人员外出公务报销有关规定",
                "url":"http://mp.weixin.qq.com/s?__biz=MjM5MDc1Mjc2MQ==&mid=503749009&idx=3&sn=3a90f77fceddca1084c9377cd705707c#rd"

            },{
                "title":"",
                "info":"除接待单位按照《党政机关国内公务接待管理规定》安排的一次工作餐外，出差人员就餐应当自行解决。接待单位协助安排就餐的，出差人员应当在差旅费管理办法规定的标准内向接待单位交纳相应的伙食费。接待单位应向出差人员出具接收凭证(不作报销依据)，收取的伙食费用于抵顶接待单位的招待费支出。",
                "url":""

            }
        ];
        return {
            all: function() {
                return travel;
            }
        };
    })
