class Barco{
    constructor(p){
        switch(p){
            case 1: this.x = 250; this.y = 250; this.keys = {up: "w", left: "a", right: "d", shootleft: "q", shootright: "e"}; this.colour = "red"; break;
            case 2: this.x = 750; this.y = 750; this.keys = {up: "i", left: "j", right: "l", shootleft: "u", shootright: "o"}; this.colour = "blue"; break;
        }
        this.vida = 100;
        this.cooldown = 200;
        this.bolas = [];
        this.morto = 0
        
        this.circulo = createSprite(100,100,45,45);
        this.circulo.shape = "ellipse";
        this.circulo.shapeColor = this.colour;

        this.sprite = createSprite(this.x,this.y,40,20);
        this.sprite.addImage(barcoImg);
        this.sprite.scale = 0.2

        this.barra = createSprite(0,456,100,5);
        this.barra.shapeColor = "red"

        this.barra_cd = createSprite(0,456,100,5);
        this.barra_cd.shapeColor = "white"
    }

    movimento(){
        if(keyDown(this.keys.right)){
            this.sprite.rotation += jogo.gamestate;
        }
        if(keyDown(this.keys.left)){
            this.sprite.rotation -= jogo.gamestate;
        }
        if(keyDown(this.keys.up)){
            this.vetor = p5.Vector.fromAngle(radians(this.sprite.rotation),jogo.gamestate);
            this.sprite.position.x += this.vetor.x;
            this.sprite.position.y += this.vetor.y;
        }
    }
    shoot(dir){
            this.bolas[this.bolas.length] = createSprite(this.sprite.position.x, this.sprite.position.y, 5, 5);
            this.bolas[this.bolas.length -1].rotation = this.sprite.rotation + (90*dir);
            this.bolas[this.bolas.length -1].vetor = p5.Vector.fromAngle(radians(this.bolas[this.bolas.length -1].rotation),5 * jogo.gamestate);
            this.bolas[this.bolas.length -1].addImage(bolaImg);
            this.bolas[this.bolas.length -1].scale = 2;
            this.bolas[this.bolas.length -1].vida = 0;
            this.cooldown = 0;
    }

    barra_update(){
        this.barra.position.x = this.sprite.position.x;
        this.barra.position.y = this.sprite.position.y + 50;
        this.barra.width = this.vida
        if(this.vida < 100){
            this.vida += 0.05
        }

        this.barra_cd.position.x = this.sprite.position.x;
        this.barra_cd.position.y = this.sprite.position.y + 60;
        this.barra_cd.width = this.cooldown / 2
        if(this.cooldown < 200){
            this.cooldown++;
        }

        this.circulo.position = this.sprite.position

        if(this.vida <= 0){
            this.morto = 1
            jogo.gamestate = 0
        }
    }
}