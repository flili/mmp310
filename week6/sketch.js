foo()
function foo(){
    console.log("Hello");
}

var bar=function(){
    console.log("world!");
}
bar();

function greet (name, greeting){
    console.log(greeting + ", " + name);
}
greet();
greet("Jerry", "Hello");
greet("Jerry", "Hi");