let sumaCalificaciones = 0;
let cantidadCalificaciones = 0;

function iniciar(){
//Función para arrojarle un aerror al usuario si el número es 0
    do{
    cantidadCalificaciones = parseInt(document.getElementById('inputCantidadCalificaciones').value);
        if (cantidadCalificaciones <= 0){
            window.alert("La cantidad de calificaciones debe ser mayor que 0. Intente de nuevo.");
            document.getElementById('inputCantidadCalificaciones').value = '';
        }
    }while(cantidadCalificaciones <= 0);

    let calificacionesHtml = '';
    for (let i = 0; i < cantidadCalificaciones; i++){
        calificacionesHtml += `<input type="number" id="inputCalificacion${i}" placeholder="Ingrese la calificación ${i+1}"><br>`;
    }
    calificacionesHtml += `<button id="calcularButton" onclick="calcularPromedio()">Calcular Promedio</button>`;
  document.getElementById('calificaciones').innerHTML = calificacionesHtml;
  document.getElementById('inputCantidadCalificaciones').style.display = 'none';
  document.getElementById('iniciarButton').style.display = 'none';
}

function calcularPromedio(){
    sumaCalificaciones = 0;

    for(let i = 0; i < cantidadCalificaciones; i++){
        let calificación;

        do{
            calificación = parseInt(document.getElementById(`inputCalificacion${i}`).value);
            if (calificación < 0){
                window.alert("No se permiten calificaciones negativas. Intente de nuevo");
                document.getElementById(`inputCalificacion${i}`).value = '';
            }
        } while (calificación < 0);
        sumaCalificaciones += calificación;
    }
    let Promedio = sumaCalificaciones / cantidadCalificaciones;
    document.getElementById('result').innerText = `El promedio de las notas es: ${Promedio.toFixed(2)}`
}