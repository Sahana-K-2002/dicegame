var randomNumber1=Math.floor(Math.random()*6)+1;
var diceNumber1="dice"+randomNumber1+".png";
var img1=document.querySelector(".img1");
img1.setAttribute("src",diceNumber1);

var randomNumber2=Math.floor(Math.random()*6)+1;
var diceNumber2="dice"+randomNumber2+".png";
var img2=document.querySelector(".img2");
img2.setAttribute("src",diceNumber2);

if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
else if(randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML = "🚩 Player 2 Wins!";
}
else{
  document.querySelector("h1").innerHTML = "Draw!";
}
