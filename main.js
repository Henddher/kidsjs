function main() {

    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    context.font = "54px helvetica";

    context.fillStyle = "blue";
    
    context.fillRect(30,30, 300, 300);

    context.fillStyle = "aqua";

    context.fillText("robots", 30,30); 

    context.fillStyle = "blue"; 

    context.fillRect(400,30, 300, 300);
  
    context.fillStyle = "aqua";

    context.fillText("robots", 300,300); 
}