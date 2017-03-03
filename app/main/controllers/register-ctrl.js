'use strict';
angular.module('main')
.controller('RegisterCtrl', function ($rootScope, $scope, $state, $ionicPlatform, $ionicHistory, $ionicPopup, ionicDatePicker, $cordovaKeyboard, $log) {

  	$log.log('Hello from your Controller: RegisterCtrl in module main:. This is your controller:', this);

  $scope.user = {
    gender: 'M'
  };

	var ipObj1 = {
      callback: function (val) {  //Mandatory
        console.log('Return value from the datepicker popup is : ' + val, new Date(val));
      },
      inputDate: new Date(),      //Optional
      mondayFirst: false,          //Optional
      weeksList: ["d", "l", "m", "m", "j", "v", "s"],
      monthsList: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
      disableWeekdays: [0],       //Optional
      closeOnSelect: true,       //Optional
      templateType: 'popup'       //Optional
    };


	$scope.openDatePicker = function(){
      ionicDatePicker.openDatePicker(ipObj1);
    };

});
