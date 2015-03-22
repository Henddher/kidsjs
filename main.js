function main() {

    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    context.font = "30px Arial";
    context.fillStyle = "royalblue";
    context.strokeStyle = "black";

    // fill rect: x, y, width, height
    //context.fillRect(10, 10, 300, 300);

    // draw rect: x, y, width, height
   // context.strokeRect(10, 10, 300, 300)

    // fill text: x, y
    //context.fillText("Hello World", 50, 50);

    // draw text: x, y
    //context.strokeText("Hi there!", 20, 30);

    /*
    context.fillStyle = "red";
    // path
    context.beginPath();
    // move to: x, y
    context.moveTo(20, 20); 
    // line to: x, y
    context.lineTo(50, 20); 
    // curve to: cx1, cy1, cx2, cy2, x, y
    context.bezierCurveTo(20, 20, 30, 30, 40, 40); 
    // quad curve to: cx, cy, x, y
    context.quadraticCurveTo(40, 40, 50, 50); 
    // close:
    context.closePath(); 
    // stroke path:
    context.stroke();
    // fill path:
    context.fill();
    */

    /*
    context.fillStyle = "royalblue";
    // fill circle:
    context.beginPath();
    // arc: center x, center y, radius, start angle, end angle
    context.moveTo(0, 0); 
    context.arc(40, 40, 40, 0, 360); 
    context.closePath();
    context.fill();
    */


//What's your name

var name = prompt("What's your name?");

var array1 = ["I'm going to eat your flesh while you sleep", "Age 9", "Age 39", "Age 43", "You are awesome"]; 
 

if ( name == "Leo" ) {
    context.fillText(array1[0], 10, 300);
}
else if ( name == "Ailani") {
    context.fillText(array1[1], 300, 300);
}
else if( name== "Claudia"){
    context.fillText(array1[2], 300, 300)
}
else if( name == "Henddher"){
context.fillText(array1[3], 300, 300)
}
else if(name == "Juan Pablo" || name == "juan pablo" || name == "Juan pablo" || name == "juan Pablo" ){
context.fillText(array1[4], 300, 300);
}
else if(name == "Bryce"){
context.fillText("We're going on a trip in our favorite rocket ship", 10, 300)
}
else{
context.fillText("Hi " + name,300, 300);
}







    moveCircleTo(300, 400);
    moveCircleTo(500, 200);
    moveCircleTo(100, 200);
    moveCircleTo(100, 400);
    moveCircleTo(300, 100);
    moveCircleTo(100, 400);
    moveCircleTo(300, 400);
    moveCircleTo(500, 200);
    moveCircleTo(100, 200);
    moveCircleTo(100, 400);
    moveCircleTo(300, 100);
    moveCircleTo(100, 400);
}

var position = {
    x : "100",
    y : "100",
    ox : "100",
    oy : "100",
    dur : 0,
    r : "50",
};

function moveCircleTo(x, y)
{
    position.dur += 0.5;
    position.x += ";" + x;
    position.y += ";" + y;
    position.r += ";" + 50.0*x/y;
    console.log("r", position.r);
    var circle = document.getElementById("circle");
    var animateCx = document.getElementById("animateCx");
    var animateCy = document.getElementById("animateCy");
    var animateR = document.getElementById("animateR");
    animateCx.setAttribute("values", position.x + ";" + position.ox);
    animateCx.setAttribute("dur", position.dur + "s");
    animateCy.setAttribute("values", position.y + ";" + position.oy);
    animateCy.setAttribute("dur", position.dur + "s");
    //animateR.setAttribute("values", position.r);
    //animateR.setAttribute("dur", position.dur + "s");
    
    
   
    
}
