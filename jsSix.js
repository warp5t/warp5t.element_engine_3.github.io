let a,b,c;
let q,n,r;
let inputPlot, turnColor;

let arrCircle = [];

let distance, direction, circleSurv;

document.querySelector("#button").addEventListener('mousedown', switchColor);
document.querySelector("#R").addEventListener('mousedown', moveToRight);
document.querySelector("#L").addEventListener('mousedown', moveToLeft);
document.querySelector("#U").addEventListener('mousedown', moveToUp);
document.querySelector("#D").addEventListener('mousedown', moveToDown);
document.querySelector("#button").addEventListener('touchstart', switchColor);
document.querySelector("#R").addEventListener('touchstart', moveToRight);
document.querySelector("#L").addEventListener('touchstart', moveToLeft);
document.querySelector("#U").addEventListener('touchstart', moveToUp);
document.querySelector("#D").addEventListener('touchstart', moveToDown);

function switchColor(){
  turnColor = true;
}

// function rand(){
//   a = document.getElementById('input_1').value;
//   b = document.getElementById('input_2').value;
//   c = document.getElementById('input_3').value;
//   //console.log('inputPlot : ',inputPlot.value);

// }

function randColor(){
  q = Math.floor(Math.random()*Number(256));
  n = Math.floor(Math.random()*Number(256));
  r = Math.floor(Math.random()*Number(256));
}



let circleOne = new Circle(100,300,4,'magneto',true);
let circleTwo = new Circle(200, 300, 4, 'yellow',true);
let circleThree = new Circle(100, 300, 3, 'grey',true);
let circleFour = new Circle (150, 300, 4,'orange',true);
let circleFive = new Circle (350, 300, 40,'lime',true);
let circleSix = new Circle (450, 300, 80,'blue',true);
let circleSeven = new Circle (450, 300, 40,'cyan',true);
let circleEight = new Circle (550, 300, 20,'brown',true);
let circleNine = new Circle (250, 300, 105,'green',true);
let circleTen = new Circle (80, 300, 40,'red',false);
let circleEleven = new Circle (500, 300, 9,'rgb(161, 253, 13)',false);
let circleTwelve = new Circle (400, 300, 65,'indigo',false);
let circleThirteen = new Circle (450, 300, 35,'purple',false);
let circleFourteen = new Circle (410, 300, 125,'pink',false);
let circleFifteen = new Circle (315, 300, 115,'golden',false);
let circleSixteen = new Circle (315, 300, 150,'white',false);
let circleEigthteen = new Circle (315, 300, 110,`rgb(${a}, ${b}, ${c})`,false);

let canvWidth = document.documentElement.clientWidth;
let canvHeigth = document.documentElement.clientHeight - 40; 


function Circle(x, y, radius, color, switchSize) { 

  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;
  this.toLeft = true;
  this.toRight = false;
  this.toDown = false;
  this.toUp = true;
  this.switchSize = true;

  

  this.left = function(){
    this.x = this.x - 3;
  };
  this.right = function(){
    this.x = this.x + 3;
  };
  this.up = function(){
    this.y = this.y - 3;
  };
  this.down = function(){
    this.y = this.y + 3;
  };



  this.movement = function() {
    if (this.x >= canvWidth - this.radius){
    this.toLeft = true;
    this.toRight = false;
    direction = 8;
    }
    else if (this.x < canvWidth - (canvWidth - this.radius)){
      this.toLeft = false;
      this.toRight = true;
      direction = 8;
    }
    if(this.y >= canvHeigth - this.radius){
      this.toDown = false;
      this.toUp = true;
      direction = 8;
    }
    else if(this.y < canvHeigth - (canvHeigth - this.radius)){
      this.toDown = true;
      this.toUp = false;
      direction = 8;
    }
    
 
    if (this.toLeft == true ) {
      this.left();
      }
      else if (this.toRight == true) {
      this.right();
      }
      if (this.toDown == true) {
      this.down();
      }
      else if(this.toUp == true) {
      this.up();
      }  
      
  };
 
}

function collision(){
  for (let j = 0; arrCircle.length > j; j++) {
    index = j;
    if(turnColor === true){
      randColor();
      a = q;
      b = n;
      c = r;
      arrCircle[j].color = `rgb(${a}, ${b}, ${c})`;
    }
    
    // console.log('- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -');
    // console.log(`j : ${j} `);
    // console.log(arrCircle[j]);
    // console.log(' / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /');
    distance = 0;
    for (let i = 0; arrCircle.length - j - 1 > i; i++) {
        if (index === j) {
            index++;
        }

        if (index > arrCircle.length - 1) {
            index = arrCircle.length - 1;
        }
        distance = Math.sqrt(Math.pow(arrCircle[j].x - arrCircle[index].x, 2) + Math.pow(arrCircle[j].y - arrCircle[index].y, 2));

        //if(distance <= arrCircle[j].radius + arrCircle[index].radius) console.log('collision!!!---------------------------------------------');
        // console.log('i: ', i);
        // console.log('index: ', index);
        // console.log(`distance ${distance}`);

        if(arrCircle[j].x  > arrCircle[index].x  && arrCircle[j].y  > arrCircle[index].y && distance <= arrCircle[j].radius + arrCircle[index].radius) {
          arrCircle[j].toLeft = false;
          arrCircle[j].toRight = true;
          arrCircle[index].toLeft = true;
          arrCircle[index].toRight = false;
          arrCircle[j].toUp = false;
          arrCircle[j].toDown = true;
          arrCircle[index].toUp = true;
          arrCircle[index].toDown = false;
          
        }
       else if(arrCircle[j].x  > arrCircle[index].x  && arrCircle[j].y  < arrCircle[index].y && distance <= arrCircle[j].radius + arrCircle[index].radius) {
        arrCircle[j].toLeft = false;
        arrCircle[j].toRight = true;
        arrCircle[index].toLeft = true;
        arrCircle[index].toRight = false;
        arrCircle[j].toUp = true;
        arrCircle[j].toDown = false;
        arrCircle[index].toUp = false;
        arrCircle[index].toDown = true;
        }
        else if(arrCircle[j].x  < arrCircle[index].x  && arrCircle[j].y  > arrCircle[index].y && distance <= arrCircle[j].radius + arrCircle[index].radius) {
          arrCircle[j].toLeft = true;
          arrCircle[j].toRight = false;
          arrCircle[index].toLeft = false;
          arrCircle[index].toRight = true;
          arrCircle[j].toUp = false;
          arrCircle[j].toDown = true;
          arrCircle[index].toUp = true;
          arrCircle[index].toDown = false;
          
        }
       else if(arrCircle[j].x  < arrCircle[index].x  && arrCircle[j].y  < arrCircle[index].y && distance <= arrCircle[j].radius + arrCircle[index].radius) {
        arrCircle[j].toLeft = true;
        arrCircle[j].toRight = false;
        arrCircle[index].toLeft = false;
        arrCircle[index].toRight = true;
        arrCircle[j].toUp = true;
        arrCircle[j].toDown = false;
        arrCircle[index].toUp = false;
        arrCircle[index].toDown = true;
        }
        if(arrCircle[j].x  > arrCircle[index].x && distance <= arrCircle[j].radius + arrCircle[index].radius) {
          arrCircle[j].toLeft = false;
          arrCircle[j].toRight = true;
          arrCircle[index].toLeft = true;
          arrCircle[index].toRight = false;
         
        }
        else if(arrCircle[j].x  < arrCircle[index].x && distance <= arrCircle[j].radius + arrCircle[index].radius) {
          arrCircle[j].toLeft = true;
          arrCircle[j].toRight = false;
          arrCircle[index].toLeft = false;
          arrCircle[index].toRight = true;
          
        }
        if(arrCircle[j].y  > arrCircle[index].y && distance <= arrCircle[j].radius + arrCircle[index].radius) {
          arrCircle[j].toUp = false;
          arrCircle[j].toDown = true;
          arrCircle[index].toUp = true;
          arrCircle[index].toDown = false; 
        }
        else if(arrCircle[j].y  < arrCircle[index].y && distance <= arrCircle[j].radius + arrCircle[index].radius) {
          arrCircle[j].toUp = true;
          arrCircle[j].toDown = false;
          arrCircle[index].toUp = false;
          arrCircle[index].toDown = true; 
        }


        index++;
        if(direction === 0){
          controlCircle.toRight = true;
          controlCircle.toLeft = false;
        }
        else if (direction === 1){
          controlCircle.toRight = false;
          controlCircle.toLeft = true;
        }
        else if (direction === 2){
          controlCircle.toUp = true;
          controlCircle.toDown = false;
        }
        else if (direction === 3){
          controlCircle.toUp = false;
          controlCircle.toDown = true;
        }
       // rand();
        sizeVar();
       // controlCircle.color = `rgb(${a}, ${b}, ${c})`;
    }
}

  turnColor = false;


}

function sizeVar(){
  for(let i = 0; arrCircle.length > i; i++){
    if(arrCircle[i].switchSize === false){
      arrCircle[i].radius = arrCircle[i].radius - 0.005;
    if(arrCircle[i].radius < 1){
      arrCircle[i].switchSize = true;
    }
    
  }
  else if(arrCircle[i].switchSize === true){
    arrCircle[i].radius = arrCircle[i].radius + 0.005;
    if(arrCircle[i].radius > document.documentElement.clientWidth / arrCircle.length - 10){
      arrCircle[i].switchSize = false;
    }
}
  }
  
}

function drawing(){
let canvas = document.getElementById('circle');
let ctx = canvas.getContext('2d');
ctx.canvas.width = canvWidth;
ctx.canvas.height = canvHeigth;

for(let i = 0; i < arrCircle.length; i++){
ctx.beginPath();
ctx.arc(arrCircle[i].x, arrCircle[i].y, arrCircle[i].radius, 0*Math.PI, 2*Math.PI, false);
ctx.fillStyle = arrCircle[i].color;
ctx.fill();
ctx.lineWidth = 1;
ctx.strokeStyle = 'blue';
ctx.stroke();

arrCircle[i].movement();
//console.log(arrCircle[0].toLeft);
//console.log(arrCircle[0].toRight);

ctx.font = "20px Tahoma";
ctx.fillStyle = "blue";
//ctx.fillText(`line-1: ${  document.documentElement.clientWidth / 16}`, 30, 340);
//ctx.fillText(`controlCircle.radius : ${controlCircle.radius}`, 30, 380);

}


}


arrCircle.push(circleOne);
arrCircle.push(circleTwo);
arrCircle.push(circleThree);
arrCircle.push(circleFour);

arrCircle.push(circleFive,circleTen,circleNine,circleEight,circleSeven,circleSix,circleEleven,circleTwelve,circleThirteen,circleFourteen,circleFifteen,circleSixteen,circleEigthteen);

let controlCircle = arrCircle[10];




function moveToRight(){
  direction = 0;
 }
 function moveToLeft(){
  direction = 1;
 }
 function moveToUp(){
  direction = 2;
 }
 function moveToDown(){
  direction = 3;
 }


function engine(){

  //rand();
        sizeVar();
  
 collision();
  drawing();
}


setInterval(engine,35)






















