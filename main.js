function main() {

    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    context.font = "30px Arial";
    context.fillStyle = "royalblue";

    context.fillText("Hello World", 50, 50);
    //context.fillRect(10, 10, 300, 300);
}
