document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById('questions-container');
    const quizForm = document.getElementById('quiz-form');
    const resultsDiv = document.getElementById('results');
    const feedbackContainer = document.getElementById('feedback-container');
    const consultarBtn = document.getElementById('consultar-resultados');

    // Generar preguntas
    container.innerHTML = questionsData.map(q => `
        <div class="question-card">
            <div class="question-text">${q.id}. ${q.text}</div>
            <div class="options">
                <label class="option-btn">
                    <input type="radio" name="q${q.id}" value="true" required> Verdadero
                </label>
                <label class="option-btn">
                    <input type="radio" name="q${q.id}" value="false"> Falso
                </label>
            </div>
        </div>
    `).join('');

    // Enviar respuestas
    quizForm.addEventListener('submit', function (e) {
        e.preventDefault();
        feedbackContainer.innerHTML = '';
        let allAnswered = true;

        questionsData.forEach(q => {
            const selected = document.querySelector(`input[name="q${q.id}"]:checked`);
            if (selected) {
                const isTrue = selected.value === 'true';
                const feedback = isTrue ? q.feedbackTrue : q.feedbackFalse;
                const card = document.createElement('div');
                card.className = 'feedback-card';
                card.innerHTML = `
                    <strong>Pregunta ${q.id}: ${q.text}</strong>
                    <div class="user-select">Respondiste: <em>${isTrue ? 'Verdadero' : 'Falso'}</em></div>
                    <p>${feedback}</p>
                `;
                feedbackContainer.appendChild(card);
            } else {
                allAnswered = false;
            }
        });

        if (!allAnswered) {
            alert('Por favor, responde todas las preguntas.');
            return;
        }

        resultsDiv.style.display = 'block';
        resultsDiv.scrollIntoView({ behavior: 'smooth' });
    });

    // Consultar resultados (simula guardado)
    consultarBtn.addEventListener('click', function () {
        alert('Aquí se pueden mostrar resultados guardados. Por ahora, se muestran al enviar el formulario.');
        // Aquí podrías cargar resultados guardados en localStorage o enviar a un servidor.
    });
});
