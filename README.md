# SKULL JUMPER

## Description
Skull jumper is a game where the objective is to control the main character and make him go from one side of the screen to the other. On the way you will come accross challanges like jumping over big drops.

![Screenshot (19)](https://github.com/Gabriel0liver/skull-jumper/assets/40140789/22d467b0-bccf-4658-a81e-961b507d5cca)
![Screenshot (21)](https://github.com/Gabriel0liver/skull-jumper/assets/40140789/ff294199-9b07-4542-8e06-44323ee426da)
![Screenshot (22)](https://github.com/Gabriel0liver/skull-jumper/assets/40140789/bd5d4ef5-dcf7-4c7b-9eaf-1b5db2412a84)

## MVP (DOM - CANVAS)
*CANVAS*, The mvp is a game where the player can move and jump


## Backlog
- Enemies
- Multiple levels
- Sprites
- Moving platforms


## Data structure
### game.js
```
Game(){
  this.canvas;
  this.ctx;
}

Game.prototype.startGame(){
}

Game.prototype.startLoop(){
  loop()
}

Game.prototype.updateAll(){
}

Game.prototype.clearAll(){
}

Game.prototype.renderAll(){
}

Game.prototype.checkAllCollisons(){
}

Game.prototype.finishGameCallback(){
}
```

### character.js
```
Character(){
  this.x;
  this.y;
  this.size;
  this.canvas;
  this.ctx;
}

Character.prototype.update(){
}

Character.prototype.render(){
}

Character.prototype.move(){
}

Character.prototype.checkCollisionWithBlock(block){
}

Character.prototype.death(){
}

Character.prototype.win(){
}

Character.prototype.gravity(){
}

Character.prototype.jump(){
}


```

### block.js
```
Block(){
  this.x;
  this.y;
  this.size;
  this.canvas;
  this.ctx;
}

Block.prototype.render(){
}
```


## States y States Transitions
```
- splashScreen()
  - destroyGameOver(if)
  - buildSplash()
  - addEventListener(startGame)
  
  
- starGame()
  - destroySplash()
  - destroyGameOver()
  - create new Game()
  - game.start()
  
  
- gameOver()
  - destroyGame()
  - buildGameOver()
  - addEventListener( if splashScreen, else startGame) 
```

## Task
- Main - buildDom
- Main - buildSplash
- Main - addEventListener
- Main - destroySplash
- Main - 3 states transitions
- Game - buildDom
- Game - TimeOut test
- Game - 3 states transitions
- Main - GameWon
- Main - destroy Game
- Main - GameWon RESTART
- Main - removeGameWon
- Game - restartGame
- Game - addEventListener
- Block - create
- Game - create player
- Player - create
- Player - move
- Player - gravity
- Player - collision
- Player - jump
- Game - check win

## Links


### Trello
[Link url](https://trello.com)


### Git
URls for the project repo and deploy
[Link Repo](https://github.com/Gabriel0liver/skull-jumper)
[Link Deploy](https://Gabriel0liver.github.io/skull-jumper/)


### Slides
URls for the project presentation (slides)
[Link Slides.com](http://slides.com)
