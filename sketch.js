var barco, barco2, barcoImg;
var jogo;
var fundo, fundoImg;
var bolaImg;
var ilhaImg = [];

function preload(){
    barcoImg = loadImage("./desenho/navio.png");
    fundoImg = loadImage("./desenho/fundo.png");
    bolaImg = loadImage("./desenho/bola.png");
    ilhaImg[0] = loadImage("./desenho/ilha1.png");
    ilhaImg[1] = loadImage("./desenho/ilha2.png");
    ilhaImg[2] = loadImage("./desenho/ilha3.png");
    ilhaImg[3] = loadImage("./desenho/ilha4.png");
    ilhaImg[4] = loadImage("./desenho/ilha5.png");
}

function setup(){
    fundo = createSprite(500,500,2000,1000);
    fundo.addImage(fundoImg);
    barco = new Barco(1);
    barco2 = new Barco(2);
    jogo = new Jogo();
    createCanvas(1000,1000);
}

function draw(){
    if(jogo.gamestate == 1){
        jogo.rodar();
        background("blue");

        fundo.position.x += -1 * jogo.gamestate
        if(fundo.position.x < 0){
            fundo.position.x = 1000
        }

    }
    if(jogo.gamestate == 0){
        if(barco.morto === 1 + jogo.gamestate){
            alert("Parabéns, Player 2! Você ganha nada :)")
        }
        if(barco2.morto === 1 + jogo.gamestate){
            alert("Parabéns, Player 1! Você ganha nada :)")
        }
        jogo.gamestate = 2;
    }
    
    drawSprites();
}

function keyPressed(){
    if(barco.cooldown === 200){    
        if(keyCode === 81){
            barco.shoot(-1);
        }
        if(keyCode === 69){
            barco.shoot(1);
        }
    }
    if(barco2.cooldown === 200){
        if(keyCode === 85){
            barco2.shoot(-1);
        }
        if(keyCode === 79){
            barco2.shoot(1);
        }
    }
}