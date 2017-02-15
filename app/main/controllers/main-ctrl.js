'use strict';
angular.module('main')
.controller('MainCtrl',
function($scope, $state, $ionicPopup, $ionicHistory, $ionicViewSwitcher, $ionicModal) {
    $scope.app = {
    userLoggedIn: false,
    countryCode: 'ar'
  };

  $scope.isAndroid = function() {
    return ionic.Platform.isAndroid();
  };

  var closePopup = function() {
    if ($scope.popup) {
      $scope.popup.close();
    }
  };

  var setUserLoggedIn = function() {
    $scope.app.userLoggedIn = !$scope.app.userLoggedIn;
  };

  $scope.$on('change-user:login-status', setUserLoggedIn);

  //Cleanup the popover when we're done with it!
  $scope.$on('$ionicView.leave', closePopup);

  $scope.$on('exit:app', function() {
    $scope.popup = $ionicPopup.confirm({
      template: '¿Desea salir?',
      cancelText: 'Cancelar', // String (default: 'Cancel'). The text of the Cancel button.
      cancelType: 'button-dark button-outline',
      okText: 'Salir',
      okType: 'button-royal',
      cssClass: 'text-center'
    });
    $scope.popup.then(function(res) {
      if (res) {
        $state.go('app.logout', {
          exitApp: true
        });
      }
    });
  });

  $scope.$on('goToMain:app', function() {
    $ionicViewSwitcher.nextDirection('back');
    $ionicHistory.nextViewOptions({
      disableBack: true
    });

    $state.go('app.main.principal');
  });

  // Generic errors
  $scope.$on('generic:error', function(event, message) {
    //Error de login
    $scope.popup = $ionicPopup.alert({
      title: 'Error',
      template: message,
      okType: 'button-royal',
      cssClass: 'text-center'
    });
  });

  // Generic errors
  $scope.$on('generic:error-with-template', function(event, templateUrl) {
    //Error de login
    $scope.popup = $ionicPopup.alert({
      title: 'Error',
      templateUrl: templateUrl,
      okType: 'button-royal',
      cssClass: 'text-center'
    });
  });
  
  $scope.toggleGroup = function(group) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
  };
  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };
});
