class Monster extends Phaser.Scene {
        constructor() {
            super("monsterScene");
            this.my = {sprite: {}}; // Create an object to hold sprite bindings
    
            // Create constants for the monster location
            this.bodyX = 300;
            this.bodyY = 350;
        }
    
        // Use preload to load art and sound assets before the scene starts running.
        preload() {
            // Assets from Kenny Assets pack "Monster Builder Pack"
            // https://kenney.nl/assets/monster-builder-pack
            this.load.setPath("./assets/");
    
            // Load sprite atlas
            this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
            
            // update instruction text
            document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>';
        }
    
        create() {
            let my = this.my;   // create an alias to this.my for readability
    
            // Create the main body sprite
            my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenA.png");
            my.sprite.leg1 = this.add.sprite(this.bodyX - 20, this.bodyY + 130, "monsterParts", "leg_greenC.png");
            my.sprite.leg2 = this.add.sprite(this.bodyX + 60 , this.bodyY + 130 , "monsterParts", "leg_greenC.png");
            my.sprite.arm1 = this.add.sprite(this.bodyX+110, this.bodyY+70, "monsterParts", "arm_greenD.png");
            my.sprite.arm2 = this.add.sprite(this.bodyX-110, this.bodyY+70, "monsterParts", "arm_greenD.png");
            my.sprite.arm2.flipX = true;
            my.sprite.eye1 = this.add.sprite(this.bodyX , this.bodyY-30, "monsterParts", "eye_angry_blue.png");
            my.sprite.horn1 = this.add.sprite(this.bodyX+10, this.bodyY-85, "monsterParts", "detail_dark_horn_small.png");
            my.sprite.smile = this.add.sprite(this.bodyX, this.bodyY+30, "monsterParts", "mouthB.png");
            my.sprite.happy = this.add.sprite(this.bodyX, this.bodyY+30, "monsterParts", "mouth_closed_teeth.png");
            my.sprite.fang = this.add.sprite(this.bodyX, this.bodyY+30, "monsterParts", "mouthC.png");
            my.sprite.smile.visible = false;
            my.sprite.fang.visible = false;
        }       
    
        update() {
            let my = this.my;    // create an alias to this.my for readability
            
            this.input.keyboard.on('keydown-S', () => {
                my.sprite.smile.visible = true;
                my.sprite.fang.visible = false;
                my.sprite.happy.visible = false;          
            });
        
            this.input.keyboard.on('keydown-F', () => {
                my.sprite.smile.visible = false;
                my.sprite.fang.visible = true;
                my.sprite.happy.visible = false;         
            });     
            
            this.input.keyboard.on('keydown-A', () => {
                const object = { body: my.sprite.body,leg1: my.sprite.leg1,leg2: my.sprite.leg2,arm1: my.sprite.arm1,arm2: my.sprite.arm2, eye1: my.sprite.eye1, smile: my.sprite.smile, happy: my.sprite.happy, fang: my.sprite.fang, horn: my.sprite.horn1 };
        
                for (const property in object) {
                    object[property].x -= 1;                          
                }
            });
        
            this.input.keyboard.on('keydown-D', () => {
                const object = { body: my.sprite.body,leg1: my.sprite.leg1,leg2: my.sprite.leg2,arm1: my.sprite.arm1,arm2: my.sprite.arm2, eye1: my.sprite.eye1, smile: my.sprite.smile, happy: my.sprite.happy, fang: my.sprite.fang, horn: my.sprite.horn1 };
        
                for (const property in object) {
                    object[property].x += 1;                                      
                }
            });
        }    
    }