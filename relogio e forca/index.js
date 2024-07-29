function mostrora(){
    setInterval(() => {
        let tmp = new Date()
        document.getElementById("Relogio").innerHTML=`
        ${tmp.getHours()}
        ${tmp.getMinutes()}
        ${tmp.getSeconds()}`
    }, 1000);
}
mostrora()

const pvras=['mamaco','gifara','vacalo','cujura'];
let reini = document.getElementById('reinicia');
let tenta= document.getElementById('texta');
let forca=document.getElementById('forca');
let dfunto=document.getElementById('vaidf')
let corpo=["imgs/ca.png","imgs/tro.png","imgs/bracos.png","imgs/pernas.png"]
let vida =-1;
var vago = [];
var passodois=0
let letra=document.getElementById('letra');
var palavra_decobrir =[]

function seleciona(){
    let passoum=Math.floor(Math.random()*pvras.length);
    console.log(pvras[passoum]);
    passodois= pvras[passoum];
    palavra_decobrir=passodois.split('');
    };
function verificalimpa(){
        forca.innerHTML="";
        vago.forEach(x=>{
            forca.innerHTML += x + ' ' ;
        })
    }
function vagando() {
        for(let espaco =0; espaco < passodois.length;espaco++){
            vago.push('_');
        }
    }
    

seleciona();
vagando();
verificalimpa();

tenta.addEventListener('click',()=>{
    let chutar = palavra_decobrir.indexOf(letra.value);
    let aindavago = vago.indexOf('_');
    console.log(aindavago);
    if(chutar>= 0){
        palavra_decobrir[chutar]=9;
        vago[chutar]=letra.value
        verificalimpa();
        if(aindavago < 0){
            if(confirm('vc ganhou, quer jogar de novo?')==true){
                seleciona();
                vagando();
                verificalimpa();
                vida = -1;
            }
        }
    }else{
        vida++
        if(vida >= corpo.length){
            if(confirm("Faliceu...mais uam ??")==true){
                seleciona();
                vagando();
                verificalimpa();
                vida = -1;
            }
        }else
        dfunto.src= corpo[vida];
    }
letra.value="";
})
reini.addEventListener('click',()=>{
    
seleciona();
vagando();
verificalimpa();
vida=-1;
})