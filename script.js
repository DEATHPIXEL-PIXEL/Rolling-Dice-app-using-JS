var dice;
var stop = true;
var t;
var dices = ['&#9856;', '&#9857;', '&#9858;', '&#9859;', '&#9860;', '&#9861;' ];



window.onload=function(){
    dice=document.getElementById("dice");
    ace();
    
    }
    
function change() {
    var random = Math.floor(Math.random()*6)
    dice.innerHTML=dices[random]
}
// general Syntax of if-else:
// if(condition){

// }
// else{

// }

function ace(){
    if (stop == true){
         stop = false;

         t=setInterval(change ,100);
}else{
    clearInterval(t);
    stop=true;
    

}



}

