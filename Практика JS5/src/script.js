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
const result6 = document.querySelector('#result6')
const result7 = document.querySelector('#result7')
const result8a = document.querySelector('#result8a')
const result8b = document.querySelector('#result8b')
var currSelect = myForm.select;

const etherium = {
    usd: 2811,  
    rub: 200612,  
    eur: 2666  
}
function getRate(a) {
   
    return 2899
}
function changeOption(){
     
    var selection = document.getElementById("selection");
    var selectedOption = currSelect.options[currSelect.selectedIndex];
    selection.textContent = "Cтоимость: " + etherium[selectedOption.text];
}
currSelect.addEventListener("change", changeOption);




function getRemainder(a) {
    const values = Object.values(a)
    return values
}


result2.textContent = getRemainder({lang: "JavaScript", course:"third"})

const adress = {
    street: 'Lenina',   
    building: 1,   
    flat: 40    
    }
function getInfo(a) {
    const entries = Object.entries(adress)
    return entries
}
result3.textContent = getInfo(adress)

const adress2 = {
    street: 'Petrovskogo',   
    building: 21,   
    flat: 50   
    }
function joinArrays(a,b) {
    const newObject = {...a, ...b}
    console.log(Object.entries(newObject))
    return newObject
}

result4.textContent = joinArrays(adress,adress2)

class User {
    constructor(name, email) {     
        this.name = name        
        this.email = email        
    }        
    getName() {        
        return this.name        
    }        
    getEmail() {        
        return this.email        
        }        
    }
function createUser(name, email) {
   const user = new User(name,email);
   console.log(Object.entries(user))
   return user
   
}

result5.textContent = createUser("Mike", "mjj@mail.ru")
class User_task6 {
    constructor(Id, Type) {     
        this.id = Id        
        this.type = Type        
    }        
    getId() {        
        return this.id        
    }        
    isAdmin() {   
        if (this.type="Admin")     
            return true 
        return false        
        }        
    }
const user1 = new User_task6(100, "Admin")
result6.textContent = user1.getId() +" "+ user1.isAdmin()

class AreaOfCircle {
    constructor(Radius) {     
        this.radius = Radius             
    }        
    get radius() {     
        return this._radius
        }        
    set radius(value) {            
        this._radius = value * value *3.14      
        }
    }

    const area = new AreaOfCircle(2)
    console.log(area.radius) 
    result7.textContent = area.radius
    area.radius = 10
    console.log(area.radius) 
   
    class Course {
        constructor(Grade) {        
            this.grade = Grade             
        }        

        getGrade() {        
            if (this.grade > 3)        
                return true
        }        
        getCertificate() {        
            if (this.getGrade())     
                return "Выдать сертификат"
            else 
                return "Курс не пройден"
        }        
        }            
    const course1 = new Course(3)        
    const course2 = new Course(5)
    console.log(course1.getCertificate())
    console.log(course2.getCertificate())
    result8a.textContent = course1.grade +" "+ course1.getCertificate() // Выдать сертификат
    result8b.textContent = course2.grade +" "+  course2.getCertificate() // Курс не пройден