// preguntas.js
// Cuestionario de práctica: vida policial-militar con enfoque humanista.
// IMPORTANTE: material educativo/reflexivo. No es una prueba psicológica,
// no sustituye una evaluación profesional y no debe usarse para intentar
// manipular resultados de procesos de selección.
//
// Cada ítem diferencia frecuencia e intensidad: "alguna vez", "a veces",
// "casi siempre" y "siempre" no significan lo mismo. Las respuestas
// "FAVORABLE/REQUIERE REFLEXIÓN" describen la interpretación formativa,
// no una clave para aprobar una evaluación psicológica real.

const questionsData = [
  {
    "id": 1,
    "text": "Casi siempre digo la verdad, aunque alguna vez haya cometido un error y no lo haya reconocido de inmediato.",
    "feedbackTrue": "FAVORABLE. Reconoce la honestidad como una conducta habitual sin exigir perfección humana. La clave es que los errores ocasionales no se conviertan en un patrón de engaño.",
    "feedbackFalse": "REQUIERE REFLEXIÓN. Negar la honestidad como conducta habitual puede indicar una dificultad de confiabilidad. Una persona puede equivocarse, pero debe procurar corregir y asumir sus actos."
  },
  {
    "id": 2,
    "text": "Alguna vez he mentido para evitar una discusión innecesaria.",
    "feedbackTrue": "COMPRENSIBLE, PERO NO IDEAL. Una mentira ocasional puede ocurrir, pero en el servicio público es preferible aprender a comunicar la verdad con prudencia y respeto.",
    "feedbackFalse": "FAVORABLE. Rechazar el engaño como recurso habitual favorece la confianza, aunque siempre conviene distinguir entre honestidad y comunicación imprudente."
  },
  {
    "id": 3,
    "text": "Nunca he cometido un error en una tarea importante.",
    "feedbackTrue": "REQUIERE REFLEXIÓN. Afirmar que nunca se comete ningún error puede reflejar una autoimagen excesivamente perfecta. La responsabilidad profesional incluye reconocer y corregir errores.",
    "feedbackFalse": "FAVORABLE. Reconocer que los seres humanos pueden equivocarse es más realista; lo importante es aprender, informar y corregir."
  },
  {
    "id": 4,
    "text": "Cuando cometo un error, procuro reconocerlo y repararlo.",
    "feedbackTrue": "FAVORABLE. La responsabilidad no consiste en ser infalible, sino en responder adecuadamente cuando se comete una equivocación.",
    "feedbackFalse": "REQUIERE REFLEXIÓN. Evitar reconocer errores puede deteriorar la confianza y dificultar la mejora profesional."
  },
  {
    "id": 5,
    "text": "No me importa si una persona inocente resulta perjudicada por una decisión mía.",
    "feedbackTrue": "DESFAVORABLE. La función policial o militar exige valorar la dignidad, la seguridad y los derechos de las personas, incluso bajo presión.",
    "feedbackFalse": "FAVORABLE. La preocupación por evitar daños injustificados refleja sentido de responsabilidad y humanidad."
  },
  {
    "id": 6,
    "text": "Alguna vez he sentido tristeza por una situación personal.",
    "feedbackTrue": "NORMAL. La tristeza ocasional forma parte de la experiencia humana y no equivale a vivir permanentemente deprimido o sin capacidad funcional.",
    "feedbackFalse": "NO ES NECESARIAMENTE NEGATIVO. No todas las personas expresan tristeza de la misma manera; lo importante es la adaptación general y el manejo de las emociones."
  },
  {
    "id": 7,
    "text": "Siempre estoy triste y casi nunca encuentro motivos para sentirme bien.",
    "feedbackTrue": "REQUIERE ATENCIÓN. La palabra 'siempre' describe una frecuencia extrema y diferente de haber estado triste alguna vez. Puede indicar malestar persistente que merece ser evaluado.",
    "feedbackFalse": "FAVORABLE. Negar un estado de tristeza permanente distingue una emoción ocasional de un patrón persistente."
  },
  {
    "id": 8,
    "text": "A veces me pongo nervioso antes de una situación importante.",
    "feedbackTrue": "NORMAL. El nerviosismo ocasional ante situaciones relevantes es una reacción humana; lo importante es poder recuperar la concentración y actuar adecuadamente.",
    "feedbackFalse": "NO ES NECESARIAMENTE NEGATIVO. Algunas personas experimentan poco nerviosismo, pero deben conservar la capacidad de reconocer señales de tensión cuando aparezcan."
  },
  {
    "id": 9,
    "text": "Nunca siento nervios, incluso en situaciones de gran riesgo.",
    "feedbackTrue": "REQUIERE REFLEXIÓN. Una ausencia absoluta de nerviosismo ante cualquier peligro puede ser una afirmación poco realista. La cuestión profesional es regular la activación, no negar toda emoción.",
    "feedbackFalse": "FAVORABLE. Reconocer límites humanos suele ser más realista que presentarse como completamente inmune al estrés."
  },
  {
    "id": 10,
    "text": "Puedo sentir miedo y aun así cumplir responsablemente con mi deber.",
    "feedbackTrue": "FAVORABLE. El valor profesional no significa ausencia de miedo; implica actuar con criterio y autocontrol pese a emociones normales.",
    "feedbackFalse": "REQUIERE REFLEXIÓN. Negar que el miedo pueda coexistir con el deber puede reflejar una visión demasiado rígida de la fortaleza."
  },
  {
    "id": 11,
    "text": "Me cuesta pedir ayuda cuando una situación supera mis conocimientos.",
    "feedbackTrue": "REQUIERE REFLEXIÓN. Reconocer límites y solicitar apoyo oportunamente protege la misión, al equipo y a la población.",
    "feedbackFalse": "FAVORABLE. Saber cuándo pedir apoyo es una competencia profesional y no una señal automática de debilidad."
  },
  {
    "id": 12,
    "text": "No necesito nunca la ayuda de mis compañeros.",
    "feedbackTrue": "REQUIERE REFLEXIÓN. Ningún profesional domina todas las situaciones. La autosuficiencia absoluta puede perjudicar el trabajo en equipo.",
    "feedbackFalse": "FAVORABLE. Reconocer la interdependencia profesional favorece la cooperación."
  },
  {
    "id": 13,
    "text": "Me gusta trabajar con otras personas para alcanzar un objetivo común.",
    "feedbackTrue": "FAVORABLE. Refleja disposición al trabajo en equipo, coordinación y espíritu de servicio.",
    "feedbackFalse": "REQUIERE REFLEXIÓN. El servicio policial-militar requiere cooperación frecuente; aun así, una preferencia por tareas individuales no significa incapacidad para colaborar."
  },
  {
    "id": 14,
    "text": "Prefiero trabajar solo incluso cuando la tarea requiere coordinación con otros.",
    "feedbackTrue": "REQUIERE REFLEXIÓN. La preferencia personal no debería impedir la coordinación necesaria para una misión segura.",
    "feedbackFalse": "FAVORABLE. Estar dispuesto a coordinarse cuando la tarea lo exige es más importante que la simple preferencia personal."
  },
  {
    "id": 15,
    "text": "Alguna vez he tenido un desacuerdo fuerte con un compañero.",
    "feedbackTrue": "NORMAL. Los desacuerdos forman parte de cualquier grupo humano; lo importante es resolverlos sin violencia, humillación ni sabotaje.",
    "feedbackFalse": "NO ES NECESARIAMENTE NEGATIVO. La ausencia de conflictos declarados no garantiza una buena convivencia; importa cómo se gestionan las diferencias."
  },
  {
    "id": 16,
    "text": "Siempre estoy de acuerdo con mis superiores.",
    "feedbackTrue": "REQUIERE REFLEXIÓN. El respeto a la autoridad no exige pensar idénticamente en todo. El criterio profesional permite plantear dudas de manera respetuosa y por los canales correspondientes.",
    "feedbackFalse": "FAVORABLE. Mantener criterio propio y respeto por la cadena de mando puede coexistir con disciplina."
  },
  {
    "id": 17,
    "text": "Puedo obedecer una instrucción legítima aunque personalmente prefiera hacer otra cosa.",
    "feedbackTrue": "FAVORABLE. La disciplina implica cumplir instrucciones legítimas, manteniendo al mismo tiempo responsabilidad ética y legal.",
    "feedbackFalse": "REQUIERE REFLEXIÓN. La dificultad sistemática para cumplir instrucciones legítimas puede afectar la coordinación institucional."
  },
  {
    "id": 18,
    "text": "Si recibiera una orden claramente ilegal, buscaría el procedimiento institucional correspondiente antes de ejecutarla.",
    "feedbackTrue": "FAVORABLE. La disciplina profesional no equivale a obediencia ciega; las actuaciones deben ajustarse a la ley y a los procedimientos.",
    "feedbackFalse": "REQUIERE REFLEXIÓN. Ejecutar automáticamente cualquier orden, sin importar su legalidad, contradice la responsabilidad profesional."
  },
  {
    "id": 19,
    "text": "Cuando una persona me critica, alguna vez me molesto.",
    "feedbackTrue": "NORMAL. La molestia ocasional ante una crítica es humana. Lo relevante es no permitir que la emoción determine una respuesta desproporcionada.",
    "feedbackFalse": "NO ES NECESARIAMENTE NEGATIVO. Algunas personas reaccionan con poca molestia; en ambos casos importa la capacidad de recibir críticas útiles."
  },
  {
    "id": 20,
    "text": "Nunca me afecta ninguna crítica que recibo.",
    "feedbackTrue": "REQUIERE REFLEXIÓN. Una inmunidad emocional absoluta frente a toda crítica puede ser poco realista y dificultar el aprendizaje.",
    "feedbackFalse": "FAVORABLE. Poder escuchar críticas sin reaccionar impulsivamente favorece el desarrollo profesional."
  },
  {
    "id": 21,
    "text": "Cuando estoy enojado, puedo esperar antes de responder para no empeorar la situación.",
    "feedbackTrue": "FAVORABLE. La pausa deliberada ayuda a mantener el autocontrol y reduce respuestas impulsivas.",
    "feedbackFalse": "REQUIERE REFLEXIÓN. Responder inmediatamente bajo enojo puede aumentar el riesgo de conflictos innecesarios."
  },
  {
    "id": 22,
    "text": "Suelo perder el control cuando alguien me provoca.",
    "feedbackTrue": "DESFAVORABLE. La provocación externa no elimina la responsabilidad personal sobre la conducta. El autocontrol es esencial en funciones de autoridad.",
    "feedbackFalse": "FAVORABLE. Mantener el control ante provocaciones reduce conflictos y favorece decisiones proporcionales."
  },
  {
    "id": 23,
    "text": "Alguna vez he dicho algo de lo que después me arrepentí.",
    "feedbackTrue": "NORMAL. Es una experiencia humana frecuente. Lo profesional es reconocer el efecto de las palabras y aprender a comunicarse mejor.",
    "feedbackFalse": "NO ES NECESARIAMENTE NEGATIVO. No arrepentirse de algo no implica por sí mismo un problema; importa el patrón general de comunicación y responsabilidad."
  },
  {
    "id": 24,
    "text": "Nunca he dicho algo impulsivamente de lo que luego me arrepintiera.",
    "feedbackTrue": "REQUIERE REFLEXIÓN. Una afirmación absoluta puede ser menos realista que reconocer que todos podemos cometer errores de comunicación.",
    "feedbackFalse": "FAVORABLE. La prudencia verbal es una fortaleza, especialmente si se mantiene sin negar la posibilidad humana de equivocarse."
  },
  {
    "id": 25,
    "text": "Puedo tratar con respeto a una persona que ha infringido una norma.",
    "feedbackTrue": "FAVORABLE. La autoridad profesional permite hacer cumplir las normas sin deshumanizar a la persona.",
    "feedbackFalse": "REQUIERE REFLEXIÓN. Confundir firmeza con desprecio puede deteriorar el trato profesional y aumentar los conflictos."
  },
  {
    "id": 26,
    "text": "Para mí, respetar a alguien significa estar siempre de acuerdo con esa persona.",
    "feedbackTrue": "REQUIERE REFLEXIÓN. El respeto permite discrepar, corregir y hacer cumplir normas sin insultos ni humillaciones.",
    "feedbackFalse": "FAVORABLE. Diferenciar respeto de acuerdo permanente muestra madurez interpersonal."
  },
  {
    "id": 27,
    "text": "No creo que una persona detenida merezca ningún respeto.",
    "feedbackTrue": "DESFAVORABLE. La dignidad y los derechos no desaparecen por estar bajo investigación o detención. El trato profesional debe ser respetuoso y legal.",
    "feedbackFalse": "FAVORABLE. Mantener la dignidad de todas las personas es compatible con hacer cumplir la ley."
  },
  {
    "id": 28,
    "text": "Alguna vez he sentido compasión por alguien que había cometido una falta.",
    "feedbackTrue": "NORMAL Y COMPATIBLE CON EL DEBER. La empatía no obliga a ignorar una infracción; permite actuar con humanidad dentro de la ley.",
    "feedbackFalse": "NO ES NECESARIAMENTE NEGATIVO. La ausencia de compasión ocasional no determina por sí sola la calidad profesional, aunque conviene cultivar un trato humano."
  },
  {
    "id": 29,
    "text": "Siempre siento compasión por todas las personas, sin importar lo que hayan hecho.",
    "feedbackTrue": "REQUIERE REFLEXIÓN. La empatía es valiosa, pero debe coexistir con criterio, límites, seguridad y aplicación imparcial de las normas.",
    "feedbackFalse": "FAVORABLE. Una postura equilibrada permite empatía sin perder objetividad."
  },
  {
    "id": 30,
    "text": "Me resulta difícil comprender a personas que piensan de manera muy diferente a mí.",
    "feedbackTrue": "REQUIERE REFLEXIÓN. La función pública exige interactuar con personas diversas y escuchar antes de juzgar.",
    "feedbackFalse": "FAVORABLE. La apertura a perspectivas diferentes facilita la mediación, la comunicación y la toma de decisiones."
  },
  {
    "id": 31,
    "text": "No juzgo a una persona únicamente por su apariencia.",
    "feedbackTrue": "FAVORABLE. Evitar prejuicios mejora la objetividad y reduce decisiones basadas en suposiciones.",
    "feedbackFalse": "REQUIERE REFLEXIÓN. La apariencia por sí sola no es una base suficiente para valorar conducta o peligrosidad."
  },
  {
    "id": 32,
    "text": "A veces hago suposiciones sobre alguien antes de conocerlo bien.",
    "feedbackTrue": "HUMANO, PERO REQUIERE CONTROL. Las primeras impresiones pueden aparecer automáticamente; el profesional debe verificarlas con hechos antes de actuar.",
    "feedbackFalse": "FAVORABLE. Evitar conclusiones prematuras favorece la objetividad."
  },
  {
    "id": 33,
    "text": "Nunca me equivoco al juzgar las intenciones de otras personas.",
    "feedbackTrue": "REQUIERE REFLEXIÓN. Nadie puede conocer con certeza las intenciones ajenas en todo momento. Es mejor distinguir hechos de interpretaciones.",
    "feedbackFalse": "FAVORABLE. Reconocer incertidumbre y verificar información favorece el juicio profesional."
  },
  {
    "id": 34,
    "text": "Si no tengo suficiente información, prefiero verificar antes de sacar una conclusión.",
    "feedbackTrue": "FAVORABLE. Verificar hechos reduce errores y decisiones precipitadas.",
    "feedbackFalse": "REQUIERE REFLEXIÓN. Sacar conclusiones sin información suficiente aumenta el riesgo de errores."
  },
  {
    "id": 35,
    "text": "A veces me equivoco al interpretar una situación.",
    "feedbackTrue": "NORMAL. La percepción humana no es infalible; la competencia profesional consiste en revisar información y corregir cuando sea necesario.",
    "feedbackFalse": "REQUIERE REFLEXIÓN. Considerarse completamente infalible puede dificultar la revisión de decisiones."
  },
  {
    "id": 36,
    "text": "Nunca interpreto mal las palabras de otras personas.",
    "feedbackTrue": "REQUIERE REFLEXIÓN. Los malentendidos son posibles incluso con buena comunicación; lo importante es aclararlos.",
    "feedbackFalse": "FAVORABLE. Una buena comunicación reduce malentendidos, aunque siempre conviene mantener apertura a corregir interpretaciones."
  },
  {
    "id": 37,
    "text": "Puedo cambiar de opinión cuando aparecen pruebas nuevas.",
    "feedbackTrue": "FAVORABLE. La capacidad de actualizar una conclusión ante evidencia nueva es una señal de pensamiento crítico.",
    "feedbackFalse": "REQUIERE REFLEXIÓN. Negarse a revisar una opinión puede llevar a decisiones rígidas o equivocadas."
  },
  {
    "id": 38,
    "text": "Me cuesta admitir que otra persona tiene una mejor idea que la mía.",
    "feedbackTrue": "REQUIERE REFLEXIÓN. El liderazgo saludable prioriza la mejor solución y no el orgullo personal.",
    "feedbackFalse": "FAVORABLE. Reconocer buenas ideas ajenas fortalece al equipo y mejora decisiones."
  },
  {
    "id": 39,
    "text": "No necesito aprender de nadie porque mi experiencia es suficiente.",
    "feedbackTrue": "DESFAVORABLE. La experiencia es valiosa, pero el aprendizaje continuo es esencial en instituciones profesionales.",
    "feedbackFalse": "FAVORABLE. Mantener disposición para aprender de superiores, pares y subordinados favorece la mejora."
  },
  {
    "id": 40,
    "text": "Alguna vez he aprendido algo importante de una persona con menos experiencia que yo.",
    "feedbackTrue": "FAVORABLE. La capacidad de aprender sin importar el rango o antigüedad refleja humildad y apertura.",
    "feedbackFalse": "REQUIERE REFLEXIÓN. La experiencia ajena no debe descartarse únicamente por diferencia de antigüedad."
  },
  {
    "id": 41,
    "text": "Me considero una persona responsable con mis horarios.",
    "feedbackTrue": "FAVORABLE. La puntualidad y organización son importantes para la coordinación y confiabilidad institucional.",
    "feedbackFalse": "REQUIERE REFLEXIÓN. La impuntualidad frecuente puede afectar al equipo y a la misión."
  },
  {
    "id": 42,
    "text": "A veces llego tarde por circunstancias que no había previsto.",
    "feedbackTrue": "HUMANO. Un retraso ocasional puede ocurrir; lo importante es comunicarlo oportunamente y reducir su repetición mediante planificación.",
    "feedbackFalse": "FAVORABLE. La puntualidad sostenida demuestra organización."
  },
  {
    "id": 43,
    "text": "Siempre llego exactamente a tiempo, sin excepción.",
    "feedbackTrue": "REQUIERE REFLEXIÓN. Una afirmación absoluta puede ser poco realista. Es más profesional reconocer que pueden existir imprevistos y contar con margen de seguridad.",
    "feedbackFalse": "FAVORABLE. La puntualidad habitual es una conducta deseable."
  },
  {
    "id": 44,
    "text": "Suelo preparar con anticipación lo necesario para una tarea importante.",
    "feedbackTrue": "FAVORABLE. La preparación reduce errores y permite responder mejor ante imprevistos.",
    "feedbackFalse": "REQUIERE REFLEXIÓN. La falta de preparación puede generar riesgos evitables."
  },
  {
    "id": 45,
    "text": "No me gusta revisar mi trabajo después de terminarlo.",
    "feedbackTrue": "REQUIERE REFLEXIÓN. La revisión ayuda a detectar errores antes de que afecten a otras personas o a la misión.",
    "feedbackFalse": "FAVORABLE. Revisar el trabajo demuestra atención al detalle."
  },
  {
    "id": 46,
    "text": "Alguna vez he olvidado una tarea importante.",
    "feedbackTrue": "NORMAL, SI ES OCASIONAL Y SE CORRIGE. Los olvidos pueden ocurrir; la responsabilidad consiste en usar sistemas de organización y aprender del error.",
    "feedbackFalse": "FAVORABLE. Una buena organización puede reducir olvidos, aunque nadie debe considerarse infalible."
  },
  {
    "id": 47,
    "text": "Nunca olvido absolutamente ninguna tarea.",
    "feedbackTrue": "REQUIERE REFLEXIÓN. La perfección absoluta no es una expectativa realista. Es más útil contar con mecanismos de verificación.",
    "feedbackFalse": "FAVORABLE. Una buena organización es positiva; aun así, mantener controles de respaldo es prudente."
  },
  {
    "id": 48,
    "text": "Cuando no entiendo una instrucción, pregunto antes de actuar.",
    "feedbackTrue": "FAVORABLE. Aclarar dudas evita errores y protege la ejecución de la tarea.",
    "feedbackFalse": "REQUIERE REFLEXIÓN. Actuar con una comprensión insuficiente puede producir errores evitables."
  },
  {
    "id": 49,
    "text": "No necesito preguntar nada porque siempre entiendo perfectamente las instrucciones.",
    "feedbackTrue": "REQUIERE REFLEXIÓN. Nadie comprende absolutamente todo; preguntar cuando existe una duda es una conducta responsable.",
    "feedbackFalse": "FAVORABLE. Comprender instrucciones es importante, pero debe existir apertura para solicitar aclaraciones."
  },
  {
    "id": 50,
    "text": "Si cometo un error que puede afectar a otros, lo comunico a quien corresponda.",
    "feedbackTrue": "FAVORABLE. Informar oportunamente permite corregir el problema y reduce consecuencias mayores.",
    "feedbackFalse": "REQUIERE REFLEXIÓN. Ocultar errores
  },
{
  id: 51,
  question: "¿Alguna vez me he sentido nervioso antes de una situación importante?",
  feedbackTrue: "CORRECTO: El nerviosismo ante situaciones importantes es una reacción humana normal y no significa falta de capacidad.",
  feedbackFalse: "INCORRECTO: Es posible sentirse tranquilo ante muchas situaciones, pero negar cualquier nerviosismo durante toda la vida puede ser poco realista."
},
{
  id: 52,
  question: "¿Siempre estoy tranquilo sin importar lo que suceda?",
  feedbackTrue: "CORRECTO: Mantener la calma es una fortaleza, aunque las circunstancias pueden provocar emociones intensas ocasionalmente.",
  feedbackFalse: "INCORRECTO: Experimentar preocupación o nerviosismo en determinadas situaciones es completamente humano."
},
{
  id: 53,
  question: "¿Alguna vez he sentido miedo?",
  feedbackTrue: "CORRECTO: El miedo es una emoción humana básica que puede aparecer ante situaciones desconocidas, peligrosas o importantes.",
  feedbackFalse: "INCORRECTO: Negar haber sentido miedo alguna vez puede resultar poco realista."
},
{
  id: 54,
  question: "¿No he sentido nunca miedo desde que era niño?",
  feedbackTrue: "CORRECTO: Algunas personas pueden recordar pocos momentos de miedo, pero una afirmación absoluta sobre toda la vida requiere cautela.",
  feedbackFalse: "INCORRECTO: El miedo aparece normalmente desde la infancia y forma parte de la experiencia humana."
},
{
  id: 55,
  question: "¿Puedo sentir miedo y aun así cumplir con mi responsabilidad?",
  feedbackTrue: "CORRECTO: Sentir miedo y actuar responsablemente pueden coexistir; el valor no significa ausencia total de miedo.",
  feedbackFalse: "INCORRECTO: El miedo puede dificultar algunas acciones, pero no necesariamente impide cumplir una responsabilidad."
},
{
  id: 56,
  question: "¿Alguna vez he sentido tristeza por una situación personal?",
  feedbackTrue: "CORRECTO: La tristeza ocasional es una emoción normal ante pérdidas, decepciones o dificultades.",
  feedbackFalse: "INCORRECTO: Algunas personas atraviesan etapas con poca tristeza, pero negar toda experiencia de tristeza puede ser poco realista."
},
{
  id: 57,
  question: "¿Siempre estoy feliz?",
  feedbackTrue: "CORRECTO: Tener una actitud positiva puede ser una fortaleza, aunque ninguna persona experimenta una sola emoción permanentemente.",
  feedbackFalse: "INCORRECTO: La felicidad puede coexistir con momentos de tristeza, preocupación, enojo o cansancio."
},
{
  id: 58,
  question: "¿Alguna vez he llorado por algo que me afectó emocionalmente?",
  feedbackTrue: "CORRECTO: El llanto puede ser una expresión normal de tristeza, alegría, alivio u otras emociones.",
  feedbackFalse: "INCORRECTO: Algunas personas lloran poco, pero negar toda posibilidad de haber llorado por una emoción puede ser poco realista."
},
{
  id: 59,
  question: "¿No lloro nunca aunque esté pasando por una situación difícil?",
  feedbackTrue: "CORRECTO: Algunas personas expresan sus emociones de otras maneras, aunque el 'nunca' debe interpretarse con cautela.",
  feedbackFalse: "INCORRECTO: Una situación difícil puede provocar diferentes reacciones emocionales, incluido el llanto."
},
{
  id: 60,
  question: "¿Puedo continuar realizando mis actividades después de sentirme triste?",
  feedbackTrue: "CORRECTO: Una emoción temporal no necesariamente impide continuar con las responsabilidades.",
  feedbackFalse: "INCORRECTO: La tristeza puede afectar temporalmente el rendimiento, pero no necesariamente impide continuar con las actividades."
},
{
  id: 61,
  question: "¿Alguna vez he sentido frustración cuando algo no salió como esperaba?",
  feedbackTrue: "CORRECTO: La frustración aparece naturalmente cuando los resultados no coinciden con nuestras expectativas.",
  feedbackFalse: "INCORRECTO: Es posible aceptar fácilmente algunos resultados, pero la frustración ocasional es una experiencia humana común."
},
{
  id: 62,
  question: "¿Siempre consigo lo que me propongo?",
  feedbackTrue: "CORRECTO: La perseverancia puede aumentar las posibilidades de alcanzar objetivos, aunque existen circunstancias que no dependen completamente de nosotros.",
  feedbackFalse: "INCORRECTO: No alcanzar algún objetivo ocasionalmente es parte normal de la experiencia humana."
},
{
  id: 63,
  question: "¿Puedo continuar intentando después de fracasar?",
  feedbackTrue: "CORRECTO: La perseverancia después de un fracaso demuestra capacidad de aprendizaje y adaptación.",
  feedbackFalse: "INCORRECTO: Un fracaso puede desmotivar temporalmente, pero es posible aprender y volver a intentarlo."
},
{
  id: 64,
  question: "¿Alguna vez he querido abandonar una tarea porque estaba resultando demasiado difícil?",
  feedbackTrue: "CORRECTO: Sentir frustración ante una tarea difícil es normal y no significa necesariamente falta de perseverancia.",
  feedbackFalse: "INCORRECTO: Es posible perseverar ante muchas dificultades, aunque probablemente existan situaciones que hayan generado cansancio o frustración."
},
{
  id: 65,
  question: "¿No me he sentido nunca incapaz de resolver un problema?",
  feedbackTrue: "CORRECTO: Tener confianza es positivo, pero prácticamente cualquier persona puede encontrarse alguna vez con un problema que no sabe resolver inmediatamente.",
  feedbackFalse: "INCORRECTO: Reconocer límites temporales permite buscar ayuda, aprender y encontrar soluciones."
},
{
  id: 66,
  question: "¿Puedo pedir ayuda cuando no sé cómo resolver algo?",
  feedbackTrue: "CORRECTO: Pedir ayuda cuando es necesario demuestra criterio y evita errores innecesarios.",
  feedbackFalse: "INCORRECTO: Intentar resolver todo sin apoyo puede aumentar la posibilidad de errores cuando faltan conocimientos o recursos."
},
{
  id: 67,
  question: "¿Alguna vez he necesitado que alguien me enseñara algo que no sabía?",
  feedbackTrue: "CORRECTO: Nadie nace sabiendo todo; aprender de otras personas forma parte del desarrollo.",
  feedbackFalse: "INCORRECTO: Es poco realista pensar que una persona puede aprender absolutamente todo sin recibir enseñanza o apoyo."
},
{
  id: 68,
  question: "¿Siempre sé exactamente qué hacer ante cualquier problema?",
  feedbackTrue: "CORRECTO: Tener buen criterio ayuda, pero ninguna persona puede conocer de antemano la solución de absolutamente todos los problemas.",
  feedbackFalse: "INCORRECTO: Encontrarse ocasionalmente con problemas desconocidos es normal."
},
{
  id: 69,
  question: "¿Puedo reconocer cuando necesito aprender algo nuevo?",
  feedbackTrue: "CORRECTO: Reconocer una necesidad de aprendizaje permite mejorar las propias capacidades.",
  feedbackFalse: "INCORRECTO: Ignorar las propias áreas de aprendizaje puede dificultar el crecimiento personal y profesional."
},
{
  id: 70,
  question: "¿Alguna vez he sentido que otra persona sabe más que yo sobre un tema?",
  feedbackTrue: "CORRECTO: Es natural encontrar personas con mayor experiencia o conocimiento en determinados campos.",
  feedbackFalse: "INCORRECTO: Nadie puede ser experto en todos los temas, por lo que reconocer conocimientos ajenos es normal."
},
{
  id: 71,
  question: "¿No acepto nunca consejos de otras personas?",
  feedbackTrue: "CORRECTO: Tener criterio propio es importante, pero rechazar absolutamente todo consejo puede limitar oportunidades de aprendizaje.",
  feedbackFalse: "INCORRECTO: Escuchar consejos no obliga a seguirlos y puede aportar perspectivas útiles."
},
{
  id: 72,
  question: "¿Puedo aceptar un consejo aunque finalmente decida no seguirlo?",
  feedbackTrue: "CORRECTO: Escuchar una recomendación y evaluarla antes de decidir demuestra criterio independiente.",
  feedbackFalse: "INCORRECTO: Rechazar una recomendación automáticamente puede impedir considerar información útil."
},
{
  id: 73,
  question: "¿Alguna vez he cambiado de opinión después de escuchar buenos argumentos?",
  feedbackTrue: "CORRECTO: Modificar una opinión cuando aparecen argumentos sólidos demuestra apertura mental.",
  feedbackFalse: "INCORRECTO: Es posible mantener una opinión después de escuchar argumentos, pero ninguna postura debería considerarse intocable."
},
{
  id: 74,
  question: "¿Siempre tengo razón en las discusiones?",
  feedbackTrue: "CORRECTO: Tener buenos argumentos es positivo, pero asumir que siempre se tiene razón puede impedir reconocer errores.",
  feedbackFalse: "INCORRECTO: Reconocer que otras personas pueden tener razón favorece el aprendizaje y la convivencia."
},
{
  id: 75,
  question: "¿Alguna vez he descubierto que estaba equivocado en una discusión?",
  feedbackTrue: "CORRECTO: Reconocer errores de criterio es una parte normal del aprendizaje.",
  feedbackFalse: "INCORRECTO: Es posible acertar en muchas discusiones, pero nadie tiene razón absoluta en todas las ocasiones."
},
{
  id: 76,
  question: "¿Puedo reconocer que me equivoqué cuando tengo evidencia suficiente?",
  feedbackTrue: "CORRECTO: Cambiar una conclusión ante evidencia sólida demuestra honestidad intelectual.",
  feedbackFalse: "INCORRECTO: Negarse a considerar evidencia puede dificultar la toma de decisiones objetivas."
},
{
  id: 77,
  question: "¿Alguna vez he cometido un error por no prestar suficiente atención?",
  feedbackTrue: "CORRECTO: Los errores por falta de atención pueden ocurrir ocasionalmente y sirven como oportunidad para mejorar.",
  feedbackFalse: "INCORRECTO: Es posible mantener buena concentración, aunque negar cualquier error relacionado con la atención puede ser poco realista."
},
{
  id: 78,
  question: "¿Nunca me he distraído mientras realizaba una tarea?",
  feedbackTrue: "CORRECTO: La concentración es valiosa, pero la atención humana puede fluctuar ocasionalmente.",
  feedbackFalse: "INCORRECTO: Las distracciones ocasionales son normales y pueden reducirse mediante organización y hábitos de atención."
},
{
  id: 79,
  question: "¿Puedo concentrarme nuevamente después de una distracción?",
  feedbackTrue: "CORRECTO: Recuperar la concentración es una habilidad importante para mantener un buen desempeño.",
  feedbackFalse: "INCORRECTO: Una distracción puede dificultar temporalmente la concentración, pero es posible desarrollar estrategias para recuperarla."
},
{
  id: 80,
  question: "¿Siempre estoy concentrado durante absolutamente toda una actividad?",
  feedbackTrue: "CORRECTO: Mantener una buena atención es positivo, aunque la concentración puede fluctuar naturalmente.",
  feedbackFalse: "INCORRECTO: Las pequeñas fluctuaciones de atención son normales y no necesariamente significan falta de responsabilidad."
},
{
  id: 81,
  question: "¿Alguna vez he olvidado algo importante?",
  feedbackTrue: "CORRECTO: La memoria humana puede fallar ocasionalmente incluso cuando una persona es responsable.",
  feedbackFalse: "INCORRECTO: Tener buena memoria es posible, pero afirmar que jamás se ha olvidado algo importante requiere una interpretación muy absoluta."
},
{
  id: 82,
  question: "¿No olvido nunca ninguna responsabilidad?",
  feedbackTrue: "CORRECTO: Ser responsable es positivo, aunque los olvidos ocasionales pueden ocurrir.",
  feedbackFalse: "INCORRECTO: Reconocer un olvido ocasional permite desarrollar mejores sistemas de organización."
},
{
  id: 83,
  question: "¿Utilizo algún método para recordar tareas importantes?",
  feedbackTrue: "CORRECTO: Agendas, listas y recordatorios pueden ayudar a mantener una buena organización.",
  feedbackFalse: "INCORRECTO: Aunque algunas personas tienen buena memoria, utilizar herramientas de organización puede reducir errores."
},
{
  id: 84,
  question: "¿Alguna vez he tenido que revisar dos veces algo antes de entregarlo?",
  feedbackTrue: "CORRECTO: Revisar el trabajo ayuda a detectar errores antes de finalizar una tarea.",
  feedbackFalse: "INCORRECTO: Revisar no siempre es necesario en tareas simples, pero puede ser muy útil cuando existen consecuencias importantes."
},
{
  id: 85,
  question: "¿Siempre estoy completamente seguro de que mi trabajo no contiene ningún error?",
  feedbackTrue: "CORRECTO: La confianza es útil, pero revisar incluso los trabajos bien realizados ayuda a detectar posibles equivocaciones.",
  feedbackFalse: "INCORRECTO: Reconocer que un trabajo puede contener un error permite mantener una actitud cuidadosa."
},
{
  id: 86,
  question: "¿Puedo aceptar que revisen mi trabajo?",
  feedbackTrue: "CORRECTO: La revisión externa puede detectar errores que uno mismo no percibe.",
  feedbackFalse: "INCORRECTO: La revisión puede resultar incómoda, pero puede mejorar la calidad del trabajo."
},
{
  id: 87,
  question: "¿Alguna vez me ha molestado que revisaran mi trabajo?",
  feedbackTrue: "CORRECTO: Sentir cierta incomodidad ante una revisión puede ocurrir sin que eso implique rechazo a la responsabilidad.",
  feedbackFalse: "INCORRECTO: Es posible recibir revisiones con tranquilidad, aunque algunas situaciones pueden generar incomodidad."
},
{
  id: 88,
  question: "¿No acepto nunca que otra persona revise lo que hago?",
  feedbackTrue: "CORRECTO: Tener autonomía es positivo, pero rechazar toda revisión puede impedir detectar errores.",
  feedbackFalse: "INCORRECTO: Aceptar revisiones puede favorecer el aprendizaje y la calidad del trabajo."
},
{
  id: 89,
  question: "¿Puedo aprender de una corrección sin sentir que están atacando mi capacidad?",
  feedbackTrue: "CORRECTO: Diferenciar una corrección de un ataque personal favorece el aprendizaje.",
  feedbackFalse: "INCORRECTO: Algunas correcciones pueden sentirse incómodas, pero pueden aprovecharse para mejorar."
},
{
  id: 90,
  question: "¿Alguna vez me ha dolido que alguien señalara un error mío?",
  feedbackTrue: "CORRECTO: Una corrección puede generar vergüenza, frustración o molestia, especialmente cuando se está orgulloso del trabajo realizado.",
  feedbackFalse: "INCORRECTO: Algunas correcciones pueden recibirse sin malestar, aunque las emociones ante los errores varían según la situación."
},
{
  id: 91,
  question: "¿Puedo disculparme cuando descubro que perjudique a otra persona por un error?",
  feedbackTrue: "CORRECTO: Reconocer el impacto de un error y disculparse demuestra responsabilidad.",
  feedbackFalse: "INCORRECTO: Evitar asumir responsabilidad puede dificultar la reparación de una situación."
},
{
  id: 92,
  question: "¿Alguna vez he pedido perdón por algo que hice mal?",
  feedbackTrue: "CORRECTO: Pedir perdón cuando corresponde es una forma de asumir responsabilidad.",
  feedbackFalse: "INCORRECTO: Es posible no haber tenido muchas ocasiones, pero negar cualquier necesidad de disculparse durante toda la vida puede ser poco realista."
},
{
  id: 93,
  question: "¿Nunca he necesitado pedir disculpas?",
  feedbackTrue: "CORRECTO: Es posible haber tenido pocas situaciones que requieran disculpas, aunque una afirmación absoluta merece reflexión.",
  feedbackFalse: "INCORRECTO: Las personas pueden cometer errores o causar molestias sin intención y posteriormente necesitar disculparse."
},
{
  id: 94,
  question: "¿Puedo reconocer que una disculpa no borra automáticamente las consecuencias de un error?",
  feedbackTrue: "CORRECTO: Pedir disculpas es importante, pero reparar una consecuencia puede requerir acciones adicionales.",
  feedbackFalse: "INCORRECTO: Una disculpa puede ser un primer paso, pero algunas situaciones necesitan reparación o cambios concretos."
},
{
  id: 95,
  question: "¿Alguna vez he tenido dificultades para disculparme por orgullo?",
  feedbackTrue: "CORRECTO: El orgullo puede dificultar ocasionalmente admitir un error; reconocerlo permite trabajarlo.",
  feedbackFalse: "INCORRECTO: Algunas personas pueden disculparse fácilmente, aunque el orgullo puede aparecer en determinadas situaciones."
},
{
  id: 96,
  question: "¿Siempre admito mis errores inmediatamente?",
  feedbackTrue: "CORRECTO: Admitir errores rápidamente es positivo, aunque algunas personas necesitan tiempo para comprender lo sucedido.",
  feedbackFalse: "INCORRECTO: Tardar en reconocer un error ocasionalmente puede ocurrir, especialmente cuando la situación es compleja."
},
{
  id: 97,
  question: "¿Alguna vez he necesitado tiempo para aceptar que estaba equivocado?",
  feedbackTrue: "CORRECTO: Aceptar una equivocación puede requerir reflexión, especialmente cuando existe orgullo o emociones involucradas.",
  feedbackFalse: "INCORRECTO: Algunas personas reconocen rápidamente sus errores, aunque no todas las situaciones se procesan de la misma manera."
},
{
  id: 98,
  question: "¿Puedo cambiar una conducta después de reconocer que fue equivocada?",
  feedbackTrue: "CORRECTO: Aprender de los errores implica intentar modificar la conducta cuando sea necesario.",
  feedbackFalse: "INCORRECTO: Reconocer un error sin intentar corregirlo limita la posibilidad de aprendizaje."
},
{
  id: 99,
  question: "¿Alguna vez he repetido un error que ya había cometido?",
  feedbackTrue: "CORRECTO: Los seres humanos pueden repetir errores antes de desarrollar una estrategia efectiva para evitarlos.",
  feedbackFalse: "INCORRECTO: Algunas personas corrigen inmediatamente sus errores, pero repetir ocasionalmente una equivocación puede suceder."
},
{
  id: 100,
  question: "¿Nunca he cometido dos veces el mismo error?",
  feedbackTrue: "CORRECTO: Aprender rápidamente de los errores es positivo, aunque garantizar que jamás se repitió uno es una afirmación absoluta.",
  feedbackFalse: "INCORRECTO: Repetir una equivocación ocasionalmente no significa incapacidad para aprender."
},
{
  id: 101,
  question: "¿Puedo reconocer cuando estoy demasiado cansado para concentrarme correctamente?",
  feedbackTrue: "CORRECTO: Reconocer los efectos del cansancio permite tomar decisiones más responsables.",
  feedbackFalse: "INCORRECTO: Ignorar el cansancio puede aumentar los errores y disminuir la atención."
},
{
  id: 102,
  question: "¿Alguna vez he cometido un error porque estaba cansado?",
  feedbackTrue: "CORRECTO: El cansancio puede afectar la atención y producir errores ocasionales.",
  feedbackFalse: "INCORRECTO: Es posible no haber cometido ese tipo de error, pero el cansancio puede afectar el rendimiento humano."
},
{
  id: 103,
  question: "¿No me canso nunca aunque realice una actividad exigente?",
  feedbackTrue: "CORRECTO: Tener resistencia es positivo, pero el cansancio es una respuesta fisiológica normal ante esfuerzos prolongados.",
  feedbackFalse: "INCORRECTO: Reconocer el cansancio después de un esfuerzo es completamente normal."
},
{
  id: 104,
  question: "¿Puedo mantener mi responsabilidad aunque esté cansado?",
  feedbackTrue: "CORRECTO: La responsabilidad implica reconocer el cansancio y actuar de forma segura y prudente.",
  feedbackFalse: "INCORRECTO: El cansancio puede afectar el rendimiento, por lo que es importante considerar sus efectos."
},
{
  id: 105,
  question: "¿Alguna vez he necesitado descansar antes de continuar una actividad?",
  feedbackTrue: "CORRECTO: Las pausas permiten recuperar energía y concentración.",
  feedbackFalse: "INCORRECTO: No todas las actividades requieren descanso inmediato, aunque después de esfuerzos prolongados puede ser necesario."
},
{
  id: 106,
  question: "¿Siempre puedo trabajar durante muchas horas sin sentir ningún cansancio?",
  feedbackTrue: "CORRECTO: La resistencia puede ser una fortaleza, pero la ausencia total de cansancio ante cualquier jornada extensa es poco realista.",
  feedbackFalse: "INCORRECTO: El cansancio después de una jornada exigente es una reacción normal."
},
{
  id: 107,
  question: "¿Puedo mantener buenos hábitos de descanso?",
  feedbackTrue: "CORRECTO: El descanso adecuado favorece la atención, recuperación y desempeño.",
  feedbackFalse: "INCORRECTO: Mejorar los hábitos de descanso puede contribuir al rendimiento y bienestar general."
},
{
  id: 108,
  question: "¿Alguna vez he sacrificado horas de descanso para terminar una tarea?",
  feedbackTrue: "CORRECTO: Puede ocurrir ocasionalmente ante responsabilidades urgentes, aunque no debería convertirse necesariamente en una práctica habitual.",
  feedbackFalse: "INCORRECTO: Mantener buenos horarios de descanso es positivo, aunque pueden existir situaciones excepcionales."
},
{
  id: 109,
  question: "¿Nunca he tenido que sacrificar horas de sueño por una responsabilidad?",
  feedbackTrue: "CORRECTO: Algunas personas mantienen horarios constantes, aunque determinadas responsabilidades pueden alterar ocasionalmente el descanso.",
  feedbackFalse: "INCORRECTO: Una situación excepcional puede requerir modificar temporalmente los horarios de descanso."
},
{
  id: 110,
  question: "¿Puedo reconocer cuándo necesito hacer una pausa?",
  feedbackTrue: "CORRECTO: Reconocer la necesidad de una pausa puede ayudar a mantener concentración y seguridad.",
  feedbackFalse: "INCORRECTO: Ignorar señales de agotamiento puede aumentar la posibilidad de errores."
},
{
  id: 201,
  question: "¿Alguna vez he cometido un error por estar distraído?",
  feedbackTrue: "CORRECTO: La distracción es una experiencia humana ocasional y reconocer un error permite aprender de él.",
  feedbackFalse: "INCORRECTO: Afirmar que nunca se ha cometido un error por distracción puede ser poco realista, especialmente ante situaciones cotidianas."
},
{
  id: 202,
  question: "¿Siempre mantengo la calma incluso cuando estoy bajo mucha presión?",
  feedbackTrue: "CORRECTO: Mantener la calma puede ser una fortaleza, aunque conviene distinguir entre tener autocontrol y no experimentar ninguna emoción.",
  feedbackFalse: "INCORRECTO: Reconocer que la presión puede afectar ocasionalmente al estado emocional es compatible con ser una persona responsable."
},
{
  id: 203,
  question: "¿Alguna vez he tenido miedo antes de enfrentar una situación difícil?",
  feedbackTrue: "CORRECTO: El miedo puede aparecer incluso en personas valientes; sentirlo no significa necesariamente actuar de manera cobarde.",
  feedbackFalse: "INCORRECTO: Negar haber sentido miedo ante cualquier situación difícil puede ser poco realista."
},
{
  id: 204,
  question: "¿No he sentido nunca tristeza después de perder algo importante?",
  feedbackTrue: "CORRECTO: Es posible que una persona haya afrontado algunas pérdidas sin experimentar tristeza intensa, aunque una afirmación absoluta merece reflexión.",
  feedbackFalse: "INCORRECTO: Las pérdidas importantes pueden producir tristeza en distintos momentos de la vida, por lo que el 'nunca' requiere cautela."
},
{
  id: 205,
  question: "¿Alguna vez he respondido de manera impulsiva y después me he arrepentido?",
  feedbackTrue: "CORRECTO: Las respuestas impulsivas ocasionales forman parte de la experiencia humana y reconocerlas favorece el autocontrol.",
  feedbackFalse: "INCORRECTO: Es poco realista asumir que una persona jamás ha reaccionado impulsivamente en ninguna circunstancia."
},
{
  id: 206,
  question: "¿Nunca he sentido enojo hacia otra persona?",
  feedbackTrue: "CORRECTO: Es posible no haber experimentado un enojo intenso hacia alguien en determinadas etapas, aunque el carácter absoluto de la frase merece reflexión.",
  feedbackFalse: "INCORRECTO: Sentir enojo ocasionalmente es una emoción humana normal y no equivale automáticamente a actuar agresivamente."
},
{
  id: 207,
  question: "¿Puedo reconocer cuando he cometido una equivocación?",
  feedbackTrue: "CORRECTO: Reconocer los errores facilita corregirlos, aprender y asumir responsabilidad.",
  feedbackFalse: "INCORRECTO: La dificultad para reconocer errores puede impedir el aprendizaje y la mejora personal."
},
{
  id: 208,
  question: "¿Alguna vez he ocultado un error por miedo a recibir una reprimenda?",
  feedbackTrue: "CORRECTO: El miedo a las consecuencias puede llevar ocasionalmente a ocultar errores; reconocerlo permite trabajar en una comunicación más responsable.",
  feedbackFalse: "INCORRECTO: Algunas personas nunca han ocultado un error por miedo, pero también es importante considerar situaciones concretas antes de formular una conclusión absoluta."
},
{
  id: 209,
  question: "¿Siempre digo exactamente lo que pienso?",
  feedbackTrue: "CORRECTO: La sinceridad puede ser una fortaleza, aunque la comunicación responsable también requiere tacto y consideración por los demás.",
  feedbackFalse: "INCORRECTO: Las personas suelen adaptar la manera de expresar sus pensamientos según el contexto, sin que eso implique necesariamente mentir."
},
{
  id: 210,
  question: "¿No me equivoco nunca cuando tomo decisiones importantes?",
  feedbackTrue: "CORRECTO: Es posible tener un buen criterio para decidir, pero afirmar que nunca se comete un error plantea una exigencia poco realista.",
  feedbackFalse: "INCORRECTO: Incluso las decisiones cuidadosamente tomadas pueden producir resultados inesperados."
},
{
  id: 211,
  question: "¿Alguna vez he tenido dudas antes de tomar una decisión importante?",
  feedbackTrue: "CORRECTO: Tener dudas puede reflejar análisis y consideración de las consecuencias.",
  feedbackFalse: "INCORRECTO: Es normal experimentar dudas ante algunas decisiones importantes, aunque no todas generan el mismo nivel de incertidumbre."
},
{
  id: 212,
  question: "¿Puedo cambiar de opinión cuando encuentro información nueva?",
  feedbackTrue: "CORRECTO: Revisar una opinión ante nueva información puede demostrar capacidad de aprendizaje y pensamiento flexible.",
  feedbackFalse: "INCORRECTO: Mantener una opinión sin considerar nueva evidencia puede limitar la capacidad de adaptación."
},
{
  id: 213,
  question: "¿Nunca cambio de opinión aunque aparezcan nuevas pruebas?",
  feedbackTrue: "CORRECTO: Mantener una postura puede ser razonable cuando la nueva información no modifica los fundamentos, pero una negativa absoluta merece reflexión.",
  feedbackFalse: "INCORRECTO: Estar dispuesto a revisar una conclusión cuando aparecen evidencias relevantes es una característica útil."
},
{
  id: 214,
  question: "¿Alguna vez he juzgado a alguien demasiado rápido?",
  feedbackTrue: "CORRECTO: Las primeras impresiones pueden influir en cualquier persona; reconocerlo permite corregir prejuicios.",
  feedbackFalse: "INCORRECTO: Es posible que una persona tenga buenas habilidades para evitar juicios apresurados, pero resulta difícil garantizar que nunca haya ocurrido."
},
{
  id: 215,
  question: "¿No he tratado injustamente a nadie en toda mi vida?",
  feedbackTrue: "CORRECTO: Es positivo procurar tratar justamente a los demás, aunque las afirmaciones que abarcan toda la vida deben evaluarse con realismo.",
  feedbackFalse: "INCORRECTO: Reconocer que alguna vez se pudo actuar injustamente permite asumir responsabilidad y aprender."
},
{
  id: 216,
  question: "¿Puedo pedir disculpas cuando reconozco que hice algo incorrecto?",
  feedbackTrue: "CORRECTO: Pedir disculpas cuando corresponde demuestra responsabilidad y disposición para reparar una situación.",
  feedbackFalse: "INCORRECTO: Tener dificultad para disculparse puede dificultar la resolución de conflictos."
},
{
  id: 217,
  question: "¿Alguna vez he pedido disculpas aunque me haya costado hacerlo?",
  feedbackTrue: "CORRECTO: Reconocer una equivocación aun cuando resulte incómodo puede demostrar madurez.",
  feedbackFalse: "INCORRECTO: Algunas personas pueden pedir disculpas con facilidad, pero el hecho de que resulte difícil en ciertas situaciones también es humano."
},
{
  id: 218,
  question: "¿Siempre acepto las críticas sin sentir ninguna molestia?",
  feedbackTrue: "CORRECTO: Es valioso recibir críticas con apertura, aunque experimentar cierta incomodidad no significa incapacidad para aceptarlas.",
  feedbackFalse: "INCORRECTO: Una crítica puede generar molestia o incomodidad ocasionalmente y aun así ser aceptada de manera constructiva."
},
{
  id: 219,
  question: "¿Alguna vez una crítica me ha hecho sentir mal?",
  feedbackTrue: "CORRECTO: Las críticas pueden afectar emocionalmente, especialmente cuando tocan aspectos importantes para la persona.",
  feedbackFalse: "INCORRECTO: Es posible recibir críticas sin sentirse mal, pero negar toda posibilidad de afectación emocional puede ser poco realista."
},
{
  id: 220,
  question: "¿Puedo aprender de una crítica sin tomarla como un ataque personal?",
  feedbackTrue: "CORRECTO: Separar la información útil de la reacción emocional favorece el aprendizaje.",
  feedbackFalse: "INCORRECTO: Cuando una crítica se percibe como ataque puede resultar difícil aprovecharla, aunque esa reacción puede trabajarse."
},
{
  id: 221,
  question: "¿No me molesta nunca que alguien cuestione mis decisiones?",
  feedbackTrue: "CORRECTO: Es positivo tolerar cuestionamientos, aunque sentir cierta incomodidad ocasional puede ser normal.",
  feedbackFalse: "INCORRECTO: Que una persona se moleste ocasionalmente ante un cuestionamiento no significa necesariamente que sea intolerante a las críticas."
},
{
  id: 222,
  question: "¿Puedo trabajar con alguien cuya personalidad es muy diferente a la mía?",
  feedbackTrue: "CORRECTO: La capacidad de colaborar con personas diferentes es importante para el trabajo en equipo.",
  feedbackFalse: "INCORRECTO: Tener dificultades con algunas personalidades puede ocurrir, pero desarrollar estrategias de cooperación es importante."
},
{
  id: 223,
  question: "¿Alguna vez he tenido un conflicto con un compañero?",
  feedbackTrue: "CORRECTO: Los desacuerdos ocasionales forman parte de las relaciones humanas y no necesariamente indican incapacidad para trabajar en equipo.",
  feedbackFalse: "INCORRECTO: Es posible tener relaciones laborales sin conflictos, pero afirmar que jamás hubo un desacuerdo puede ser demasiado absoluto."
},
{
  id: 224,
  question: "¿Siempre estoy de acuerdo con mis compañeros?",
  feedbackTrue: "CORRECTO: La cooperación puede coexistir con opiniones diferentes; estar siempre de acuerdo no es indispensable para un buen equipo.",
  feedbackFalse: "INCORRECTO: Tener desacuerdos ocasionales puede ser completamente compatible con el respeto y el trabajo en equipo."
},
{
  id: 225,
  question: "¿Puedo expresar respetuosamente que no estoy de acuerdo?",
  feedbackTrue: "CORRECTO: Expresar desacuerdos de manera respetuosa favorece la comunicación y evita conflictos innecesarios.",
  feedbackFalse: "INCORRECTO: Aprender a expresar desacuerdos sin agresividad es una habilidad importante para cualquier equipo."
},
{
  id: 226,
  question: "¿No escucho nunca las opiniones de personas con menor experiencia que yo?",
  feedbackTrue: "CORRECTO: Es posible valorar especialmente la experiencia, pero descartar siempre las opiniones de otros puede limitar el aprendizaje.",
  feedbackFalse: "INCORRECTO: Escuchar diferentes perspectivas puede aportar información útil independientemente del nivel de experiencia."
},
{
  id: 227,
  question: "¿Puedo aceptar una sugerencia de alguien con menos experiencia?",
  feedbackTrue: "CORRECTO: La utilidad de una idea no depende exclusivamente de la antigüedad de quien la propone.",
  feedbackFalse: "INCORRECTO: Rechazar automáticamente ideas por la falta de experiencia puede impedir encontrar buenas soluciones."
},
{
  id: 228,
  question: "¿Alguna vez he ayudado a un compañero que estaba pasando por un momento difícil?",
  feedbackTrue: "CORRECTO: Brindar apoyo a un compañero refleja solidaridad y capacidad de reconocer las necesidades de otros.",
  feedbackFalse: "INCORRECTO: No todas las personas han tenido la oportunidad de hacerlo, pero la disposición a apoyar a otros puede desarrollarse."
},
{
  id: 229,
  question: "¿Siempre puedo resolver solo cualquier problema?",
  feedbackTrue: "CORRECTO: La autonomía es valiosa, pero reconocer cuándo se necesita ayuda también forma parte de una actuación responsable.",
  feedbackFalse: "INCORRECTO: Algunos problemas requieren conocimientos, recursos o colaboración de otras personas."
},
{
  id: 230,
  question: "¿Puedo pedir ayuda cuando una situación supera mis conocimientos?",
  feedbackTrue: "CORRECTO: Pedir apoyo cuando es necesario puede prevenir errores y mejorar la seguridad de una decisión.",
  feedbackFalse: "INCORRECTO: Negarse a pedir ayuda cuando se carece de conocimientos puede aumentar el riesgo de cometer errores."
},
{
  id: 231,
  question: "¿Alguna vez he sentido cansancio después de una jornada exigente?",
  feedbackTrue: "CORRECTO: El cansancio después de una actividad exigente es una reacción humana normal.",
  feedbackFalse: "INCORRECTO: Es posible terminar algunas jornadas sin cansancio significativo, pero nunca sentirlo ante ninguna actividad exigente sería poco común."
},
{
  id: 232,
  question: "¿No me canso nunca aunque tenga que trabajar durante muchas horas?",
  feedbackTrue: "CORRECTO: Una persona puede tener buena resistencia, pero el cansancio es una respuesta fisiológica normal ante esfuerzos prolongados.",
  feedbackFalse: "INCORRECTO: Reconocer el cansancio no equivale a falta de disciplina; puede ser una señal normal del esfuerzo realizado."
},
{
  id: 233,
  question: "¿Puedo continuar trabajando responsablemente cuando estoy cansado?",
  feedbackTrue: "CORRECTO: La responsabilidad incluye reconocer el cansancio y tomar decisiones apropiadas para mantener un desempeño seguro.",
  feedbackFalse: "INCORRECTO: El cansancio puede afectar la atención y el juicio, por lo que debe considerarse antes de asumir tareas exigentes."
},
{
  id: 234,
  question: "¿Alguna vez he cometido un error porque estaba cansado?",
  feedbackTrue: "CORRECTO: El cansancio puede disminuir la atención y favorecer errores ocasionales; reconocerlo permite prevenirlos.",
  feedbackFalse: "INCORRECTO: Es posible no haber cometido errores por cansancio, aunque negar toda posibilidad de que este afecte la atención puede ser poco realista."
},
{
  id: 235,
  question: "¿Siempre tengo la misma energía durante todo el día?",
  feedbackTrue: "CORRECTO: Algunas personas mantienen rutinas energéticas estables, aunque la energía normalmente puede variar según las circunstancias.",
  feedbackFalse: "INCORRECTO: Las variaciones de energía durante el día son habituales y pueden depender del descanso, actividad y contexto."
},
{
  id: 236,
  question: "¿Alguna vez he necesitado descansar antes de continuar una actividad?",
  feedbackTrue: "CORRECTO: Necesitar pausas después de un esfuerzo es una respuesta normal y puede ayudar a mantener la atención.",
  feedbackFalse: "INCORRECTO: No todas las actividades requieren descanso inmediato, pero las pausas pueden ser necesarias después de esfuerzos prolongados."
},
{
  id: 237,
  question: "¿Puedo controlar mis impulsos cuando una situación se vuelve tensa?",
  feedbackTrue: "CORRECTO: El autocontrol ayuda a responder de manera deliberada en situaciones difíciles.",
  feedbackFalse: "INCORRECTO: Las situaciones tensas pueden aumentar la impulsividad; reconocerlo permite trabajar estrategias de autocontrol."
},
{
  id: 238,
  question: "¿Alguna vez he hablado con enojo y luego he pensado que pude expresarme mejor?",
  feedbackTrue: "CORRECTO: Reconocer una reacción emocional y evaluar posteriormente la conducta demuestra capacidad de reflexión.",
  feedbackFalse: "INCORRECTO: Es posible comunicarse siempre con calma, pero las emociones pueden afectar ocasionalmente la forma de expresarse."
},
{
  id: 239,
  question: "¿Nunca he levantado la voz durante una discusión?",
  feedbackTrue: "CORRECTO: Es positivo mantener una comunicación calmada, aunque una afirmación absoluta debe considerarse cuidadosamente.",
  feedbackFalse: "INCORRECTO: Elevar la voz ocasionalmente durante una discusión puede ocurrir y no determina por sí solo la personalidad de alguien."
},
{
  id: 240,
  question: "¿Puedo retirarme de una discusión antes de perder el control?",
  feedbackTrue: "CORRECTO: Tomar distancia de manera responsable puede prevenir una escalada innecesaria del conflicto.",
  feedbackFalse: "INCORRECTO: No siempre es posible retirarse, pero reconocer cuándo una situación está escalando ayuda a tomar mejores decisiones."
},
{
  id: 241,
  question: "¿Alguna vez he sentido ganas de responder con agresividad?",
  feedbackTrue: "CORRECTO: Experimentar un impulso de agresividad no equivale necesariamente a actuar agresivamente; lo importante también es cómo se gestiona.",
  feedbackFalse: "INCORRECTO: Es posible que alguien rara vez experimente ese impulso, pero las emociones e impulsos pueden aparecer ocasionalmente."
},
{
  id: 242,
  question: "¿No he sentido nunca ganas de vengarme de alguien?",
  feedbackTrue: "CORRECTO: Algunas personas pueden no experimentar deseos de venganza, aunque el carácter absoluto de 'nunca' requiere reflexión.",
  feedbackFalse: "INCORRECTO: Sentir ocasionalmente deseos de responder ante una ofensa puede ser humano; actuar responsablemente es una cuestión diferente."
},
{
  id: 243,
  question: "¿Puedo controlar mis acciones aunque esté muy enojado?",
  feedbackTrue: "CORRECTO: El autocontrol permite diferenciar entre sentir una emoción intensa y actuar impulsivamente.",
  feedbackFalse: "INCORRECTO: El enojo intenso puede dificultar el autocontrol, por lo que reconocer estrategias para manejarlo es importante."
},
{
  id: 244,
  question: "¿Alguna vez he tenido que respirar o tranquilizarme antes de responder?",
  feedbackTrue: "CORRECTO: Utilizar estrategias sencillas para reducir la activación emocional puede ayudar a responder de manera más adecuada.",
  feedbackFalse: "INCORRECTO: No todas las situaciones requieren esa estrategia, pero puede resultar útil cuando existe tensión."
},
{
  id: 245,
  question: "¿Siempre reacciono de la misma manera cuando alguien me provoca?",
  feedbackTrue: "CORRECTO: Mantener respuestas consistentes puede facilitar el autocontrol, aunque las circunstancias también influyen en las reacciones.",
  feedbackFalse: "INCORRECTO: Las reacciones pueden variar dependiendo de la gravedad de la provocación, el contexto y el estado emocional."
},
{
  id: 246,
  question: "¿No permito nunca que una ofensa afecte mis emociones?",
  feedbackTrue: "CORRECTO: Tener autocontrol es positivo, pero no significa necesariamente ser inmune a las emociones.",
  feedbackFalse: "INCORRECTO: Una ofensa puede afectar emocionalmente de manera ocasional incluso cuando una persona decide responder con control."
},
{
  id: 247,
  question: "¿Puedo diferenciar entre sentir enojo y actuar agresivamente?",
  feedbackTrue: "CORRECTO: Las emociones son diferentes de las conductas; reconocer esa diferencia favorece el autocontrol.",
  feedbackFalse: "INCORRECTO: Confundir emoción con conducta puede dificultar la comprensión y regulación de las propias reacciones."
},
{
  id: 248,
  question: "¿Alguna vez he sentido frustración porque algo no salió como esperaba?",
  feedbackTrue: "CORRECTO: La frustración aparece naturalmente cuando existe una diferencia entre lo esperado y el resultado obtenido.",
  feedbackFalse: "INCORRECTO: Es posible aceptar fácilmente algunos resultados, pero sentir frustración ocasionalmente es una reacción humana común."
},
{
  id: 249,
  question: "¿Siempre consigo lo que me propongo?",
  feedbackTrue: "CORRECTO: La perseverancia puede producir buenos resultados, aunque ninguna persona controla completamente todas las circunstancias.",
  feedbackFalse: "INCORRECTO: Reconocer que algunos objetivos no se alcanzan pese al esfuerzo permite mantener expectativas realistas."
},
{
  id: 250,
  question: "¿Puedo continuar intentando después de fracasar en algo?",
  feedbackTrue: "CORRECTO: La capacidad de recuperarse de un fracaso favorece la perseverancia y el aprendizaje.",
  feedbackFalse: "INCORRECTO: Un fracaso puede desmotivar temporalmente, pero aprender de él y volver a intentarlo puede fortalecer la adaptación."
},
{
  id: 251,
  question: "¿Alguna vez he sentido que una tarea era demasiado difícil para mí?",
  feedbackTrue: "CORRECTO: Percibir dificultad ante una tarea compleja es normal y puede ayudar a identificar cuándo se necesita preparación adicional.",
  feedbackFalse: "INCORRECTO: Es posible sentirse capaz ante muchas tareas, pero prácticamente cualquier persona puede encontrar desafíos que superen temporalmente sus habilidades."
},
{
  id: 252,
  question: "¿No encuentro nunca una tarea demasiado difícil?",
  feedbackTrue: "CORRECTO: Tener confianza es positivo, pero reconocer límites ocasionales permite prepararse mejor y pedir apoyo cuando corresponde.",
  feedbackFalse: "INCORRECTO: Reconocer que ciertas tareas pueden superar temporalmente nuestras capacidades es parte de una valoración realista."
},
{
  id: 253,
  question: "¿Puedo aprender una habilidad que inicialmente me cuesta?",
  feedbackTrue: "CORRECTO: La práctica, la instrucción y la perseverancia permiten desarrollar habilidades nuevas.",
  feedbackFalse: "INCORRECTO: Una dificultad inicial no significa necesariamente incapacidad permanente para aprender."
}]
