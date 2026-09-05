const questionsData = [
    // 1. HONESTIDAD
    { id: 1, text: "Casi siempre digo la verdad.",
      feedbackTrue: "CORRECTO. La honestidad es un pilar fundamental en la vida, sin embargo cómo seres humanos, tarde o temprano decimos una mentira, por más pequeña que sea.", 
      feedbackFalse: "INCORRECTO. Rasgo perfeccionista." },

    // 2. TRABAJO EN EQUIPO
    { id: 2, text: "Me gusta el fútbol u otros deportes grupales.",
      feedbackTrue: "CORRECTO. Las actividades deportivas grupales son vitales para la integración y el espíritu de cuerpo. Fomentan la solidaridad y la comunicación entre pares.", 
      feedbackFalse: "INCORRECTO. En las fuerzas armadas y policiales, la capacidad de trabajar en equipo no es una opción, es una obligación. El aislamiento es un peligro." },

    // 3. RECEPTIVIDAD
    { id: 3, text: "No parece importante lo que pase a mi alrededor.",
      feedbackTrue: "INCORRECTO. Un oficial debe estar siempre atento a su entorno, a las situaciones y a las personas. La apatía es un error táctico que puede costar la misión o la vida de un compañero.", 
      feedbackFalse: "CORRECTO. Mantener una actitud vigilante y receptiva es una señal de profesionalismo y de integración en el equipo. Demuestra que te importa el bienestar de los tuyos y el éxito del operativo." },

    // 4. CONTROL EMOCIONAL
    { id: 4, text: "Suelo perder la paciencia cuando las cosas no salen como planeo.",
      feedbackTrue: "INCORRECTO. Perder la paciencia puede desencadenar malas decisiones en el campo. La capacidad de mantener la calma bajo presión es una habilidad fundamental para cualquier oficial.", 
      feedbackFalse: "CORRECTO. Un oficial que mantiene la compostura ante los imprevistos inspira confianza a su equipo y a sus subordinados." },

    // 5. PEDIR AYUDA
    { id: 5, text: "Me cuesta pedir ayuda cuando la necesito.",
      feedbackTrue: "INCORRECTO. No pedir ayuda cuando se necesita es un error grave. Puede comprometer una operación o exponer a un compañero a un riesgo innecesario.", 
      feedbackFalse: "CORRECTO. Reconocer las propias limitaciones y saber cuándo pedir apoyo es una señal de madurez y liderazgo. Un buen oficial sabe que no está solo." },

    // 6. PRESIÓN SOCIAL
    { id: 6, text: "A menudo me preocupa lo que piensen los demás sobre mí.",
      feedbackTrue: "INCORRECTO. La necesidad de aprobación externa puede ser una vulnerabilidad. Un oficial debe tomar decisiones basadas en el deber y la justicia, no en la popularidad.", 
      feedbackFalse: "CORRECTO. Tener un criterio propio y no depender de la opinión ajena es un síntoma de fortaleza de carácter, muy necesario en el ámbito policial y militar." },

    // 7. LIDERAZGO NATURAL
    { id: 7, text: "Prefiero trabajar solo antes que en equipo.",
      feedbackTrue: "INCORRECTO. El trabajo en equipo es la base de cualquier operación policial o militar. Un oficial que prefiere el aislamiento es un riesgo para la cohesión del grupo.", 
      feedbackFalse: "CORRECTO. Sentir comodidad en el trabajo colaborativo impulsa la sinergia y la eficiencia táctica." },

    // 8. CELOS
    { id: 8, text: "A veces siento celos del éxito de otras personas.",
      feedbackTrue: "INCORRECTO. Los celos y la envidia son emociones destructivas que rompen el tejido de la unidad. Un oficial debe apoyar el éxito de sus compañeros.", 
      feedbackFalse: "CORRECTO. Alegrarse por los logros ajenos es una muestra de seguridad personal y madurez profesional." },

    // 9. ADAPTABILIDAD
    { id: 9, text: "Me resulta fácil adaptarme a cambios imprevistos en mi rutina.",
      feedbackTrue: "CORRECTO. La capacidad de adaptación es crucial en el servicio militar, donde los escenarios cambian constantemente y la improvisación táctica es clave.", 
      feedbackFalse: "INCORRECTO. En el servicio activo, la rigidez puede ser fatal. Un oficial debe ser flexible y reaccionar con rapidez ante los cambios." },

    // 10. PROCRASTINACIÓN
    { id: 10, text: "Tiendo a postergar las tareas complejas para el último momento.",
      feedbackTrue: "INCORRECTO. La postergación atenta contra la eficiencia y la preparación táctica. Un oficial planifica y ejecuta con antelación para minimizar riesgos.", 
      feedbackFalse: "CORRECTO. La disciplina para estructurar prioridades y actuar a tiempo es un sello de un buen profesional del orden." },

    // 11. SEGURIDAD
    { id: 11, text: "Casi siempre me siento seguro de mis decisiones.",
      feedbackTrue: "CORRECTO. Expresar confianza en las propias decisiones es una señal de liderazgo y de control de la situación.", 
      feedbackFalse: "INCORRECTO. Duda excesiva puede ser paralizante. En la vida policial, las decisiones deben ser firmes y basadas en la ley y el entrenamiento." },

    // 12. IMPULSIVIDAD
    { id: 12, text: "Suelo actuar por impulso antes de pensar en las consecuencias.",
      feedbackTrue: "INCORRECTO. La impulsividad es un error que un oficial no puede permitirse. Las acciones deben ser mesuradas y calculadas para proteger la vida y la ley.", 
      feedbackFalse: "CORRECTO. Evaluar las consecuencias antes de actuar es una habilidad esencial de un oficial responsable, que protege su integridad y la de los demás." },

    // 13. EMPATÍA
    { id: 13, text: "Siento empatía cuando veo a alguien sufriendo, aunque no lo conozca.",
      feedbackTrue: "CORRECTO. Un oficial debe mantener un equilibrio entre la firmeza y la empatía, entendiendo el sufrimiento sin perder la perspectiva de su deber.", 
      feedbackFalse: "INCORRECTO. Una distancia emocional excesiva puede aislar al oficial de la realidad social que debe proteger, y de la humanidad de su servicio." },

    // 14. RUMIACIÓN (PASADO)
    { id: 14, text: "Pienso constantemente en los errores que cometí en el pasado.",
      feedbackTrue: "INCORRECTO. Pensar demasiado en el pasado es evidencia de traumas o conflictos no resueltos que pueden afectar la estabilidad emocional y la capacidad de juicio en el servicio.", 
      feedbackFalse: "CORRECTO. Dejar atrás los errores y aprender de ellos es la clave para un oficial en desarrollo constante y estable mentalmente." },

    // 15. ORDEN
    { id: 15, text: "Suelo mantener mi espacio de trabajo limpio y organizado.",
      feedbackTrue: "CORRECTO. El orden y la disciplina externa son un reflejo de la claridad mental y el profesionalismo de un oficial.", 
      feedbackFalse: "INCORRECTO. El desorden puede ser un signo de falta de atención al detalle, lo que en un operativo policial puede tener consecuencias graves." },

    // 16. PERDÓN
    { id: 16, text: "Me resulta fácil perdonar a quienes me fallan.",
      feedbackTrue: "CORRECTO. Perdonar libera tensiones y evita que rencores personales interfieran en el trabajo en equipo o en la toma de decisiones objetivas.", 
      feedbackFalse: "INCORRECTO. Alimentar rencores puede generar conflictos internos y afectar la cohesión de la unidad, algo inadmisible en el ámbito militar." },

    // 17. SOBRECARGA
    { id: 17, text: "A menudo me siento abrumado por mis responsabilidades.",
      feedbackTrue: "INCORRECTO. Un oficial debe aprender a gestionar la presión. Mostrarse abrumado puede ser visto como falta de control. Se debe buscar apoyo o delegar sin que afecte la misión.", 
      feedbackFalse: "CORRECTO. Un buen manejo del estrés y la capacidad de organización son sellos de un oficial que está a la altura del cargo." },

    // 18. LIDERAZGO PROACTIVO
    { id: 18, text: "Suelo asumir el rol de líder de forma natural en los grupos.",
      feedbackTrue: "CORRECTO. La proactividad y la disposición a guiar son rasgos esenciales de liderazgo en la institución policial y militar.", 
      feedbackFalse: "INCORRECTO. En el servicio, no se puede ser pasivo. La institución necesita oficiales que tomen la iniciativa en todo momento." },

    // 19. FRACASOS
    { id: 19, text: "Me cuesta superar las pérdidas o los fracasos personales.",
      feedbackTrue: "INCORRECTO. Superar fracasos es parte de la vida de un servidor público. Quedarse estancado puede afectar el desempeño y la estabilidad anímica.", 
      feedbackFalse: "CORRECTO. La capacidad de procesar el fracaso y reenfocar las metas es un signo de resiliencia y madurez psicológica." },

    // 20. CONTROL DE VIDA
    { id: 20, text: "Siento que tengo el control sobre la dirección que toma mi vida.",
      feedbackTrue: "CORRECTO. Un oficial debe tener un locus de control interno que le permita tomar decisiones y afrontar los desafíos de su carrera con determinación.", 
      feedbackFalse: "INCORRECTO. Sentir que no tienes control te hace vulnerable y puede llevar a una actitud de derrota, lo cual es incompatible con el mando." },

    // 21. OBEDIENCIA
    { id: 21, text: "Suelo seguir órdenes sin cuestionarlas, incluso si no estoy de acuerdo.",
      feedbackTrue: "CORRECTO. La obediencia a la cadena de mando es fundamental. Sin embargo, se debe tener el criterio para no ejecutar una orden ilegal y reportarla.", 
      feedbackFalse: "INCORRECTO. Desobedecer o cuestionar constantemente las órdenes mina la autoridad y la cohesión de la unidad." },

    // 22. SOLEDAD
    { id: 22, text: "Soporto bien estar solo durante largos períodos de tiempo.",
      feedbackTrue: "CORRECTO. La vida militar y policial a menudo exige largos períodos de aislamiento. La capacidad de autogestionarse en soledad es una gran fortaleza.", 
      feedbackFalse: "INCORRECTO. La dependencia emocional constante puede llevar a problemas de adaptación y rendimiento en misiones solitarias o de larga duración." },

    // 23. AGRESIVIDAD
    { id: 23, text: "Suelo reaccionar con agresividad ante situaciones de estrés.",
      feedbackTrue: "INCORRECTO. La agresividad descontrolada es un peligro. Un oficial debe canalizar la energía en acciones tácticas, no en violencia innecesaria.", 
      feedbackFalse: "CORRECTO. Mantener la templanza y actuar con profesionalismo, incluso bajo presión, es un sello de un buen oficial." },

    // 24. INTUICIÓN
    { id: 24, text: "Confío en mi intuición para tomar decisiones importantes.",
      feedbackTrue: "CORRECTO. La intuición, alimentada por la experiencia y el entrenamiento, es una herramienta válida en el campo. Ayuda a anticipar situaciones de riesgo.", 
      feedbackFalse: "INCORRECTO. Despreciar la intuición puede llevar a perder señales importantes en el terreno. Un oficial debe aprender a escucharla y contrastarla con la información disponible." },

    // 25. RESPONSABILIDAD
    { id: 25, text: "Suelo asumir la responsabilidad de mis errores.",
      feedbackTrue: "CORRECTO. Asumir los errores con honestidad es un acto de integridad y muestra de un carácter fuerte, fundamental para un mando.", 
      feedbackFalse: "INCORRECTO. Evadir responsabilidades es un rasgo negativo que destruye la confianza y el respeto del equipo." },

    // 26. LECALTAD
    { id: 26, text: "Siento lealtad hacia mis superiores, incluso cuando otros los critican.",
      feedbackTrue: "CORRECTO. La lealtad a la cadena de mando es un pilar de la disciplina, siempre y cuando no se comprometa la ética personal.", 
      feedbackFalse: "INCORRECTO. La deslealtad y el chisme crean divisiones en la unidad y socavan la autoridad." },

    // 27. RAPIDEZ DE REFLEJOS
    { id: 27, text: "Reacciono muy rápido ante situaciones inesperadas.",
      feedbackTrue: "CORRECTO. La velocidad de reacción es un activo táctico crucial en operaciones de riesgo.", 
      feedbackFalse: "INCORRECTO. Una reacción lenta puede ser fatal en el servicio activo. Se debe entrenar y estar siempre alerta." },

    // 28. CREDULIDAD
    { id: 28, text: "Suelo confiar rápidamente en las personas que acabo de conocer.",
      feedbackTrue: "INCORRECTO. La confianza se debe ganar. En el ámbito policial-militar, la credulidad es un riesgo de seguridad que puede poner en peligro al oficial y a su equipo.", 
      feedbackFalse: "CORRECTO. Un oficial debe ser cauteloso y aplicar su juicio antes de otorgar su confianza." },

    // 29. INTEGRIDAD
    { id: 29, text: "Sería capaz de denunciar un acto de corrupción, aunque lo cometiera un superior.",
      feedbackTrue: "CORRECTO. La integridad por encima de todo es fundamental. Un oficial debe ser valiente para actuar con justicia, sin importar el rango del infractor.", 
      feedbackFalse: "INCORRECTO. Callar ante la corrupción es complicidad. Un oficial que no actúa se convierte en parte del problema." },

    // 30. MANEJO DEL ESTRÉS
    { id: 30, text: "El estrés me bloquea y me impide pensar con claridad.",
      feedbackTrue: "INCORRECTO. Un oficial debe estar entrenado para pensar bajo presión. Si el estrés lo bloquea, es un riesgo que debe trabajar con urgencia.", 
      feedbackFalse: "CORRECTO. Mantener la claridad mental bajo estrés es la diferencia entre la vida y la muerte en el servicio." },

    // 31. CUMPLIMIENTO DEL DEBER
    { id: 31, text: "A veces busco atajos para cumplir con mis tareas más rápido.",
      feedbackTrue: "INCORRECTO. Los atajos en el servicio público y militar son peligrosos y violan los procedimientos establecidos. La precisión antecede a la velocidad.", 
      feedbackFalse: "CORRECTO. Cumplir con el deber siguiendo los protocolos es un signo de profesionalismo y respeto por el cargo." },

    // 32. RESILIENCIA
    { id: 32, text: "Me recupero rápidamente de las dificultades.",
      feedbackTrue: "CORRECTO. La resiliencia es una cualidad indispensable en un oficial. Le permite afrontar las adversidades sin derrumbarse.", 
      feedbackFalse: "INCORRECTO. Hundirse ante las dificultades es una señal de inestabilidad emocional, poco apta para la vida institucional." },

    // 33. AUTODISCIPLINA
    { id: 33, text: "Me cuesta mantener una rutina de estudio o entrenamiento físico.",
      feedbackTrue: "INCORRECTO. La autodisciplina es la base del soldado y el policía. La falta de ella lleva al estancamiento y a la pérdida de forma.", 
      feedbackFalse: "CORRECTO. Mantener una rutina de entrenamiento y estudio constante es lo que diferencia a un profesional de un aficionado." },

    // 34. PENSAMIENTO CRÍTICO
    { id: 34, text: "Suelo aceptar la información sin cuestionarla.",
      feedbackTrue: "INCORRECTO. Un oficial debe tener pensamiento crítico para no ser manipulado y para tomar decisiones basadas en hechos y análisis.", 
      feedbackFalse: "CORRECTO. Cuestionar, verificar y contrastar la información es una habilidad esencial para un investigador y para un oficial de mando." },

    // 35. COMPAÑERISMO
    { id: 35, text: "Apoyo a mis compañeros incluso cuando están equivocados.",
      feedbackTrue: "INCORRECTO. Apoyar a un compañero en un error puede ser cómplice de una mala acción. Se debe corregir con respeto, no apoyar el error.", 
      feedbackFalse: "CORRECTO. Un buen compañero corrige, pero no abandona. El apoyo debe ser para mejorar, no para justificar lo injustificable." },

    // 36. INICIATIVA
    { id: 36, text: "Suelo esperar instrucciones para actuar.",
      feedbackTrue: "INCORRECTO. Un buen oficial toma iniciativa dentro de su ámbito de actuación. La pasividad es un lastre en el servicio.", 
      feedbackFalse: "CORRECTO. La iniciativa, cuando es responsable, demuestra capacidad de mando y autonomía en la toma de decisiones." },

    // 37. MANEJO DE LA IRA
    { id: 37, text: "Suelo enfadarme con facilidad.",
      feedbackTrue: "INCORRECTO. Un oficial debe tener control de sus emociones. La ira descontrolada es un peligro que nubla el juicio y puede generar violencia injustificada.", 
      feedbackFalse: "CORRECTO. El control emocional es un pilar de la autoridad. Un oficial que no se deja llevar por la ira es más respetado y eficaz." },

    // 38. HUMILDAD
    { id: 38, text: "Me cuesta reconocer cuando no sé algo.",
      feedbackTrue: "INCORRECTO. La soberbia es una barrera para el aprendizaje. Un buen oficial debe reconocer sus limitaciones para poder crecer y prepararse.", 
      feedbackFalse: "CORRECTO. La humildad para aprender y reconocer los fallos es una muestra de grandeza y de liderazgo auténtico." },

    // 39. VOCACIÓN DE SERVICIO
    { id: 39, text: "Siento que mi propósito es ayudar y proteger a los demás.",
      feedbackTrue: "CORRECTO. La vocación de servicio es el motor más puro de la carrera policial y militar. Es lo que da sentido a la entrega.", 
      feedbackFalse: "INCORRECTO. Si no sientes esa vocación, el camino será más duro y podrías convertirte en un mal profesional. La motivación intrínseca es clave." },

    // 40. MENTALIDAD DE GANADOR
    { id: 40, text: "Suelo rendirme cuando las cosas se ponen difíciles.",
      feedbackTrue: "INCORRECTO. Rendirse es una opción que un oficial no puede permitirse. La perseverancia es lo que define al que sirve.", 
      feedbackFalse: "CORRECTO. La tenacidad es un sello del carácter del oficial. No rendirse es la única opción en la protección de la vida." },

    // 41. CLARIDAD DE OBJETIVOS
    { id: 41, text: "Tengo muy claro hacia dónde quiero dirigir mi carrera.",
      feedbackTrue: "CORRECTO. Tener un objetivo claro te permite enfocarte, entrenarte y crecer en la dirección correcta dentro de la institución.", 
      feedbackFalse: "INCORRECTO. La indecisión y la falta de rumbo pueden derivar en desmotivación y en un desempeño mediocre." },

    // 42. AUTOESTIMA
    { id: 42, text: "Creo que merezco el respeto de los demás.",
      feedbackTrue: "CORRECTO. La autoestima sana es necesaria para ejercer autoridad sin soberbia. Un oficial debe respetarse a sí mismo para ser respetado.", 
      feedbackFalse: "INCORRECTO. Una baja autoestima puede hacer que un oficial sea manipulado o que no se haga valer, lo cual es un riesgo." },

    // 43. TRABAJO BAJO PRESIÓN
    { id: 43, text: "Trabajo mejor cuando estoy bajo presión.",
      feedbackTrue: "CORRECTO. La presión es el combustible que enciende a los mejores oficiales. La adrenalina bien gestionada potencia el rendimiento.", 
      feedbackFalse: "INCORRECTO. Si la presión te desborda, es una señal de que debes entrenar más tu capacidad de respuesta en situaciones límite." },

    // 44. PENSAMIENTO ESTRATÉGICO
    { id: 44, text: "Me cuesta planificar a largo plazo.",
      feedbackTrue: "INCORRECTO. Un oficial debe ser un estratega. Planificar a largo plazo es lo que construye carreras y operativos exitosos.", 
      feedbackFalse: "CORRECTO. Pensar estratégicamente es una habilidad que distingue a los líderes de los seguidores." },

    // 45. SENTIDO DEL DEBER
    { id: 45, text: "Siento que mi deber está por encima de mis intereses personales.",
      feedbackTrue: "CORRECTO. El sentido del deber es el corazón de la vocación policial y militar. Saber que la misión está primero es esencial.", 
      feedbackFalse: "INCORRECTO. Anteponer los intereses personales al deber puede llevar a la traición y al abandono de la responsabilidad." },

    // 46. INTELIGENCIA EMOCIONAL
    { id: 46, text: "Entiendo bien mis emociones y las de los demás.",
      feedbackTrue: "CORRECTO. La inteligencia emocional es una habilidad blanda clave para liderar equipos, negociar y gestionar el estrés ajeno.", 
      feedbackFalse: "INCORRECTO. La falta de inteligencia emocional puede generar conflictos internos en el equipo y una comunicación ineficaz." },

    // 47. JUSTICIA
    { id: 47, text: "Soy imparcial, incluso cuando se trata de alguien conocido.",
      feedbackTrue: "CORRECTO. La imparcialidad es la base de la justicia. Un oficial debe actuar sin favoritismos, por el bien de la ley y la institución.", 
      feedbackFalse: "INCORRECTO. La falta de imparcialidad es un germen de corrupción y de mala praxis que destruye la credibilidad de la institución." },

    // 48. PASIÓN POR EL SERVICIO
    { id: 48, text: "Siento pasión por mi trabajo, más allá de lo económico.",
      feedbackTrue: "CORRECTO. La p
