function iniciar(){
  interval = setInterval(watch,10);//seta um intervalo , como estamos mexendo com minutos o valor real é 1000
}

var parada;//variavel para controle de fluxo
function parar(){
  clearInterval(interval);//para o interval deixando ele da maneira que está
  parada = true;
}
function resetar(){
  if(parada != true){
    alert('Deve-se Parar Primeiro');//reseta o valor do cronometro alterando o valor da variavel de parada
  }else{
    min = 0;
    sec = 0;
    hor = 0;
    document.getElementById('watch').innerText = `00:00`//exibe na tela o intervalo
    parada = false
  }
}
var min = 0
var sec =0
var hor = 0

function watch(){
  sec++
  if(sec === 60){//verificar o se os segundos é são maior que 60
    min++;
    sec = 0;
  }
  if(min === 60){//verificar o se os minutos é são maior que 60
    hor++
    min = 0;
    sec = 0;
  }
  
  document.getElementById('watch').innerText = `0${min}:0${sec}`//exibe na tela o intervalo;

  if(sec >= 10){
    document.getElementById('watch').innerText = `0${min}:${sec}`
  }
  if(min >= 10){
    document.getElementById('watch').innerText = `${min}:0${sec}`
    if(sec >= 10){
      document.getElementById('watch').innerText = `${min}:${sec}`
    }
  }
  if(hor >= 10){
    document.getElementById('watch').innerText = `0${min}:0${sec}`
    if(sec >= 10){
      document.getElementById('watch').innerText = `${min}:${sec}`
    }
    
  }

}