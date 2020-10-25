
import Phaser from "phaser";
import PlayScene from './scenes/Play';
import PreloadScene from './scenes/Preload';

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      debug: true
    }
  },
  scene: [ PreloadScene, PlayScene ]
};

new Phaser.Game(config);
