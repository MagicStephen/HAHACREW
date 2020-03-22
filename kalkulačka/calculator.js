const buttonElement = document.getElementById('.vypis')

function getNumber(num){
        document.form.input.value = document.form.input.value+num;
    }

function clearScreen(){
    document.getElementById('input').value ="";
    document.getElementById('answer').value ="";
}

function getOperand(operand){
    document.form.input.value = document.form.input.value+operand; 
}

function backspace(){
    var input_var = document.form.input.value;
    document.form.input.value = input_var.substring(0,input_var.length-1);
}

function Compute(){
    var input_var = document.form.input.value;
        if(input_var){
            document.form.answer.value = eval(input_var)
        }
}

var i=0;
function brackets(){
    var input_var = document.getElementById('input');
    if(i==0){
        input_var.value += '(';
        i = 1;
    } else if(i==1){
            input_var.value += ')';
            i=0;
    }
}
const vypis = value => { 
    valuesOnDisplay = valuesOnDisplay.concat(value);
    display.innerHTML = valuesOnDisplay;
}




