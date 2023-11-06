export default class Game extends Phaser.Scene {
    constructor() {
        super({
            key: 'Game'
        })
    }

    preload() {
        console.log("Inside the preload function");
    }

    create() {
        console.log("Inside the create function");
    }

    update() {
        
    }
}