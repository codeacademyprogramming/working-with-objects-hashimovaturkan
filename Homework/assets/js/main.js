//Task1
const user=new Object();
user["name"]="Jony";
user.lastname="Smith";

Object.keys(user).forEach((element)=>{
    if(element==="name"){
        user[element]="Pete"; //user in yerine this nie ishlemedi   this[element]="Pete";
    }
});

delete user.name;

console.log(user);

//Task2
function isEmpty(obj){
    let isEmpty=true;
    Object.entries(obj).forEach((element)=>{
        isEmpty=false;
    });
    return isEmpty;
};


let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false


//Task3
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
let sum=0;
Object.values(salaries).forEach((value)=>{
    if(value!==undefined)
    sum=sum+value;
});
console.log(sum);


//Task4
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
function multiplyNumeric(obj) {
    
    Object.entries(obj).forEach((entry)=>{
        if(typeof entry[1] ==="number")
        obj[entry[0]]=entry[1]*2; //this nie ishdemir
    });
    
}


multiplyNumeric(menu);
console.log(menu);
 
