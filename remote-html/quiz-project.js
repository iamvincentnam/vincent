
const correctAnswers= ['A','A','A','A','A'];
const form = document.querySelector('.quiz-form');
const inputs = document.querySelectorAll('.form-check > input');
var  result = document.querySelector('.result');
const btn = document.querySelector('.btn');


form.addEventListener('submit', function (e){
e.preventDefault();

var  score = 0;
const userAnswers =[form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value];



// check answers
userAnswers.forEach((answer, index)=>{
if(answer== correctAnswers[index] ){
    
score += 20;}


});
// show result on page
scrollTo(0,0);

result.classList.remove('d-none');
let scoreOutput =0;
const timer = setInterval(()=>{
 result.querySelector('span').textContent =`${scoreOutput}`;

//    condition for timeout interval
if(scoreOutput === score){
    // else statement when the interval count reaches the value of the score
clearInterval(timer);
    } 
    else{scoreOutput++;}  
    },100)
// time interval couunt


});


const timer = setInterval(()=>{
    console.log('we gonna grab them by the pussy');
 output++;  
 if(output == 12){
    clearInterval(timer);
} 
}, 700);
