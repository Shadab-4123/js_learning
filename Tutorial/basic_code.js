console.log("hy")

const obj = {
    name : "Shadab",
    position : "Intern",
    email : "shadab@gmail.com",
    work_day : 5
}

obj.greeting = function(){
    console.log(`Hello, ${this.name}`);
}

// console.log(obj.greeting());

const o1 = {1:"a", 2:"b"}
const o2 = {3:"c", 4:"d"}

const o3 = Object.assign({}, o1, o2) // merge both the objects
// console.log(o3);
const o4 = {...o1, ...o2} // alternative to the same task as above

// functions

function loginUser(username){
    return `${username} just logged in`
}
// console.log(loginUser("Shadab"));

// Arrow func

const user = {
    uname : "Shadab",
    price : 90,

    msg : function(){
        console.log(`${this.uname}, thanks for visiting`);
    }
}

// user.msg()
user.uname = "sid"          // context changes so the value changes
// user.msg()

