Game.prototype.handleKeyDown = function (event) {
  if (event.key === "ArrowRight") {
    if (this.character.leftIsDown === false) {
      this.character.rightIsDown = true;
      this.character.rightLeftDown = false;
    } else if (this.character.leftIsDown === true) {
      this.character.rightLeftDown = true;
    }
  }

  if (event.key === "ArrowLeft") {
    if (this.character.rightIsDown === false) {
      this.character.leftIsDown = true;
      this.character.rightLeftDown = false;
    } else if (this.character.rightIsDown === true) {
      this.character.rightLeftDown = true;
    }
  }

  if (event.key === " ") {
    this.jump();
  }

  if (!isNaN(parseFloat(event.key)) && isFinite(event.key)) {
    this.levels.currentLevelIndex = parseFloat(event.key);
  }

  if (event.key === "p") {
    this.levels.nextLevel(this);
  }
};

Game.prototype.handleKeyUp = function (event) {
  if (event.key === "ArrowRight") {
    if (this.character.rightLeftDown) {
      this.character.leftIsDown = true;
      this.character.rightIsDown = false;
      this.character.rightLeftDown = false;
    } else {
      this.character.leftIsDown = false;
      this.character.rightIsDown = false;
    }
  }
  if (event.key === "ArrowLeft") {
    if (this.character.rightLeftDown) {
      this.character.leftIsDown = false;
      this.character.rightIsDown = true;
      this.character.rightLeftDown = false;
    } else {
      this.character.leftIsDown = false;
      this.character.rightIsDown = false;
    }
  }
};

Game.prototype.movement = function () {
  if (!this.character.rightIsDown && !this.character.leftIsDown) {
    this.character.xSpeed = 0;
  } else if (this.character.rightLeftDown) {
    this.character.xSpeed = 0;
  } else if (
    this.character.rightIsDown &&
    !this.character.collisionRight &&
    !this.character.dying
  ) {
    this.character.xSpeed = 7;
  } else if (
    this.character.leftIsDown &&
    !this.character.collisionLeft &&
    !this.character.dying
  ) {
    this.character.xSpeed = -7;
  } else {
    this.character.xSpeed = 0;
  }
};

Game.prototype.jump = function () {
  if (!this.character.jumped && !this.character.dying) {
    this.jumpSound.play();
    this.character.y += -10;
    this.time = -30;
    this.character.jumped = true;
  }
};
