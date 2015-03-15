function main() {

    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    context.font = "100px Cursive";
    context.fillStyle = "green";

    // a rect
    context.fillRect(100, 200, 200, 200);
    context.fillStyle = "blue";
    context.fillRect(300, 400, 200, 200);
    context.fillStyle = "red";
    context.fillRect(100, 400, 200, 200);
    context.fillStyle = "yellow";
    context.fillRect(300, 200, 200, 200);
    context.fillStyle = "blue";
    
    // text on the screen
     context.fillText("I love dogs", 0, 100);
     context.fillStyle = "purple";
     context.font = "50px Cursive";
     context.fillText("Ailani Pedroza", 0, 650);
}


