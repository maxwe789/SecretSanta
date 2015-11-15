app.controller('preferencesController', ['$scope', '$routeParams', '$rootScope', 'preferences', 'options',
	function($scope, $routeParams, $rootScope, preferences, options) {
		var self = this;
		
		self.userEmail = $routeParams.email == null ? $rootScope.email : $routeParams.email;
		$rootScope.email = self.userEmail;
		
		self.availableVenues = ['Red Lion', 'Parson'];
		self.availableDates = [
			new date(moment(new Date(2015,0,1))),
			new date(moment(new Date(2015,0,2))),
			new date(moment(new Date(2015,0,5))),
			new date(moment(new Date(2015,0,6)))
		];

		self.venue = null;
		
		self.formatDate = function(date){
			return date.date.format('Do MMMM YYYY');
		};
		
		self.savePreferences = function(){
			var dates = [];
			
			for (var i = 0; i < self.availableDates.length; i++)
			{
				var date = self.availableDates[i];
				dates.push({ date: date.date.utc().format('YYYY-MM-DD'), available: date.available });
			}
			
			preferences.save({
				email: self.userEmail,
				dates: dates,
				venue: self.venue
			});
		};
	}
]);