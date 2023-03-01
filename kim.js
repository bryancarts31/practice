let first = parseFloat(document.getElementById('firstNum').value);
let second = parseFloat(document.getElementById('secondNum').value);
let result = document.getElementById('result');

let multiply = document.getElementById('multiply');
let divide = document.getElementById('divide');
let adds = document.getElementById('add');
let minus = document.getElementById('minus');


multiply.addEventListener('click', function(){
    let multiplY = 0;
    multiplY = first.value * second.value;
    console.log(multiplY);
})

divide.addEventListener('click',function(){

})

adds.addEventListener('click',function(){

})

minus.addEventListener('click',function(){

})