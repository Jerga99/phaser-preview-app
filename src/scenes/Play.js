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
    this.physics.add.sprite(400, 300, 'player');
  }
}

export default PlayScene;
