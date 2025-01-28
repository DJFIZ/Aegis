document.addEventListener('DOMContentLoaded', () => {
    const questions = [
      "Are You Over 50 Years Old?",
      "Are You a US Citizen?",
    ];
    
    let currentQuestion = 0;
    
    const questionElement = document.getElementById("question");
    const yesButton = document.getElementById("yes-btn");
    const noButton = document.getElementById("no-btn");
    const resultElement = document.getElementById("result");
    const eligibilityElement = document.getElementById("eligibility");
    const quizContainer = document.getElementById("quiz-container");
    const countdownTimer = document.getElementById("countdown-timer");
    const header = document.querySelector('header'); // Get the header element
    
    function showQuestion() {
      if (currentQuestion < questions.length) {
        questionElement.textContent = questions[currentQuestion];
      } else {
        quizContainer.classList.add("hidden");
        eligibilityElement.classList.remove("hidden");
    
        startCountdown(120);
    
        setTimeout(() => {
          eligibilityElement.classList.add("hidden");
          resultElement.classList.remove("hidden");
          
          // Change the header text after eligibility is confirmed
          header.querySelector('h1').textContent = "Congratulations!";
          header.querySelector('p').innerHTML = "Spots are extremely limited, so make a quick call today.<br>Call Now To Lock In Your Coverage Amount";
        }, 2000);
      }
    }
    
    function startCountdown(duration) {
      let timer = duration;
      countdownTimer.textContent = `Time Remaining: 2:00`; // Set initial timer value
    
      const interval = setInterval(() => {
        const minutes = Math.floor(timer / 60);
        const seconds = timer % 60;
        countdownTimer.textContent = `Time Remaining: ${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
        timer--;
    
        if (timer < 0) {
          clearInterval(interval);
          countdownTimer.textContent = "Time's up!";
        }
      }, 1000);
    }
    
    yesButton.addEventListener("click", () => {
      currentQuestion++;
      showQuestion();
    });
    
    noButton.addEventListener("click", () => {
      currentQuestion++;
      showQuestion();
    });
    
    showQuestion();
  });
  