(function(){
	
	angular.module("quizapp").controller("resultsCtrl",ResultsController);
	
	ResultsController.$inject = ['quizMetrics'];
	
	function ResultsController(quizMetrics){
		
		var vm = this;
		vm.quizMetrics = quizMetrics;
		
	}
	
	
	
	
})();