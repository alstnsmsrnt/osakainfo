var cars = ["大阪市","おすすめタグ","エリアで絞り込む","検索","その他"];
var text = "";
var i;
function myButton(){
  for (i = 0; i < cars.length; i++) {
    text += cars[i];
  } 
}
document.getElementById("demo").innerHTML = text;
