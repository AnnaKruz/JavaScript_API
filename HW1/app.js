const lessonsList = document.getElementById('lessonsList');
function renderLesson() {
    lessonData.forEach(lesson => {
        const lessonCard = document.createElement('div');
        lessonCard.classList.add('card', 'my-2');
        lessonCard.innerHTML = `
        <div class="card-body">
        <h5 class="card-title">${lesson.name}</h5>
        <p>Время: ${lesson.time}</p>
        <p>Максимальное кол-во участников: ${lesson.maxParticipants}</p>
        <p>Число зарегистрированных: ${lesson.participants}</p>
        <button class="btn btn-primary" onClick="register(${lessonData.indexOf(lesson)})">Записаться</button>
        </div>
        `
            lessonsList.appendChild(lessonCard);
    });
}
function register(index) {
    const lesson = lessonData[index];
    if (lesson.participants < lesson.maxParticipants) {
        lesson.participants++;
        updateParticipantsCount(index);
    }
}

function cancelRegistration(index) {
    const lesson = lessonData[index];
    if (lesson.participants < 0) {
        lesson.participants--;
        updateParticipantsCount(index);
    }
}

function updateParticipantsCount(index) {
    const lessonCard = lessonsList.children[index];
    lessonCard.querySelector('p:nth-child(4)').textContent = `Записано участников: ${lessonData[index].participants}`;
}

renderLesson();