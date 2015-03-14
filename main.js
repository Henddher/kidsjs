function main() {

    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    context.font = "30px Arial";
    context.fillStyle = "royalblue";
    context.strokeStyle = "black";

    // fill rect: x, y, width, height
    //context.fillRect(10, 10, 300, 300);

    // draw rect: x, y, width, height
    context.strokeRect(10, 10, 300, 300)

    // fill text: x, y
    context.fillText("Hello World", 50, 50);

    // draw text: x, y
    context.strokeText("Hi there!", 20, 30);

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
}
