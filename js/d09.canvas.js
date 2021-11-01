let bv = document.getElementById("bv");
let ctx = bv.getContext("2d");

function drawLine(){
    ctx.beginPath
    ctx.moveTo(10,10);
    ctx.lineTo(200,200);
    ctx.strokeStyle="white";
    ctx.stroke();
}

function drawRect(){
    ctx.strokeStyle="red";
    ctx.strokeRect(50,50, 200,100);

    ctx.fillStyle="blue";
    ctx.fillRect(150,100, 200,100);

}
function drawCircle(){
    ctx.fillStyle="white";
    ctx.arc(300, 200, 40, 0, 2* Math.PI);
    ctx.fill();
    ctx.beginPath();

    ctx.strokeStyle="white";
    ctx.beginPath();
    ctx.arc(200, 180, 50, 0, 2* Math.PI);
    ctx.stroke();

}

function drawImage(imgNo){
    let img=null;
    switch(imgNo){
        case 1:
            document.getElementById("h1")
            break;
        case 2:
            document.getElementById("h2")
            break;
        case 3:
            document.getElementById("h2")
            break;
            
    }
    ctx.beginPath();
    ctx.drawImage(img, 50, 100, 500, 300);

}

function drawText(){
    ctx.beginPath;
    ctx.font="30px Arial";
    ctx.fillText ("Hello word", 10, 30);

    ctx.font="30px Arial";
    ctx.strokeStyle="brown";
    ctx.strokeText ("Hello word", 10, 100);

}