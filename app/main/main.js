'use strict';
angular.module('main', [
  'ionic',
  'ngCordova',
  'ngCookies',
  'ngStorage',
  'ui.router',
  'pascalprecht.translate',// angular-translate
  'tmh.dynamicLocale', // angular-dynamic-locale
  'LocalForageModule',
  'base64',
  'validation',
  'validation.rule',
  'validation.schema'
    // TODO: load other modules selected during generation
])
.config(function ($stateProvider, $urlRouterProvider) {

  // ROUTING with ui.router
  $stateProvider
    // this state is placed in the <ion-nav-view> in the index.html
    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'main/templates/app.html',
      controller: 'MenuCtrl as ctrl'
    })
    .state('app.login', {
      url: '/login',
      views: {
        'app-view': {
          templateUrl: 'main/templates/login.html',
          controller: 'LoginCtrl',
          resolve:{
            userRemembered: ['UserService', function(UserService){
              return UserService.getUser();
            }]
          }
        }
      }
    })
    .state('app.register', {
      url: '/register',
      views: {
        'app-view': {
          templateUrl: 'main/templates/register.html',
          controller: 'LoginCtrl'
        }
      }
    })
   .state('main.list', {
        url: '/list',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/list.html',
            // controller: '<someCtrl> as ctrl'
          }
        }
      })
      .state('main.listDetail', {
        url: '/list/detail',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/list-detail.html',
            // controller: '<someCtrl> as ctrl'
          }
        }
      })
      .state('main.debug', {
        url: '/debug',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/debug.html',
            controller: 'DebugCtrl as ctrl'
          }
        }
      });
      $urlRouterProvider.otherwise('/app/login');
})
.config(function ($compileProvider, DEBUG_MODE) {
    if (!DEBUG_MODE) {
      $compileProvider.debugInfoEnabled(false);// disables AngularJS debug info
    }
  })
// Angular Translate
.config(function ($translateProvider, DEBUG_MODE, LOCALES) {
    if (DEBUG_MODE) {
      $translateProvider.useMissingTranslationHandlerLog();
    }
    $translateProvider.useStaticFilesLoader({
        prefix: 'main/resources/locale-',// path to translations files
        suffix: '.json'// suffix, currently- extension of the translations
    });
    $translateProvider.preferredLanguage(LOCALES.preferredLocale);// is applied on first load
    $translateProvider.useLocalStorage();// saves selected language to localStorage
});
