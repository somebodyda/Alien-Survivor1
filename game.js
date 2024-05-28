"use strict";

function Game(){
	this.collision = false;
	this.time = 0;
}


Game.prototype.start = function () {
	this.canvas = document.querySelector("canvas");
	this.ctx = this.canvas.getContext("2d");

	this.backGround = new Image();
	this.backGround.src = "./images/cloudBackground.png"

	this.bG1 = new Image();
	this.bG2 = new Image();
	this.bG3 = new Image();
	this.bG4 = new Image();

	this.bG1.src = "./images/bg1.png"
	this.bG2.src = "./images/bg2.png"
	this.bG3.src = "./images/bg3.png"
	this.bG4.src = "./images/bg4.png"

	this.canvas.width = 960;
	this.canvas.height = 540;

	this.createBlocks();
	this.createMovingBlocks();
	this.createEnemies();

	this.character = new Character();
	this.levels = new Levels(this);
	
	this.totalTime = 0;
	this.convertedTime;

	this.music = document.createElement("audio");
	this.jumpSound = document.createElement("audio");
	this.hitGroundSound = document.createElement("audio");
	this.deathSound = document.createElement("audio");
	this.music.src = ("./sounds/music.mp3");
	this.jumpSound.src = ("./sounds/jump.mp3");
	this.hitGroundSound.src = ("./sounds/hitGround.mp3");
	this.deathSound.src = ("./sounds/death.mp3");

	this.music.play();
	this.music.volume = 0.07;
	this.hitGroundSound.volume= 0.1;
	this.jumpSound.volume = 0.05;
	this.deathSound.volume = 0.1;
	this.music.loop = true;

	
	this.fadePosition = 0;
	this.fadingBlack = true;
	this.fadingScreen = false;

	this.levels.gameIsOver = false;
	
	
	this.startLoop();

	document.body.addEventListener('keydown', this.handleKeyDown.bind(this));
	document.body.addEventListener('keyup', this.handleKeyUp.bind(this));
}

Game.prototype.startLoop = function(){
	function loop(){
		this.renderAll();
		this.update();
		this.totalTime ++;
		this.convertedTime = this.convertTime(this.totalTime)
		if(!this.levels.gameIsOver){
		window.requestAnimationFrame(loop.bind(this));
		document.querySelector("p").innerHTML = "TIME "+this.convertedTime;
		document.querySelector("section").innerHTML = "LEVEL "+(this.levels.currentLevelIndex+1);
		}	
	}
	window.requestAnimationFrame(loop.bind(this));
}

Game.prototype.update = function(){
	this.movement();
	this.levels.moveEnemies(this);
	this.levels.moveBlocks();
	this.character.x += this.character.xSpeed;
	this.checkCollisions();
}

Game.prototype.renderAll = function () {
	this.ctx.fillStyle = "#DEE5E5";
	this.renderBackground();
	this.ctx.fillStyle = "#504F59";
	this.ctx.globalAlpha=0.85;
	this.levels.renderLevel();
	this.ctx.globalAlpha=1.0;
	this.levels.renderMovingBlocks();
	this.levels.renderEnemies(this);
	this.character.render(this);
	this.ctx.strokeStyle = "#504F59";
	this.ctx.fillStyle = "#504F59";
	if(this.fadingScreen){
		this.fadeScreen();
	}	
}	

Game.prototype.convertTime = function(time){
	time = Math.floor(time/60);
	var minutes = Math.floor(time/60);
	var seconds = time%60
	if(minutes<10){
		minutes = "0"+minutes;
	}
	if(seconds<10){
		seconds = "0"+seconds;
	}
	return minutes+":"+seconds;
}


Game.prototype.fadeScreen = function(){
	if(this.fadingBlack){
		this.fadePosition += 0.06
		this.ctx.globalAlpha = this.fadePosition;
		this.ctx.fillStyle = "#000000"
		this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height)
		this.ctx.globalAlpha = 1;
		if(this.fadePosition >= 0.98){
			this.fadePosition = 1;
			this.fadingBlack = false;
			if(true){
				this.character.y = 300;
				this.character.x = 0;
			}
		}
	}else{
		this.fadePosition -= 0.06
		this.ctx.globalAlpha = this.fadePosition;
		this.ctx.fillStyle = "#000000"
		this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height)
		this.ctx.globalAlpha = 1;
		if(this.fadePosition <= 0.2){
			this.fadePosition = 0;
			this.fadingScreen = false;
			this.fadingBlack = true;
		}
	}
}

Game.prototype.renderBackground = function(){
	this.ctx.drawImage(this.bG1,0, 0,);
	this.ctx.drawImage(this.bG2,this.character.x/300-5, 0,);
	this.ctx.drawImage(this.bG3,this.character.x/125-10, 0,);
	this.ctx.drawImage(this.bG4,this.character.x/80-10, 0,);
}