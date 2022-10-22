let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let novile = document.querySelector('.novile');
let main = document.querySelector('.main');

window.onscroll = ()=>{
    let value = scrollY;
    stars.style.left = value+'px';
    moon.style.top = value*4  +'px';
    mountains3.style.top = value*2  +'px';
    mountains4.style.top = value*1.5  +'px';
    river.style.top = value  +'px';
    boat.style.top = value  +'px';
    boat.style.left = value*3+'px';
    if(value < 100){
        novile.style.fontSize = value+'px';
    }else{
        novile.style.position = 'fixed';
        if(value > 670){
            novile.style.display = 'none';
        }else{
            novile.style.display = 'block';
        }

        if(value >= 175){
            main.style.background = 'linear-gradient(#4b9eb1 ,#10001f)';
        }else{
            main.style.background = 'linear-gradient(#200016 ,#10001f)';
        }
    }
}