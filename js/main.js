(function(){
    angular.module('app', [
        'ngRoute',
        'ngResource',
				'slick'
    ]);
		
		angular.module('app').constant('_START_REQUEST_', '_START_REQUEST_');
    angular.module('app').constant('_END_REQUEST_', '_END_REQUEST_');

		// create an empty controller for 404
    angular.module('app').controller('pageNotFoundController', [function() {
        // nothing here
    }]);
		
    angular.module('app').config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        // api parameter is more of a flag used to load data
        $routeProvider
            .when(
                '/',
                {templateUrl: 'views/tmpl.index.html', controller: 'AppController'}
            )
            .when(
                '/industrialni_podove',
                {templateUrl: 'views/tmpl.industrialni_podove.html', controller: 'industrialniPodoveController'}
            )
						.when(
                '/dekorativni_podove',
                {templateUrl: 'views/tmpl.dekorativni_podove.html', controller: 'dekorativniPodoveController'}
            )
						.when(
                '/mramor_i_mozaika',
                {templateUrl: 'views/tmpl.mramor_i_mozaika.html', controller: 'mramorController'}
            )
						.when(
                '/offer',
                {templateUrl: 'views/tmpl.offer.html'}
            )
						.when(
                '/contacts',
                {templateUrl: 'views/tmpl.contacts.html'}
            )
            .otherwise(
                {templateUrl: 'views/404.html', controller: 'pageNotFoundController'}
            );

    }]).config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }]);
		
		angular.module('app').controller('AppController', ['$scope', '$rootScope', '$location', '$route', '$routeParams', function($scope, $rootScope, $location, $route, $routeParams) {
			 $scope.homePage = $rootScope.homePage = $location.path() == "/" || $location.path() == "" ? true : false;
			 $scope.galleryItems = [
				 											{	src:'images/2_dekorativni_podove_0100_NoWay_22.JPG.thumb.jpg',
																href:'http://terraline-bg.com/gallery/index.php?twg_album=2_dekorativni_podove%2F0100_NoWay',
																title:'﻿Piece of Paradise Bar&Dinner Paradise Center'},
			 												{	src:'images/2_dekorativni_podove_0200_night_flight_18.JPG.small.jpg',
																href:'http://terraline-bg.com/gallery/index.php?twg_album=2_dekorativni_podove%2F0200_night_flight',
																title:'﻿Дизайнерско решение Клуб Night Flight'},
															{	src:'images/2_dekorativni_podove_0300_Kati_91.JPG.thumb.jpg',
																href:'http://terraline-bg.com/gallery/index.php?twg_album=2_dekorativni_podove%2F0300_Kati',
																title:'﻿Сердика Център магазин Catty'},
															{	src:'images/2_dekorativni_podove_0600_DBL_BLK_8.JPG.small.jpg',
																href:'http://terraline-bg.com/gallery/index.php?twg_album=2_dekorativni_podove%2F0600_DBL_BLK',
																title:'﻿Дизайнерско решение клуб Double Black'},
															{	src:'images/bedroom.JPG',
																href:'http://terraline-bg.com/gallery/index.php?twg_album=2_dekorativni_podove%2F1600_venecianski_spalnq_dom',
																title:'﻿Венециански стил частен дом'},
															{	src:'images/3_mramor_mozaika_200_kokalqne_img_2575.jpg.thumb.jpg',
																href:'http://terraline-bg.com/gallery/index.php?twg_album=3_mramor_mozaika%2F200_kokalqne',
																title:'﻿Стълби - мозайка'},
															{	src:'images/2_dekorativni_podove_3500_banq_home_IMG_7889.JPG.small.jpg',
																href:'http://terraline-bg.com/gallery/index.php?twg_album=2_dekorativni_podove%2F3500_banq_home&twg_foffset=0,24,0',
																title:'﻿Баня - декоративен под частен дом'},
															{	src:'images/2_dekorativni_podove_1700_venecianski_galeria_6.JPG.small.jpg',
																href:'http://terraline-bg.com/gallery/index.php?twg_album=2_dekorativni_podove%2F1700_venecianski_galeria',
																title:'﻿Венециански стил Галерия'}
			 											];
			$scope.$on('$routeChangeSuccess', function() {
				$scope.homePage = $rootScope.homePage = $location.path() == "/" || $location.path() == "" ? true : false;	
			});
    }]);				
})();