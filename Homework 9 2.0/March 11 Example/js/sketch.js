var idlePaths = [];
var myAnimation;
var myWalkAnimation;
var walkPaths = [];
let scareCrow;
let sirKnight;
let Slade;
let Pizza1Image;
let Pizza2Image;
let Pizza3Image;
let Pizza4Image;
let Pizza5Image;
let Pizza6Image;
let Pizza7Image;
let Pizza8Image;
let Pizza9Image;
let Pizza10Image;
let poisonMushroom;
let poisonMushroom2;
let poisonMushroom3;
let poisonMushroom4;
let poisonMushroom5;
var ii = 0;
var backgroundSound;
var goodSound;
var badSound;
var myFont;
var myTime = 30;
var points = 0;
var health = 5;

function preload() {
   
    idlePaths = loadStrings("./images/idle/idle.txt");
   walkPaths = loadStrings("./images/walk/walk.txt");
   backgroundSound = loadSound("Sounds/BackgroundMusic.wav");
   goodSound = loadSound("Sounds/Success.ogg");
   badSound = loadSound("Sounds/Fail.mp3");

}

function mousePressed(){
    backgroundSound.loop();
    }

function setup() {
  createCanvas(1400,1000);
  myAnimation = new animationImage( 200, 200, 150, 150);
  myAnimation.myLoadAnimation('idle', idlePaths);
  myAnimation.myLoadAnimation('walk', walkPaths);
  myFont = loadFont("fonts/ProtestRiot-Regular.ttf");
  
    speedX = random(1, 5);
    speedY = random(1, 5);

    speedX2 = random(1, 5);
    speedY2 = random(1, 5);

    speedX3 = random(1, 5);
    speedY3 = random(1, 5);

    setInterval(timeUp, 1000);

    setInterval(changeAnimation, 100);

  //compact way to add an image
  scareCrow = new Sprite(1000, 200,100,100, 'static');
  scareCrow.img = "./images/Scarecrow.jpg";
  scareCrow.scale = 0.15;
  scareCrow.diameter = 100;

  sirKnight = new Sprite(450, 400, 200, 200, 'static');
  sirKnight.img="./images/SirKnight.webp";
  sirKnight.scale = 0.15;
  sirKnight.diameter = 100;

  Slade = new Sprite(650, 800, 200, 200, 'static');
  Slade.img="./images/Slade.webp";
  Slade.scale = 0.15;
  Slade.diameter = 100;

  //compact way to add an image
  Pizza1Image = new Sprite(500, 250,100,100, 'static');
  Pizza1Image.img = "./images/Pizza.png";
  Pizza1Image.scale = 0.5;
  Pizza1Image.diameter = 50;

  Pizza2Image = new Sprite(250, 400,100,100, 'static');
  Pizza2Image.img = "./images/Pizza.png";
  Pizza2Image.scale = 0.5;
  Pizza2Image.diameter = 50;

  Pizza3Image = new Sprite(150, 550,100,100, 'static');
  Pizza3Image.img = "./images/Pizza.png";
  Pizza3Image.scale = 0.5;
  Pizza3Image.diameter = 50;

  Pizza4Image = new Sprite(470, 550,100,100, 'static');
  Pizza4Image.img = "./images/Pizza.png";
  Pizza4Image.scale = 0.5;
  Pizza4Image.diameter = 50;

  Pizza5Image = new Sprite(440, 250,100,100, 'static');
  Pizza5Image.img = "./images/Pizza.png";
  Pizza5Image.scale = 0.5;
  Pizza5Image.diameter = 50;

  Pizza6Image = new Sprite(1000, 770,100,100, 'static');
  Pizza6Image.img = "./images/Pizza.png";
  Pizza6Image.scale = 0.5;
  Pizza6Image.diameter = 50;

  Pizza7Image = new Sprite(850, 800,100,100, 'static');
  Pizza7Image.img = "./images/Pizza.png";
  Pizza7Image.scale = 0.5;
  Pizza7Image.diameter = 50;

  Pizza8Image = new Sprite(50, 500,100,100, 'static');
  Pizza8Image.img = "./images/Pizza.png";
  Pizza8Image.scale = 0.5;
  Pizza8Image.diameter = 50;

  Pizza9Image = new Sprite(390, 670,100,100, 'static');
  Pizza9Image.img = "./images/Pizza.png";
  Pizza9Image.scale = 0.5;
  Pizza9Image.diameter = 50;

  Pizza10Image = new Sprite(280, 790,100,100, 'static');
  Pizza10Image.img = "./images/Pizza.png";
  Pizza10Image.scale = 0.5;
  Pizza10Image.diameter = 50;

  poisonMushroomImage = new Sprite(250, 200,100,100, 'static');
  poisonMushroomImage.img = "./images/Poison Mushroom.png";
  poisonMushroomImage.scale = 0.05;
  poisonMushroomImage.diameter = 50;

  poisonMushroomImage2 = new Sprite(500, 890,100,100, 'static');
  poisonMushroomImage2.img = "./images/Poison Mushroom.png";
  poisonMushroomImage2.scale = 0.05;
  poisonMushroomImage2.diameter = 50;

  poisonMushroomImage3 = new Sprite(875, 200,100,100, 'static');
  poisonMushroomImage3.img = "./images/Poison Mushroom.png";
  poisonMushroomImage3.scale = 0.05;
  poisonMushroomImage3.diameter = 50;

  poisonMushroomImage4 = new Sprite(640, 370,100,100, 'static');
  poisonMushroomImage4.img = "./images/Poison Mushroom.png";
  poisonMushroomImage4.scale = 0.05;
  poisonMushroomImage4.diameter = 50;

  poisonMushroomImage5 = new Sprite(490, 700,100,100, 'static');
  poisonMushroomImage5.img = "./images/Poison Mushroom.png";
  poisonMushroomImage5.scale = 0.05;
  poisonMushroomImage5.diameter = 50;
}

// display all the frames using the draw function as a loop
function draw() 
{

    background(120);  
    fill(100, 252, 169);
    textSize(24);
    textFont(myFont);
    text("Garrett Boehm", 1000, 300);



    fill(36,250,100);
    textSize(15);

    text(myTime + " seconds", 50, 50);
    if(myTime == 0)
    {
        text("You lose!", width/2, height/2);
    }
    
    
    if(kb.pressing('d'))
    {
        if(myAnimation.isColliding(scareCrow))
        {
            myAnimation.drawAnimation('idle');
            myAnimation.updatePosition('idle');
            
        }  
        else if(myAnimation.isColliding(Pizza1Image))
        {
            Pizza1Image.remove();
            points++;
            goodSound.play();
        }  
        else if(myAnimation.isColliding(Pizza2Image))
        {
            Pizza2Image.remove();
            points++;
            goodSound.play();
        }
        else if(myAnimation.isColliding(Pizza3Image))
        {
            Pizza3Image.remove();
            points++;
            goodSound.play();
        }
        else if(myAnimation.isColliding(Pizza4Image))
        {
            Pizza4Image.remove();
            points++;
            goodSound.play();
        }
        else if(myAnimation.isColliding(Pizza5Image))
        {
            Pizza5Image.remove();
            points++;
            goodSound.play();
        }
        else if(myAnimation.isColliding(Pizza6Image))
        {
            Pizza6Image.remove();
            points++;
            goodSound.play();
        }
        else if(myAnimation.isColliding(Pizza7Image))
        {
            Pizza7Image.remove();
            points++;
            goodSound.play();
        }
        else if(myAnimation.isColliding(Pizza8Image))
        {
            Pizza8Image.remove();
            points++;
            goodSound.play();
        }
        else if(myAnimation.isColliding(Pizza9Image))
        {
            Pizza9Image.remove();
            points++;
            goodSound.play();
        }
        else if(myAnimation.isColliding(Pizza10Image))
        {
            Pizza10Image.remove();
            points++;
            goodSound.play();
        }
        else if(myAnimation.isColliding(poisonMushroomImage))
        {
            poisonMushroomImage.remove();
            health--;
            badSound.play();
        }  
        else if(myAnimation.isColliding(poisonMushroomImage2))
        {
            poisonMushroomImage2.remove();
            health--;
            badSound.play();
        }  
        else if(myAnimation.isColliding(poisonMushroomImage3))
        {
            poisonMushroomImage3.remove();
            health--;
            badSound.play();
        }  
        else if(myAnimation.isColliding(poisonMushroomImage4))
        {
            poisonMushroomImage4.remove();
            health--;
            badSound.play();
        }  
        else if(myAnimation.isColliding(poisonMushroomImage5))
        {
            poisonMushroomImage5.remove();
            health--;
            badSound.play();
        }  
        myAnimation.updatePosition('forward');
        myAnimation.drawAnimation('walk');    
          
    }
    else if(kb.pressing('a'))
    {
        if(myAnimation.isColliding(scareCrow))
        {
            myAnimation.drawAnimation('idle');
            myAnimation.updatePosition('idle');  
        }  
        else if(myAnimation.isColliding(Pizza1Image))
        {
            Pizza1Image.remove();
            points++;
            goodSound.play();
        }
        else if(myAnimation.isColliding(Pizza2Image))
        {
            Pizza2Image.remove();
            points++;
            goodSound.play();
        }
        else if(myAnimation.isColliding(Pizza3Image))
        {
            Pizza3Image.remove();
            points++;
            goodSound.play();
        }
        else if(myAnimation.isColliding(Pizza4Image))
        {
            Pizza4Image.remove();
            points++;
            goodSound.play();
        }
        else if(myAnimation.isColliding(Pizza5Image))
        {
            Pizza5Image.remove();
            points++;
            goodSound.play();
        }
        else if(myAnimation.isColliding(Pizza6Image))
        {
            Pizza6Image.remove();
            points++;
            goodSound.play();
        }
        else if(myAnimation.isColliding(Pizza7Image))
        {
            Pizza7Image.remove();
            points++;
            goodSound.play();
        }
        else if(myAnimation.isColliding(Pizza8Image))
        {
            Pizza8Image.remove();
            points++;
            goodSound.play();
        }
        else if(myAnimation.isColliding(Pizza9Image))
        {
            Pizza9Image.remove();
            points++;
            goodSound.play();
        }
        else if(myAnimation.isColliding(Pizza10Image))
        {
            Pizza10Image.remove();
            points++;
            goodSound.play();
        }
        else if(myAnimation.isColliding(poisonMushroomImage))
        {
            poisonMushroomImage.remove();
            health--;
            badSound.play();
        }  
        else if(myAnimation.isColliding(poisonMushroomImage2))
        {
            poisonMushroomImage2.remove();
            health--;
            badSound.play();
        }  
        else if(myAnimation.isColliding(poisonMushroomImage3))
        {
            poisonMushroomImage3.remove();
            health--;
            badSound.play();
        }  
        else if(myAnimation.isColliding(poisonMushroomImage4))
        {
            poisonMushroomImage4.remove();
            health--;
            badSound.play();
        }  
        else if(myAnimation.isColliding(poisonMushroomImage5))
        {
            poisonMushroomImage5.remove();
            health--;
            badSound.play();
        }
        myAnimation.updatePosition('reverse');
        myAnimation.drawAnimation('walk');        
    }
    else if(kb.pressing('w'))
    {
        if(myAnimation.isColliding(scareCrow))
        {
            myAnimation.drawAnimation('idle');
            myAnimation.updatePosition('idle');
            
        }  
        else if(myAnimation.isColliding(Pizza1Image))
        {
            Pizza1Image.remove();
            points++;
            goodSound.play();
        }
        else if(myAnimation.isColliding(Pizza2Image))
        {
            Pizza2Image.remove();
            points++;
            goodSound.play();
        }
        else if(myAnimation.isColliding(Pizza3Image))
        {
            Pizza3Image.remove();
            points++;
            goodSound.play();
        }
        else if(myAnimation.isColliding(Pizza4Image))
        {
            Pizza4Image.remove();
            points++;
            goodSound.play();
        }
        else if(myAnimation.isColliding(Pizza5Image))
        {
            Pizza5Image.remove();
            points++;
            goodSound.play();
        }
        else if(myAnimation.isColliding(Pizza6Image))
        {
            Pizza6Image.remove();
            points++;
            goodSound.play();
        }
        else if(myAnimation.isColliding(Pizza7Image))
        {
            Pizza7Image.remove();
            points++;
            goodSound.play();
        }
        else if(myAnimation.isColliding(Pizza8Image))
        {
            Pizza8Image.remove();
            points++;
            goodSound.play();
        }
        else if(myAnimation.isColliding(Pizza9Image))
        {
            Pizza9Image.remove();
            points++;
            goodSound.play();
        }
        else if(myAnimation.isColliding(Pizza10Image))
        {
            Pizza10Image.remove();
            points++;
            goodSound.play();
        }
        else if(myAnimation.isColliding(poisonMushroomImage))
        {
            poisonMushroomImage.remove();
            health--;
            badSound.play();
        }  
        else if(myAnimation.isColliding(poisonMushroomImage2))
        {
            poisonMushroomImage2.remove();
            health--;
            badSound.play();
        }  
        else if(myAnimation.isColliding(poisonMushroomImage3))
        {
            poisonMushroomImage3.remove();
            health--;
            badSound.play();
        }  
        else if(myAnimation.isColliding(poisonMushroomImage4))
        {
            poisonMushroomImage4.remove();
            health--;
            badSound.play();
        }  
        else if(myAnimation.isColliding(poisonMushroomImage5))
        {
            poisonMushroomImage5.remove();
            health--;
            badSound.play();
        }
        myAnimation.updatePosition('up');
        myAnimation.drawAnimation('walk'); 

    }
    else if(kb.pressing('s'))
    {
        if(myAnimation.isColliding(scareCrow))
        {
            myAnimation.drawAnimation('idle');
            myAnimation.updatePosition('idle');
            
        }  
        else if(myAnimation.isColliding(Pizza1Image))
        {
            Pizza1Image.remove();
            points++;
            goodSound.play();
        }
        else if(myAnimation.isColliding(Pizza2Image))
        {
            Pizza2Image.remove();
            points++;
            goodSound.play();
        }
        else if(myAnimation.isColliding(Pizza3Image))
        {
            Pizza3Image.remove();
            points++;
            goodSound.play();
        }
        else if(myAnimation.isColliding(Pizza4Image))
        {
            Pizza4Image.remove();
            points++;
            goodSound.play();
        }
        else if(myAnimation.isColliding(Pizza5Image))
        {
            Pizza5Image.remove();
            points++;
            goodSound.play();
        }
        else if(myAnimation.isColliding(Pizza6Image))
        {
            Pizza6Image.remove();
            points++;
            goodSound.play();
        }
        else if(myAnimation.isColliding(Pizza7Image))
        {
            Pizza7Image.remove();
            points++;
            goodSound.play();
        }
        else if(myAnimation.isColliding(Pizza8Image))
        {
            Pizza8Image.remove();
            points++;
            goodSound.play();
        }
        else if(myAnimation.isColliding(Pizza9Image))
        {
            Pizza9Image.remove();
            points++;
            goodSound.play();
        }
        else if(myAnimation.isColliding(Pizza10Image))
        {
            Pizza10Image.remove();
            points++;
            goodSound.play();
        }
        else if(myAnimation.isColliding(poisonMushroomImage))
        {
            poisonMushroomImage.remove();
            health--;
            badSound.play();
        }  
        else if(myAnimation.isColliding(poisonMushroomImage2))
        {
            poisonMushroomImage2.remove();
            health--;
            badSound.play();
        }  
        else if(myAnimation.isColliding(poisonMushroomImage3))
        {
            poisonMushroomImage3.remove();
            health--;
            badSound.play();
        }  
        else if(myAnimation.isColliding(poisonMushroomImage4))
        {
            poisonMushroomImage4.remove();
            health--;
            badSound.play();
        }  
        else if(myAnimation.isColliding(poisonMushroomImage5))
        {
            poisonMushroomImage5.remove();
            health--;
            badSound.play();
        }
        myAnimation.updatePosition('down');   
        myAnimation.drawAnimation('walk');        
    }
    else
    {
        myAnimation.drawAnimation('idle');
    } 
    fill(100, 252, 169);
    textSize(24);
    textFont(myFont);
    text("Score:" + points, 350, 50);
    if(points == 10)
    {
        text("You win!", width/2, height/2);
    }
    fill(100, 252, 169);
    textSize(24);
    textFont(myFont);
    text("Health:" + health, 700, 50);
    if(health == 0)
    {
        text("You lose!", width/2, height/2);
    }
}

function timeUp()

{
    myTime--;
    if(myTime < 0)
    {
        // reset
        text("You Lose!")
    }
    //myTime -= 1;
    //myTime = myTime - 1;
}

function changeAnimation()

{
    i++;
    if(i > walkArray.length-1)
    {
        // reset
        i = 0;
    }

}