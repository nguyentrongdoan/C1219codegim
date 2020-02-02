/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, size){
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;

    this.getHeroElement = function(){
        return '<img width="'+ this.size + '"' +
            ' height="'+ this.size + '"' +
            ' src="' + this.image +'"' +
            ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    };

    this.moveRight = function(){
        this.left += 20;
        console.log('ok: ' + this.left);
    }

    this.moveDow = function(){
        this.top += 20;
        console.log('ok: ' + this.top);
    }



}

let hero = new Hero('pikachu.png', 20, 30, 200);

function start(){

    if(hero.left === window.innerHeight){
            hero.moveDow();
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 500)



}


start();