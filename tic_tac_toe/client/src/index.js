import Phaser from 'phaser';
import logoImg from './assets/logo.png';
import Game from "./scenes/game.js";

const config = {
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.FIT,
        width: 1200,
        height: 1000
    },
    scene: [
        Game
    ]
};

const game = new Phaser.Game(config);


// class MyGame extends Phaser.Scene
// {
//     constructor ()
//     {
//         super();
//     }

//     preload ()
//     {
//         //  This is an example of a bundled image:
//         this.load.image('logo', logoImg);

//         //  This is an example of loading a static image from the public folder:
//         this.load.image('background', 'assets/bg.jpg');
//     }
      
//     create ()
//     {
//         this.add.image(400, 300, 'background');

//         const logo = this.add.image(400, 150, 'logo');
      
//         this.tweens.add({
//             targets: logo,
//             y: 450,
//             duration: 1000,
//             ease: "Power2",
//             yoyo: true,
//             loop: -1
//         });
//     }
// }