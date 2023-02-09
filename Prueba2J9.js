// 2. Solicita una frase al usuario y contando los espacios que tiene, indica de cuántas palabras consta (debes presuponer que la frase tiene un único espacio entre palabras).

function frase() {

    var frase = prompt("Introduzca una frase");
    const espacio = " "
    var contador = 1;

// quiero que recorra todo el length de la frase con el bucle for, y cada vez que encuentre un espacio, sume con el if

    for (let i = 0; i < frase.length; i++) {
        if (frase[i] == espacio)
        contador++  
    }   

    alert("Hay un total de "+ contador + " de espacios")
}

// Extra: Supón que el usuario puede equivocarse y poner más de un espacio entre palabras, nuestro programa debe seguir contando bien las palabras.

function extra() {

    var frase = prompt("Introduzca una frase");
    const espacio = " "
    var contador = 1;

    for (let i = 0; i < frase.length; i++) {
        if (frase[i] == espacio)
        contador++  
    }   
    
    alert("Hay un total de "+ contador + " de espacios")
}