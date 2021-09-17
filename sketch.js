var dog,happyDog;
var database;
var foodS,foodStock;

function preload()
{
	//load images here
  dog.loadImage("dogImg");
  happyDog.loadImage("dogImg1");
}

function setup() {
	createCanvas(500, 500);
  dog=createSprite(200,200,50,50);
  dog.addImage("dogImg");

  database=firebase.console;

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87);
if(keyWentDown(UP_ARROW))
{
writeStock(foodS);
dog.addImage(happyDog);

}

  drawSprites();
  //add styles here

}
text("Note:press up arrow key to feed the dog milk",300,20);

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  }
  else{
    x=x-1
  }
  database.ref('/').update({
    Food:x
  })
}


