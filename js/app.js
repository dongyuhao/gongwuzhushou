/**
 * Created by dongyh on 2015/9/1.
 */
angular.module('starter', ['ui.router','ionic', 'starter.controllers', 'starter.services'])

.run(function($rootScope, $state, $stateParams,$ionicPlatform) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });

})
.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/tab/dash');
    $stateProvider
        .state('tab', {
            url: '/tab',
            views:{
                'tab':{
                    abstract: true,
                    templateUrl: 'templates/tabs.html',
                    controller:'TabCtrl'
                }
            }
        })

        // Each tab has its own nav history stack:

        .state('tab.dash', {
            url: '/dash',
            views: {
                'tab-dash': {
                    templateUrl: 'templates/tab-dash.html',
                    controller: 'DashCtrl'
                }
            }
        })

        .state('tab.chats', {
            url: '/chats/:chatid',
            views: {
                'tab-dash': {
                    templateUrl: 'templates/tab-chats.html',
                    controller: 'ChatsCtrl'
                }
            }
        })
        .state('tab.search', {
            url: '/search',
            views: {
                'tab-dash': {
                    templateUrl: 'templates/tab-search.html',
                    controller: 'tabsearch'
                }
            }
        })


    })