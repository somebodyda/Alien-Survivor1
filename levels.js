function Levels(game) {
  this.level1 = [game.block1, game.block2];
  this.level2 = [game.block3, game.block4, game.block5];
  this.level3 = [game.block3, game.block4, game.block6, game.block7];
  this.level4 = [game.block3, game.block4, game.block8];
  this.enemies4 = [game.enemy1];
  this.level5 = [game.block11, game.block12, game.block13, game.block14];
  this.enemies5 = [game.enemy3, game.enemy4, game.enemy5];
  this.level6 = [game.block9, game.block10, game.block4];
  this.enemies6 = [game.enemy2];
  this.level7 = [game.block9, game.block15, game.block16];
  this.enemies7 = [
    game.enemy6,
    game.enemy7,
    game.enemy8,
    game.enemy9,
    game.enemy10,
    game.enemy11,
  ];
  this.level8 = [game.block3, game.block4];
  this.movingBlocks8 = [game.movingBlock1];
  this.level9 = [game.block3, game.block6, game.block17, game.block18];
  this.movingBlocks9 = [game.movingBlock2];
  this.level10 = [game.block19, game.block20, game.block18];
  this.enemies10 = [game.enemy12, game.enemy13];
  this.movingBlocks10 = [game.movingBlock3];
  this.levelArray = [
    this.level1,
    this.level2,
    this.level3,
    this.level4,
    this.level5,
    this.level6,
    this.level7,
    this.level8,
    this.level9,
    this.level10,
  ];
  this.enemiesArray = [
    [],
    [],
    [],
    this.enemies4,
    this.enemies5,
    this.enemies6,
    this.enemies7,
    [],
    [],
    this.enemies10,
  ];
  this.movingBlocksArray = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    this.movingBlocks8,
    this.movingBlocks9,
    this.movingBlocks10,
  ];
  this.currentEnemies = [];
  this.currentMovingBlocks = [];
  this.currentLevelIndex = 0;
  this.characterX;
  this.characterY;
}

Levels.prototype.renderLevel = function () {
  this.currentLevel = this.levelArray[this.currentLevelIndex];
  this.currentLevel.forEach(function (block) {
    block.render();
  });
};

Levels.prototype.renderEnemies = function (game) {
  this.currentEnemies = this.enemiesArray[this.currentLevelIndex];
  this.currentEnemies.forEach(function (enemy) {
    enemy.render(game);
  });
};

Levels.prototype.renderMovingBlocks = function (game) {
  this.currentMovingBlocks = this.movingBlocksArray[this.currentLevelIndex];
  this.currentMovingBlocks.forEach(function (movingBlock) {
    movingBlock.render();
  });
};

Levels.prototype.moveEnemies = function () {
  this.currentEnemies.forEach(function (enemy) {
    enemy.move();
  });
};

Levels.prototype.moveBlocks = function () {
  this.currentMovingBlocks.forEach(function (movingBlock) {
    movingBlock.moveBlock();
  });
};

Levels.prototype.nextLevel = function (game) {
  this.currentLevelIndex++;
  if (this.currentLevelIndex > this.levelArray.length - 1) {
    this.gameIsOver = true;
    this.finishGame(game);
  }
  return 0;
};

Levels.prototype.finishGame = function (game) {
  this.gameOverCallback(game.convertedTime);
  game.totalTime = 0;
  game.music.pause();
};

Levels.prototype.onGameOverCallback = function (callback) {
  this.gameOverCallback = callback;
};
