function submitQuiz() {
    var score = 0;
    var totalQuestions = 5; 
    var correctAnswers = {
        question1: "B", // Wheelchair ramps and accessible bathrooms
        question2: "C", // Be trained in disability awareness and assistance techniques
        question3: "C", // Visual alert systems
        question4: "B", // Ramps and barrier-free pathways
        question5: "C"  // To provide accessibility for the visually impaired
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