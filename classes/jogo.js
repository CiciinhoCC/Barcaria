class Jogo{
    constructor(){
        this.cycle = 0;
        this.ilhas = [];
        this.gamestate = 1;
    }
    rodar(){
        this.cycle += 1
        barco.movimento();
        barco2.movimento();

        barco.barra_update();
        barco2.barra_update();
        
        //detecta colisão
        for(var i = 0; i < barco.bolas.length; i++){
            if(barco.bolas[i].collide(barco2.sprite)){
                barco2.vida -= Math.random()*30 + 10
                barco.bolas[i].remove();
            }
        }
        for(var i = 0; i < barco2.bolas.length; i++){
            if(barco2.bolas[i].collide(barco.sprite)){
                barco.vida -= Math.random()*30 + 10
                barco2.bolas[i].remove();
            }
        }
        for(var i = 0; i < this.ilhas.length; i++){
            if(this.ilhas[i].collide(barco2.sprite)){
                barco2.vida -= 100;
            }
        }
        for(var i = 0; i < this.ilhas.length; i++){
            if(this.ilhas[i].collide(barco.sprite)){
                barco.vida -= 100
            }
        }
        
        // mexe as bolas
        for(var i = 0; i < barco.bolas.length; i++){
            barco.bolas[i].position.x += barco.bolas[i].vetor.x;
            barco.bolas[i].position.y += barco.bolas[i].vetor.y;

            barco.bolas[i].vida += 1;
            if(barco.bolas[i].vida > 100){
                barco.bolas[i].remove();
            }
        } 
        for(var i = 0; i < barco2.bolas.length; i++){
            barco2.bolas[i].position.x += barco2.bolas[i].vetor.x;
            barco2.bolas[i].position.y += barco2.bolas[i].vetor.y;

            barco2.bolas[i].vida += 1;         
            if(barco2.bolas[i].vida > 100){
                barco2.bolas[i].remove();
            }
        }

        //cria as ilhas
        if(this.cycle >= 1000 + (((Math.random())*2)-1)*50){
            this.cycle = 0;
            this.ilhas[this.ilhas.length] = createSprite(1000, Math.random()*960 + 40,80,80);
            this.ilhas[this.ilhas.length -1].addImage(ilhaImg[Math.floor(Math.random()*5)])
        }else{this.cycle += 1;}

        for(var i = 0; i < this.ilhas.length; i++){
            if(this.ilhas[i].position.x < 0){
                this.ilhas[i].remove();
            }else{this.ilhas[i].position.x += -1;}
        }
    }
}