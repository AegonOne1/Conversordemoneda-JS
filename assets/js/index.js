/* 1. utilizar fetch para llamar la API (conprobar que esta se este llamando de manera correcta con un console.log) utilizado try catch.
 2. crear funcion onclick() que realice el calculo del cambio de moneda.
 3. utilizar una funcion render, que muestre el cambio en el HTML inner.
 4. implementar grafico utilizando camvas y chart.js. */


const recopilarDatos = () =>{

    const cantidad_CLP = document.getElementById("cantidad").value 
    console.log(cantidad_CLP)

    let monedaConversion = document.getElementById("SeleccionDeMoneda").value
    console.log(monedaConversion)
    

    // const resultadoConversion = (cantidad_CLP * monedaConversion)
    // console.log(resultadoConversion)

    const ruta = "https://mindicador.cl/api"

    fetch(ruta)
    .then(response => {
        return response.json()
    })
    .then(data =>{
        console.log(data)
        // console.log(data.dolar.valor, 'metodo clasico')
        
        let moneda = 'dolar' // 
        moneda = 'bitcoin'
        // console.log(data[moneda]['valor'], 'metodo no tan clasico')


        // console.log(data[monedaConversion]['valor'], 'monedaConversion')

        calculo(data, cantidad_CLP, monedaConversion)


        // const valorEuro = data.euro.valor
        // console.log(valorEuro)
        // const valorDolar = data.dolar.valor
        // console.log(valorDolar)
    })
    .catch(error => console.log(error))
}

function calculo (datos, clp, cambio) {
    console.log(datos, clp, cambio)
}
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
























