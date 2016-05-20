angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,$state,Chats,$location,$http,$rootScope) {
  /*  $scope.searchProvince = function searchProvince(){
      var searchkeyword = document.getElementById('inputLocation').value;
      $rootScope.city = searchkeyword;

    }*/
   /* $scope.hotsearch = function hotsearch(searchkeyword){
      $rootScope.city = searchkeyword;
    }*/
    var windowsArr = [];
    var marker = [];
    console.log('进入高的');

    AMap.plugin(['AMap.Autocomplete','AMap.PlaceSearch'],function(){
      var autoOptions = {
        city: "", //城市，默认全国
        input: "inputLocation",//使用联想输入的input的id

      };
      console.log('进入plug');
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
    console.log('进入高的');

    AMap.plugin(['AMap.Autocomplete','AMap.PlaceSearch'],function(){
      var autoOptions = {
        city: "", //城市，默认全国
        input: "inputLocation2",//使用联想输入的input的id

      };
      console.log('进入plug');
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
   /* $scope.searchProvince = function searchProvince(){
      var searchkeyword = document.getElementById('inputLocation').value;
      $rootScope.city = searchkeyword;

    }*/
   /* $scope.hotsearch = function hotsearch(searchkeyword){
      $rootScope.city = searchkeyword;
      console.log($rootScope);
    }
*/
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
              $scope.searchdetail = item.province;
                $scope.weathercity = item.city;

              for(var j = 0;j<$scope.chats.length;++j){
                if($scope.chats[j].province == $scope.searchdetail){
                  $scope.cityinfo = $scope.chats[j].citys;
                }
              }
              break;

            }
          }
          else{
           alert('请输入正确地址信息');
            $state.go('tab.dash');
          }
              console.log($scope.weathercity+'aaa');
              AMap.service('AMap.Weather', function() {
                  var weather = new AMap.Weather();

                  //未来4天天气预报
                  weather.getForecast($scope.weathercity, function(err, data) {
                      if (err) {return;}
                      var str = [];

                      console.log(1);
                      if(data.status != 0){
                          for (var i = 0,dayWeather; i < 3; i++) {
                              dayWeather = data.forecasts[i];

                              $scope.dayWeather = data.forecasts[i];
                              var dtArr = dayWeather.date.split("-");
                              str.push('<div class="weatherlist">'+
                                  '<p>'+dtArr[1]+ '-'+ dtArr[2]+'</p>'+
                                  '<p>'+dayWeather.dayWeather+'</p>'+
                                  '<p>'+dayWeather.nightTemp+'~' +dayWeather.dayTemp +'℃'+'</p>'+
                                  '</div>'
                              );

                          }
                          document.getElementById('weathertip').innerHTML = str.join('');
                      }
                      else{
                          document.getElementById('weatherdiv').style('display','none');

                      }


                  });
              });

        });

})



.controller('TabCtrl', function($scope,  $ionicSideMenuDelegate) {


  })


