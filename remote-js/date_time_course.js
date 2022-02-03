 const form = document.querySelector('.quiz-form');
 const form_check = document.querySelector('.form-check');
 
 
//  console.log(form.textContent);

const correctAnswers = ['C', 'B' ,'A' , 'C' , 'A'];
const label = document.querySelectorAll('label');
label.forEach( each =>{
   each.classList.add('label_class');
 
   
});

console.log(form.querySelectorAll('value'));


 form.addEventListener('submit', (e)=>{
   e.preventDefault();
   let score = 0;
   scrollTo(0,0);
   const result = document.querySelector('.result');
   const userAnswer = [form.q1.value ,form.q2.value, form.q3.value ,form.q4.value, form.q5.value ];

         for (i =0; i< userAnswer.length;  i++ ){
            if (userAnswer[i] === correctAnswers[i]){
               score += 20;
            
            }}
      let count = 0; 
      const timer = setInterval(()=>{
         result.querySelector('span').textContent = `${count} %`; 
        
         if (count === score ){
            clearInterval(timer);
         }
          else{ count++;}
        
       }, 20)
            
      
   

 });







 
 


























// const clockItems = document.querySelector('.clock_item');

// function tick (){
//    const   rightNow = new Date();
//    const h = rightNow.getHours();
//    const min = rightNow.getMinutes();
//    const s = rightNow.getSeconds();
//    const pm = document.querySelector('.gmt');

  

//    clockItems.querySelector('.sec').textContent= `${s}`;
//    clockItems.querySelector('.mins').textContent=`${min}`;
//    clockItems.querySelector('.hrs').textContent= `${h}`;
  
 
    
// }

// const timer = setInterval(tick, 1000);


