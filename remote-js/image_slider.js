// alert('welcome here');
const container = document.querySelector('#container');
const sign_up_btn = document.querySelector('#sign_up_btn');
const sign_in_btn = document.querySelector('#sign_in_btn');
const overlayright = document.querySelector( '.overlay-right');
const form = document.querySelectorAll('form');


/*the form add eventlistenr only has prevent default inside becaue we want the prevent the form from submiting whn clicked*/ 
form.forEach((each)=>{
  each.addEventListener('click',(e)=>{
    e.preventDefault();
  })
});
// bellow oos a function that applies a class to the css. the class cotntains the animation to be done

sign_up_btn.addEventListener('click',(e)=>{
  container.classList.add('active_right_panel');
  setTimeout(()=>{
    overlayright.style.opacity='0';
   
  },999);
});

sign_in_btn.addEventListener('click',(e)=>{
container.classList.remove('active_right_panel');
setTimeout(()=>{
  overlayright.style.opacity='1';
 
});
});