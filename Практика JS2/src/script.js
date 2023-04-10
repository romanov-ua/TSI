const number1 = document.querySelector('#input1')
const result1 = document.querySelector('#result1')

const number2a = document.querySelector('#input2a')
const number2b = document.querySelector('#input2b')
const result2 = document.querySelector('#result2')

const number3 = document.querySelector('#input3')
const result3 = document.querySelector('#result3')

const number4 = document.querySelector('#input4')
const result4 = document.querySelector('#result4')

const number5 = document.querySelector('#input5')
const result5 = document.querySelector('#result5')
function getAge(a) {
   
    return Number.parseInt(a,10) + 1
}

number1.addEventListener("input", ()=> {
    result1.textContent = getAge(number1.value)
})


function getRemainder(a,b) {
    return Number.parseInt(a,10)% Number.parseInt(b,10)
}

number2b.addEventListener("input", ()=> {
    result2.textContent = getRemainder(number2a.value,number2b.value)
})

function faceControl(a) {
    if (a >= 18) return "Welcome"
    else return "Otkaz"
}

number3.addEventListener("input", ()=> {
    result3.textContent = faceControl(number3.value)
})

function getNextAge(a) {
    if (!a) return 0
    else return Number.parseInt(a,10) + 1
}

number4.addEventListener("input", ()=> {
    result4.textContent = getNextAge(number4.value)
})


function canRide(a) {
    if (a>=140) return true
    else return false
}

number5.addEventListener("input", ()=> {
    result5.textContent = canRide(number5.value)
})


/*console.log("1)" + getAge(11));
console.log("2)"+ getRemainder(10,3));
console.log("3)" + faceControl(17));
console.log("  "+faceControl(18));
console.log("4)" + getNextAge(1));
console.log("  "+getNextAge());
console.log("5)"+ canRide(139));

console.log("  "+canRide(140));
*/