angular.module('heute.controllers', [])
	.controller('VenueController', function ($http, $scope, $ionicPopover) {
		var template = '<ion-popover-view><ion-content><ul class="list"><li class="item">St.Gallen</li><li class="item">Winterthur</li><li class="item">Zürich</li><li class="item">Luzern</li><li class="item">Bern</li><li class="item">Biel</li><li class="item">Basel</li></ul></ion-content></ion-popover-view>';
		  $scope.popover = $ionicPopover.fromTemplate(template , {
		    scope: $scope,
			animation: 'popIn'
		  });
		   $scope.openPopover = function($event) {
		    $scope.popover.show($event);
		  };
		  $scope.closePopover = function() {
		    $scope.popover.hide();
		  };
		  
		$http.get('https://desolate-shore-2208.herokuapp.com/')
		.success(function(response, status) { 
			console.log("Success: " + status);
			var json = JSON.parse(response);
			$scope.venues = json.data;
		})
		.error(function(data, status) {
			console.log("Error: " + status);
			$scope.venues = offlineVenues;
		});
		
		$scope.doRefresh = function() {
			$http.get('https://desolate-shore-2208.herokuapp.com/')
			.success(function(response, status) { 
				console.log("Success: " + status);
				var json = JSON.parse(response);
				$scope.venues = json.data;
			})
			.error(function(data, status) { 
				console.log("Error: " + status);
				$scope.venues = offlineVenues;
			}).finally(function() {
		       // Stop the ion-refresher from spinning
		       $scope.$broadcast('scroll.refreshComplete');
     		});
		};

		$scope.openLink = function(url){
			window.open(url,'_blank','toolbarposition=top,closebuttoncaption=Zurück,enableViewportScale=yes,location=no');
		};
		var offlineVenues = [
			{
				name: 'PALACE', 
				color: 'stable', 
				title: 'Keine Veranstaltung', 
				link: 'http://www.palace.sg/',
				description: ''
			},
			{
				name: 'GRABENHALLE', 
				color: 'positive', 
				title: 'Keine Veranstaltung', 
				link: 'http://www.grabenhalle.ch/',
				description: ''
			},
			{
				name: 'KUGL', 
				color: 'calm', 
				title: 'Keine Veranstaltung', 
				link: 'http://www.kugl.ch/',
				description: ''
			},
			{
				name: 'TANKSTELL', 
				color: 'balanced', 
				title: 'Keine Veranstaltung', 
				link: 'http://tankstell.ch/',
				description: ''
			},
			{
				name: 'ØYA', 
				color: 'energized', 
				title: 'Keine Veranstaltung', 
				link: 'http://oya-bar.ch/',
				description: ''
			},
			{
				name: 'TREPPENHAUS', 
				color: 'assertive', 
				title: 'Keine Veranstaltung', 
				link: 'http://treppenhaus.ch/',
				description: ''
			},
			{
				name: 'MILITÄRKANTINE', 
				color: 'stable', 
				title: 'Keine Veranstaltung', 
				link: 'http://www.militaerkantine.ch/de/microsites/kultur/',
				description: ''
			},
			{
				name: 'TALHOF', 
				color: 'balanced', 
				title: 'Keine Veranstaltung', 
				link: 'http://talhof.sg/',
				description: ''
			},
			{
				name: 'FLON', 
				color: 'royal', 
				title: 'Keine Veranstaltung', 
				link: 'http://www.flon-sg.ch/',
				description: ''
			}
		];    
	});