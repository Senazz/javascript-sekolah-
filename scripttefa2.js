// Di negaranya,
//biasanya memberi tip 15% jika nilai tagihan antara 50 dan 300.
//Jika nilainya berbeda, tipnya adalah 20%.
var bil = parseInt(prompt("how many the value of the bill?"));
const tip = bil >= 50 && bil<= 300 ? 1/5 : 3/20 ;
const total = bil+(bil*tip);
console.log(total);
// 275,40,430
