app.directive('ngComment', function(){
	return{
		scope : {
			comment : '=',
			//commenta : '@comment',
			//select : '&select'
		},
		restrict: 'E',
		templateUrl: 'partials/_comment.html'
	}
});

/*
app.directive('ngTest', function(){
	return {
		template : '<div>Salut <strong>{{username}} {{comments}} </strong> <div ng-transclude></div></div>',
		restrict : 'A',
		transclude: true,
		scope : {
			comments : '@username',
			username : '='
		}
	}
});
/*
app.directive('datepicker', function(){
	return{
		restrict : 'C',
		scope : {
			options : '=datepickerOptions'
		},
		link : function($scope, element, attrs){
			$(element).pickadate();
		}
	}
});


/*
app.directive('time', function(datefilter, $interval){
	return{
		restrict: 'E',
		template: '{{time}}',
		scope: {},
		link: function(scope, element, attrs){
			scope.time = dateFilter(new Date(),
				'hh:mm:ss');

			element.on('$destroy', function(){
				$interval.cancel(interval);
			});

		interval = $interval(function(){
			scope.time = dateFilter(new Date(),
				'hh:mm:ss');
			console.log('time changed');
		}, 1000)
		}
	}
});*/