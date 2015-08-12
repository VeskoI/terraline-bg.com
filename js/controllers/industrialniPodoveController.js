angular.module('app').controller('industrialniPodoveController', ['$scope', '$rootScope', '$location', '$route', '$routeParams', function($scope, $rootScope, $location, $route, $routeParams) {
				$scope.title = 'Индустриални подове';	
				$scope.podove = true;		
			 	$scope.items = {
												'анти-прахови защитни покрития и запечатки':[{
																			technology:'импрегнатори, епоксидни и полиуретанови покрития - нанасяне на 2 слоя с валяк',
																			thickness: '0,2 - 0,6',
																			resistance:'в зависимост от основата',
																			price:'6 - 12 лв/м2'
																			}],
												'закрити паркинги и гаражи':[{
																			technology:'тънкослойни епоксидни и полиуретанови системи - нанасяне с валяк / шпакловане',
																			thickness: '1 - 1,5',
																			resistance:'средна',
																			price:'19 - 27 лв/м2'
																			},{
																			technology:'дебелослойни епоксидни и полиуретанови системи с носещ саморазливен слой',
																			thickness: '2 - 3',
																			resistance:'висока',
																			price:'38 - 46 лв/м2'
																		}],
												'производства и складове':[{
																			technology:'тънкослойни епоксидни и полиуретанови системи - нанасяне с валяк / шпакловане',
																			thickness: '1 - 1,5',
																			resistance:'средна',
																			price:'19 - 27 лв/м2'
																			},{
																			technology:'дебелослойни епоксидни и полиуретанови системи с носещ саморазливен слой',
																			thickness: '2 - 3',
																			resistance:'висока',
																			price:'38 - 46 лв/м2'
																		},{
																			technology:'мортар - замазка от кварц и смола със запечатка, нанесена с валяк / шпакловане',
																			thickness: '6',
																			resistance:'висока',
																			price:'47 - 56 лв/м2'
																		},{
																			technology:'комбинирана система - саморазливно покритие / шпакловка върху замазка или насипен слой от кварц и смола',
																			thickness: '5 - 8',
																			resistance:'екстремна',
																			price:'65 - 82 лв/м2'
																		}],
												'хранително-вкусова промишленост':[{
																			technology:'тънкослойни епоксидни и полиуретанови системи - нанасяне с валяк / шпакловане',
																			thickness: '1 - 1,5',
																			resistance:'средна',
																			price:'24 - 32 лв/м2'
																			},{
																			technology:'дебелослойни епоксидни и полиуретанови системи с носещ саморазливен слой',
																			thickness: '2 - 3',
																			resistance:'висока',
																			price:'44 - 56 лв/м2'
																		}],
												'болници, лаборатории и фармация':[{
																			technology:'тънкослойни епоксидни и полиуретанови системи - нанасяне с валяк / шпакловане',
																			thickness: '1 - 1,5',
																			resistance:'средна',
																			price:'24 - 32 лв/м2'
																			},{
																			technology:'дебелослойни епоксидни и полиуретанови системи с носещ саморазливен слой',
																			thickness: '2 - 3',
																			resistance:'висока',
																			price:'44 - 56 лв/м2'
																		}],
												'антистатични покрития':[{
																			technology:'дебелослойни епоксидни и полиуретанови системи с носещ саморазливен слой',
																			thickness: '2 - 3',
																			resistance:'средна',
																			price:'46 - 62 лв/м2'
																		}],
												'тераси и покриви':[{
																			technology:'тънкослойни епоксидни и полиуретанови системи - нанасяне с валяк / шпакловане',
																			thickness: '1 - 1,5',
																			resistance:'ниска',
																			price:'26 - 38 лв/м2'
																			},{
																			technology:'дебелослойни епоксидни и полиуретанови системи с носещ саморазливен слой',
																			thickness: '2 - 3',
																			resistance:'средна',
																			price:'45 - 72 лв/м2'
																		}],
												'открити паркинги, терминали, бензиностанции и други':[{
																			technology:'тънкослойни епоксидни и полиуретанови системи - нанасяне с валяк / шпакловане',
																			thickness: '1 - 1,5',
																			resistance:'средна',
																			price:'22 - 35 лв/м2'
																			},{
																			technology:'дебелослойни епоксидни и полиуретанови системи с носещ саморазливен слой или шпакловка',
																			thickness: '2 - 3',
																			resistance:'висока',
																			price:'42 - 56 лв/м2'
																		},{
																			technology:'комбинирана система - саморазливно покритие / шпакловка върху замазка или насипен слой от кварц и смола',
																			thickness: '5 - 8',
																			resistance:'екстремна',
																			price:'74 - 92 лв/м2'
																		}],
												'покрития за влажни основи и основи без хидроизолация':[{
																			technology:'тънкослойни епоксидни и полиуретанови системи - нанасяне с валяк / шпакловане',
																			thickness: '1 - 1,5',
																			resistance:'средна',
																			price:'19 - 32 лв/м2'
																			},{
																			technology:'дебелослойни епоксидни и полиуретанови системи с носещ саморазливен слой',
																			thickness: '2 - 3',
																			resistance:'висока',
																			price:'35 - 54 лв/м2'
																		}],
												'изравняване и заглаждане на основи в индустрии преди полагане на епоксидни и полиуретанови покрития':[{
																			technology:'саморазливна циментова настилка',
																			thickness: '5',
																			resistance:'висока',
																			price:'29 - 33 лв/м2'
																		}],
												'високоякостни бързосъхнещи замазки':[{
																			technology:'готова замазка на циментова остнова с пластификатори и специални добавки',
																			thickness: '20',
																			resistance:'висока',
																			price:'32 - 38 лв/м2'
																		}]
											};
			 $scope.multipleItems = {
												'изравняване и заглаждане на основи в обществени зони и леки производства преди полагане на епоксидни и полиуретанови покрития':{
																			'саморазливна циментова настилка':[{
																									thickness: '3',
																									resistance:'ниска',
																									price:'13 - 16 лв/м2'
																									},
																									{
																									thickness: '5',
																									resistance:'средна',
																									price:'17 - 21 лв/м2'
																									}]
																			}
			 									};
				$scope.thickness = [
								{	key : 'Ниска', value: 'Лек пешеходен трафик в частни домове и слабо натоварени обществени зони'},
								{	key : 'Средна', value: 'Интензивен пешеходен трафик с устойчивост на мебели с колелца, както и умерен трафик на палетни колички и леки автомобили – в натоварени обществени зони и леки производства'},
								{	key : 'Висока', value: 'Усилен трафик на палетни колички и трафик на кари, както и интензивен трафик на леки автомобили – в складове, производства, свръхнатоварени обществени зони и други'},
								{	key : 'Екстремна', value: 'Трафик на тежкотоварни автомобили и подемна техника – рампи, тежки производства и други'}
											
					];
			
    }]);