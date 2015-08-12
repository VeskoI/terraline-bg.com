angular.module('app').controller('mramorController', ['$scope', '$rootScope', '$location', '$route', '$routeParams', function($scope, $rootScope, $location, $route, $routeParams) {
				$scope.title = 'Мрамор и мозайка';	
				$scope.podove = false;
			 	$scope.oneItem = [
								{	key : 'диамантено шлайфане на мрамор и мозайка', value: '', strong: 'bold'},
								{	key : '- от 16 до 50м2', value: '12 лв/м2'},
								{	key : '- от 51 до 200м2', value: '10 лв/м2'},
								{	key : '- над 200м2', value: '8 лв/м2'},
								{	key : 'запечатване с полираща емулсия (най-често в два слоя)', value: '', strong: 'bold'},
								{	key : '- от 16 до 50м2', value: '2.50 лв/м2 /1 слой/'},
								{	key : '- от 51 до 200м2', value: '2 лв/м2 /1 слой/'},
								{	key : '- над 200м2', value: '1.50 лв/м2 /1 слой/'}
								];
    }]);