
function konvers(){
var a = parseInt(document.getElementById("angka").value);
if (a>92){
  document.getElementById("nilai").value="a";
}
else if (a>82) {
  document.getElementById("nilai").value="b";
}
else if (a>74) {
  document.getElementById("nilai").value="c";
}
else if (a>49) {
  document.getElementById("nilai").value="d";
}
else{
  document.getElementById("nilai").value="e";
}
}
//83,75,50,else
