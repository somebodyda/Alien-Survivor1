Game.prototype.checkCollisions = function(){
  var collisions = 0;
	this.levels.currentLevel.forEach(function(block){
		var collidesRight = this.character.x + this.character.size >= block.x;
		var collidesLeft = this.character.x <= block.x + block.size;
		var collidesTop = this.character.y <= block.y + block.size;
    var collidesBottom = this.character.y + this.character.size >= block.y;
    
    this.character.collisionBottom = this.character.y + this.character.size >= block.y && this.character.y + this.character.size <= block.y+30;
    
		if (collidesBottom && collidesLeft && collidesRight && collidesTop) {
      if(this.character.collisionBottom && this.character.ySpeed >= 0 && this.character.x + this.character.size > block.x+10 && this.character.x <= block.x + block.size -15){
				if(this.character.jumped){
					this.hitGroundSound.play();
				}
				this.character.jumped = false;
        this.character.y = block.y - this.character.size;
        this.time = 0
				this.collision = true;
				this.character.collisionRight = false;
      }else if(this.character.x + this.character.size -5 >= block.x && this.character.x + this.character.size <= block.x + 15){
				this.character.collisionRight = true;
      }else if(this.character.x +5 <= block.x + block.size && this.character.x >= block.x + block.size -15){
				this.character.collisionLeft = true;
			}else if(this.character.y <= block.y + block.size && this.character.y >= block.y + block.size -15){
				this.ySpeed = 0;
				this.time = 0;
			}
			collisions++;
		}else{
			this.collision = false;
		}
	}.bind(this))

	this.levels.currentEnemies.forEach(function(enemy){
		var collidesRight = this.character.x + this.character.size >= enemy.x + 20;
		var collidesLeft = this.character.x <= enemy.x + 42;
		var collidesTop = this.character.y <= enemy.y + 45;
    var collidesBottom = this.character.y + this.character.size >= enemy.y ;
    
		if (collidesBottom && collidesLeft && collidesRight && collidesTop && !this.character.dying) {
			this.character.dying = true;
			
		}
	}.bind(this))

	this.levels.currentMovingBlocks.forEach(function(block){
		var collidesRight = this.character.x + this.character.size >= block.x;
		var collidesLeft = this.character.x <= block.x + block.size;
		var collidesTop = this.character.y <= block.y + block.size;
    var collidesBottom = this.character.y + this.character.size >= block.y;
    
    this.character.collisionBottom = this.character.y + this.character.size >= block.y && this.character.y + this.character.size <= block.y+20;
    
		if (collidesBottom && collidesLeft && collidesRight && collidesTop) {
      if(this.character.collisionBottom && this.character.ySpeed >= 0){
				if(this.character.jumped){
					this.hitGroundSound.play();
				}
				if(block.movingRight){
					this.character.x += 2;
				}else{
					this.character.x -= 2;
				}
				this.character.jumped = false;
        this.character.y = block.y - this.character.size;
        this.time = 0
				this.collision = true;
				this.character.collisionRight = false;
      }else if(this.character.x + this.character.size -5 >= block.x && this.character.x + this.character.size <= block.x + 10){
				this.character.collisionRight = true;
      }else if(this.character.x +5 <= block.x + block.size && this.character.x >= block.x + block.size -10){
				this.character.collisionLeft = true;
			}else if(this.character.y <= block.y + block.size && this.character.y >= block.y + block.size -15){
				this.ySpeed = 0;
				this.time = 0;
			}
			collisions++;
		}else{
			this.collision = false;
		}
	}.bind(this))
	

	if(collisions === 0){
		this.character.collisionRight = false;
		this.character.collisionLeft = false;
		this.character.jumped = true;
	}

	if(!this.collision){
		this.time += 1;
		this.character.ySpeed = this.character.gravity * this.time;
		this.character.y += this.character.ySpeed;
	}
	if(this.character.y > this.canvas.height)	{
		this.deathSound.play();
		this.fadingScreen = true;
		
	}
	if(this.character.x + this.character.size > this.canvas.width){
		this.character.x = this.levels.nextLevel(this);
		this.character.y = 300;
	}
	
}