
function encriptar(){
    var textarea = document.querySelector("#area_texto_entrada").value;

    if (textarea == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Debes escribir un texto a Encriptar',
        });
    }else{
        var textoCifrado = textarea.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
        document.querySelector("#area_texto_salida").value = textoCifrado;
        document.querySelector("#area_texto_entrada").value = "";
    }

}

function copia_portapapeles(){
    var content = document.getElementById('area_texto_salida');
    content.select();
    document.execCommand('copy');

    document.querySelector("#area_texto_salida").value = "";
    document.querySelector("#area_texto_entrada").value = "";

    Swal.fire({
        icon: 'success',
        title: 'Copiado...'
    })
}

function desencriptar(){ 
    var texto = document.querySelector("#area_texto_entrada").value; 
    var textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u"); 
    
    document.querySelector("#area_texto_salida").value = textoCifrado; 
    document.querySelector("#area_texto_entrada").value="";
}

