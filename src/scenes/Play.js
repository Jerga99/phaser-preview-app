import Phaser from 'phaser';

class PlayScene extends Phaser.Scene {

  constructor() {
    super('PlayScene');
  }

  preload () {
    this.load.image('sky', 'assets/sky.png');
    this.load.image('player', 'assets/player.png');
    this.load.image('bomb', 'assets/bomb.png');
  }

  create () {
    this.add.image(400, 300, 'sky');
    this.speed = 500;
    this.player = this.physics.add.sprite(0, 0, 'player').setOrigin(0);
    this.player.setCollideWorldBounds(true);

    const bombs = this.physics.add.group();
    bombs.createMultiple({
      classType: Phaser.Physics.Arcade.Sprite,
      quantity: 5,
      key: 'bomb',
      active: true,
      setXY: {
        x: 400,
        y: 300,
        stepX: 20
      }
    });

    bombs.getChildren().forEach(b => {
      b.setCollideWorldBounds(true)
      b.body.setBounce(1);
      b.body.setVelocityX(Phaser.Math.Between(-500, 500));
      b.body.setVelocityY(Phaser.Math.Between(-500, 500));
    })

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
