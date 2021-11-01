var x = 15;
var y = "global";
console.log("the variable x here is global and its value is  "+x);
console.log("x is "+y);
function func1(){
    var x = 22;
    var y = "local"
    console.log("the variable x here is now local and its value is "+x);
    console.log("x is "+y);
    func2();
}
function func2(){
    console.log("the value of x is "+x);
    console.log("x is "+y);
  
}

func1();