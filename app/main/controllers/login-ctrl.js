'use strict';
angular.module('main')
.controller('LoginCtrl', 
	function ($rootScope, $scope, $state, $ionicPlatform, $ionicHistory, $ionicPopup, $cordovaKeyboard, LoginService, UserService, OAuth2Factory, $sessionStorage, $log, userRemembered) {
	$log.log('Hello from your Controller: LoginCtrl in module main:. This is your controller:', this);

	 $scope.user = {};

      $scope.$on('$ionicView.beforeEnter', function() {
        $ionicHistory.clearHistory();

        if (userRemembered) {
          	$scope.user.email = userRemembered.email;
			$scope.user.password = userRemembered.password;
			$scope.user.remember = true;
          	$scope.userRemembered = {
            	email: userRemembered.email,
            	password: userRemembered.password,
          	};
        }
        else
        {
        	$scope.user.remember = false;
        }
      });

      $scope.login = function(user) {
        if (ionic.Platform.isWebView()) {
          $cordovaKeyboard.close();
        }

 		//var loginOAuth =  OAuth2Factory.loginOAuth2($scope.user.email, $scope.user.password);
 		//$log.log(loginOAuth);
        
        OAuth2Factory.loginOAuth2(user.email, user.password)
          .then(function(response) {
          	
         	$rootScope.accessToken = response;
          	if ($scope.user.remember)
          	{
          		UserService.setUser(user.email, user.password);
          	}
          	else
          	{
          		UserService.removeUser();
          	}
           		
            // Redirects to main screen
            $ionicHistory.nextViewOptions({
              disableBack: true
            });

            $scope.$emit('change-user:login-status');

            $state.go('main.list');
           
          })
          .catch(function(response) {
          	$log.log("Login Error: " + response);
            /*
            if (response && response.cuentaTodoPago && response.cuentaTodoPago.validarCelular) {
              $state.go('^.second-factor-auth', {
                mailUsuario: response.cuentaTodoPago.mailUsario
              });
            }
            */
          });
      };
});
