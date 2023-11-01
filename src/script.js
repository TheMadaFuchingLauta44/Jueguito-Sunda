var config= {
    type: Phaser.AUTO,
    width: 832,
    height: 645,
    physics: {
      default: 'arcade',
      arcade:{
        gravity: {y: 300},
        debug: false
      }
    },

    scene: {
        preload: preload,
        create: create,
        update: update,
    }
}

var game = new Phaser.Game(config);

function preload(){
  this.load.image('sky', 'assets/Fondo.png');
  this.load.image('ground', 'assets/plat.png');
  this.load.image('star', 'assets/burga.png');
  this.load.image('bomb', 'assets/Mc.png');
  this.load.spritesheet('dude', 'assets/dude.png', {frameWidth: 32, frameHeight: 64});

}

function create(){
  this.add.image(416, 322, 'sky')

  platforms = this.physics.add.staticGroup();

  platforms.create(425, 568, 'ground').setScale(3).refreshBody();

  platforms.create(50, 400, 'ground')
  platforms.create(700, 300, 'ground')
  platforms.create(50, 200, 'ground')
  platforms.create(400, 50, 'ground')

  player = this.physics.add.sprite(100, 450, 'dude');

}
function update(){

}