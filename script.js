const padron = document.querySelector(".padron");
const copia = document.querySelector(".copia");
const copy = document.querySelector(".padron",".copia");


function btnEncriptar() {
    const textoEncriptado = encriptar(padron.value);
    copia.value = textoEncriptado;
    padron.value = "";

} 

function encriptar(stringEncriptado) {
    let matrizCódigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for(let i = 0; i < matrizCódigo.length; i++) {
        if(stringEncriptado.includes(matrizCódigo[i][0])) {
            stringEncriptado = stringEncriptado.replaceAll(matrizCódigo[i][0],matrizCódigo[i][1]);
        }
    }

    return stringEncriptado
}

function btnDesencriptar() {
    const textoEncriptado = desencriptar(padron.value);
    copia.value = textoEncriptado;
    padron.value = "";
} 

function desencriptar(stringDesencriptado) {
    let matrizCódigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for(let i = 0; i < matrizCódigo.length; i++) {
        if(stringDesencriptado.includes(matrizCódigo[i][1])) {
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCódigo[i][1],matrizCódigo[i][0]);
        }
    }

    return stringDesencriptado
}

function btnCopiar() {
    const textoEncriptado = document.getElementById("copiado").value;
    navigator.clipboard.writeText(textoEncriptado);
} 



