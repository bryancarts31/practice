let result = 0;
let inputResult = document.getElementById('result')


function add(){
    let numbers = parseInt(document.getElementById("number").value);
    result = numbers+= result;
    console.log(result);
    inputResult.innerHTML = `Result: ${result}` 
}

function deleted(){
    let numbers = parseInt(document.getElementById("number").value);
    if(result > 0){
     result = result -= numbers;
     console.log(result)
    }else if(result == 0){
        numbers = 0;
    }

    inputResult.innerHTML = `Result: ${result}` 
}
