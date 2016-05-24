angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,$state,Travel,$location,$http,$rootScope) {

    var windowsArr = [];
    var marker = [];
    $scope.travel = Travel.all()

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
      });
    });
    $scope.jump = function(){
      var searchkeyword = document.getElementById('inputLocation').value;
      console.log('首页+'+searchkeyword)

      if(searchkeyword.length==0){
          alert('请输入地址信息');
      }else{
        $state.go('tab.chats', {chatid: searchkeyword});
      }
    }
    })

  .controller('tabsearch',  function($scope,Chats,$state,$location,$http,$rootScope) {
    var windowsArr = [];
    var marker = [];

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
    $scope.chats = Chats.all();
    $scope.jump = function(){
      var searchkeyword2 = document.getElementById('inputLocation2').value;
      console.log('搜索页+'+searchkeyword2)
      if(searchkeyword2.length==0){
        alert('请输入地址信息');
      }else{
        $state.go('tab.chats', {chatid: searchkeyword2});
      }
    }
  })
.controller('ChatsCtrl', function($scope,$stateParams,$rootScope,$state, $http,Chats) {

    $scope.cityname = $stateParams.chatid;
/*
  $scope.cityname = $rootScope.city;
*/
     $scope.chats = Chats.all();
      $http.get("http://restapi.amap.com/v3/geocode/geo?key=1292ad930cb9e02938e4b094a380181f&address=" + $scope.cityname + "&city=")
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
                /*循环获取内部数据表*/
              for(var j = 0;j<$scope.chats.length;++j){
                if($scope.chats[j].province == $scope.searchdetail){
                  $scope.cityinfo = $scope.chats[j].citys;
                    defaultResult=[];
                    matchResult=[];

                    for(i in $scope.chats[j].citys ){
                        if($scope.chats[j].citys[i].city ==   $scope.weathercity){
                            matchResult.push($scope.chats[j].citys[i]);
                        }else if($scope.chats[j].citys[i].default=='1'){
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


