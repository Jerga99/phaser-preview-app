import Phaser from 'phaser';

class PlayScene extends Phaser.Scene {

  constructor() {
    super('PlayScene');
  }

  preload () {
    this.load.image('sky', 'assets/sky.png');
    this.load.image('player', 'assets/player.png')
  }

  create () {
    this.add.image(400, 300, 'sky');
    this.speed = 500;
    this.player = this.physics.add.sprite(400, 300, 'player');
    this.player.setCollideWorldBounds(true);

    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    const { up, down, left, right } = this.cursors;

    if (up.isDown) {
      this.player.setVelocityY(-this.speed);
      this.player.setVelocityX(0);
    } else if (down.isDown) {
      this.player.setVelocityY(this.speed);
      this.player.setVelocityX(0);
    } else if (left.isDown) {
      this.player.setVelocityX(-this.speed);
      this.player.setVelocityY(0);
    } else if (right.isDown) {
      this.player.setVelocityX(this.speed);
      this.player.setVelocityY(0);
    } else {
      this.player.setVelocity(0);
    }
  }
}

export default PlayScene;
