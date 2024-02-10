

alert("Te doy la bienvenida a la tienda de Suplementos GD")

let nombre = prompt("Ingrese su nombre")
alert("Bienvenido " + nombre)

let mensaje =
  "Ingrese una opcion \n1- Creatina\n2- Proteina\n3- Aminoacidos\n4- Quemadores de grasa\n0- SALIR "

  function agregaralcarritoovolveralatienda() {
    let respuesta = prompt("Ingrese una opcion\nA - Comprar\nB - Volver a la tienda").toUpperCase()

    if ((respuesta === "A")) {
      alert("Se agrego su producto al carrito")
    }
    else if (respuesta != "A")  {
      alert("Volviendo a la tienda....")
    }
    
  }

do {
  opcion = Number(prompt(mensaje))

  if (opcion === 1) {
    alert(
      "La creatina es un suplemento que sirve para aumentar la energia en tus entrenamientos, retrasar la fatiga y aumentar la masa muscular su precio es de $22.000"
    )

      agregaralcarritoovolveralatienda()
  }
    if (opcion === 2) {
        alert("La proteina sirve como un recuperador muscular luego del entrenamiento, restaura, recupera, aumenta la masa muscular y sirve para alcanzar los requerimientos diarios de proteina que el cuerpo nececita para el correcto funcionamiento tiene un precio de $23.000")

        agregaralcarritoovolveralatienda()

        
    }

    if (opcion === 3) {
        alert("Los BCAA (Aminoacidos) cumplen la funcion de complementar la alimentacion y ayudan a obtener las vitaminas, minerales y otros componentes indispensables para el organismo el precio es de $14.000")

        agregaralcarritoovolveralatienda()
    }

    if (opcion === 4) {
        alert("Los quemadores de grasa son un conjuntos de quimicos que causan un efecto termogenico en el cuerpo lo que produce que quememos mas calorias a lo largo del dia su precio es de $12.000")

        agregaralcarritoovolveralatienda()
        
    }

    if (opcion < 0 || opcion > 4) {
        alert("La opcion ingresada es incorrecta, intente nuevamente")
        
    }
} while (opcion != 0)
alert("Gracias por visitar nuestra web")
//para mañana poner otra opcion con un total y un if sumando las cosas que agregen al carrito