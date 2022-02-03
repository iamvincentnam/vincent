

// function Users(name, price, type, quantity){
//     this.name = name;
//     this.qty_kg  =quantity;
//     this.price = price;
//     this.type = type;
   
// }

// var user1 = new Users ('Rice', 100, 'cereals', 3);
// var user2 = new Users ('beans', 120, 'pulse', 2);
// var user3 = new Users ('Yam', 250, 'root-crops', 4);
// var crops = new Array(user1, user2, user3);

// let mapArray = crops.map(function(crop){
//    return crop.price * crop.qty_kg;
   
// });

//     var data = [
//         {names: 'john', age : 24},
//         {names: 'Rebbecca', age : 16},
//         {names: 'father', age : 49},
//         {names: 'grand-father', age : 80},
//         {names: 'new-born', age : 2},
//         {names: 'second-son', age : 6},
  
//     ];
//     var sort_array =  data.sort(function(a,b){
//       return b.age-a.age;
//     });
//     age_array =[];
//     sort_array = sort_array.forEach(function(age){
//         age_array.push(age.age);
//     });

//     var week_words = [ 'b', 'g', 's', 'c'  ];

//     week_words = week_words.sort()
//     console.log(week_words)
    
//     var lastday = week_words[week_words.length -1 ];
//     console.log(lastday);

// class Hostingplans {
// constructor (name, price, space, transfer, pages){
//             this.name = name;
//             this.price = price;
//             this.space = space;
//             this.transfer = transfer;
//             this.pages = pages;
            
//         }
//         calcAnnual(){
//             
//         }   



//}


// form.addEventListener('submit', (e)=>{
//     e.preventDefault();
//     const input = form.weather.value.trim().toLowerCase()
//     weatherfunc (input)
//   form.reset()
// });

// function weatherfunc (input){
//     var weather = input;
// switch(weather){
//     case'cloudy':
//     alert('wear light cloths, stay at home');
//     break;
//     case'sunny':
//     alert('carry sunglasses and bottle of water');
//    break;
//     case'rainy':
//     alert('carry umbrella, rain-boots');
//     break;
//     default :
//     alert('today will be a blessing');
    

// }
// }

function copyarray_manipulate(myarray){
let output = [];
    for(i =0; i< myarray.length; i++){
     output.push(myarray[i] *2)  
    }
    return output;
}

var myarray = [2,3,5,10];
let result = copyarray_manipulate(myarray);
console.log(result);

function array_manipulate(myarray, instruction){
let output = [];
    for(i =0; i< myarray.length; i++){
     output.push(instruction( myarray[i]))  
    }
    return output;
}

function multiplyby2 (input){
    return input *2
}

