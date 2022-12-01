var bmi1;
var bmi2;
var mass;
var height;
var i=height*height;
var bmi=mass*i;
mass=prompt ("how heavy are marks?");
console.log ("marks tall is "+mass+" kg");
height=prompt("how tall are marks?");
console.log ("jhon tall is "+height+" m");
i=height*height;
bmi=mass*i;
bmi1=bmi;
mass=prompt ("how heavy are jhon?");
console.log ("jhon weight is "+mass+" kg");
height=prompt("how tall are jhon?");
console.log ("jhon tall is "+height+" m");
i=height*height;
bmi=mass*i;
bmi2=bmi;
if(bmi1<bmi2){
  console.log("jhon have a higher BMI than marks");
}
else{
    console.log("marks have a higher BMI than john");
}
