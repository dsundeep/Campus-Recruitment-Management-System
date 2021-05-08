var crms = angular.module('crms',['ngRoute','appRoutes']);


crms.controller('crmsCtrl',function ($scope,$http,$rootScope,$location,$window) {
	$http({
		method: "GET",
		url : '/isAdmin'
	}).then((response)=>{
		$scope.isAdmin = response.data.isAdmin;
	}),function(err){
		alert('something went wrong');
	}

	$rootScope.loc=$location.url();
	
	$scope.logout = function (){
		$http({
		method: 'GET',
		url   : '/logout'
	}).then(function(response){
		 $window.location.href="http://localhost:3000/login";
	},function(err){
		console.log('err');
	});
	}
});

crms.run(function($rootScope,$location){
	$rootScope.$on("$locationChangeStart",function(event,next,current){
	$rootScope.loc=$location.url();
	});
});