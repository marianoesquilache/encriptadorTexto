const botEncriptar = document.getElementById("botEncriptar");
const botDesencriptar = document.getElementById("botDesencriptar");
const botCopiar = document.getElementById("botCopiar");
const textArea = document.getElementById("txtarea");
const boxResultado = document.getElementById("boxResult");

botEncriptar.addEventListener("click",mostrarEncriptacion);
botDesencriptar.addEventListener("click",mostrarDesencriptacion);
botCopiar.addEventListener("click",copiarTexto);

function encriptar(texto){
    let textoEncriptado = texto.replace(/e/g,"enter").replace(/i/g,"imes").replace(/a/g,"ai").replace(/o/g,"ober").replace(/u/g,"ufat")
    return textoEncriptado;
}

function desencriptar(texto){
    let textoDesencriptado = texto.replace(/enter/g,"e").replace(/imes/g,"i").replace(/ai/g,"a").replace(/ober/g,"o").replace(/ufat/g,"u")
    return textoDesencriptado;    
}

function mostrarEncriptacion(){
    let textoAEncriptar = textArea.value;
    if(!textoNoApto(textoAEncriptar)){
    boxResultado.textContent=encriptar(textoAEncriptar);
    }else{
        alert("No uses mayúsculas ni caracteres especiales.")
        textArea.value ="";
    }
}

function mostrarDesencriptacion(){
    let textoADesencriptar = textArea.value;
    if(!textoNoApto(textoADesencriptar)){
        boxResultado.textContent=desencriptar(textoADesencriptar);
    }else{
        alert("No uses mayúsculas ni caracteres especiales.")
        textArea.value ="";
    }
}

function textoNoApto(string){
    const regex = /[A-Z!@#$%^&*()_+{}\[\]:;<>,.?~]/;
    return regex.test(string);
    
}

function copiarTexto(){
    let textoACopiar = boxResultado.textContent;
    return navigator.clipboard.writeText(textoACopiar);
}
