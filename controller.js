(function() {
  var app = angular.module('myApp', []);

  app.controller('AppCtrl', ['$scope', '$http', function($scope, $http){
      console.log("Hello World from controller");
    
    var refresh = function(){
    	$http.get('/contactlist').success(function(response){
         console.log("I got the data I requested");
         $scope.contactlist = response;
         $scope.contact = "";
      });
    };

    refresh();      

      $scope.addContact = function(){
      	console.log($scope.contact);

      	$http.post('/contactlist', $scope.contact).success(function(response){
           console.log(response);
           refresh();
      	});
      };

      $scope.remove = function(id){
          console.log(id);
          $http.delete('/contactlist/' + id).success(function(response){
              refresh();
          });
      };

       $scope.edit = function(id){
          console.log(id);
          $http.get('/contactlist/' + id).success(function(response){
              $scope.contact = response;
          });
      };

      $scope.update = function(){
          console.log($scope.contact._id);
          $http.put('/contactlist/' + $scope.contact._id, $scope.contact).success(function(response){
              refresh();
          });
      };


      $scope.deselect = function(){
          $scope.contact = "";
      };



      /*person1 = {
      	name  : 'ajay',
      	email : 'ajay@gmail.com',
      	number: '(111) 111 - 1111',
      };

      person2 = {
      	name  : 'vasu',
      	email : 'vasu@gmail.com',
      	number: '(222) 222 - 2222',
      };

      person3 = {
      	name  : 'ravi',
      	email : 'ravi@gmail.com',
      	number: '(333) 333 - 3333',
      };

      var contactlist = [person1, person2, person3];
      $scope.contactlist = contactlist;*/

  }]); 
})()