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
        let correctas = 0;
        let incorrectas = 0;

        questionsData.forEach(q => {
            const selected = document.querySelector(`input[name="q${q.id}"]:checked`);
            if (selected) {
                const isTrue = selected.value === 'true';
                // Determinar si la respuesta es correcta
                // En las preguntas 1-50, la respuesta correcta es la que califica como "CORRECTO"
                // Por simplicidad, usamos el feedbackTrue para evaluar si es correcto o incorrecto
                const esCorrecto = isTrue ? q.feedbackTrue.startsWith("CORRECTO") : q.feedbackFalse.startsWith("CORRECTO");
                const feedback = isTrue ? q.feedbackTrue : q.feedbackFalse;

                if (esCorrecto) {
                    correctas++;
                } else {
                    incorrectas++;
                }

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

        // Mostrar resumen
        const total = questionsData.length;
        const porcentaje = Math.round((correctas / total) * 100);
        let diagnostico = '';

        if (porcentaje >= 80) {
            diagnostico = '✅ **FORTALEZA TOTAL**: Perfil sólido y coherente. Demuestra un alto nivel de integridad, estabilidad emocional y vocación de servicio. Es un candidato con un perfil muy adecuado para la vida policial-militar.';
        } else if (porcentaje >= 60) {
            diagnostico = '🟡 **PERFIL EN DESARROLLO**: Presenta una base sólida, pero muestra áreas de mejora, especialmente en el manejo del estrés, la comunicación o la flexibilidad. Con entrenamiento y autoconocimiento puede fortalecer su perfil.';
        } else {
            diagnostico = '🔴 **ÁREAS CRÍTICAS POR TRABAJAR**: Se identifican rasgos que pueden ser incompatibles con el servicio. Es recomendable trabajar en la estabilidad emocional, el control de impulsos y la vocación de servicio antes de postular.';
        }

        feedbackContainer.innerHTML += `
            <div style="background-color: #1e293b; padding: 20px; border-radius: 10px; margin-top: 20px; border-left: 4px solid #38bdf8;">
                <h3 style="color: #38bdf8;">📊 Resumen de Resultados</h3>
                <p><strong style="color: #4ade80;">Correctas:</strong> ${correctas} / ${total}</p>
                <p><strong style="color: #f87171;">Incorrectas:</strong> ${incorrectas} / ${total}</p>
                <p><strong style="color: #fbbf24;">Porcentaje de aciertos:</strong> ${porcentaje}%</p>
                <hr style="border-color: #334155; margin: 15px 0;">
                <h3 style="color: #38bdf8;">🧠 Diagnóstico Final</h3>
                <p style="font-size: 1.05rem; line-height: 1.6;">${diagnostico}</p>
                <p style="color: #94a3b8; font-size: 0.9rem; margin-top: 10px;">Este diagnóstico es una guía basada en tus respuestas. No sustituye una evaluación profesional.</p>
            </div>
        `;

        resultsDiv.style.display = 'block';
        resultsDiv.scrollIntoView({ behavior: 'smooth' });
    });

    // Consultar resultados
    consultarBtn.addEventListener('click', function () {
        alert('Aquí se pueden mostrar resultados guardados. Por ahora, se muestran al enviar el formulario.');
    });
});
