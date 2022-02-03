const ul = document.querySelector('ul');
const btn = document.querySelector('button');
btn.addEventListener('click', function (){ 
    // to add a list to  an  element of list items  when an event is clicked, you need to declare the list  
const list = document.createElement('li');
// then, you need to  declare what the inner text of the html would be.
list.innerText ='log in to Baihe';

// A list can be added to the html either from the top or at the bottom. 
// since a li element is a child of ul, you need to insert your list in a Ul element using append or prepend method. 
ul.prepend(list);

});

// To add an event listener to list items 
const list= document.querySelectorAll('li');
console.log(list);
// since a query sectorAll was used above, you need to use for each method to iterate through each items. 
list.forEach(function (eachItem){
eachItem.addEventListener('click', () =>{
// console.log(alert('you clicked an Item on the list!!!'));
eachItem.style.textDecoration='line-Through';

});
});
// to create an element using Javascript
const li = document.createElement('li');
// After creting it, it will be of no use until you asign a textcontent to it.
li.textContent = 'this is a new list item.';
// now append or prepend  it to the parent element which it belongs to. 
ul.prepend('li');