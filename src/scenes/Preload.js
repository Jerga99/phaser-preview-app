import Phaser from 'phaser';

class PreloadScene extends Phaser.Scene {

  constructor() {
    super('PreloadScene');
  }

  // To setup App:
  // https://developers.facebook.com/apps/async/create/platform-setup/dialog/
  // 1. Just click to create a game and choose FB instant game
  // 2. ID should be displayed
  //

  // App setup example:
  // https://developers.facebook.com/docs/games/instant-games/getting-started/quickstart#app-setup

  // To test App:
  // // https://www.facebook.com/embed/instantgames/YOUR_GAME_ID/player?game_url=https://localhost:8080
  preload() {
    this.load.image('sky', 'assets/sky.png');
    this.load.image('player', 'assets/player.png');
    this.load.image('bomb', 'assets/bomb.png');

    this.load.on('progress', (value) => {
      FBInstant.setLoadingProgress(value * 100);
      if (value  === 1) {
        FBInstant.startGameAsync().then(() => {
          this.startGame();
        })
      }
    });
  }

  startGame () {
    this.scene.start('PlayScene');
  }
}

export default PreloadScene;
