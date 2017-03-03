'use strict';
angular.module('main')
.factory('UserService',
function($q, $localForage, $log) {

	$log.log('Hello from your Service: UserService in module main');	
	
	var setUser = function(email, password) {
		return $localForage.setItem('user', {
			email: email,
			password: password
		});
	},
	getUser = function() {
		return $localForage.getItem('user');
	},
	removeUser = function() {
		return $localForage.removeItem('user');
	};

	return {
		setUser: setUser,
		getUser: getUser,
		removeUser: removeUser
	};
});

