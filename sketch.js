var drawing;

function setup(){

    canvas = createCanvas(1336, 608);

    database = firebase.database();

    var Position = database.ref('drawing/position');
    Position.on("value", readPosition, showError);

}

function mouseDragged(){
  noStroke();
  fill(252, 102, 255);
  drawing = ellipse(mouseX, mouseY, 80, 20);
}
 
function draw(){

} 

function keyPressed(){
    if (keyCode == 32 ){
        background(255);
    }
    
}

function readPosition(data){
    position = data.val();
    console.log(position.x);
    hypnoticBall.x = position.x;
    hypnoticBall.y = position.y;
  }
  
  function showError(){
    console.log("Error in writing to the database");
  }