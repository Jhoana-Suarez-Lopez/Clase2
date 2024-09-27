const formatoAsistencia = document.getElementById('formatoAsistencia');
const asistenciaTable = document.getElementById('asistenciaTable').getElementsByTagName('tbody')[0];
const reporteAsistencia = document.getElementById('reporteAsistencia');
let asistenciaData = [];
    formatoAsistencia.addEventListener('submit', function(e) {
        e.preventDefault();
        const date = document.getElementById('date').value;
        const nombreEstudent = document.getElementById('nombreEstudent').value;
        const asistencia = document.querySelector('input[name="asistencia"]:checked').value;
        asistenciaData.push({ date, nombreEstudent, asistencia });
        const row = asistenciaTable.insertRow();
        row.innerHTML = `
            <td>${date}</td>
            <td>${nombreEstudent}</td>
            <td>${asistencia === 'present' ? 'Presente' : 'Ausente'}</td>
        `;
        updatereporteAsistencia();
        formatoAsistencia.reset();
    });

    function updatereporteAsistencia() {
        const totalStudents = asistenciaData.length;
        const presentStudents = asistenciaData.filter(data => data.asistencia === 'present').length;
        const asistenciaPercentage = (presentStudents / totalStudents) * 100;
        reporteAsistencia.innerHTML = `
            <h3>Informe de Asistencia</h3>
            <p>Total de estudiantes: ${totalStudents}</p>
            <p>Estudiantes presentes: ${presentStudents}</p>
            <p>Porcentaje de asistencia: ${asistenciaPercentage.toFixed(2)}%</p>
        `;
     }
     