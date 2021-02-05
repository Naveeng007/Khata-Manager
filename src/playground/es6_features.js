// Destructuring

const obj={
    name:'Naveen',
    age:21,
    prof:{
        edu:"DTU"
    }

}

const {name,age}=obj//matches same name in obj and declared as variabel
console.log(name)

const {name:Naam,age=34}=obj//renaming name to Naam and name now doest not exits..default value of age is 34
console.log(Naam)

const {bro:Brother="Praveen",age=34}=obj//renaming bro to brother and default value praveen if does not exit
console.log(Brother)