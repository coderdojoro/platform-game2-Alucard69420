// @ts-check
class Hero extends Phaser.GameObjects.Sprite {
    keyLeft;
    keyRight;

    herostate="idle";
    animState="idle";
    constructor(scene, x, y) {
        super(scene, x, y, "mage");
        scene.add.existing(this);
        scene.physics.add.existing(this);
        if (!(this.body instanceof Phaser.Physics.Arcade.Body)) {
            return;
        }
        this.body.setCollideWorldBounds(true);
        this.body.setSize(30, 51)
        this.body.setOffset(70, 57)
        this.anims.play('hero-idle');
        this.body.setDragX(700);

        this.keyLeft = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        this.keyRight = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);


    }

    preUpdate(time, delta) {
        super.preUpdate(time, delta);

        if (!(this.body instanceof Phaser.Physics.Arcade.Body)) {
            return;
        }

        if(this.keyLeft.isUp && this.keyRight.isUp) {
        this.body.setAccelerationX(0);
        this.herostate="idle";

        }
        if (this.keyLeft.isDown) {
            // this.body.setVelocityX(-500);
            this.body.setMaxVelocity(700 ,400);
            this.body.setAccelerationX(-500);
            this.setFlipX(true);
            this.herostate="walk"
        }
        if (this.keyRight.isDown) {
            // this.body.setVelocityX(500);
            this.body.setMaxVelocity(700 ,400);
            this.body.setAccelerationX(500);
            this.setFlipX(false);
            this.herostate="walk"
        }
if (this.herostate == "idle" && this.animState != 'idle'){
    this.anims.play("hero-idle");
    this.animState="idle"

}
if (this.herostate == "walk" && this.animState != "walk"){
    this.anims.play("hero-walk");
    this.animState="walk"
}



    }


}
export default Hero;