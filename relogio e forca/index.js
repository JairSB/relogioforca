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
        forca.innerHTML='';
        vago.forEach(x=>{
            forca.innerHTML += x + ' ' ;
        })
    }
function vagando() {
        for(let espaco =0; espaco < passodois.length;espaco++){
            vago.push('_');
        }
    }
function refazendo(){
    vago =[];
    seleciona();
    vagando();
    verificalimpa();
    vida=-1;
}

function mecanica(a){
    let chutar = palavra_decobrir.indexOf(a);
    if(chutar>= 0){
        palavra_decobrir[chutar]=9;
        vago[chutar]=a;
        verificalimpa();
        let aindavago = vago.indexOf('_');
        if(aindavago < 0){
            if(confirm('vc ganhou, quer jogar de novo?')==true){
                refazendo();
            }
        }
    }else{
        vida++
        if(vida >= corpo.length){
            if(confirm("Faliceu...mais uam ??")==true){
             refazendo();
            }
        }else
        dfunto.src= corpo[vida];
    }
}
    

seleciona();
vagando();
verificalimpa();

document.addEventListener('keypress',(chave)=>{
    mecanica(chave.key);
})

tenta.addEventListener('click',()=>{
    mecanica(letra.value)
    letra.value="";
})
reini.addEventListener('click',()=>{
refazendo()
})