function main() {

    console.log("Hello Juan Pablo");
    
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    context.font = "30px Arial";
    context.fillStyle = "royalblue";
    context.strokeStyle = "black";

    // fill rect: x, y, width, height
    //context.fillRect(10, 10, 300, 300);

    // draw rect: x, y, width, height
    //context.strokeRect(10, 10, 300, 300)
/*
    // fill text: x, y
    context.fillText("Hello World", 50, 50);

    // draw text: x, y
    context.strokeText("Hi there!", 20, 30);
*/
    context.fillStyle = "black";
    // path
    context.beginPath();
    // move to: x, y
    context.moveTo(200, 20); 
    // line to: x, y
    context.lineTo(200, 200); 
    context.moveTo(400, 20);
    context.lineTo(400, 200);
    context.moveTo(200, 300);
    context.quadraticCurveTo(300, 400, 400, 300);
    // curve to: cx1, cy1, cx2, cy2, x, y
    //context.bezierCurveTo(20,20, 30, 30, 40, 40); 
    // quad curve to: cx, cy, x, y
    //context.quadraticCurveTo(40, 40, 50, 50); 
    // close:
    //context.closePath();
    // stroke path:
    context.stroke();
    // fill path:
    context.fill();

    console.log("Smile!");
    
    context.fillStyle = "royalblue";
    // fill circle:
    context.beginPath();
    context.moveTo(0, 0); 
    // arc: center x, center y, radius, start angle, end angle
    context.arc(40, 40, 40, 0, 360); 
    context.closePath();
    context.fill();
    
    var number1 = 29;
    var number2 = 2;
    
    number2 = number2 + 20;
    
    var sum = number1 + number2;
    var subtraction = number1 - number2;
    
    console.log(sum, subtraction, number1, "+", number2, "=", sum);
    
    var hello = "Hello";
    var name = "Juan Pablo";
    
    var helloMsg = hello + " " + name;
    context.fillText(helloMsg + "!!!", number1 * 5 , 300);
    console.log(helloMsg + number1);
    
    var array0 = [100, 200, 300];
    console.log(array0[0], array0[2]);
    
    var sum = 0;
    for (var index = 0; index < 3; index++) {
        sum = sum + array0[index];
    }
    console.log(sum);
    context.fillText("Sum " + sum, 400, 300);
}



