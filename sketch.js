var dog,happydog;
var database;
var foodS,foodStock;

function preload()
{

dog = loadImage("images/dogImg.png");

happydog = loadImage("images/dogImg1.png");

}

function setup() {
	createCanvas(500, 500);
  
dog = createSprite(200,200,50,50);
dog.addImage("dog",dog)

database = firebase.database();

foodStock = database.ref('Food');
foodStock.on("value",readStock);

}


function draw() {  
background(46, 139, 87);

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogappy);
}


  drawSprites();

  Stroke();
  textSize(35)
  fill("white")
  text("Score  " + foodStock, 100,150);
}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  database.ref('/'.update({
  


  }))
}
