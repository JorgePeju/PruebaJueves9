//1. Solicita al usuario que elija entre la opción 1 o 2:
// Opción 1: Se le debe pedir dos números al usuario e indicar si son impares y múltiplos de 25 ambos, uno de ellos o ninguno.

function opcion1() {


    // primero pedimos los dos números al usuario
    var n1 = parseInt(prompt("Inserta el primer número:"))
    var n2 = parseInt(prompt("Inserta el segundo número:"))



    // usamos condicion if para comparar ambos números, primero para ver si es par y ver si es múltiplo de 25, con doble if


    if (n1 != (n1%2 == 1) && n1 == (n1%25==1) && n2 != (n2%2==1) && n2 == (n2%25 == 1)) {
        alert("Ambos son impares y múltiples de 25") 
    } else {
        if (n1 != n1%2 && n1 == n1%25 && n2 == n2%2 && n2 != n2%25) {
            alert("El primero es impar y múltiple de 25, pero el segundo no")
        } else {
            if (n1 == n1%2 && n1 != n1%25 && n2 != n2%2 && n2 == n2%25) {
                alert("El segundo es impar y múltiple, pero el primero no")
            } else {
                if (n1 == n1%2 && n1 != n1%25 && n2 == n2%2 && n2 != n2%25) {
                    alert("Ninguno es impar ni múltiplo de 25")
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


