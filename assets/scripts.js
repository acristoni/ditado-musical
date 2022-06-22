var lugar;
const start = document.getElementById('comecar') //botao para começar

/*****PEGA VARIAVEIS****/
const do6 = '?'
var re = document.getElementById('espaco01')
var mi = document.getElementById('linha11')
var fa = document.getElementById('espaco11')
var sol = document.getElementById('linha21')
var la = document.getElementById('espaco21')
var si = document.getElementById('linha31')
var do7 = document.getElementById('espaco31')
var re2 = document.getElementById('linha41')
var mi2 = document.getElementById('espaco41')
var fa2 = document.getElementById('linha51')

/*****"BOTOES" DO PENTAGRAMA******/
re.addEventListener("click",playRe)
mi.addEventListener("click",playMi)
fa.addEventListener("click",playFa)
sol.addEventListener("click",playSol)
la.addEventListener("click",playLa)
si.addEventListener("click",playSi)
do7.addEventListener("click",playDo)

/****FUnÇÕES COM O SOM DE CADA NOTA *****/
function playRe () {
    var reSom = document.getElementById('re');
    criarNota(re);
    reSom.play();
}

function playMi () {
    var miSom = document.getElementById('mi')
    criarNota(mi);
    miSom.play()    
}

function playFa () {
    var faSom = document.getElementById('fa')
    criarNota(fa);
    faSom.play()    
}

function playSol () {
    var solSom = document.getElementById('sol')
    criarNota(sol);
    solSom.play()    
}

function playLa () {
    var laSom = document.getElementById('la')
    criarNota(la);
    laSom.play()    
}

function playSi () {
    var siSom = document.getElementById('si')
    criarNota(si);
    siSom.play()    
}

function playDo () {
    var doSom = document.getElementById('do7')
    criarNota(do7);
    doSom.play()    
}

/******Função para começar o App *****/
start.addEventListener('click', () => {
    alert('Agora vamos começar!')
})

/****** ACRESCENTAR FIGURA MUSICAL NO PENTAGRAMA ******/

function criarNota (lugar) {
    var nota = document.createElement('img')
    nota.src = "./src/img/seminima.svg"
    nota.id = 'seminima'

    lugar.appendChild(nota)
}



