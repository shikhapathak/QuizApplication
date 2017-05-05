(function(){
	
	angular.module("quizapp").controller("listCtrl", ListController);
	ListController.$inject = ['quizMetrics','DataService']; //strat of quiz
	
	function ListController(quizMetrics,DataService){
		var vm  = this;
		//this.dummyData="Hello World";  //dummyData is attached with $scope
		//not to use this operator
		
		
		vm.quizMetrics=quizMetrics;
		vm.data = DataService.quizToipcs;
		vm.activeSection={}; //creating an object
		vm.activateQuiz= activateQuiz;
		vm.search="";
		//vm.quizActive=false;
		vm.changeActiveSection= changeActiveSection;
		
		function changeActiveSection(index){
			
			vm.activeSection = index;
			}
			
		function activateQuiz(){
			
			//vm.quizActive = true;
			quizMetrics.changeState("quiz",true);
			
		}
		
	}
	
	
})();