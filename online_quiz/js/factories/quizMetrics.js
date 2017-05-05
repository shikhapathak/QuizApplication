(function(){
	
	angular.module("quizapp").factory("quizMetrics",QuizMetrics);
	
	QuizMetrics.$inject = ['DataService'];
	
	function QuizMetrics(DataService){
		
		var quizObj ={
			
			quizActive: false,
			resultsActive : false,
			changeState: changeState,
			correctAnswers : [],
			markQuiz : markQuiz,
			numCorrect : 0
			
		};
		return quizObj;
		function changeState(metric,state){
			
			
			if(metric === "quiz"){
			quizObj.quizActive = state;
			}else if(metric == "results"){
					quizObj.quizActive = state;
				}else {
					
					return false;
					
				}
		}
		
		function markQuiz(){
			
			quizObj.correctAnswers = DataService.correctAnswers;
			//errors
			for(var i=0; i < DataService.QuizQuestions.length; i++){
				
				if(DataService.QuizQuestions[i].selected === DataService.correctAnswers[i]){
					
					DataService.QuizQuestions[i].correct = true;
					quizObj.numCorrect++;
					
				}else{
					
					DataService.QuizQuestions[i].correct = false;
					
				}
			}
			
		}
		
	}
	
	
})();