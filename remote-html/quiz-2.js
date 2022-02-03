const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
var label = form.querySelectorAll('label');
var submit =document.querySelector('.btn');


/* add a class to all the label  so  that they can be edited with a css*/

label.forEach((labe)=>{
    
    labe.classList.add('label_class')
    
});

const form_check = document.querySelectorAll('.form-check');
const correctAnswers = ['C','B','A','C', 'A','B','C','B','B', 'B'];



form.addEventListener('submit',  e=>{
    e.preventDefault();
    let score= 0;
    /* Remember not to express the items in the array as a string otherwise, it will be taken to mean something specific. also remember to embed it in the local scope of the event listener. */

    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value, form.q6.value, form.q7.value, form.q8.value, form.q9.value, form.q10.value];
    for( i=0; i < userAnswers.length; i++){

        if(userAnswers[i] === correctAnswers[i]){
             score+= 10;}

                            } 
     
    scrollTo(0,0);
    // show result on page;
    result.classList.remove('d-none');
    
    // setting the time interval 
    let count = 0;
   const scoreInterval = setInterval(()=>{
      result.querySelector('span').textContent =`${count}%`;
        if(count === score){
            clearInterval(scoreInterval)
                                        
           } 
        else{ count++;}
        
    },100);
});






