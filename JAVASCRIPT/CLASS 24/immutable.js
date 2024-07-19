//mutable -> wo types jo update hosaken
// Object , Array

//immutable , primitive => jo update na ho balke replace hon
// string , number , boolean , undefined

var x = "x";
var abc = "abc"
// abc[0] = "A"
abc.replace("a","A")
abc = abc.replace("a","A")


console.log(abc);
var y = x;
x = "XX";
console.log("x=>", x);
console.log("y=>", y);

var obj = {
  name: "Ahmed",
};

var obj1 = obj;
console.log(obj1);
obj1.name = "Abdullah";

console.log("obj=>", obj);
console.log("obj1=>", obj1);