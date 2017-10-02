function magic() {
	var answers = Array('Yes','No', 'Ask me later', 'I do not want to tell you', 'Good luck','Please try again','Cannot predict now','Better not tell you now');
	var result = document.getElementById('result');
	result.textContent = answers[getRandomInt(0, 7)];
}

function getRandomInt(min, max){
	return Math.floor(Math.random() * (max-min) + min); 

$('.answerButton').on('click', function(){
  var answer = answers[Math.floor(Math.random() * answers.length)];
  $('.answerContainer').hide();
  $('.answerContainer').text(answer).fadeIn(1000);
});
$(document).ready(magic);
}