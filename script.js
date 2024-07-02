/*Links dos botões*/
/*Id dos botões*/
var bt1 = document.getElementById('bt_1');
var bt2 = document.getElementById('bt_2');
var bt3 = document.getElementById('bt_3');
var bt4 = document.getElementById('bt_4');

bt1.addEventListener('click',(e)=>{
    location.href = "./energia-hidreletrica/hidro.html"
})
bt2.addEventListener('click',(e)=>{
    location.href = "./energia-decomposicao/bio.html"
})
bt3.addEventListener('click',(e)=>{
    location.href = "./energia-solar/solar.html"
})
bt4.addEventListener('click',(e)=>{
    location.href = "./energia-eolica/vento.html"
})