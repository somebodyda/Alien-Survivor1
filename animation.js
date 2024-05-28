function Animation(){
  this.canvas = document.querySelector("canvas");
  this.ctx = this.canvas.getContext("2d");
  this.spriteSheet = new Image();
  this.spriteSheet.src = "./images/walking.png";
  this.frameIndex = 0;
  this.frameSpeed = 6;
  this.speedCounter = 0;
  this.amountOfFrames;
}



Animation.prototype.frameIndexCounter = function(){
  this.speedCounter++;
    if(this.speedCounter === this.frameSpeed){
    if(this.frameIndex < this.amountOfFrames-1){
      this.frameIndex ++;
      this.speedCounter = 0;
    }else{
      this.frameIndex = 0;
      this.speedCounter = 0;
    }
  }
}

Animation.prototype.renderChar = function(game){
  this.frameIndexCounter();
  this.ctx.drawImage(
    this.spriteSheet,
    this.frameIndex * 200,
    0,
    200,
    200,
    game.character.x,
    game.character.y,
    52,
    52
  )
}

Animation.prototype.renderEnemy = function(enemy){
  this.frameIndexCounter();
  this.ctx.drawImage(
    this.spriteSheet,
    this.frameIndex * 200,
    0,
    200,
    200,
    enemy.x,
    enemy.y,
    52,
    52
  )
}