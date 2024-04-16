function multiply() {
    let num1 , num2 , result
    num1 = document.querySelector('.num1').value 
    num2 = document.querySelector('.num2').value 
    result = parseInt(num1) * parseInt(num2)
    document.querySelector('.result').innerHTML = result
}

function divide() {
    let no1 , no2 , result2
    no1 = document.querySelector('.no1').value
    no2 = document.querySelector('.no2').value
    result2 = parseInt(no1) / parseInt(no2)
    document.querySelector('.result2').innerHTML = result2
}

function substract() {
    let a1 , b1 , result3
    a1 = document.querySelector('.a1').value
    b1 = document.querySelector('.b1').value
    result3 = parseInt(a1) - parseInt(b1)
    document.querySelector('.result3').innerHTML = result3
}

function add() {
   let x , y , result4
   x = document.querySelector('.x').value
   y = document.querySelector('.y').value
   result4 = parseInt(x) + parseInt(y)
   document.querySelector('.result4').innerHTML = result4
}

