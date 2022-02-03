


    /* A code for FORM 2.HTML
    A TO DO LIST FUNCTIONALITY CODE */

    const form = document.querySelector('.myform ');
    const ul = document.querySelector('.todos');
    const search = document.querySelector('.search > input');
    
        /* BELOW IS A FUNCTION THAT CONSIST OF A HTML TEMPLATE WHICH WHEN CALLED UPON, WILL BE INJECTED INTO THE HTML */
    function generateTemplate (todoinput){
        const html = ` <li  class="shadow list-group-item justify-content-between align-items-center"> ${todoinput.toLowerCase()}.
        <span >
            <img src="../images/trash-can-regular.svg" alt="trash can" class="delete">
        </span> 
        </li> ` 

     ul.innerHTML += html;
     
    }
//
/* EVENT LISTENER FOR THE ADDING EVENTS TO THE TO DO LIST */

    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        const todoinput = form.add.value.trim();
     
     if(todoinput.length > 1){
     generateTemplate(todoinput);
     }
     form.reset();

    });

        /* EVENT LISTENER FOR DELETE */
    ul.addEventListener('click', (e)=>{
       
        if(e.target.classList.contains('delete')){
            e.target.parentElement.parentElement.remove();
        }
    });

    
    // to clear the input field 
    const searchbar = document.querySelector('.search');
    searchbar.addEventListener('click', (e)=>{
        searchbar.reset();
    });

    

    
//KEY UP EVENTS FOR SEARCH
    search.addEventListener('keyup', ()=>{
        const inputText = search.value.toLowerCase().trim();
        
        filtered_list(inputText);

    });
    /* below is a fnction that stores  conditions for filtering out and comparing the search characters with the list item by finding a match for it.*/
    function filtered_list (inputText){
        const array_list = Array.from(ul.children)
       array_list.forEach( (eachlist )=>{
        if (!eachlist.textContent.toLowerCase().includes(inputText))
            {eachlist.classList.add('unmatch') }
        else{eachlist.classList.remove('unmatch');}

       });
        

    };