let participants = [];
let activities = [];
let spaces = ["Sala A", "Sala B", "Sala C"];
let times = ["9:00 AM", "10:00 AM", "11:00 AM"];
let schedule = [];

function addParticipant() {
    const participantName = document.getElementById('participant').value;
    const activityName = document.getElementById('activity').value;

    if (participantName === '' || activityName === '') {
        alert('Por favor, complete ambos campos.');
        return;
    }

    participants.push({ name: participantName, activity: activityName });
    activities.push(activityName);

    alert(`Participante ${participantName} añadido a la actividad ${activityName}.`);

    document.getElementById('participant').value = '';
    document.getElementById('activity').value = '';
}

function generateSchedule() {
    if (participants.length === 0) {
        alert('No hay participantes registrados.');
        return;
    }

    schedule = [];

    let spaceIndex = 0;
    let timeIndex = 0;

    participants.forEach(participant => {
        const assignedSpace = spaces[spaceIndex];
        const assignedTime = times[timeIndex];

        schedule.push({
            participant: participant.name,
            activity: participant.activity,
            space: assignedSpace,
            time: assignedTime
        });

        spaceIndex = (spaceIndex + 1) % spaces.length;
        timeIndex = (timeIndex + 1) % times.length;
    });

    displaySchedule();
}

function displaySchedule() {
    const scheduleOutput = document.getElementById('schedule-output');
    scheduleOutput.innerHTML = '';

    schedule.forEach(entry => {
        const scheduleEntry = document.createElement('div');
        scheduleEntry.innerHTML = `<strong>👤 Participante:</strong> ${entry.participant} <br>
                                   <strong>🎯 Actividad:</strong> ${entry.activity} <br>
                                   <strong>📍 Espacio:</strong> ${entry.space} <br>
                                   <strong>⏰ Horario:</strong> ${entry.time}`;
        scheduleOutput.appendChild(scheduleEntry);
    });
}
