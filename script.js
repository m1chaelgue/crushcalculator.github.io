const questions = [
  {
    question: "Should you tell your crush you like them?",
    answers: [
      { text: "Start", nextQuestion: 1 },
    ],
  },
  {
    question: "Is your crush seeing someone?",
    answers: [
      { text: "Yes", nextQuestion: 50 },
      { text: "No", nextQuestion: 3 },
      { text: "I don't know", nextQuestion: 2 },
    ],
  },
  {
    question: "Find out",
    answers: [
      { text: "I found out", nextQuestion: 1 },
    ],
  },
  {
    question: "How do you know your crush?",
    answers: [
      { text: "Online", nextQuestion: 44 },
      { text: "Through in-person circumstances", nextQuestion: 4 },
    ],
  },
  {
    question: "How?",
    answers: [
      { text: "via friends", nextQuestion: 5 },
      { text: "through school", nextQuestion: 30 },
      { text: "through work", nextQuestion: 35 },
      { text: "at a third space (coffee shop, bar, airport, supermarket etc)", nextQuestion: 43 },
    ],
  },
  {
    question: "pick one",
    answers: [
      { text: "you're friends with your crush", nextQuestion: 6 },
      { text: "you met your crush through friends", nextQuestion: 21 },
    ],
  },
  {
    question: "are you and your crush in a friend group together?",
    answers: [
      { text: "yes", nextQuestion: 8 },
      { text: "no (you're friends 1 on 1)", nextQuestion: 7 },
    ],
  },
  {
    question: "You've reached the end! Here's your result:",
    conclusion: "tell them but be mentally prepared",
  },
  {
    question: "was your crush ever seeing someone else in your friend group?",
    answers: [
      { text: "yes", nextQuestion: 9 },
      { text: "no", nextQuestion: 18 },
    ],
  },
  {
    question: "define seeing",
    answers: [
      { text: "your crush was casually hooking up with someone else in the friend group", nextQuestion: 11 },
      { text: "your crush was dating someone else in the friend group", nextQuestion: 10 },
    ],
  },
  { // Question 10
    question: "how serious was it?",
    answers: [
      { text: "they went on one bad date and are not attracted to each other at all", nextQuestion: 11 },
      { text: "they dated for a couple of weeks, but it didn't ever get serious", nextQuestion: 12 },
      { text: "they dated very seriously (over 3 months, met each others parents, talked about future plans", nextQuestion: 12 },
    ],
  },
  {
    question: "You've reached the end! Here's your result:",
    conclusion: "yeaaah do it (so long as you are ok with the fact that getting together with your crush and/or potentially breaking up with them may/will change the dynamic of the friend group forever/breaking up the frend group)",
  },
  {
    question: "is it fucked up for you to ask out your friend's ex?",
  },
  {
    question: "do either of them still have feelings for each other?",
    answers: [
      { text: "yes/i don't know", nextQuestion: 14 },
      { text: "no", nextQuestion: 17 },
    ],
  },
  {
    question: "does the potential of getting together with your crush and/or potentially breaking up outweigh the risk of potentially changing the dynamic of the friend group forever/breaking up the friend group?",
    answers: [
      { text: "yes", nextQuestion: 15 },
      { text: "no", nextQuestion: 16 },
    ],
  },
  {
    question: "You've reached the end! Here's your result:",
    conclusion: "tell them",
  },
  {
    question: "You've reached the end! Here's your result:",
    conclusion: "don't tell them",
  },
  {
    question: "you sure?",
    answers: [
      { text: "yes", nextQuestion: 11 },
      { text: "no", nextQuestion: 14 },
    ],
  },
  {
    question: "does anyone else in your friend group like your crush?",
    answers: [
      { text: "yes", nextQuestion: 19 },
      { text: "no", nextQuestion: 14 },
    ],
  },
  {
    question: "is there any chance that your crush could like you back?",
    answers: [
      { text: "yes", nextQuestion: 14 },
      { text: "no", nextQuestion: 20 },
    ],
  },
  { // Question 20
    question: "You've reached the end! Here's your result:",
    conclusion: "i meaannnn i wouldn't to be honest",
  },
  {
    question: "pick one",
    answers: [
      { text: "you and your crush have a mutual friend", nextQuestion: 6 },
      { text: "your crush is related to your friend", nextQuestion: 22 },
    ],
  },
  {
    question: "oh my god",
    answers: [
      { text: "continue", nextQuestion: 23 },
    ],
  },
  {
    question: "are they your friends sibling?",
    answers: [
      { text: "yes", nextQuestion: 24 },
      { text: "no", nextQuestion: 28 },
    ],
  },
  {
    question: "oh my god",
    answers: [
      { text: "continue", nextQuestion: 25 },
    ],
  },
  {
    question: "do you think you like them just because they're your friends sibling?",
    answers: [
      { text: "yes", nextQuestion: 16 },
      { text: "no", nextQuestion: 26 },
    ],
  },
  {
    question: "does the prospect of being with your crush outweigh the fact that you may ruin/make akward (at least for a time) your relationship with your friend?",
    answers: [
      { text: "yes", nextQuestion: 27 },
      { text: "no", nextQuestion: 16 },
    ],
  },
  {
    question: "You've reached the end! Here's your result:",
    conclusion: "uuuhhhh tell them but it'll most likely be a shitshow",
  },
  {
    question: "parent?",
    answers: [
      { text: "yes", nextQuestion: 29 },
      { text: "no", nextQuestion: 29 },
    ],
  },
  {
    question: "You've reached the end! Here's your result:",
    conclusion: "i'm not getting involved in this shitshow close this website and go talk to a therapist",
  },
  { // Question 30
    question: "do you see your crush often?",
    answers: [
      { text: "yes (e.g. we're in the same classes)", nextQuestion: 31 },
      { text: "no (e.g. big campus, different classes)", nextQuestion: 15 },
    ],
  },
  {
    question: "do you actually like them or do you only have a crush on them because you're in forced proximity with them?",
    answers: [
      { text: "i think it's the forced proximity", nextQuestion: 32 },
      { text: "no i actualy like them", nextQuestion: 33 },
    ],
  },
  {
    question: "You've reached the end! Here's your result:",
    conclusion: "don't tell them because it's going to ruin the purpose they serve in your life right now (which is having something interesting to fantasize and crush about)",
  },
  {
    question: "you're saying that you would have a crush on this person even if you didn't have to see them everyday?",
    answers: [
      { text: "yes", nextQuestion: 34 },
      { text: "uuuuh okay maybe not", nextQuestion: 32 },
    ],
  },
  {
    question: "You've reached the end! Here's your result:",
    conclusion: "tell them (either the best relationship of your life will turn out of this and you'll be married or you'll make things incredibly akward and uncomfortable for yourself everyday when you're forced to see them)",
  },
  {
    question: "do you fear being fired?",
    answers: [
      { text: "yes", nextQuestion: 16 },
      { text: "no", nextQuestion: 36 },
    ],
  },
  {
    question: "you sure?",
    answers: [
      { text: "yeah i hate my job", nextQuestion: 37 },
      { text: "no i kinda need to pay rent", nextQuestion: 29 },
    ],
  },
  {
    question: "is your crush the same level as you in the work hierarchy?",
    answers: [
      { text: "yes", nextQuestion: 31 },
      { text: "no", nextQuestion: 38 },
    ],
  },
  {
    question: "pick one",
    answers: [
      { text: "they're your superior", nextQuestion: 39 },
      { text: "you're their superior", nextQuestion: 0 },
    ],
  },
  {
    question: "do you just like them because you have a weird thing for authority figures?",
    answers: [
      { text: "i do have a weird thing for authority figures but thats not the point", nextQuestion: 40 },
    ],
  },
  { //Question 40
    question: "You've reached the end! Here's your result:",
    conclusion: "if you do it there is a % chance you'll get a promotion and this will be like 50 shades of grey and a 99% chance you'll get fired immediately",
  },
  {
    question: "is there any chance at all that your crush could like you back or is this some kind of sick power play that will make your crush incredibly uncomfortable for the rest of their limited time working there before they inevitabely resign?",
    answers: [
      { text: "yes", nextQuestion: 42 },
      { text: "no", nextQuestion: 16 },
    ],
  },
  {
    question: "You've reached the end! Here's your result:",
    conclusion: "MAYBE tell them but HR will most likely hear about this",
  },
  {
    question: "You've reached the end! Here's your result:",
    conclusion: "tell them! You don't see them often at all so what's the worst that could happen?",
  },
  {
    question: "are they a celebrity?",
    answers: [
      { text: "yes", nextQuestion: 45 },
      { text: "no", nextQuestion: 46 },
    ],
  },
  {
    question: "You've reached the end! Here's your result:",
    conclusion: "you can tell them but they're never gonna know about this",
  },
  {
    question: "did you meet them on a dating app?",
    answers: [
      { text: "yes", nextQuestion: 47 },
      { text: "no", nextQuestion: 48 },
    ],
  },
  {
    question: "You've reached the end! Here's your result:",
    conclusion: "you should tell them but i assume they already know you like them (assuming you matched)",
  },
  {
    question: "have you ever met in real life?",
    answers: [
      { text: "yes", nextQuestion: 43 },
      { text: "no", nextQuestion: 49 },
    ],
  },
  {
    question: "You've reached the end! Here's your result:",
    conclusion: "you can tell them but there's a chance you won't be attracted to them in real life",
  },
  { // Question 50
    question: "define seeing",
    answers: [
      { text: "they're hooking up with someone", nextQuestion: 51 },
      { text: "they're casually datng someone", nextQuestion: 56 },
      { text: "they're in a relationship", nextQuestion: 16 },
    ],
  },
  {
    question: "same person or multiple?",
    answers: [
      { text: "yes", nextQuestion: 53 },
      { text: "multiple", nextQuestion: 52 },
    ],
  },
  {
    question: "You've reached the end! Here's your result:",
    conclusion: "tell them but it depends on what you want out of this (do you also want to hook up with them or do you want a long term relationship (which at this point probably won't happen)?)",
  },
  {
    question: "ok, so they're in a situationship. What's their role in the situationship?",
    answers: [
      { text: "they're the one who won't commit and is dragging the other person along", nextQuestion: 55 },
      { text: "they're being dragged along by the other person who won't commit", nextQuestion: 54 },
    ],
  },
  {
    question: "You've reached the end! Here's your result:",
    conclusion: "tell them but it's likely they'll be too blinded by the other person to reciprocate your feelings",
  },
  {
    question: "You've reached the end! Here's your result:",
    conclusion: "don't tell them unless you also want to be in a situationship",
  },
  {
    question: "is it actually casual?",
    answers: [
      { text: "no", nextQuestion: 16 },
      { text: "yes", nextQuestion: 51 },
    ],
  },
];

let currentQuestionIndex = 0;
let previousQuestionIndices = []; // Stack to keep track of previous question indices

const questionElement = document.getElementById("question");
const conclusionElement = document.getElementById("conclusion"); // New reference
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");
const inputD = document.getElementById("inputD");
const inputF = document.getElementById("inputF");
const inputG = document.getElementById("inputG");
const calculateButton = document.getElementById("calculateButton");
const backButton = document.getElementById("backButton"); // New reference

function updateQuestion() {
  const currentQuestion = questions[currentQuestionIndex];

  // Show the question
  questionElement.style.display = "block";
  questionElement.textContent = currentQuestion.question;

  // Check if this is the conclusion
  if (currentQuestion.conclusion) {
    conclusionElement.textContent = currentQuestion.conclusion; // Show the conclusion
    conclusionElement.style.display = "block"; // Make the conclusion visible
    button1.style.display = "none"; // Hide all buttons
    button2.style.display = "none";
    button3.style.display = "none";
    button4.style.display = "none";
    inputD.style.display = "none"; // Hide input fields
    inputF.style.display = "none";
    inputG.style.display = "none";
    calculateButton.style.display = "none";
    backButton.style.display = "inline-block"; // Show the back button
    return; // Exit the function
  } else {
    conclusionElement.style.display = "none"; // Hide the conclusion
  }

  const answers = currentQuestion.answers;

  // Update button 1
  if (answers && answers[0]) {
    button1.textContent = answers[0].text;
    button1.style.display = "inline-block"; // Show the button
  } else {
    button1.style.display = "none"; // Hide the button
  }

  // Update button 2
  if (answers && answers[1]) {
    button2.textContent = answers[1].text;
    button2.style.display = "inline-block"; // Show the button
  } else {
    button2.style.display = "none"; // Hide the button
  }

  // Update button 3
  if (answers && answers[2]) {
    button3.textContent = answers[2].text;
    button3.style.display = "inline-block"; // Show the button
  } else {
    button3.style.display = "none"; // Hide the button
  }

  // Update button 4
  if (answers && answers[3]) {
    button4.textContent = answers[3].text;
    button4.style.display = "inline-block"; // Show the button
  } else {
    button4.style.display = "none"; // Hide the button
  }

  // Show or hide input fields and calculate button based on the current question index
  if (currentQuestionIndex === 12) { // Change this to the desired question index
    questionElement.textContent += " Please enter the values for D, F, and G to proceed. D = total time (in months) that your friend and their ex dated. F = friendship level between you and your friend on a scale of 1 to 10. G = time (in months) since your crush and their ex broke up";
    button1.style.display = "none";
    button2.style.display = "none";
    button3.style.display = "none";
    button4.style.display = "none";
    inputD.style.display = "inline-block";
    inputF.style.display = "inline-block";
    inputG.style.display = "inline-block";
    calculateButton.style.display = "inline-block";
  } else {
    inputD.style.display = "none";
    inputF.style.display = "none";
    inputG.style.display = "none";
    calculateButton.style.display = "none";
  }

  // Show the back button if not on the first question
  if (currentQuestionIndex > 0) {
    backButton.style.display = "inline-block";
  } else {
    backButton.style.display = "none";
  }
}

calculateButton.addEventListener("click", () => {
  const D = parseFloat(inputD.value);
  const F = parseFloat(inputF.value);
  const G = parseFloat(inputG.value);

  if (isNaN(D) || isNaN(F) || isNaN(G)) {
    conclusionElement.textContent = "Please enter valid numbers for D, F, and G.";
    conclusionElement.style.display = "block";
    return;
  }

  const T = (D * F) / G;

  if (G < 2) {
    conclusionElement.textContent = "don't even think about it";
  } else if (T > G) {
    conclusionElement.textContent = "you're in the danger zone, wait it out";
  } else {
    conclusionElement.innerHTML = "MIGHT be ok, proceed to next step with extreme caution <button id='nextQuestionButton' class='next-question-button'>Next Question</button>";
    document.getElementById('nextQuestionButton').addEventListener('click', () => {
      previousQuestionIndices.push(currentQuestionIndex); // Store the current question index
      currentQuestionIndex = 13; // Set the next question index
      updateQuestion();
    });
  }

  conclusionElement.style.display = "block";
});

button1.addEventListener("click", () => {
  previousQuestionIndices.push(currentQuestionIndex); // Store the current question index
  currentQuestionIndex = questions[currentQuestionIndex].answers[0].nextQuestion;
  updateQuestion();
});

button2.addEventListener("click", () => {
  previousQuestionIndices.push(currentQuestionIndex); // Store the current question index
  currentQuestionIndex = questions[currentQuestionIndex].answers[1].nextQuestion;
  updateQuestion();
});

button3.addEventListener("click", () => {
  previousQuestionIndices.push(currentQuestionIndex); // Store the current question index
  currentQuestionIndex = questions[currentQuestionIndex].answers[2].nextQuestion;
  updateQuestion();
});

button4.addEventListener("click", () => {
  previousQuestionIndices.push(currentQuestionIndex); // Store the current question index
  currentQuestionIndex = questions[currentQuestionIndex].answers[3].nextQuestion;
  updateQuestion();
});

backButton.addEventListener("click", () => {
  if (previousQuestionIndices.length > 0) {
    currentQuestionIndex = previousQuestionIndices.pop(); // Go back to the previous question index
    updateQuestion();
  }
});

// Initialize the first question
updateQuestion();