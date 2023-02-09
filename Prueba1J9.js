//1. Solicita al usuario que elija entre la opción 1 o 2:
// Opción 1: Se le debe pedir dos números al usuario e indicar si son impares y múltiplos de 25 ambos, uno de ellos o ninguno.

function opcion1() {


    // primero pedimos los dos números al usuario
    var n1 = parseInt(prompt("Inserta el primer número:"))
    var n2 = parseInt(prompt("Inserta el segundo número:"))



    // usamos condicion if para comparar ambos números, primero para ver si es par y ver si es múltiplo de 25, con doble if

   // atascado en que no soy capaz de poner bien la funcion para que averigue si es par/impar
    if ((n1%2!=0) && (n1%25==0) && (n2%2!=0) && (n2%25==0)) {
        alert("Ambos son impares y múltiples de 25");
    } else {
        if ((n1%2!=0) && (n1%25==0) && (n2%2==0) && (n2%25!=0)) {
            alert("El primero es impar y múltiple de 25, pero el segundo no");
        } else {
            if ((n1%2==0) && (n1%25!=0) && (n2%2!=0) && (n2%25==0)) {
                alert("El segundo es impar y múltiple, pero el primero no");
            } else {
                if ((n1%2==0) && (n1%25!=0) && (n2%2==0) && (n2%25!=0)) {
                    alert("Ninguno es impar ni múltiplo de 25");
                }
            }
        }
    }

}


// 2. Opción 2: Se le debe pedir una palabra y comprobar si empieza o termina por s/S



function opcion2() {

    var palabra = prompt("Inserte una palabra")
    var smin = "s"
    var smayu = "S"


       if (palabra[0] === smayu) {
        console.log(palabra[0])
           alert("Empieza por S mayúscula")
       } else {
           if (palabra[0] === smin) {
               alert("Empieza por s minúscula")
           } else {
               if (palabra[palabra.length - 1] === smayu) {
                   alert("Acaba por S mayúscula")
               } else {
                   if (palabra[palabra.length - 1] === smin) {
                       alert("Acaba por s minúscula")
                   }
               }
           }
        } 
}


