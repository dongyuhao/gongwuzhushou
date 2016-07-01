angular.module('starter.controllers', [])

    .controller('DashCtrl', function($scope,$state,$location,$http,$rootScope) {
        $scope.pageClass = 'page-home';
        var windowsArr = [];
        var marker = [];
        $http.get("./js/infomation.json")
            .success(function(data){
                $scope.travel = data;
            })
            .error(function(){
                return null;
            }

        );

        var Geo={};
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(success,error);
        }
        function success(position){
            Geo.lat = position.coords.latitude;
            Geo.lng = position.coords.longitude;
            populateHeader(Geo.lat,Geo.lng);
        }
        function error(){
            alert("对不起，您已禁用浏览器获取您的位置或者位置获取失败");
        }
        function populateHeader(lat,lng){
            //解析定位错误信息
            AMap.service('AMap.Geocoder',function(){//回调函数
                //实例化Geocoder
                geocoder = new AMap.Geocoder({
                    city: "010"//城市，默认：“全国”
                });

                //TODO: 使用geocoder 对象完成相关功能
                var lnglatXY=[lng, lat];//地图上所标点的坐标
                geocoder.getAddress(lnglatXY, function(status, result) {
                    if (status === 'complete' && result.info === 'OK') {
                        //获得了有效的地址信息:
                        //即，result.regeocode.formattedAddress
                        geocoder_CallBack(result);
                    }else{
                        //获取地址失败
                    }
                });
            })
            function geocoder_CallBack(data) {
                var address = data.regeocode.formattedAddress; //返回地址描述
                $rootScope.addd = address;
                console.log($rootScope.addd);
            }
        }
        $scope.showmylocal =function(){
            console.log($rootScope.addd);
            $state.go('tab.chats', {chatid:  $rootScope.addd});
        }

        AMap.plugin(['AMap.Autocomplete','AMap.PlaceSearch'],function(){
            var autoOptions = {
                city: "", //城市，默认全国
                input: "inputLocation",//使用联想输入的input的id

            };
            autocomplete= new AMap.Autocomplete(autoOptions);
            var placeSearch = new AMap.PlaceSearch({
                city:''
            })
            AMap.event.addListener(autocomplete, "select", function(e){
                //TODO 针对选中的poi实现自己的功能
                placeSearch.search(e.poi.district);
                console.log(e.poi.district);
                $scope.placesearch = e.poi.district;
            });
        });
        $scope.jump = function(){
            var searchkeyword = $scope.placesearch;
            if(typeof(searchkeyword)=='undefined'){
                var searchkeyword = document.getElementById('inputLocation').value;
                if(searchkeyword=='' ){
                    alert('请输入您要搜索的地址');
                }else{
                    $state.go('tab.chats', {chatid: searchkeyword});
                    console.log('首页Input+'+searchkeyword);
                }

            }
            else{

                console.log('首页+'+searchkeyword);
                $state.go('tab.chats', {chatid: searchkeyword});

            }

        }
    })

    .controller('tabsearch',  function($scope,$state,$location,$http,$rootScope) {
        var windowsArr = [];
        var marker = [];
        $scope.pageClass = 'page-contact';
        AMap.plugin(['AMap.Autocomplete','AMap.PlaceSearch'],function(){
            var autoOptions = {
                city: "", //城市，默认全国
                input: "inputLocation2",//使用联想输入的input的id

            };
            autocomplete= new AMap.Autocomplete(autoOptions);
            var placeSearch = new AMap.PlaceSearch({
                city:''
            })
            AMap.event.addListener(autocomplete, "select", function(e){
                //TODO 针对选中的poi实现自己的功能
                placeSearch.search(e.poi.district);
                console.log(e.poi.district);
                console.log(e.poi.name);
            });
        });

        $http.get("./js/data.json")
            .success(function(data){
                $scope.chats = data;
            })
            .error(function(){
                return null;
            }

        )
        $scope.jump = function(){
            var searchkeyword2 = $scope.placesearch;
            if(typeof(searchkeyword2)=='undefined'){
                var searchkeyword2 = document.getElementById('inputLocation2').value;
                if(searchkeyword2=='' ){
                    alert('请输入您要搜索的地址');
                }else{
                    $state.go('tab.chats', {chatid: searchkeyword2});
                    console.log('搜索页Input+'+searchkeyword2);
                }

            }
            else{

                console.log('搜索页+'+searchkeyword2);
                $state.go('tab.chats', {chatid: searchkeyword2});

            }
        }
    })
    .controller('ChatsCtrl', function($scope,$stateParams,$rootScope,$state, $http) {
        $scope.pageClass = 'page-about';
        $scope.cityname = $stateParams.chatid;
        /*
         $scope.cityname = $rootScope.city;
         */
        $http.get("./js/data.json")
            .success(function(data){
                $scope.chats = data;
            })
            .error(function(){
                return null;
            }

        );
        $http.get("http://restapi.amap.com/v3/geocode/geo?key=4fb9552784cab1a76e7cd771ecaf85d8&address=" + $scope.cityname + "&city=")
            .success(function (data) {
                $scope.print = data;
                var arr = data.geocodes;
                var count = data.count;

                if (count == 1) {
                    for (var i = 0; i < arr.length; i++) {
                        var item = arr[i];
                        /*获取高德省级名称*/
                        $scope.searchdetail = item.province;
                        /*获取高德市级名称*/
                        $scope.weathercity = item.city;
                        /*获取高德地级名称*/
                        $scope.wdistrict = item.district;
                        /*获取高德地级名称*/
                        $scope.wlevel = item.level;
                        console.log(item.level);
                        $scope.shiji = [{
                            "city": "省直辖市城区",
                            "time": "全年",
                            "level1": "800",
                            "level2": "480",
                            "level3": "330",
                            "hot": "0",
                            "isDefault": "1"
                        }];
                        $scope.xianji = [
                            {
                                "city": "县城及以下",
                                "time": "全年",
                                "level1": "700",
                                "level2": "400",
                                "level3": "300",
                                "hot": "0",
                                "isDefault": "0"
                            }
                        ];
                        $scope.zhengzhou = [
                            {
                                "city": "郑州市",
                                "time": "全年",
                                "level1": "800",
                                "level2": "480",
                                "level3": "380",
                                "hot": "0",
                                "isDefault": "0"
                            }
                        ];
                        $scope.luoyang = [
                            {
                                "city": "洛阳市",
                                "time": "4-5月",
                                "level1": "1200",
                                "level2": "720",
                                "level3": "500",
                                "hot": "0",
                                "isDefault": "0"
                            },{
                                "city": "洛阳市",
                                "time": "1-3月、7-12月",
                                "level1": "800",
                                "level2": "480",
                                "level3": "330",
                                "hot": "0",
                                "isDefault": "1"
                            }
                        ]
                        console.log(item.district);
                        /*循环获取内部数据表*/
                        for(var j = 0;j<$scope.chats.length;++j){
                            if($scope.chats[j].province == $scope.searchdetail){
                                $scope.cityinfo = $scope.chats[j].citys;
                                console.log($scope.cityinfo);
                                defaultResult=[];
                                matchResult=[];
                                /*省内进行循环*/
                                if($scope.searchdetail == '河南省'){
                                    if($scope.weathercity == '洛阳市'){
                                        $scope.cityinfo = $scope.luoyang;

                                    }else if($scope.weathercity == '郑州市'){
                                        if($scope.wdistrict == '上街区'){
                                            $scope.cityinfo = $scope.xianji;
                                        }else{
                                            $scope.cityinfo = $scope.zhengzhou;
                                        }

                                    }else{
                                        if($scope.wlevel == '市'){
                                            $scope.cityinfo = $scope.shiji;
                                        }else{
                                            $scope.cityinfo = $scope.xianji;
                                        }
                                    }
                                   /* if($scope.wlevel == '市'){
                                        if($scope.weathercity == '洛阳市'){
                                            $scope.cityinfo = $scope.luoyang;

                                        }else if($scope.weathercity == '郑州市'){
                                            if($scope.wdistrict == '上街区'){
                                                $scope.cityinfo = $scope.xianji;
                                            }else{
                                                $scope.cityinfo = $scope.zhengzhou;
                                            }

                                        }else{
                                            $scope.cityinfo = $scope.shiji;
                                        }
                                    }else{
                                        if($scope.weathercity == '洛阳市'){
                                            $scope.cityinfo = $scope.luoyang;

                                        }else if($scope.weathercity == '郑州市'){
                                            if($scope.wdistrict == '上街区'){
                                                $scope.cityinfo = $scope.xianji;
                                            }else{
                                                $scope.cityinfo = $scope.zhengzhou;
                                            }

                                        }else{
                                            $scope.cityinfo = $scope.xianji;
                                        }
                                    }*/
                                }else{
                                    for(i in $scope.chats[j].citys ){
                                        if($scope.chats[j].citys[i].city ==   $scope.weathercity || $scope.chats[j].citys[i].city ==   $scope.wdistrict){
                                            /*选取匹配市名称*/

                                            matchResult.push($scope.chats[j].citys[i]);

                                        }else if($scope.chats[j].citys[i].isDefault=='1'){
                                            /*无匹配时选取默认值isDefault=1*/
                                            defaultResult.push($scope.chats[j].citys[i]);
                                        }
                                    }
                                    if(matchResult.length>0){
                                        $scope.cityinfo =  matchResult;
                                        console.log(matchResult);
                                    }else{
                                        $scope.cityinfo =  defaultResult;
                                        console.log(defaultResult);

                                    }
                                }


                                /*return;*/
                            }
                            else{
                                /*省无法匹配时*/
                            }
                        }
                        break;

                    }
                }
                else{
                    alert('请输入正确地址信息');
                    $state.go('tab.dash');
                };
                AMap.service('AMap.Weather', function() {
                    var weather = new AMap.Weather();

                    //未来4天天气预报
                    weather.getForecast( $scope.weathercity, function(err, data) {
                        if (err) {return;}
                        var str = [];
                        if(data.status != 0){
                            for (var i = 0,dayWeather; i < 3; i++) {
                                dayWeather = data.forecasts[i];
                                console.log(222);
                                $scope.dayWeather = data.forecasts[i];
                                var dtArr = dayWeather.date.split("-");
                                str.push('<div class="weatherlist">'+
                                    '<p>'+dtArr[1]+ '-'+ dtArr[2]+'</p>'+
                                    '<p class="weather-p"><i class="icn-weather" data-weather-icn="'+dayWeather.dayWeather+'"></i><span>'+dayWeather.dayWeather+'</span></p>'+
                                    '<p>'+dayWeather.nightTemp+'~' +dayWeather.dayTemp +'℃'+'</p>'+
                                    '</div>'
                                );
                            }
                            document.getElementById('weathertip').innerHTML = str.join('');
                        }
                        else{
                            document.getElementById('weatherdiv').style.display = 'none';

                        }


                    });
                });

            });

    })



    .controller('TabCtrl', function($scope,  $ionicSideMenuDelegate) {


    })


