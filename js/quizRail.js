function submitQuiz() {
    var score = 0;
    var totalQuestions = 5; 
    var correctAnswers = {
        question1: "A",
        question2: "B",
        question3: "C",
        question4: "B",
        question5: "A"
    };

    for (var i = 1; i <= totalQuestions; i++) {
        var radios = document.getElementsByName('question' + i);
        for (var j = 0; j < radios.length; j++) {
            var radio = radios[j];
            if (radio.checked && radio.value === correctAnswers['question' + i]) {
                score++;
                break;
            }
        }
    }

    var resultText = "You scored " + score + " out of " + totalQuestions + ".";
    document.getElementById('quizResult').innerHTML = resultText;
}
