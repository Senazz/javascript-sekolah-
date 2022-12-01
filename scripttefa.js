var round=prompt("how many round do you want? (number only)");
const dolphins =[];
const koalas =[];
var hitungan1=0;
var hitungan2=0;
for(let i =0; i<round; i++){
  var dolphinScorePerRound =prompt("how many scores that dolphin get");
  dolphins.push(dolphinScorePerRound);
  var koalasScorePerRound =prompt("how many scores that koalas get");
  koalas.push(koalasScorePerRound);
}
for(let i =0; i<round; i++){
  hitungan1=hitungan1+dolphins[i];
  hitungan2=hitungan2+koalas[i];
}
hitungan1=hitungan1/round;
hitungan2=hitungan2/round;
if(hitungan1<hitungan2){
  console.log("koalas win");
}
else if (hitungan1>hitungan2) {
  console.log("dolphins win");
}
else{
  console.log("draw")
}
