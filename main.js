function main() {

    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    context.font = "30px Arial";
    context.fillStyle = "red";
    


    //context.fillText("Juan Pablo Is Super Awesome", 50, 300);
    context.fillRect(30, 30, 100, 100);

 context.fillStyle = "blue";
 context.fillRect(130, 30, 100, 100);
 context.fillStyle = "gold";
 context.fillRect(30, 130, 100, 100);
context.fillStyle = "green";
 context.fillRect(130, 130, 100, 100);
    

    
        



	 // context.font = "20px Arial";
	//context.fillText("cheese", 50, 400);
}
