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
  
  function showQuestion() {
    if (currentQuestion < questions.length) {
      questionElement.textContent = questions[currentQuestion];
    } else {
      // When all questions are answered, show "Confirming Eligibility..."
      quizContainer.classList.add("hidden");
      eligibilityElement.classList.remove("hidden");
  
      // Start the countdown immediately and hide "Confirming Eligibility..." after 2 seconds
      startCountdown(120); // Start the 2-minute countdown (120 seconds)
  
      setTimeout(() => {
        eligibilityElement.classList.add("hidden");
        resultElement.classList.remove("hidden");
      }, 2000); // Delay hiding eligibility message for 2 seconds (while countdown is visible)
    }
  }
  
  function startCountdown(duration) {
    let timer = duration;
    countdownTimer.textContent = `Time Remaining: 2:00`; // Ensure timer shows immediately
  
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
  