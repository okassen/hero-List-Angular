var myAnimeApp = angular.module('myAnimeApp', ['ngRoute', 'ngAnimate']);

myAnimeApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){

  $locationProvider.html5Mode(true);

  $routeProvider
    .when('/home', {
      templateUrl: 'views/home.html',
      controller: 'AnimeController'
    })
    .when('/contact', {
      templateUrl: 'views/contact.html',
      controller: 'ContactController'
    })
    .when('/contact-success', {
      templateUrl: 'views/contact-success.html',
      controller: 'ContactController'
    })
    .when('/directory', {
      templateUrl: 'views/directory.html',
      controller: 'AnimeController'
    }).otherwise({
      redirectTo: '/home'
    });

}]);

myAnimeApp.directive('randomAnime', [function(){

  return {
    restrict: 'E',
    scope: {
        animes: '=',
        title: '='
    },
    templateUrl: 'views/random.html',
    transclude: true,
    replace: true,
    controller: function($scope){
      $scope.random = Math.floor(Math.random() * 11);
    }
  };

}]);

myAnimeApp.controller('AnimeController', ['$scope', '$http', function($scope, $http){

  $scope.removeAnime = function(anime){
    var removedAnime = $scope.animes.indexOf(anime);
    $scope.animes.splice(removedAnime, 1);
  };

  $scope.addAnime = function(){
    $scope.animes.push({
      name: $scope.newanime.name,
      genre: $scope.newanime.genre,
      available: true
    });

    $scope.newanime.name = "";
    $scope.newanime.genre = "";

  };

  $scope.removeAll = function(){
    $scope.animes =[];
  }

  $http.get('data/animes.json').success(function(data){

    $scope.animes = data;

  });

}]);

myAnimeApp.controller('ContactController', ['$scope', '$location', function($scope, $location){

  $scope.sendMessage = function(){
    $location.path('/contact-success');
  };

}]);
