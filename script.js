const display = document.getElementById('display');
const zero = document.getElementById('zero');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');
const equal = document.getElementById('equal');
const clear = document.getElementById('clear');
const dot = document.getElementById('dot');
const sroot = document.getElementById('sroot');
const square = document.getElementById('square');
const cube = document.getElementById('cube');
const dValue = display.value;
function addNumber(num){
    display.value += num;
}
function clearDisplay(){
    display.value = '';
}
clear.addEventListener('click', clearDisplay);
zero.addEventListener('click', function(){
    addNumber('0');
});
one.addEventListener('click', function(){
    addNumber('1');
});
two.addEventListener('click', function(){
    addNumber('2');
});
three.addEventListener('click', function(){
    addNumber('3');
});
four.addEventListener('click', function(){
    addNumber('4');
});
five.addEventListener('click', function(){
    addNumber('5');
});
six.addEventListener('click', function(){
    addNumber('6');
});
seven.addEventListener('click', function(){
    addNumber('7');
});
eight.addEventListener('click', function(){
    addNumber('8');
});
nine.addEventListener('click', function(){
    addNumber('9');
});
function addOperator(operator){
    display.value += operator;
}
plus.addEventListener('click', function(){
    addOperator('+');
});
minus.addEventListener('click', function(){
    addOperator('-');
});
multiply.addEventListener('click', function(){
    addOperator('*');
});
divide.addEventListener('click', function(){
    addOperator('/');
});
function calculate(){
    display.value = eval(display.value);
}
equal.addEventListener('click', calculate);
function addDot(){
    display.value += '.';
}
dot.addEventListener('click', addDot);
function addSroot(){
    display.value = Math.sqrt(display.value);
}
sroot.addEventListener('click', addSroot);
function addSquare(){
    display.value = Math.pow(display.value, 2);
}
square.addEventListener('click', addSquare);
function addCube(){
    display.value = Math.pow(display.value, 3);
}
cube.addEventListener('click', addCube);