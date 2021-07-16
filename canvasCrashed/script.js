
const canvas=document.getElementById("canvas");
const ctx= canvas.getContext('2d');

// fillRect();

// ctx.fillStyle='red';
// ctx.fillRect(20,20,150,100);
// ctx.fillStyle='blue';
// ctx.fillRect(200,20,150,100);

// // strokeRect();

// ctx.lineWidth=5;
// ctx.strokeStyle="green";
// ctx.strokeRect(100,200,150,100);


// // clearRect()

// ctx.clearRect(25,25,140,90);

// // fillText();


// ctx.font=' 30px Arial';
// ctx.fillStyle="purple";
// ctx.fillText("Hello World", 400,50);

// // strokeText();
// ctx.lineWidth=1;
// ctx.strokeStyle="orange";
// ctx.strokeText("Hello World", 400, 150);

// PATHS:
 
// TRAINGLE:

// ctx.beginPath();
// ctx.moveTo(50,50);
// ctx.lineTo(150,50);
// ctx.lineTo(100,200);
// ctx.lineTo(50,50);
// // ctx.closePath();
// ctx.fillStyle="coral";
// ctx.fill();
// // ctx.stroke();

// ctx.beginPath();
// ctx.moveTo( 200,50);
// ctx.lineTo(150,200);
// ctx.lineTo(250,200);
// ctx.closePath();
// // ctx.fillStyle="green";
// //ctx.fill();
// ctx.stroke();

// // REACTANGLE:

// ctx.beginPath();
// ctx.rect(300,50,150,100);
// ctx.fillStyle="teal";
// ctx.fill();

// ARCS (circles)

// ctx.arc(x,y,radius,startanle,endangle,bool anticlockwise);
// x,y center of circle:

// ctx.beginPath();
// // ctx.arc(100,100,40,0,Math.PI*2,true);

// //  smilie:

// const centerX=canvas.width/2;
// const centerY=canvas.height/2;

// // draw head:
// ctx.arc(centerX, centerY, 200, 0, Math.PI *2);


// // move to mouth:
// ctx.moveTo(centerX + 100 , centerY);

// ctx.arc(centerX , centerY , 100, 0, Math.PI,false);

// // Move left Eye:

//     ctx.moveTo(centerX-60,centerY-80);

//     ctx.arc(centerX-80,centerY-80,20,0,Math.PI*2);

// // MOVE TO RIGHT EYE;

//  ctx.moveTo(centerX+100,centerY-80);

//  // draw an right eye:
// ctx.arc(centerX+80,centerY-80,20,0,Math.PI*2);


// ctx.stroke();


// ANIMATION:

// animation 1:

// const circle={
//     x:200,
//     y: 200,
//     siz: 30,
//     dx: 5,
//     dy: 4
// };

// function drawCircle() {

//     ctx.beginPath();
//     ctx.arc(circle.x, circle.y,circle.siz,0,Math.PI*2);
//     ctx.fillStyle="purple";
//     ctx.fill();
// }

// function update(){

//     ctx.clearRect(0,0,canvas.clientWidth,canvas.height);

//     drawCircle();

//     // change position:

//     circle.x+=circle.dx;
//     circle.y+=circle.dy;

//     // detect collision  with sides of canvas walls:

//     if(circle.x+circle.siz>canvas.width || (circle.x-circle.siz<0)){
//         circle.dx*=-1;
//     }

//     if(circle.y+circle.siz>canvas.height || circle.y-circle.siz<0){
//         circle.dy*=-1;
//     }
    

//     requestAnimationFrame(update);
    

// }

// // drawCircle();
// update();









