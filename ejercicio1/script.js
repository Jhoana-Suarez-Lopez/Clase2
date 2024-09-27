const professor = [
    { tiempo: "08:00", clases: "Matemáticas", numeroSala: 1 },
    { tiempo: "10:00", clases: "Castellano", numeroSala: 2 },
    { tiempo: "13:00", clases: "Inglés", numeroSala: 3 },
    { tiempo: "15:00", clases: "Química", numeroSala: 4 },
    { tiempo: "17:00", clases: "Estadística", numeroSala: 5 }
];

const tiemposClaseInput = document.getElementById('tiemposClase');
const tiempoButtons = document.getElementById('tiempoButtons');
const tableClase = document.getElementById('tableClase');
const classInfo = document.getElementById('classInfo');
const mensaje = document.getElementById('mensaje')

function updateClassInfo(tiempo) {
    const selectedClass = professor.find(c => c.tiempo === tiempo);
    if (selectedClass) {
        classInfo.innerHTML = `
            <tr>
                <td>William</td>
                <td>${selectedClass.clases}</td>
                <td>${selectedClass.numeroSala}</td>
                <td>${selectedClass.tiempo}</td>
            </tr>
        `;
        tableClase.style.display = 'table';
        mensaje.style.display = 'none';
    } else {
        tableClase.style.display = 'none';
        mensaje.textContent = 'No hay clase programada para la hora seleccionada.';
        mensaje.style.display = 'block';
    }
}

tiemposClaseInput.addEventListener('change', (e) => {
    updateClassInfo(e.target.value);
});

professor.forEach(classInfo => {
    const button = document.createElement('button');
    button.textContent = classInfo.tiempo;
    button.classList.add('tiempo-button');
    button.addEventListener('click', () => {
        tiemposClaseInput.value = classInfo.tiempo;
        updateClassInfo(classInfo.tiempo);
        document.querySelectorAll('.tiempo-button').forEach(btn => btn.classList.remove('selected'));
        button.classList.add('selected');
    });
    tiempoButtons.appendChild(button);
});