const questionsData = [
    // 1. HONESTIDAD
    { id: 1, text: "No siempre digo la verdad.", 
      feedbackTrue: "Aceptarlo es un signo de autoconocimiento y honestidad. Admitir que todos, en algún momento, podemos decir una verdad a medias, es de personas maduras.", 
      feedbackFalse: "Negar rotundamente haber mentido puede indicar deseabilidad social o falta de autocrítica. La honestidad también implica reconocer nuestras imperfecciones." },

    // 2. DEPORTES GRUPALES
    { id: 2, text: "Me gusta el fútbol u otros deportes grupales.", 
      feedbackTrue: "Disfrutar de actividades deportivas compartidas favorece la descarga de tensión y fortalece el sentido de pertenencia y trabajo en equipo.", 
      feedbackFalse: "No tener interés por deportes masivos no es negativo; simplemente indica que orientas tus canales de ocio y recreación hacia otras áreas." },

    // 3. APATÍA
    { id: 3, text: "No parece importante lo que pase a mi alrededor.", 
      feedbackTrue: "Sentir que lo que pasa alrededor no es importante puede ser una señal de fatiga o de que necesitas un espacio para recargar energías. Si es persistente, busca apoyo.", 
      feedbackFalse: "Mantenerte receptivo a tu entorno demuestra empatía y una integración socioafectiva saludable." },

    // 4. PACIENCIA
    { id: 4, text: "Suelo perder la paciencia cuando las cosas no salen como planeo.", 
      feedbackTrue: "Reconocer que te cuesta tolerar la frustración es un primer paso. Trabajar la flexibilidad mental te ayudará a manejar mejor los imprevistos.", 
      feedbackFalse: "Mantener la calma ante lo inesperado es un gran indicador de control emocional y capacidad de adaptación." },

    // 5. PEDIR AYUDA
    { id: 5, text: "Me cuesta pedir ayuda cuando la necesito.", 
      feedbackTrue: "La autosuficiencia extrema suele esconder temor a mostrar vulnerabilidad. Apoyarte en otros no es debilidad, es inteligencia emocional.", 
      feedbackFalse: "Reconocer tus límites y pedir apoyo cuando lo necesitas es una muestra de madurez y salud mental." },

    // 6. QUÉ DIRÁN
    { id: 6, text: "A menudo me preocupa lo que piensen los demás sobre mí.", 
      feedbackTrue: "Es natural dar importancia a la mirada ajena, pero cuida que no vulnere tu autonomía. Tu valor no depende de la opinión externa.", 
      feedbackFalse: "Tener independencia del juicio externo indica una autoestima sólida y un buen autoconcepto." },

    // 7. TRABAJO EN EQUIPO
    { id: 7, text: "Prefiero trabajar solo antes que en equipo.", 
      feedbackTrue: "Revela un perfil independiente y orientado al autocontrol. Asegúrate de cuidar la cohesión social cuando sea necesario.", 
      feedbackFalse: "Disfrutar del trabajo colaborativo impulsa la sinergia y el aprendizaje interpersonal." },

    // 8. CELOS
    { id: 8, text: "A veces siento celos del éxito de otras personas.", 
      feedbackTrue: "Reconocer la envidia es de valientes. Canalizada correctamente, puede ser un motor para tu propio crecimiento.", 
      feedbackFalse: "Alegrarte por los logros ajenos denota seguridad personal y una sana ausencia de competencia destructiva." },

    // 9. ADAPTABILIDAD
    { id: 9, text: "Me resulta fácil adaptarme a cambios imprevistos en mi rutina.", 
      feedbackTrue: "La adaptabilidad es un pilar clave de la resiliencia. Es una gran fortaleza.", 
      feedbackFalse: "Preferir la estructura no es malo; solo necesitas previsibilidad para sentirte seguro. Puedes trabajar la flexibilidad gradualmente." },

    // 10. PROCRASTINACIÓN
    { id: 10, text: "Tiendo a postergar las tareas complejas para el último momento.", 
      feedbackTrue: "La procrastinación suele responder al miedo al fracaso o a la sobreexigencia. Abordarla reduce el estrés.", 
      feedbackFalse: "Tener disciplina para estructurar prioridades reduce la carga cognitiva innecesaria y mejora tu rendimiento." },

    // 11. SEGURIDAD EN DECISIONES
    { id: 11, text: "Casi siempre me siento seguro de mis decisiones.", 
      feedbackTrue: "Expresar confianza interna es señal de firmeza de criterio y seguridad en ti mismo.", 
      feedbackFalse: "La duda puede indicar prudencia. Si es paralizante, trabaja en fortalecer tu autoconfianza." },

    // 12. IMPULSIVIDAD
    { id: 12, text: "Suelo actuar por impulso antes de pensar en las consecuencias.", 
      feedbackTrue: "La impulsividad aporta espontaneidad, pero requiere autorregulación para evitar riesgos innecesarios.", 
      feedbackFalse: "Evaluar consecuencias antes de actuar es una muestra de madurez ejecutiva y control." },

    // 13. EMPATÍA
    { id: 13, text: "Siento empatía cuando veo a alguien sufriendo, aunque no lo conozca.", 
      feedbackTrue: "La empatía profunda es la base del comportamiento prosocial. Es una cualidad muy valiosa.", 
      feedbackFalse: "Una distancia emocional puede ser un mecanismo de protección. Asegúrate de que no te aisle de los demás." },

    // 14. RUMIACIÓN
    { id: 14, text: "Pienso constantemente en los errores que cometí en el pasado.", 
      feedbackTrue: "Rumiar sobre el pasado estanca tu energía mental. Enfócate en aprender y soltar.", 
      feedbackFalse: "Dejar ir los errores y centrarte en el presente demuestra flexibilidad y madurez." },

    // 15. ORDEN
    { id: 15, text: "Suelo mantener mi espacio de trabajo limpio y organizado.", 
      feedbackTrue: "El orden externo promueve la claridad mental y optimiza tus procesos de trabajo.", 
      feedbackFalse: "Algunas mentes encuentran creatividad en un entorno más libre. Lo importante es que te funcione." },

    // 16. PERDÓN
    { id: 16, text: "Me resulta fácil perdonar a quienes me fallan.", 
      feedbackTrue: "Perdonar libera carga emocional y favorece tu salud mental. Es una gran cualidad.", 
      feedbackFalse: "Ser cauto tras una traición es un mecanismo de protección. No estás obligado a perdonar de inmediato." },

    // 17. SOBRECARGA
    { id: 17, text: "A menudo me siento abrumado por mis responsabilidades.", 
      feedbackTrue: "Sentir sobrecarga es una señal. Revisa tu delegación de tareas y asegura tiempo de descanso.", 
      feedbackFalse: "Un buen manejo del estrés te permite sobrellevar las cargas sin perder el equilibrio." },

    // 18. LIDERAZGO
    { id: 18, text: "Suelo asumir el rol de líder de forma natural en los grupos.", 
      feedbackTrue: "La proactividad y disposición a guiar son rasgos distintivos de un buen líder.", 
      feedbackFalse: "Desempeñar roles de apoyo es igualmente valioso para la dinámica de cualquier equipo." },

    // 19. FRACASOS
    { id: 19, text: "Me cuesta superar las pérdidas o los fracasos personales.", 
      feedbackTrue: "El duelo y la superación requieren tiempo y paciencia. Está bien tomarte el tiempo necesario.", 
      feedbackFalse: "Tener una recuperación rápida te permite procesar y reenfocar tus metas. Es un signo de resiliencia." },

    // 20. CONTROL DE VIDA
    { id: 20, text: "Siento que tengo el control sobre la dirección que toma mi vida.", 
      feedbackTrue: "Un locus de control interno sólido potencia tu autonomía y capacidad de lograr objetivos.", 
      feedbackFalse: "Si sientes que los acontecimientos externos te dominan, enfócate en lo que sí está en tus manos." }
];
