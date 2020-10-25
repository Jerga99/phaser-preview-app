
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

// We need to wait until FB Instant Games SDK is loaded
if (process.env.FB_ENV || process.env.NODE_ENV === 'production') {
  FBInstant.initializeAsync().then(function() {
    new Phaser.Game(config);
  })
} else {
  new Phaser.Game(config);
}
