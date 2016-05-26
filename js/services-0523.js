angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats =[
    {
        "citys": [
            {
                "buji": 1100,
                "months": "全年",
                "name": "全市",
                "other": 500,
                "peakseason": 0,
                "sijuji": 650
            }
        ],
        "province": "北京市",
        "short": "北京"
    },
    {
        "citys": [
            {
                "buji": 800,
                "months": "全年",
                "name": "其他地区",
                "other": 380,
                "peakseason": 0,
                "sijuji": 480
            },
            {
                "buji": 600,
                "months": "全年",
                "name": "宁河区",
                "other": 320,
                "peakseason": 0,
                "sijuji": 350
            }
        ],
        "province": "天津市",
        "short": "天津"
    },
    {
        "citys": [
            {
                "buji": 800,
                "months": "全年",
                "name": "石家庄市、廊坊市、保定市",
                "other": 350,
                "peakseason": 0,
                "sijuji": 450
            },
            {
                "buji": 800,
                "months": "4-6月、10月",
                "name": "张家口市",
                "other": 350,
                "peakseason": 0,
                "sijuji": 450
            },
            {
                "buji": 1200,
                "months": "7-9月、11-3月",
                "name": "张家口市",
                "other": 525,
                "peakseason": 1,
                "sijuji": 675
            },
            {
                "buji": 800,
                "months": "1-6月、9-12月",
                "name": "秦皇岛市",
                "other": 350,
                "peakseason": 0,
                "sijuji": 450
            },
            {
                "buji": 1200,
                "months": "7-8月",
                "name": "秦皇岛市",
                "other": 500,
                "peakseason": 1,
                "sijuji": 680
            },
            {
                "buji": 800,
                "months": "1-6月、10-12月",
                "name": "承德市",
                "other": 350,
                "peakseason": 0,
                "sijuji": 450
            },
            {
                "buji": 1000,
                "months": "7-9月",
                "name": "承德市",
                "other": 580,
                "peakseason": 1,
                "sijuji": 580
            },
            {
                "buji": 800,
                "months": "全年",
                "name": "其他地区",
                "other": 310,
                "peakseason": 0,
                "sijuji": 450
            }
        ],
        "province": "河北省",
        "short": "河北"
    },
    {
        "citys": [
            {
                "buji": 800,
                "months": "全年",
                "name": "太原市,大同市,晋城市",
                "other": 350,
                "peakseason": 0,
                "sijuji": 480
            },
            {
                "buji": 800,
                "months": "全年",
                "name": "临汾市",
                "other": 330,
                "peakseason": 0,
                "sijuji": 480
            },
            {
                "buji": 800,
                "months": "全年",
                "name": "阳泉市,长治市,晋中市",
                "other": 310,
                "peakseason": 0,
                "sijuji": 480
            },
            {
                "buji": 800,
                "months": "全年",
                "name": "其他地区",
                "other": 240,
                "peakseason": 0,
                "sijuji": 400
            }
        ],
        "province": "山西省",
        "short": "山西"
    },
    {
        "citys": [
            {
                "buji": 800,
                "months": "全年",
                "name": "呼和浩特市",
                "other": 350,
                "peakseason": 0,
                "sijuji": 460
            },
            {
                "buji": 800,
                "months": "1-6月、10-12月",
                "name": "海拉尔市,满洲里市,阿尔山市",
                "other": 320,
                "peakseason": 0,
                "sijuji": 460
            },
            {
                "buji": 1200,
                "months": "7-9月",
                "name": "海拉尔市,满洲里市,阿尔山市",
                "other": 480,
                "peakseason": 1,
                "sijuji": 690
            },
            {
                "buji": 800,
                "months": "1-6月、10-12月",
                "name": "二连浩特市",
                "other": 320,
                "peakseason": 0,
                "sijuji": 460
            },
            {
                "buji": 1000,
                "months": "7-9月",
                "name": "二连浩特市",
                "other": 400,
                "peakseason": 1,
                "sijuji": 580
            },
            {
                "buji": 800,
                "months": "1-8月、11-12月",
                "name": "额济纳旗",
                "other": 320,
                "peakseason": 0,
                "sijuji": 460
            },
            {
                "buji": 1200,
                "months": "9-10月",
                "name": "额济纳旗",
                "other": 480,
                "peakseason": 1,
                "sijuji": 690
            },
            {
                "buji": 800,
                "months": "全年",
                "name": "其他地区",
                "other": 320,
                "peakseason": 0,
                "sijuji": 460
            }
        ],
        "province": "内蒙古自治区",
        "short": "内蒙古"
    },
    {
        "citys": [
            {
                "buji": 800,
                "months": "全年",
                "name": "沈阳市",
                "other": 350,
                "peakseason": 0,
                "sijuji": 480
            },
            {
                "buji": 800,
                "months": "全年",
                "name": "其他地区",
                "other": 330,
                "peakseason": 0,
                "sijuji": 480
            },
            {
                "buji": 960,
                "months": "7-9月",
                "name": "大连",
                "other": 420,
                "peakseason": 1,
                "sijuji": 590
            },
            {
                "buji": 800,
                "months": "1-6月、10-12月",
                "name": "大连",
                "other": 350,
                "peakseason": 0,
                "sijuji": 490
            }
        ],
        "province": "辽宁省",
        "short": "辽宁"
    },
    {
        "citys": [
            {
                "buji": 800,
                "months": "全年",
                "name": "长春市",
                "other": 350,
                "peakseason": 0,
                "sijuji": 450
            },
            {
                "buji": 800,
                "months": "1-6月、10-12月",
                "name": "吉林市,延边州,长白山管理区",
                "other": 350,
                "peakseason": 0,
                "sijuji": 450
            },
            {
                "buji": 960,
                "months": "7-9月",
                "name": "长春市,吉林市,延边州,长白山管理区",
                "other": 420,
                "peakseason": 1,
                "sijuji": 540
            },
            {
                "buji": 750,
                "months": "全年",
                "name": "其他地区",
                "other": 300,
                "peakseason": 0,
                "sijuji": 400
            }
        ],
        "province": "吉林省",
        "short": "吉林"
    },
    {
        "citys": [
            {
                "buji": 800,
                "months": "1-6月、10-12月",
                "name": "哈尔滨市",
                "other": 350,
                "peakseason": 0,
                "sijuji": 450
            },
            {
                "buji": 960,
                "months": "7-9月",
                "name": "哈尔滨市",
                "other": 420,
                "peakseason": 1,
                "sijuji": 540
            },
            {
                "buji": 750,
                "months": "1-5月、9-12月",
                "name": "牡丹江市,伊春市,大兴安岭地区,黑河市,佳木斯市",
                "other": 300,
                "peakseason": 0,
                "sijuji": 450
            },
            {
                "buji": 900,
                "months": "6-8月",
                "name": "牡丹江市,伊春市,大兴安岭地区,黑河市,佳木斯市",
                "other": 360,
                "peakseason": 1,
                "sijuji": 540
            },
            {
                "buji": 750,
                "months": "全年",
                "name": "其他地区",
                "other": 300,
                "peakseason": 0,
                "sijuji": 450
            }
        ],
        "province": "黑龙江省",
        "short": "黑龙江"
    },
    {
        "citys": [
            {
                "buji": 1100,
                "months": "全年",
                "name": "全市",
                "other": 500,
                "peakseason": 0,
                "sijuji": 600
            }
        ],
        "province": "上海市",
        "short": "上海"
    },
    {
        "citys": [
            {
                "buji": 900,
                "months": "全年",
                "name": "南京市,苏州市,无锡市,常州市,镇江市",
                "other": 380,
                "peakseason": 0,
                "sijuji": 490
            },
            {
                "buji": 900,
                "months": "全年",
                "name": "其他地区",
                "other": 360,
                "peakseason": 0,
                "sijuji": 490
            }
        ],
        "province": "江苏省",
        "short": "江苏"
    },
    {
        "citys": [
            {
                "buji": 900,
                "months": "全年",
                "name": "杭州市",
                "other": 400,
                "peakseason": 0,
                "sijuji": 500
            },
            {
                "buji": 800,
                "months": "全年",
                "name": "其他地区",
                "other": 340,
                "peakseason": 0,
                "sijuji": 490
            },
            {
                "buji": 800,
                "months": "全年",
                "name": "宁波",
                "other": 350,
                "peakseason": 0,
                "sijuji": 450
            }
        ],
        "province": "浙江省",
        "short": "浙江"
    },
    {
        "citys": [
            {
                "buji": 800,
                "months": "全年",
                "name": "全省",
                "other": 350,
                "peakseason": 0,
                "sijuji": 460
            }
        ],
        "province": "安徽省",
        "short": "安徽"
    },
    {
        "citys": [
            {
                "buji": 900,
                "months": "全年",
                "name": "福州市,泉州市,平潭综合实验区",
                "other": 380,
                "peakseason": 0,
                "sijuji": 480
            },
            {
                "buji": 900,
                "months": "全年",
                "name": "其他地区",
                "other": 350,
                "peakseason": 0,
                "sijuji": 480
            },
            {
                "buji": 900,
                "months": "全年",
                "name": "厦门",
                "other": 400,
                "peakseason": 0,
                "sijuji": 500
            }
        ],
        "province": "福建省",
        "short": "福建"
    },
    {
        "citys": [
            {
                "buji": 800,
                "months": "全年",
                "name": "全省",
                "other": 350,
                "peakseason": 0,
                "sijuji": 470
            }
        ],
        "province": "江西省",
        "short": "江西"
    },
    {
        "citys": [
            {
                "buji": 800,
                "months": "1-6月、10-12月",
                "name": "烟台市,威海市,日照市",
                "other": 380,
                "peakseason": 0,
                "sijuji": 480
            },
            {
                "buji": 960,
                "months": "7-9月",
                "name": "烟台市,威海市,日照市",
                "other": 450,
                "peakseason": 1,
                "sijuji": 570
            },
            {
                "buji": 800,
                "months": "全年",
                "name": "济南市、淄博市、枣庄市、东营市、潍坊市、济宁市、泰安市",
                "other": 380,
                "peakseason": 0,
                "sijuji": 480
            },
            {
                "buji": 800,
                "months": "全年",
                "name": "其他地区",
                "other": 360,
                "peakseason": 0,
                "sijuji": 460
            },
            {
                "buji": 800,
                "months": "1-6月、10-12月",
                "name": "青岛",
                "other": 380,
                "peakseason": 0,
                "sijuji": 490
            },
            {
                "buji": 960,
                "months": "7-9月",
                "name": "青岛",
                "other": 450,
                "peakseason": 1,
                "sijuji": 590
            }
        ],
        "province": "山东省",
        "short": "山东"
    },
    {
        "citys": [
            {
                "buji": 900,
                "months": "全年",
                "name": "郑州市",
                "other": 380,
                "peakseason": 0,
                "sijuji": 480
            },
            {
                "buji": 800,
                "months": "4-5月上旬以外",
                "name": "洛阳市",
                "other": 330,
                "peakseason": 0,
                "sijuji": 480
            },
            {
                "buji": 1200,
                "months": "4-5月上旬",
                "name": "洛阳市",
                "other": 500,
                "peakseason": 1,
                "sijuji": 720
            },
            {
                "buji": 800,
                "months": "全年",
                "name": "其他地区",
                "other": 330,
                "peakseason": 0,
                "sijuji": 480
            }
        ],
        "province": "河南省",
        "short": "河南"
    },
    {
        "citys": [
            {
                "buji": 800,
                "months": "全年",
                "name": "武汉市",
                "other": 350,
                "peakseason": 0,
                "sijuji": 480
            },
            {
                "buji": 800,
                "months": "全年",
                "name": "其他地区",
                "other": 320,
                "peakseason": 0,
                "sijuji": 480
            }
        ],
        "province": "湖北省",
        "short": "湖北"
    },
    {
        "citys": [
            {
                "buji": 800,
                "months": "全年",
                "name": "长沙市",
                "other": 350,
                "peakseason": 0,
                "sijuji": 450
            },
            {
                "buji": 800,
                "months": "全年",
                "name": "其他地区",
                "other": 330,
                "peakseason": 0,
                "sijuji": 450
            }
        ],
        "province": "湖南省",
        "short": "湖南"
    },
    {
        "citys": [
            {
                "buji": 900,
                "months": "全年",
                "name": "广州市,珠海市,佛山市,东莞市,中山市,江门市",
                "other": 450,
                "peakseason": 0,
                "sijuji": 550
            },
            {
                "buji": 850,
                "months": "全年",
                "name": "其他地区",
                "other": 420,
                "peakseason": 0,
                "sijuji": 530
            },
            {
                "buji": 900,
                "months": "全年",
                "name": "深圳",
                "other": 450,
                "peakseason": 0,
                "sijuji": 550
            }
        ],
        "province": "广东省",
        "short": "广东"
    },
    {
        "citys": [
            {
                "buji": 800,
                "months": "全年",
                "name": "南宁市",
                "other": 350,
                "peakseason": 0,
                "sijuji": 470
            },
            {
                "buji": 800,
                "months": "3-6月、10-12月",
                "name": "桂林市,北海市",
                "other": 330,
                "peakseason": 0,
                "sijuji": 470
            },
            {
                "buji": 1040,
                "months": "1-2月、7-9月",
                "name": "桂林市,北海市",
                "other": 430,
                "peakseason": 1,
                "sijuji": 610
            },
            {
                "buji": 800,
                "months": "全年",
                "name": "其他地区",
                "other": 330,
                "peakseason": 0,
                "sijuji": 470
            }
        ],
        "province": "广西壮族自治区",
        "short": "广西"
    },
    {
        "citys": [
            {
                "buji": 800,
                "months": "3-10月",
                "name": "海口市,文昌市,澄迈县",
                "other": 350,
                "peakseason": 0,
                "sijuji": 500
            },
            {
                "buji": 1040,
                "months": "1-2月、11-12月",
                "name": "海口市,文昌市,澄迈县",
                "other": 450,
                "peakseason": 1,
                "sijuji": 650
            },
            {
                "buji": 800,
                "months": "4-10月",
                "name": "琼海市,万宁市,陵水县,保亭县",
                "other": 350,
                "peakseason": 0,
                "sijuji": 500
            },
            {
                "buji": 1040,
                "months": "1-3,11-12月",
                "name": "琼海市,万宁市,陵水县,保亭县",
                "other": 450,
                "peakseason": 1,
                "sijuji": 650
            },
            {
                "buji": 1200,
                "months": "1-4月、10-12月",
                "name": "三亚市",
                "other": 480,
                "peakseason": 1,
                "sijuji": 720
            },
            {
                "buji": 1000,
                "months": "5-9月",
                "name": "三亚市",
                "other": 400,
                "peakseason": 0,
                "sijuji": 600
            },
            {
                "buji": 800,
                "months": "全年",
                "name": "其他地区",
                "other": 350,
                "peakseason": 0,
                "sijuji": 500
            }
        ],
        "province": "海南省",
        "short": "海南"
    },
    {
        "citys": [
            {
                "buji": 800,
                "months": "全年",
                "name": "渝中区、沙坪坝区、江北区、南岸区、大渡口区、九龙坡区、渝北区、巴南区、北碚区、北部新区",
                "other": 370,
                "peakseason": 0,
                "sijuji": 480
            },
            {
                "buji": 770,
                "months": "全年",
                "name": "其他地区",
                "other": 300,
                "peakseason": 0,
                "sijuji": 450
            }
        ],
        "province": "重庆市",
        "short": "重庆"
    },
    {
        "citys": [
            {
                "buji": 900,
                "months": "全年",
                "name": "成都市",
                "other": 370,
                "peakseason": 0,
                "sijuji": 470
            },
            {
                "buji": 800,
                "months": "全年",
                "name": "阿坝州,甘孜州",
                "other": 330,
                "peakseason": 0,
                "sijuji": 430
            },
            {
                "buji": 800,
                "months": "全年",
                "name": "绵阳市,乐山市,雅安市",
                "other": 320,
                "peakseason": 0,
                "sijuji": 430
            },
            {
                "buji": 800,
                "months": "全年",
                "name": "宜宾市",
                "other": 300,
                "peakseason": 0,
                "sijuji": 430
            },
            {
                "buji": 750,
                "months": "全年",
                "name": "凉山州",
                "other": 330,
                "peakseason": 0,
                "sijuji": 430
            },
            {
                "buji": 750,
                "months": "全年",
                "name": "德阳市,遂宁市,巴中市",
                "other": 310,
                "peakseason": 0,
                "sijuji": 430
            },
            {
                "buji": 750,
                "months": "全年",
                "name": "其他地区",
                "other": 300,
                "peakseason": 0,
                "sijuji": 430
            }
        ],
        "province": "四川省",
        "short": "四川"
    },
    {
        "citys": [
            {
                "buji": 800,
                "months": "全年",
                "name": "贵阳市",
                "other": 370,
                "peakseason": 0,
                "sijuji": 470
            },
            {
                "buji": 750,
                "months": "全年",
                "name": "其他地区",
                "other": 300,
                "peakseason": 0,
                "sijuji": 450
            }
        ],
        "province": "贵州省",
        "short": "贵州"
    },
    {
        "citys": [
            {
                "buji": 900,
                "months": "全年",
                "name": "昆明市,大理州,丽江市,迪庆州,西双版纳州",
                "other": 380,
                "peakseason": 0,
                "sijuji": 480
            },
            {
                "buji": 900,
                "months": "全年",
                "name": "其他地区",
                "other": 330,
                "peakseason": 0,
                "sijuji": 480
            }
        ],
        "province": "云南省",
        "short": "云南"
    },
    {
        "citys": [
            {
                "buji": 1200,
                "months": "6-9月",
                "name": "拉萨市",
                "other": 530,
                "peakseason": 1,
                "sijuji": 750
            },
            {
                "buji": 800,
                "months": "1-5,10-12月",
                "name": "拉萨市",
                "other": 350,
                "peakseason": 0,
                "sijuji": 500
            },
            {
                "buji": 800,
                "months": "6-9月",
                "name": "其他地区",
                "other": 350,
                "peakseason": 1,
                "sijuji": 500
            },
            {
                "buji": 500,
                "months": "1-5,10-12月",
                "name": "其他地区",
                "other": 300,
                "peakseason": 0,
                "sijuji": 400
            }
        ],
        "province": "西藏自治区",
        "short": "西藏"
    },
    {
        "citys": [
            {
                "buji": 800,
                "months": "全年",
                "name": "西安市",
                "other": 350,
                "peakseason": 0,
                "sijuji": 460
            },
            {
                "buji": 680,
                "months": "全年",
                "name": "榆林市,延安市",
                "other": 300,
                "peakseason": 0,
                "sijuji": 350
            },
            {
                "buji": 680,
                "months": "全年",
                "name": "杨凌区",
                "other": 260,
                "peakseason": 0,
                "sijuji": 320
            },
            {
                "buji": 600,
                "months": "全年",
                "name": "咸阳市,宝鸡市",
                "other": 260,
                "peakseason": 0,
                "sijuji": 320
            },
            {
                "buji": 600,
                "months": "全年",
                "name": "渭南市,韩城市",
                "other": 260,
                "peakseason": 0,
                "sijuji": 300
            },
            {
                "buji": 600,
                "months": "全年",
                "name": "其他地区",
                "other": 230,
                "peakseason": 0,
                "sijuji": 300
            }
        ],
        "province": "陕西省",
        "short": "陕西"
    },
    {
        "citys": [
            {
                "buji": 800,
                "months": "全年",
                "name": "兰州市",
                "other": 350,
                "peakseason": 0,
                "sijuji": 470
            },
            {
                "buji": 700,
                "months": "全年",
                "name": "其他地区",
                "other": 310,
                "peakseason": 0,
                "sijuji": 450
            }
        ],
        "province": "甘肃省",
        "short": "甘肃"
    },
    {
        "citys": [
            {
                "buji": 800,
                "months": "1-5,10-12月",
                "name": "西宁市",
                "other": 350,
                "peakseason": 0,
                "sijuji": 500
            },
            {
                "buji": 1200,
                "months": "6-9月",
                "name": "西宁市",
                "other": 530,
                "peakseason": 1,
                "sijuji": 750
            },
            {
                "buji": 600,
                "months": "1-4月、10-12月",
                "name": "玉树州",
                "other": 300,
                "peakseason": 0,
                "sijuji": 350
            },
            {
                "buji": 900,
                "months": "5-9月",
                "name": "玉树州",
                "other": 450,
                "peakseason": 1,
                "sijuji": 525
            },
            {
                "buji": 600,
                "months": "全年",
                "name": "果洛州",
                "other": 300,
                "peakseason": 0,
                "sijuji": 350
            },
            {
                "buji": 900,
                "months": "5-9月",
                "name": "海北州,黄南州",
                "other": 375,
                "peakseason": 1,
                "sijuji": 525
            },
            {
                "buji": 600,
                "months": "1-4月、10-12月",
                "name": "海北州,黄南州",
                "other": 250,
                "peakseason": 0,
                "sijuji": 350
            },
            {
                "buji": 900,
                "months": "5-9月",
                "name": "海东市,海南州",
                "other": 375,
                "peakseason": 1,
                "sijuji": 450
            },
            {
                "buji": 600,
                "months": "1-4月、10-12月",
                "name": "海东市,海南州",
                "other": 250,
                "peakseason": 0,
                "sijuji": 300
            },
            {
                "buji": 900,
                "months": "5-9月",
                "name": "海西州",
                "other": 300,
                "peakseason": 1,
                "sijuji": 450
            },
            {
                "buji": 600,
                "months": "1-4月、10-12月",
                "name": "海西州",
                "other": 200,
                "peakseason": 0,
                "sijuji": 300
            }
        ],
        "province": "青海省",
        "short": "青海"
    },
    {
        "citys": [
            {
                "buji": 800,
                "months": "全年",
                "name": "银川市",
                "other": 350,
                "peakseason": 0,
                "sijuji": 470
            },
            {
                "buji": 800,
                "months": "全年",
                "name": "其他地区",
                "other": 330,
                "peakseason": 0,
                "sijuji": 430
            }
        ],
        "province": "宁夏回族自治区",
        "short": "宁夏"
    },
    {
        "citys": [
            {
                "buji": 800,
                "months": "全年",
                "name": "乌鲁木齐市",
                "other": 350,
                "peakseason": 0,
                "sijuji": 480
            },
            {
                "buji": 800,
                "months": "全年",
                "name": "其他地区",
                "other": 340,
                "peakseason": 0,
                "sijuji": 480
            },
            {
                "buji": 800,
                "months": "全年",
                "name": "克州",
                "other": 320,
                "peakseason": 0,
                "sijuji": 480
            },
            {
                "buji": 780,
                "months": "全年",
                "name": "喀什地区",
                "other": 300,
                "peakseason": 0,
                "sijuji": 480
            },
            {
                "buji": 700,
                "months": "全年",
                "name": "阿克苏地区",
                "other": 300,
                "peakseason": 0,
                "sijuji": 450
            },
            {
                "buji": 700,
                "months": "全年",
                "name": "塔城地区",
                "other": 300,
                "peakseason": 0,
                "sijuji": 400
            }
        ],
        "province": "新疆维吾尔自治区",
        "short": "新疆"
    }
];

  return {
    all: function() {
      return chats;
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});