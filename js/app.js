/*-- constants --*/

const ANS = {
    1: 'yes. most definitely.',
    2: 'it is decidedly so.',
    3: 'without a doubt.',
    4: 'reply hazy. try again later.',
    5: 'umm. ask again later.',
    6: 'strong maybe.',
    7: 'better not to tell you.',
    8: 'my sources say no',
    9: 'outlook not so good.',
    10: 'very doubtful.',
    11: "i'm gonna go with no.",
    12: 'very doubtful.',
    13: 'do it for the plot.'
}

/*-- cached elements --*/

const intro = document.querySelector('.intro');
const disclaimer = document.getElementById('disclaimer');
const questionContainer = document.querySelector('.question-container');
const magic8 = document.getElementById('pic')
    
const question = document.getElementById('question')
const askedQuestion = document.getElementById('asked-question')
const answer = document.getElementById('answer')

const submit = document.getElementById('submit')
const reset = document.getElementById('reset')

/*-- event listeners --*/

submit.addEventListener('click', () => {
    // Make the image visible and add the shake animation class
    magic8.style.visibility = 'visible';
    magic8.classList.add('shake');
    handleSubmit();
    setTimeout(() => {
        magic8.classList.remove('shake');
        magic8.style.visibility = 'hidden';
    }, 700);
});

reset.addEventListener('click', resetMagic8);

/*-- functions --*/

init();

function init() {
    magic8.style.visibility = 'hidden'; 
    answer.style.visibility = 'hidden'; 
    askedQuestion.style.visibility = 'hidden';
};

function handleSubmit() {
    intro.style.visibility = 'hidden'; 
    questionContainer.style.visibility = 'hidden'; 
    submit.style.visibility = 'hidden';
    reset.style.visibility = 'hidden';

    // Get the user's question
    const userQuestion = question.value.trim();

     // Check if the question is not empty
     if (userQuestion) {
         // Generate a random answer
         const randomIndex = Math.floor(Math.random() * Object.keys(ANS).length) + 1;
         const randomAnswer = ANS[randomIndex];

         askedQuestion.style.visibility = 'visible';
         askedQuestion.innerText = `Your Question: "${userQuestion}"`;  
         answer.style.visibility = 'visible';
         answer.innerText = `Your Answer: ${randomAnswer}`;
         reset.style.visibility = 'visible';
         disclaimer.style.visibility = 'visible';
         
     } else {
         // Handle empty question case
         answer.innerText = 'Please ask a question.';
         answer.style.visibility = 'visible';
         reset.style.visibility = 'visible';
     }
};

function resetMagic8() {
    // Reset the visibility and content of elements
    intro.style.visibility = 'visible';
    questionContainer.style.visibility = 'visible';
    submit.style.visibility = 'visible';
    reset.style.visibility = 'visible';
    magic8.style.visibility = 'hidden';
    answer.style.visibility = 'hidden';
    askedQuestion.style.visibility = 'hidden';
    question.value = '';
    answer.innerText = '';
    askedQuestion.innerText = '';
}

// interperlate askedQuestion & answer
// font