document.addEventListener('DOMContentLoaded', () => {
    // Ensure error dialog is hidden on startup
    hideError();
    displayQuestion();
    updateHearts();
});


// let score = 0;
// let attempts = 0;
// const questions = [
//     "Do you love me more than chocolate? (yes/no)",
//     "Would you choose me over Netflix? (yes/no)",
//     "Am I your favorite person? (yes/no)",
//     "Will you keep me forever? (yes/no)",
//     "Is this the best Valentine's gift ever? (yes/no)"
// ];

// const errorMessages = [
//     "You sure about that? ❤️",
//     "Hmm... I don't think so 😢",
//     "My heart says try again!",
//     "Are you really my true love?",
//     "Let's give it another shot!",
//     "I believe in us! Try again!"
// ];

// console.log("Total questions:", questions.length);
// console.log("Initial question:", questions[0]);
// const maxAttempts = 2;

// function updateHearts() {
//     const hearts = document.querySelectorAll('.heart-tracker');
//     hearts.forEach((heart, index) => {
//         heart.textContent = index < score ? "❤️" : "🤍";
//     });
// }

// function showError() {
//     const errorDialog = document.getElementById('error-dialog');
//     const errorMessage = document.getElementById('error-message');
//     errorMessage.textContent = errorMessages[Math.floor(Math.random() * errorMessages.length)];
//     errorDialog.classList.remove('hidden');
// }

// function hideError() {
//     document.getElementById('error-dialog').classList.add('hidden');
// }

// // function createHearts() {
// //     const heartsContainer = document.getElementById('hearts-container');
// //     for (let i = 0; i < 10; i++) {
// //         const heart = document.createElement('div');
// //         heart.className = 'heart';
// //         heart.innerHTML = '❤️'; // Red heart emoji
// //         heart.style.left = Math.random() * 100 + '%';
// //         heart.style.animationDelay = Math.random() * 2 + 's';
// //         heartsContainer.appendChild(heart);
// //     }
// //     setTimeout(() => heartsContainer.innerHTML = '', 3000);
// //}

// function checkAnswer() {
//     const answerInput = document.getElementById('answer');
//     const answer = answerInput.value.toLowerCase().trim();
//     const correctAnswers = ['yes', 'y', 'yeah', 'yup', 'absolutely'];
    
//     // Clear input field immediately after submission
//     answerInput.value = '';

//     // if (correctAnswers.includes(answer)) {
//     //     score++;
//     //     attempts = 0;
//     //     updateHearts();
//     //     createHearts();
        
//     //     if (score === questions.length) {
//     //         document.getElementById('question-container').style.display = 'none';
//     //         document.getElementById('final-message').style.display = 'block';
//     //     } else {
//     //         // Update to show current question based on score
//     //         document.getElementById('question').textContent = questions[score];
//     //     }
//     // }
//     if (correctAnswers.includes(answer)) {
//         const currentQuestionIndex = score;
//         score++;
//         console.log(`Score updated to: ${score}`); // Debug line
//         console.log(`Current question index: ${score-1}`); // Debug line
        
//         if (score <= questions.length) {
//             document.getElementById('question').textContent = questions[currentQuestionIndex];
//         }
//         if (score === questions.length) {
//             // Final message
//             document.getElementById('question-container').style.display = 'none';
//             document.getElementById('final-message').innerHTML = `
//             <h2>I love you loads! 💕</h2>
//             <p>You've filled all my hearts with joy!</p>
//             <div class="heart-animation">❤️❤️❤️❤️❤️</div>
//             `;
//             document.getElementById('final-message').style.display = 'block';
        
//             // Add extra celebration effects
//             setInterval(createHearts, 300);
//         } 
//         else {
//             console.log(`Next question should be: ${questions[score]}`); // Debug line
//             document.getElementById('question').textContent = questions[score];
//         }
//     }
//     else {
//         attempts++;
//         if (attempts >= maxAttempts) {
//             if (score > 0) score--;
//             attempts = 0;
//             updateHearts();
//         }
//         showError();
//     }
// }


// // Initialize first question
// document.getElementById('question').textContent = questions[0];


// 1. Declare constants first
const questions = [
    {
        question: "What's the approximate number of kisses we've had?",
        options: ["0", "45", "200"],
        correctAnswer: "200"
    },
    {
        question: "Where was our first date?",
        options: ["Coffee Shop", "Park", "Beach"],
        correctAnswer: "Beach"
    },
    {
        question: "What did we decide to call your dick ;3?",
        options: ["Soldier", "CR7", "Red Bull"],
        correctAnswer: "Soldier"
    },
    {
        question: "What's the foundation of our friendship?",
        options: ["Coffee", "Music", "Animals"],
        correctAnswer: "Coffee"
    },
    {
        question: "Most important night for us?",
        options: ["St Kilda beach", "Night of your sydney trip return", "First night together"],
        correctAnswer: "First night together"
    },
    {
        question: "Most fun we had?",
        options: ["When we cooked", "Black rock beach trip", "Movie date"],
        correctAnswer: "When we cooked"
    }
];

const errorMessages = [
    "MF are you for real???",
    "Do you have a death wish or somethin?",
    "ISTFG YOU ASSSHOLE!!!",
    "I'll whoop yo ass mf",
];

// 2. Declare variables
let score = 0;
let attempts = 0;
const maxAttempts = 2;

// 3. Define functions in order of dependency
function createHearts() {
    const heartsContainer = document.getElementById('hearts-container');
    heartsContainer.innerHTML = '';
    
    for (let i = 0; i < 10; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 2 + 's';
        heartsContainer.appendChild(heart);
    }
    
    setTimeout(() => heartsContainer.innerHTML = '', 3000);
}

function updateHearts() {
    const hearts = document.querySelectorAll('.heart-tracker');
    hearts.forEach((heart, index) => {
        heart.textContent = index < score ? "❤️" : "🤍";
    });
}

function showError() {
    const errorDialog = document.getElementById('error-dialog');
    errorDialog.style.display = 'flex'; // Force display to override CSS
    // const errorDialog = document.getElementById('error-dialog');
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = errorMessages[Math.floor(Math.random() * errorMessages.length)];
    errorDialog.classList.remove('hidden');
}

function hideError() {
    const errorDialog = document.getElementById('error-dialog');
    errorDialog.style.display = 'none'; // Force hide
    document.getElementById('error-dialog').classList.add('hidden');
}

function displayQuestion() {
    const currentQuestion = questions[score];
    document.getElementById('question').textContent = currentQuestion.question;
    
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    
    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = option;
        button.addEventListener('click', () => checkAnswer(option));
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedAnswer) {
    const currentQuestion = questions[score];
    
    if (selectedAnswer === currentQuestion.correctAnswer) {
        score++;
        attempts = 0;
        updateHearts();
        createHearts();
        
        if (score === questions.length) {
            document.getElementById('question-container').style.display = 'none';
            // document.getElementById('final-message').innerHTML = `
            //     <h2>Happy Valentine's Day, My Love! 💖</h2>
            //     <p>I love you loads!</p>
            //     <p>You've filled all my hearts with joy!</p>
            //     <div class="final-hearts">❤️❤️❤️❤️❤️</div>
            // `;
            document.getElementById('final-message').innerHTML = `
            <p>I love you soo friggin much, so much more than I thought I am capable of loving</p>
            <p>I know valentine's isnt a big deal but I feel so bad about missing out on this day, idk why</p>
            <p>So I thought I'd make it up to you by making this website thingy XD</p>
            <p>I know it's lacking alot, but I hope you like it babe <3 </p>
            <p>You fill up my heart with your stupid jokes and annoyance like no other</p>
            <p>And I didn't even know that I would feel such a big hollow inside of me when you're away :((</p>
            <p>And I'm so grateful for you, for being my best friend, my go to person for everything</p>
            <p>Sending you a big virtual hug and shit of kisses babe</p>
            <p>I love you so much, my love <3</p>
            `;
            // <div class="final-hearts">
            //     ❤️❤️❤️❤️❤️
            // </div>
            // `;
            document.getElementById('final-message').style.display = 'block';
            setInterval(createHearts, 300);
        } else {
            displayQuestion();
        }
    } else {
        attempts++;
        if (attempts >= maxAttempts) {
            if (score > 0) score--;
            attempts = 0;
            updateHearts();
            displayQuestion();
        }
        showError();
    }
}

// 4. Initialize the quiz
document.addEventListener('DOMContentLoaded', () => {
    displayQuestion();
    updateHearts();
});