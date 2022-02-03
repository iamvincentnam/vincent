const trash_can = document.querySelectorAll('li > span');
const  form =  document.querySelector('#todo_form');
const input = document.querySelector('#add_todo');
const ul = document.querySelector('.listdiv');

// To add class to all the span element rather than adding them individually in the html. so that you can delegate an action o them at once. 
trash_can.forEach((each)=>{
each.classList.add('trash');
});
//  Afunction declaration to for the html template
function generate_Template (todo){
const html = ` <li>${todo}
<span class="trash">
<img src="../images/trash-can-regular.svg" height="16px" alt="" class="delete">
</span>
</li> `;

ul.innerHTML += html;
}

// An event Listener for the Submit function 

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const todo = form.querySelector('#add_todo').value.trim();
        if(todo.length){
            generate_Template(todo);
        }else {
                alert('please write something!'.toUpperCase());
                           }
    // form.reset method clears the input text of the form after the submit button.. 
    form.reset();
});
    // Reset function which does the same thing as the reset button. 
input.addEventListener('click', (e)=>{
    form.reset(); 
});
// Trash can delete Function 
ul.addEventListener('click', (e)=>{
     
        if(e.target.classList.contains('delete') )
        {e.target.parentElement.parentElement.remove()}
       
        if(e.target.tagName === 'SPAN'){e.target.parentElement.remove()}
    
    });






