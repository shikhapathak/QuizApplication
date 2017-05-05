(function(){
	
	angular.module("quizapp").controller("quizCtrl",QuizController);
	
	QuizController.$inject = ['quizMetrics','DataService'];
	
	function QuizController(quizMetrics,DataService){
		
		var vm = this;
		vm.quizMetrics = quizMetrics;
		vm.DataService = DataService;
		vm.questionAnswered = questionAnswered;
		vm.serActiveQuestion = serActiveQuestion;
		vm.selecedAnswer = selecedAnswer;
		vm.finaliseAnswers = finaliseAnswers;
		vm.error = false;
		vm.finalise=false;
		vm.activeQuestion = 0;
		var numQuestionsAnswered = 0;
		
		
		function serActiveQuestion(index){
			if(index == undefined){
			
				//vm.activeQuestion++; //from this question will incremented form 1 2 3etc
				var breakOut = false;
				var quizLength = DataService.QuizQuestions.length - 1;
				while(! breakOut)
				{
					vm.activeQuestion = vm.activeQuestion < quizLength?++vm.activeQuestion:0;
					
					if(vm.activeQuestion === 0)
					{
						
						vm.error = true;
						
					}
					if(DataService.QuizQuestions[vm.activeQuestion].selected === null){
						breakOut = true;
						
					}
					
				}
			
			}else{
					
					vm.activeQuestion = index;
					
				}
		}
		function questionAnswered(){
			
			var quizLength = DataService.QuizQuestions.length;
			if(DataService.QuizQuestions[vm.activeQuestion].selected !== null)
			{
				numQuestionsAnswered++;
				if(numQuestionsAnswered >= quizLength){
					//finalizthequiz
					for(var i=0; i < quizLength; i++ )
					{
						if(DataService.QuizQuestions[i].selected === null)
						{
							serActiveQuestion(i);
							return;
						}
						
					}
					vm.error= false;
					vm.finalise=true;
					return;
					
				}
				
			}
			vm.serActiveQuestion();
			
		}
		
		function selecedAnswer(index){
			
			DataService.QuizQuestions[vm.activeQuestion].selected = index;
				
		}
		
		function finaliseAnswers(){
			
			vm.finalise=false;
			numQuestionsAnswered = 0;
			vm.activeQuestion = 0;
			quizMetrics.markQuiz();
			quizMetrics.changeState("quiz",false);
			quizMetrics.changeState("results",true);
		}
		
		
	}
	
	
})();