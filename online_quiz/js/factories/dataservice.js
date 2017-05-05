(function(){
	
	angular.module("quizapp").factory("DataService",DataFactory);
	
	function DataFactory(){
		
		var datObj = {
			
			quizToipcs : quizToipcs, //same as list controller
			QuizQuestions : QuizQuestions,
			correctAnswers : correctAnswers
			
		};
		return datObj;
		
	}
	
	var correctAnswers = [1,3,1,2,3,1];
	
	
	
	var QuizQuestions = [
	{
		type: "text",
		text : "The first mechanical computer designed by Charles Babbage was called ?",
		possibilities:[
			{
				answer : "Abacus"
			},
			{
				answer : "Analytical Engine"
			},
			{
				answer : "Calculator"
			},
			{
				answer : "Processor"
			}
		
		],
		selected : null,
		correct : null	
	},
	{
		type: "text",
		text : "C is ?",
		possibilities:[
			{
				answer : "A machine language"
			},
			{
				answer : "A third generation high level language"
			},
			{
				answer : "An assembly language"
			},
			{
				answer : "All of the above"
			}
		
		],
		selected : null,
		correct : null	
	},
	{
		type: "text",
		text : "Which of the following is an example of non volatile memory?",
		possibilities:[
			{
				answer : "VLSI"
			},
			{
				answer : "ROM"
			},
			{
				answer : "RAM"
			},
			{
				answer : "LSI"
			}
		
		],
		selected : null,
		correct : null	
	},
	{
		type: "text",
		text : " CD–ROM is a kind of?",
		possibilities:[
			{
				answer : "Optical disk"
			},
			{
				answer : "Magneto–Optical disk"
			},
			{
				answer : "Magnetic disk"
			},
			{
				answer : "None of these"
			}
		
		],
		selected : null,
		correct : null	
	},
	
	{
		
		type:"image",
		text:"Which image is not related to computer system?",
		possibilities:[
		{
			answer: "https://4.imimg.com/data4/OE/FX/MY-2272871/cpu-250x250.jpg"
		},
		
		{
			answer: "http://www.build-your-own-computer.net/image-files/input-devices-01.jpg"
			
		},
		{
			answer: "http://www.staples-3p.com/s7/is/image/Staples/s0485180_sc7?$splssku$"
		},
		
		{
			answer: "https://n2.sdlcdn.com/imgs/e/g/d/DLink2750U-9ff6a.jpg"
		},
		
		
		],
		selected : null,
		correct : null
		
	},
	
	{
		type: "text",
		text : " A device that converts digital signals to analog signals is ?",
		possibilities:[
			{
				answer : "A modem"
			},
			{
				answer : "A packet"
			},
			{
				answer : "A block"
			},
			{
				answer : "Both (A) and (B)"
			}
		
		],
		selected : null,
		correct : null	
	},
	];
var quizToipcs = [
	{
		type:"English",
		image_url:"https://store-images.s-microsoft.com/image/apps.44816.9007199266546260.915a3f34-dd54-4257-a4f6-d1a77530b3c3.425789e1-ce7d-4a01-93a0-050961586180?w=180&h=180&q=60",
		size:"10",
		average:"7",
		description:"There is 10 simple english questions from which you have to attempted all and atleat 7 must be correct."

	},
	
	{
		image_url:"http://www.peoplemaps.com/main/wp-content/uploads/2013/11/aptitude-test.png",
		type:"Apptitude",
		size:"10",
		average:"7",
		description:"There is 10 simple maths questions from which you have to attempted all and atleat 7 must be correct."
	},
	
	{
		image_url:"http://pics.minglebox.com/05bc21f91418364784560.13d7f96d.m_online-exam+11.jpg",
		type:"Technical",
		size:"10",
		average:"7",
		description:"There is 10 computher science related questions from which you have to attempted all and atleat 7 must be correct."
	}
	
	
	
	];
		
})();