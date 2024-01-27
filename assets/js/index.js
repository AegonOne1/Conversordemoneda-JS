/* 1. utilizar fetch para llamar la API (conprobar que esta se este llamando de manera correcta con un console.log) utilizado try catch.
 2. crear funcion onclick() que realice el calculo del cambio de moneda.
 3. utilizar una funcion render, que muestre el cambio en el HTML inner.
 4. implementar grafico utilizando camvas y chart.js. */


const recopilarDatos = () =>{

    const cantidad_CLP = document.getElementById("cantidad").value 
    // console.log(cantidad_CLP)

    let monedaConversion = document.getElementById("SeleccionDeMoneda").value
    // console.log(monedaConversion)
    
    const ruta = "https://mindicador.cl/api"

    fetch(ruta)
    .then(response => {
        return response.json()
    })
    .then(data =>{
        // console.log(data)
        
        const valorConversion = (data[monedaConversion]['valor'])
        // console.log(valorConversion)

        const resultadoConversion = (cantidad_CLP / valorConversion)
        // console.log(resultadoConversion)

        document.getElementById("mensajeDeError").innerHTML = ""
        document.getElementById("resultado").innerHTML = `Resultado: $ ${resultadoConversion} `

    })
    .catch(error => {
        document.getElementById("mensajeDeError").innerHTML = `Error: ${error.mensaje}`
        console.log(error)
    })
}

async function CreacionDeGrafico() {
    const res = await
    fetch("https://mindicador.cl/api")
    const valor = await res.json()
    console.log(valor)



    // const labels = (valor[])
}

CreacionDeGrafico()

























// const completo = ['salchicha', 'palta', 'tomate'] // arreglo = iterar!!!! 

// const completo2 = {
//     salchicha: 1,
//     palta: 200,
//     tomate: 1.2
// }
// // Consologuear palta
// console.log(completo[1], 'desde el array')

// console.log(completo2.palta, 'desde el obj')

// consultardatos asyncrona 
//  const consultarDatos2 = async () => {

//     const ruta2 = "https://mindicador.cl/api"

//     let resp = await fetch (ruta2)

//     const data2 = await resp.json()

//     console.log(data2)
// }

// consultarDatos2()
























