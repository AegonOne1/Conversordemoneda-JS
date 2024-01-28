/* 1. utilizar fetch para llamar la API (conprobar que esta se este llamando de manera correcta con un console.log) utilizado try catch.
 2. crear funcion onclick() que realice el calculo del cambio de moneda.
 3. utilizar una funcion render, que muestre el cambio en el HTML inner.
 4. implementar grafico utilizando camvas y chart.js. */


const recopilarDatos = () => {

    const cantidad_CLP = document.getElementById("cantidad").value
    // console.log(cantidad_CLP)

    let monedaConversion = document.getElementById("SeleccionDeMoneda").value
    // console.log(monedaConversion)

    const ruta = "https://mindicador.cl/api"

    fetch(ruta)
        .then(response => {
            return response.json()
        })
        .then(data => {
            // console.log(data)

            const valorConversion = (data[monedaConversion]['valor'])
            // console.log(valorConversion)

            const resultadoConversion = (cantidad_CLP / valorConversion)
            // console.log(resultadoConversion)

            document.getElementById("mensajeDeError").innerHTML = ""
            document.getElementById("resultado").innerHTML = `Resultado: $ ${resultadoConversion} `

        })
        .catch(() => {
            document.getElementById("mensajeDeError").innerHTML = `Error: favor de ingresar valor a convertir`
            // console.log(error)
        })
}


async function implementarGrafico() {

    const ctx = document.getElementById("myChart")

    const ConversionConfirmada = document.getElementById("SeleccionDeMoneda").value
    // console.log(ConversionConfirmada)

    try {
        const resp = await fetch("https://mindicador.cl/api/")
        const data = await resp.json()
        // console.log(data)

        const fechas = (data[ConversionConfirmada]["fecha"])
        // console.log(fechas)

        const valores = (data[ConversionConfirmada]["valor"])
        // console.log(valores)

        createChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: fechas,
                datasets: [{
                    label: `Valores de ${ConversionConfirmada} en los ultimos 10 dias`,
                    data: valores,
                    backgroundColor: 'rgba(0, 0, 0, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: false
                    }
                }
            }
        })
    } catch (error) {
        console.error('Error al cargar el grafico: ' + error.message)
    }

}

implementarGrafico()




















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
























