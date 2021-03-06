angular.module('app').controller('dekorativniPodoveController', ['$scope', '$rootScope', '$location', '$route', '$routeParams', function ($scope, $rootScope, $location, $route, $routeParams) {
    $scope.title = 'Декоративни подове';
    $scope.podove = true;
    $scope.items = {
        'визия на шлайфан бетон': [{
            technology: 'саморазливна циментова настилка с два слоя защитна безцветна запечатка - импрегнатор, епоксидно или полиуретаново покритие',
            thickness: '5',
            resistance: 'средна',
            price: '32 - 46 лв/м2'
        }, {
            technology: 'саморазливна циментова настилка с два слоя защитна безцветна запечатка - импрегнатор, епоксидно или полиуретаново покритие',
            thickness: '5',
            resistance: 'висока',
            price: '46 - 58  лв/м2'
        }],
        'едноцветни хомогенни покрития': [{
            technology: 'тънкослойни епоксидни и полиуретанови системи - нанасяне с валяк / шпакловане',
            thickness: '1 - 1,5',
            resistance: 'средна',
            price: '19 - 27 лв/м2'
        }, {
            technology: 'дебелослойни епоксидни и полиуретанови системи с носещ саморазливен слой',
            thickness: '2 - 3',
            resistance: 'висока',
            price: '38 - 46 лв/м2'
        }],
        'цветни кварцови настилки': [{
            technology: 'тънкослойни епоксидни и полиуретанови системи с посипка от цветен кварц - нанасяне с валяк / шпакловане',
            thickness: '1 - 1,5',
            resistance: 'средна',
            price: '32 - 46 лв/м2'
        }, {
            technology: 'мортар - замазка от цветен кварц и смола със запечатка нанесена с валяк / шпакловане',
            thickness: '5',
            resistance: 'висока',
            price: '53 - 67 лв/м2'
        }],
        'мозаечни подове': [{
            technology: 'тънкослойни епоксидни и полиуретанови системи с посипка от цветни чипсове - нанасяне с валяк / шпакловане',
            thickness: '1 - 1,5',
            resistance: 'средна',
            price: '39 - 45 лв/м2'
        }, {
            technology: 'дебелослойни епоксидни и полиуретанови системи с носещ саморазливен слой и пълнеж от цветни чипсове или декоративен кварц',
            thickness: '2 - 3',
            resistance: 'висока',
            price: '47 - 74 лв/м2'
        }],
        'венециански стил': [{
            technology: 'дебелослойни епоксидни и полиуретанови системи',
            thickness: '2 - 3',
            resistance: 'средна до висока',
            price: '34 - 46 лв/м2'
        }],
        'специализирани настилки за бани и мокри помещения': [{
            technology: 'тънскослойни епоксидни и полиуретанови системи - нанасяне с валяк / шпакловане',
            thickness: '0,5 - 1,5',
            resistance: 'средна',
            price: '34 - 47 лв/м2'
        }, {
            technology: 'дебелослойни епоксидни и полиуретанови системи',
            thickness: '2 - 6',
            resistance: 'средна',
            price: '54 - 72 лв/м2'
        }]
    };
    $scope.oneItem = [
        {key: 'бутикови и дизайнерски решения', value: 'циментови, епоксидни и полиуретанови системи'}];
    $scope.thickness = [
        {key: 'Ниска', value: 'Лек пешеходен трафик в частни домове и слабо натоварени обществени зони'},
        {
            key: 'Средна',
            value: 'Интензивен пешеходен трафик с устойчивост на мебели с колелца – в натоварени обществени зони'
        },
        {key: 'Висока', value: 'Усилен пешеходен трафик и трафик на палетни колички в свръхнатоварени обществени зони'}
    ];
}]);