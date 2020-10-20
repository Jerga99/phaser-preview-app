import Phaser from 'phaser';

class PlayScene extends Phaser.Scene {

  constructor() {
    super('PlayScene');
  }

  preload () {
    debugger
    this.load.image('sky', 'assets/sky.png');
  }

  create () {
    this.add.image(400, 300, 'sky');
  }
}

export default PlayScene;
