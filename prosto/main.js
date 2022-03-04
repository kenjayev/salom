const person1 ={
    firstName:"Azizbek",
    lastName :"Kenjayev"
}
const person2 ={
    firstName :"Samandar",
    lastName : "Shoropov"
}
const person3 ={
    firstName :"Oybek",
    lastName : "Shaymanov"
}

function fullInfo(age){
    console.log(`${this.firstName} ${this.lastName} yoshi-${age}`) 
}
fullInfo.apply(person3,[12])
fullInfo.call(person1, 28)
fullInfo.bind(person1,24)()

const car = {
    name:"RolsRoys",
    color:"Red"
}
const carProxy = new Prox