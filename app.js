const STORE_KEY = "zabadev-b1-academy-v1";
const modules = [
  { id: "reading", name: "Reading", es: "Comprensión lectora", icon: "▤", tone: "green", desc: "Lee con estrategia y encuentra la información clave." },
  { id: "listening", name: "Listening", es: "Comprensión auditiva", icon: "♫", tone: "blue", desc: "Entrena el oído con audios y preguntas de práctica." },
  { id: "writing", name: "Writing", es: "Expresión escrita", icon: "✎", tone: "coral", desc: "Organiza tus ideas y escribe con claridad." },
  { id: "speaking", name: "Speaking", es: "Expresión oral", icon: "◉", tone: "yellow", desc: "Practica respuestas, fluidez y pronunciación." }
];
const pdfs = [
  { title: "Grammar Bank Level B1", file: "Grammar Bank Level B1.pdf", category: "Gramática" },
  { title: "English level 5 · Fichas unidades", file: "English level 5 Fichas unidades.pdf", category: "Unidades" },
  { title: "English level 6 · Fichas unidades", file: "English level 6 Fichas unidades.pdf", category: "Unidades" },
  { title: "English level 7 · Fichas unidades", file: "English level 7 Fichas unidades.pdf", category: "Unidades" },
  { title: "Orden de las palabras en inglés", file: "ORDEN_DE_LAS_PALABRAS_EN_INGLÉS.pdf", category: "Gramática" },
  { title: "Modal verbs", file: "MODAL_VERBS.pdf", category: "Gramática" },
  { title: "Modal verbs chart", file: "MODAL VERBS CHART.pdf", category: "Gramática" },
  { title: "Irregular verbs · traducción", file: "Irregular_Verbs_with_Spanish_translation.pdf", category: "Vocabulario" },
  { title: "Irregular verbs · ejercicios", file: "IRREGULAR_VERBS_EX.pdf", category: "Vocabulario" },
  { title: "Already, still y yet", file: "already,_still_y_yet.pdf", category: "Gramática" },
  { title: "A Haunted House · Virginia Woolf", file: "Virginia_Woolfs_Haunted_House.pdf", category: "Lectura" },
  { title: "Dosier unificado · Comunidad Alhamar", file: "Dosier_unificado_Comunidad_Alhamar_11.pdf", category: "Material" }
];
const questionBank = [
  { skill: "grammar", q: "She ___ in Madrid since 2021.", options: ["lives", "has lived", "lived", "is living"], answer: 1, why: "Usamos present perfect con 'since' para una situación que empezó en el pasado y continúa." },
  { skill: "grammar", q: "If I ___ more time, I would learn Italian.", options: ["have", "will have", "had", "would have"], answer: 2, why: "En el second conditional, la cláusula con 'if' usa past simple." },
  { skill: "grammar", q: "This is the ___ film I have ever seen.", options: ["more exciting", "most exciting", "excitingest", "much exciting"], answer: 1, why: "Con adjetivos largos usamos 'the most' para el superlativo." },
  { skill: "grammar", q: "You ___ wear a helmet when you ride a motorbike. It's the law.", options: ["might", "must", "could", "would"], answer: 1, why: "'Must' expresa una obligación fuerte o una norma." },
  { skill: "grammar", q: "The new library ___ next month.", options: ["will open", "will be opened", "opens by", "is opening by"], answer: 1, why: "La voz pasiva se forma con 'be' + participio: 'will be opened'." },
  { skill: "grammar", q: "I was cooking when the phone ___. ", options: ["rings", "has rung", "rang", "was ringing"], answer: 2, why: "El past simple describe la acción breve que interrumpe otra en progreso." },
  { skill: "grammar", q: "He asked me where ___.", options: ["did I live", "I lived", "do I live", "I live do"], answer: 1, why: "En preguntas indirectas el orden es sujeto + verbo, sin inversión." },
  { skill: "grammar", q: "We haven't got ___ milk left.", options: ["many", "a few", "much", "several"], answer: 2, why: "'Milk' es incontable; usamos 'much' en frases negativas." },
  { skill: "grammar", q: "You look tired. You ___ go to bed earlier.", options: ["should", "mustn't", "can't", "wouldn't"], answer: 0, why: "'Should' se usa para dar consejos." },
  { skill: "grammar", q: "I enjoy ___ new places when I travel.", options: ["to discover", "discover", "discovering", "discovered"], answer: 2, why: "Después de 'enjoy' usamos el verbo terminado en -ing." },
  { skill: "grammar", q: "By the time we arrived, the concert ___.", options: ["starts", "has started", "had started", "was start"], answer: 2, why: "El past perfect marca la acción que ocurrió antes de otra acción pasada." },
  { skill: "grammar", q: "There aren't ___ chairs for everyone.", options: ["enough", "too", "so", "such"], answer: 0, why: "'Enough' antes de un sustantivo significa 'suficientes'." },
  { skill: "grammar", q: "My sister is interested ___ photography.", options: ["on", "at", "in", "for"], answer: 2, why: "La combinación correcta es 'interested in'." },
  { skill: "grammar", q: "I ___ my keys. Have you seen them?", options: ["lose", "lost", "have lost", "was losing"], answer: 2, why: "El resultado importa ahora: no encuentro las llaves. Usamos present perfect." },
  { skill: "grammar", q: "Despite ___ heavily, the match continued.", options: ["it rained", "raining", "rain", "to rain"], answer: 1, why: "'Despite' va seguido de un sustantivo o gerundio." },
  { skill: "grammar", q: "The woman ___ lives next door is a doctor.", options: ["which", "whose", "who", "where"], answer: 2, why: "'Who' es el pronombre relativo que usamos para personas." },
  { skill: "vocabulary", q: "If you don't know a word, you can ___ it up in a dictionary.", options: ["look", "watch", "see", "view"], answer: 0, why: "El phrasal verb 'look up' significa buscar información." },
  { skill: "vocabulary", q: "I need to ___ a decision before Friday.", options: ["do", "make", "take", "put"], answer: 1, why: "La expresión habitual es 'make a decision'." },
  { skill: "vocabulary", q: "The opposite of 'crowded' is ___.", options: ["busy", "empty", "noisy", "central"], answer: 1, why: "'Empty' significa vacío, lo contrario de lleno de gente." },
  { skill: "vocabulary", q: "Could you ___ me a favour and carry this bag?", options: ["make", "give", "do", "take"], answer: 2, why: "La expresión correcta es 'do someone a favour'." },
  { skill: "vocabulary", q: "The train was ___ because of bad weather.", options: ["delayed", "missed", "lost", "latefully"], answer: 0, why: "'Delayed' significa que algo lleva retraso." },
  { skill: "vocabulary", q: "I ___ up swimming when I was six.", options: ["took", "got", "made", "put"], answer: 1, why: "'Take up' una actividad significa empezar a practicarla." },
  { skill: "vocabulary", q: "A person who designs buildings is an ___.", options: ["engineer", "architect", "accountant", "electrician"], answer: 1, why: "Un 'architect' diseña edificios." },
  { skill: "vocabulary", q: "The hotel was very ___; it didn't cost much.", options: ["affordable", "valuable", "wealthy", "priceless"], answer: 0, why: "'Affordable' significa que tiene un precio razonable." },
  { skill: "vocabulary", q: "Could we ___ the meeting until Monday?", options: ["put off", "put out", "put on", "put up"], answer: 0, why: "'Put off' significa posponer." },
  { skill: "vocabulary", q: "She's very ___; she always tells the truth.", options: ["honest", "sensible", "polite", "patient"], answer: 0, why: "'Honest' describe a alguien sincero." },
  { skill: "reading", passage: "Maya started a community garden two years ago. At first, only four neighbours joined her. Now the group grows vegetables for a local food bank every Saturday. Maya says the best part is meeting people she would never have spoken to otherwise.", q: "Why did Maya start the garden?", options: ["To sell vegetables to restaurants", "To bring neighbours together and grow food", "To open a gardening shop", "To teach children at school"], answer: 1, why: "El texto explica que cultivan alimentos para el banco de comida y que Maya valora conocer a los vecinos." },
  { skill: "reading", passage: "The city museum is closed on Mondays. On other days it opens at 10 a.m. Students can enter for half price with a valid student card. The café closes thirty minutes before the museum.", q: "What does a student need to pay less?", options: ["A library card", "A booking email", "A student card", "A museum map"], answer: 2, why: "El aviso dice que se necesita una tarjeta de estudiante válida." },
  { skill: "reading", passage: "Tom used to cycle to work, but after moving house the journey became too long. He now takes the bus and walks the final ten minutes. He still cycles at weekends with his daughter.", q: "How does Tom travel to work now?", options: ["By car", "By bus and on foot", "By bicycle", "By train"], answer: 1, why: "Ahora coge el autobús y camina los últimos diez minutos." },
  { skill: "reading", passage: "The Green Street Book Club meets on the first Thursday of each month. Members choose the next book together. New members are welcome, and you don't need to finish the book to join the discussion.", q: "Which statement is true?", options: ["Only members can suggest books", "The club meets every week", "New people can join the discussion", "Everyone must finish the book"], answer: 2, why: "El aviso dice que los nuevos miembros son bienvenidos." },
  { skill: "reading", passage: "When Leo began working from home, he found it difficult to concentrate. He now takes a short walk before starting work and keeps his phone in another room. These small changes have helped him finish tasks earlier.", q: "What helped Leo concentrate?", options: ["Working longer hours", "Taking a walk and moving his phone", "Listening to music", "Changing his job"], answer: 1, why: "Leo menciona el paseo y dejar el teléfono en otra habitación." },
  { skill: "listening", audio: "Hello, this is a message for Anna. The book club has moved from Wednesday to Thursday this week because the library is being painted. We still meet at six, but in Room 3 instead of the main hall.", q: "Where will the book club meet this week?", options: ["In the main hall", "In Room 3", "At six in the café", "At Anna's house"], answer: 1, why: "El mensaje dice que esta semana se reunirán en la sala 3." },
  { skill: "listening", audio: "Attention passengers. The 10:15 service to Oxford is running approximately twenty minutes late. Passengers should wait at platform five. We apologise for the inconvenience.", q: "What should passengers do?", options: ["Go to platform five", "Take the 10:15 bus", "Wait twenty minutes at home", "Ask for a refund"], answer: 0, why: "El anuncio indica que esperen en el andén cinco." },
  { skill: "listening", audio: "Hi Ben, it's Lucy. I can't meet you at the cinema at seven because my class finishes late. Could we meet outside the café at half past seven? I'll book the tickets online now.", q: "What time will Lucy meet Ben?", options: ["At seven", "At half past seven", "After the film", "Before her class"], answer: 1, why: "Lucy propone quedar a las siete y media." },
  { skill: "listening", audio: "The weather will be sunny this morning, with temperatures around eighteen degrees. In the afternoon, expect heavy rain, so take an umbrella if you're going out later.", q: "What is the weather expected to be like this afternoon?", options: ["Very cold", "Windy", "Rainy", "Sunny all day"], answer: 2, why: "El pronóstico anuncia lluvia fuerte por la tarde." },
  { skill: "listening", audio: "Our cooking class starts at eleven on Saturday, not ten as printed on the website. Please bring an apron. All ingredients and cooking equipment will be provided.", q: "What should students bring?", options: ["Ingredients", "A cooking pan", "An apron", "A printed recipe"], answer: 2, why: "Deben llevar un delantal; los ingredientes y utensilios están incluidos." },
  { skill: "grammar", q: "Choose the correct word order: 'often / we / at weekends / visit / our grandparents'.", options: ["We visit often our grandparents at weekends.", "We often visit our grandparents at weekends.", "Often we our grandparents visit at weekends.", "We at weekends visit often our grandparents."], answer: 1, why: "Los adverbios de frecuencia suelen ir antes del verbo principal." },
  { skill: "grammar", q: "The past participle of 'choose' is ___.", options: ["choosed", "chose", "chosen", "choosen"], answer: 2, why: "'Choose – chose – chosen' es la forma correcta del verbo irregular." },
  { skill: "grammar", q: "I have known him ___ we were at school.", options: ["for", "during", "since", "from"], answer: 2, why: "'Since' indica el punto en el tiempo en que comenzó algo." }
];
const writingTasks = [
  { title: "Un correo a un amigo", kind: "Email informal", prompt: "Tu amigo Alex quiere visitar tu ciudad. Escríbele un correo para recomendarle una actividad, explicarle cómo llegar y proponer un día para quedar. Escribe entre 80 y 120 palabras.", min: 80, max: 120 },
  { title: "Una experiencia especial", kind: "Historia breve", prompt: "Escribe sobre un día que recuerdes con cariño. Explica dónde estabas, qué ocurrió y por qué fue importante para ti. Escribe entre 100 y 140 palabras.", min: 100, max: 140 },
  { title: "Tu opinión sobre estudiar online", kind: "Texto de opinión", prompt: "¿Es mejor aprender online o en clase? Da tu opinión, incluye al menos una ventaja y una desventaja y termina con una conclusión. Escribe entre 100 y 140 palabras.", min: 100, max: 140 },
  { title: "Una invitación", kind: "Email informal", prompt: "Una amiga te ha invitado a una fiesta, pero necesitas más información. Contesta preguntando por el horario y cómo llegar, y ofrece llevar algo para compartir. Escribe entre 80 y 120 palabras.", min: 80, max: 120 }
];
const state = loadState();
let currentView = "inicio";
let selectedSkill = "all";
let quiz = null;
let toastTimer;
let speakingTimer;
let recorder;
let recordingStream;
let recordingUrl;
let naturalAudioUrl;
let naturalPlaybackContext;
let naturalPlaybackSource;
let naturalAudioPlayer;
let playbackRequestId = 0;

function loadState() {
  try { return { name: "", xp: 0, sessions: [], drafts: {}, activeDays: [], ttsVoice: "kokoro:bf_emma", ttsRate: 0.9, ...JSON.parse(localStorage.getItem(STORE_KEY) || "{}") }; }
  catch { return { name: "", xp: 0, sessions: [], drafts: {}, activeDays: [], ttsVoice: "kokoro:bf_emma", ttsRate: 0.9 }; }
}
function persist() { localStorage.setItem(STORE_KEY, JSON.stringify(state)); }
function escapeHtml(value = "") { return String(value).replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char])); }
function todayKey(date = new Date()) { return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`; }
function prettyDate(date) { return new Intl.DateTimeFormat("es-ES", { weekday: "long", day: "numeric", month: "long" }).format(date); }
function setView(view) {
  currentView = view;
  const views = { inicio: "Inicio", ruta: "Mi ruta", practicar: "Practicar", simulacro: "Simulacro", biblioteca: "Biblioteca", progreso: "Mi progreso", writing: "Writing", speaking: "Speaking", quiz: "Práctica" };
  document.querySelector("#current-section").textContent = views[view] || "Academia";
  document.querySelectorAll(".nav-item").forEach(button => button.classList.toggle("active", button.dataset.view === (view === "writing" || view === "speaking" || view === "quiz" ? "practicar" : view)));
  document.querySelector("#sidebar").classList.remove("open");
  render();
  document.querySelector("#view-container").focus({ preventScroll: true });
}
function pageHeading(eyebrow, title, subtitle, action = "") {
  return `<div class="page-heading"><div><p class="eyebrow">${eyebrow}</p><h1>${title}</h1><p>${subtitle}</p></div>${action}</div>`;
}
function getSkillStats(skill) {
  const sessions = state.sessions.map(item => {
    if (item.skillScores?.[skill]) return { ...item.skillScores[skill], included: true };
    if (item.skill === skill) return { total: item.total, correct: item.correct, included: true };
    return { total: 0, correct: 0, included: false };
  }).filter(item => item.included);
  const total = sessions.reduce((sum, item) => sum + item.total, 0);
  const correct = sessions.reduce((sum, item) => sum + item.correct, 0);
  return { sessions: sessions.length, accuracy: total ? Math.round(correct / total * 100) : 0, count: total };
}
function recentActivity() {
  if (!state.sessions.length) return `<div class="empty-state">Aún no hay sesiones. Tu primera práctica aparecerá aquí.</div>`;
  return [...state.sessions].slice(-4).reverse().map(session => {
    const skill = modules.find(item => item.id === session.skill);
    const label = session.skill === "mixed" ? "Práctica mixta" : skill?.name || "Curso";
    return `<div class="activity-item"><span class="activity-dot"></span><div class="activity-info"><strong>${escapeHtml(session.title)}</strong><small>${escapeHtml(label)} · ${new Intl.DateTimeFormat("es-ES", { day: "numeric", month: "short" }).format(new Date(session.date))}</small></div><span class="activity-score">${Math.round(session.correct / session.total * 100)}%</span></div>`;
  }).join("");
}
function weeklyBars() {
  const dates = Array.from({ length: 7 }, (_, index) => { const date = new Date(); date.setDate(date.getDate() - (6 - index)); return date; });
  return dates.map(date => {
    const count = state.sessions.filter(item => todayKey(new Date(item.date)) === todayKey(date)).length;
    return `<div class="week-day"><span class="week-bar ${todayKey(date) === todayKey() ? "today" : ""}" style="height:${Math.max(4, Math.min(42, count * 13))}px"></span>${new Intl.DateTimeFormat("es-ES", { weekday: "narrow" }).format(date)}</div>`;
  }).join("");
}
function dashboard() {
  const done = state.sessions.length;
  const accuracy = state.sessions.length ? Math.round(state.sessions.reduce((sum, item) => sum + item.correct / item.total, 0) / state.sessions.length * 100) : 0;
  const days = new Set(state.activeDays);
  const moduleCards = modules.map(item => `<button class="module-card" data-module="${item.id}"><span class="module-card-top"><span class="module-icon tone-${item.tone}">${item.icon}</span><span class="module-arrow">↗</span></span><h3>${item.name}</h3><p>${item.es}</p></button>`).join("");
  return `${pageHeading("ACADEMIA · B1", `¡Hola, ${escapeHtml(state.name || "estudiante")}!`, "Tu próximo paso hacia el B1 empieza con una buena práctica.")}
    <section class="dashboard-hero"><div class="hero-copy"><span class="eyebrow">TU OBJETIVO · OXFORD TEST OF ENGLISH</span><h1>Un paso más cerca de tu B1.</h1><p>Entrena las cuatro destrezas con actividades breves, revisa tus materiales y observa cómo avanzas.</p><button class="button" data-action="quick-start">Empezar práctica <span>↗</span></button></div><div class="hero-art-copy">LEARN SOMETHING NEW TODAY</div></section>
    <div class="stats-row"><div class="stat-card"><div class="stat-top">Puntos de estudio <span class="stat-symbol">✦</span></div><strong class="stat-value">${state.xp}<span class="stat-suffix">XP</span></strong></div><div class="stat-card"><div class="stat-top">Sesiones completadas <span class="stat-symbol">◷</span></div><strong class="stat-value">${done}</strong></div><div class="stat-card"><div class="stat-top">Precisión media <span class="stat-symbol">◎</span></div><strong class="stat-value">${accuracy}<span class="stat-suffix">%</span></strong></div><div class="stat-card"><div class="stat-top">Días de práctica <span class="stat-symbol">▦</span></div><strong class="stat-value">${days.size}<span class="stat-suffix">días</span></strong></div></div>
    <div class="section-head"><h2>Entrena tus destrezas</h2><button class="text-button" data-view="practicar">Ver todas las prácticas ↗</button></div><div class="module-grid">${moduleCards}</div>
    <div class="lower-grid"><section><div class="section-head"><h2>Actividad reciente</h2><button class="text-button" data-view="progreso">Ver progreso</button></div><div class="activity-list">${recentActivity()}</div></section><section class="weekly-card"><div class="section-head"><h2>Esta semana</h2><span class="pill">${state.sessions.length} sesiones</span></div><p>La constancia suma. Cada sesión cuenta para acercarte a tu objetivo.</p><div class="week-bars">${weeklyBars()}</div></section></div>`;
}
function routePage() {
  const route = [
    ["Diagnóstico y objetivos", "Descubre qué destrezas quieres reforzar."],
    ["Reading y vocabulario", "Comprende textos y amplía tu repertorio."],
    ["Listening y gramática", "Escucha con atención y consolida estructuras."],
    ["Writing y Speaking", "Organiza tus ideas y gana soltura al expresarte."],
    ["Simulacro final", "Combina todas las destrezas en una sesión de práctica."]
  ];
  const complete = Math.min(state.sessions.length, route.length);
  return `${pageHeading("TU PLAN", "Mi ruta B1", "Una secuencia flexible para preparar las cuatro destrezas.")}
    <div class="content-grid"><section class="panel"><div class="section-head"><h2>Ruta de aprendizaje</h2><span class="pill">${complete} de ${route.length} pasos en marcha</span></div><div class="route-list">${route.map((item, index) => `<div class="route-item"><span class="route-number ${index < complete ? "done" : ""}">${index < complete ? "✓" : String(index + 1).padStart(2, "0")}</span><div><h3>${item[0]}</h3><p>${item[1]}</p></div><button class="text-button" data-view="${index === 4 ? "simulacro" : index === 3 ? "practicar" : "practicar"}">${index < complete ? "Repasar" : "Empezar"} ↗</button></div>`).join("")}</div></section><aside class="panel"><span class="module-icon tone-green">✦</span><h2 style="font-size:16px;margin:15px 0 8px">Tu siguiente paso</h2><p class="muted" style="font-size:11px;line-height:1.7">Elige una destreza para comenzar. La ruta se adapta a tus sesiones y puedes volver a cualquier módulo cuando quieras.</p><button class="button button-green" data-view="practicar">Elegir práctica ↗</button></aside></div>`;
}
function practicePage() {
  const list = modules.map(item => `<article class="practice-card"><span class="module-icon tone-${item.tone}">${item.icon}</span><h3>${item.name}</h3><p>${item.desc}</p><button class="text-button" data-practice="${item.id}">Practicar ahora ↗</button></article>`).join("");
  return `${pageHeading("PRÁCTICA GUIADA", "Elige tu entrenamiento", "Sesiones cortas para desarrollar seguridad, paso a paso.")}
    <div class="practice-banner"><div><strong>Banco dinámico de preguntas</strong><p>Hasta 12 preguntas por sesión · combinación aleatoria de 38 preguntas</p></div><button class="button button-green" data-action="quick-start">Práctica aleatoria ↗</button></div><div class="practice-cards">${list}</div>
    <div class="panel" style="margin-top:16px"><div class="section-head"><h2>Entrenamiento libre</h2><span class="pill">Writing + Speaking</span></div><div class="practice-cards"><article class="practice-card"><span class="module-icon tone-coral">✎</span><h3>Writing studio</h3><p>Responde a consignas, guarda borradores y revisa una lista de comprobación.</p><button class="text-button" data-view="writing">Abrir Writing ↗</button></article><article class="practice-card"><span class="module-icon tone-yellow">◉</span><h3>Speaking studio</h3><p>Escucha una consigna, graba una respuesta y descárgala para revisarla.</p><button class="text-button" data-view="speaking">Abrir Speaking ↗</button></article></div></div>`;
}
function startQuiz(skill = "all", exam = false) {
  const available = questionBank.filter(item => skill === "all" || item.skill === skill);
  const count = Math.min(exam ? 20 : 12, available.length);
  const questions = [...available].sort(() => Math.random() - .5).slice(0, count).map(item => ({ ...item, options: [...item.options], selected: null }));
  quiz = { questions, index: 0, correct: 0, skill, exam, checked: false };
  setView("quiz");
}
function quizPage() {
  if (!quiz) return practicePage();
  if (quiz.index >= quiz.questions.length) return quizResult();
  const item = quiz.questions[quiz.index];
  const percent = Math.round(quiz.index / quiz.questions.length * 100);
  const letters = ["A", "B", "C", "D"];
  return `<div class="quiz-wrap"><div class="quiz-top"><button class="text-button" data-view="practicar">← Salir de la práctica</button><span class="quiz-meta">${quiz.exam ? "SIMULACRO DE PRÁCTICA" : "PRÁCTICA GUIADA"} · ${quiz.index + 1} / ${quiz.questions.length}</span></div><div class="quiz-progress"><span style="width:${percent}%"></span></div><div class="quiz-card"><span class="eyebrow">${item.skill.toUpperCase()} · PREGUNTA ${quiz.index + 1}</span>${item.passage ? `<p class="question-passage">${item.passage}</p>` : ""}<h2>${item.q}</h2>${item.skill === "listening" ? `<button class="button button-light" data-action="play-audio">♫ Escuchar audio de práctica</button>` : ""}<div class="answer-list" style="margin-top:16px">${item.options.map((option, index) => { let classes = "answer-option"; if (quiz.checked && index === item.answer) classes += " correct"; else if (quiz.checked && index === item.selected) classes += " incorrect"; else if (index === item.selected) classes += " selected"; return `<button class="${classes}" data-answer="${index}" ${quiz.checked ? "disabled" : ""}><span class="option-letter">${letters[index]}</span>${option}</button>`; }).join("")}</div>${quiz.checked ? `<div class="quiz-explanation">${item.why}</div>` : ""}<div class="quiz-footer"><span class="muted">${quiz.checked ? (item.selected === item.answer ? "¡Respuesta correcta!" : "Revisa la explicación y sigue practicando.") : "Elige la respuesta que consideres correcta."}</span><button class="button button-dark" data-action="${quiz.checked ? "next-question" : "check-answer"}" ${!quiz.checked && item.selected === null ? "disabled" : ""}>${quiz.checked ? (quiz.index === quiz.questions.length - 1 ? "Ver resultado" : "Siguiente") : "Comprobar"} →</button></div></div></div>`;
}
function quizResult() {
  const total = quiz.questions.length;
  const percent = Math.round(quiz.correct / total * 100);
  const skill = quiz.skill === "all" ? "reading" : quiz.skill;
  return `<div class="quiz-wrap"><div class="quiz-card result-card"><div class="result-ring">${percent}%</div><span class="eyebrow">SESIÓN COMPLETADA</span><h2>${percent >= 75 ? "¡Buen trabajo!" : "Cada práctica cuenta."}</h2><p>Has respondido correctamente ${quiz.correct} de ${total} preguntas. Revisa las explicaciones y vuelve a practicar cuando quieras.</p><div class="result-actions"><button class="button button-green" data-action="retry-quiz">Otra práctica ↗</button><button class="button button-line" data-view="progreso">Ver mi progreso</button><button class="button button-line" data-view="inicio">Volver al inicio</button></div></div></div>`;
}
function writingPage() {
  const index = Number(new URLSearchParams(location.search).get("task") || 0) % writingTasks.length;
  const task = writingTasks[index];
  const draft = state.drafts[index] || "";
  const words = draft.trim() ? draft.trim().split(/\s+/).length : 0;
  const connectorList = ["because", "however", "although", "first", "finally", "also", "for example"];
  const found = connectorList.filter(word => draft.toLowerCase().includes(word)).length;
  return `${pageHeading("WRITING STUDIO", "Escribe con confianza", "Practica una consigna, guarda tu borrador y revísalo con calma.", `<button class="button button-line" data-view="practicar">← Volver a practicar</button>`)}
    <div class="writing-layout"><section class="panel"><label class="eyebrow" for="writing-task">TIPO DE TAREA</label><select class="select-control task-select" id="writing-task">${writingTasks.map((item, taskIndex) => `<option value="${taskIndex}" ${taskIndex === index ? "selected" : ""}>${item.kind} · ${item.title}</option>`).join("")}</select><div class="writing-prompt"><strong>${task.title}</strong>${task.prompt}</div><textarea class="writing-text" id="writing-text" placeholder="Escribe aquí tu respuesta en inglés...">${escapeHtml(draft)}</textarea><div class="writing-footer"><span class="writing-count"><strong id="word-count">${words}</strong> palabras · recomendado ${task.min}–${task.max}</span><button class="button button-green" id="save-writing">Guardar borrador</button></div></section><aside class="panel"><span class="eyebrow">REVISIÓN PERSONAL</span><h2 style="font-size:16px;margin:8px 0">Antes de entregar</h2><div class="checklist"><div class="check-item"><span class="check-mark">${words >= task.min && words <= task.max ? "✓" : "○"}</span><span>Extensión orientativa: ${task.min}–${task.max} palabras (${words} ahora).</span></div><div class="check-item"><span class="check-mark">${found ? "✓" : "○"}</span><span>Usa conectores para enlazar ideas (${found} detectados).</span></div><div class="check-item"><span class="check-mark">○</span><span>Comprueba tiempos verbales, mayúsculas y puntuación.</span></div><div class="check-item"><span class="check-mark">○</span><span>¿Respondiste a todos los puntos de la consigna?</span></div></div><p class="muted" style="font-size:9px;line-height:1.6;margin-top:18px">Esta lista no evalúa la calidad lingüística ni sustituye la corrección de un profesor.</p></aside></div>`;
}
function speakingPage() {
  const prompts = ["Describe a place you enjoy visiting. Why do you like it?", "Talk about a skill you would like to learn. How could you learn it?", "Describe a memorable day you spent with friends or family.", "Do you prefer living in a city or in the countryside? Why?", "What do you usually do to stay healthy?"];
  return `${pageHeading("SPEAKING STUDIO", "Dale voz a tus ideas", "Escucha una consigna, prepara tu respuesta y grábate para revisar tu progreso.", `<button class="button button-line" data-view="practicar">← Volver a practicar</button>`)}
    <div class="content-grid"><section class="speech-card"><span class="eyebrow">CONSIGNA DE PRÁCTICA</span><h2 id="speaking-prompt">${prompts[Math.floor(Math.random() * prompts.length)]}</h2><p>Organiza una respuesta breve: presenta tu idea, añade un detalle y explica por qué. Puedes escuchar la consigna y prepararte antes de empezar.</p><div class="timer-display" id="timer-display">01:00</div><div style="display:flex;gap:8px;flex-wrap:wrap"><button class="button button-light" id="listen-prompt">♫ Escuchar consigna</button><button class="button button-green" id="record-speaking">● Empezar a grabar</button><button class="button button-line" id="stop-speaking" disabled>Detener</button><span class="record-status" id="record-status">Grabación solo en este dispositivo.</span></div><div id="recording-result"></div></section><aside class="panel"><span class="eyebrow">IDEAS PARA PRACTICAR</span><div class="checklist"><div class="check-item"><span class="check-mark">01</span><span>Habla de tu rutina diaria y lo que te gusta hacer en tu tiempo libre.</span></div><div class="check-item"><span class="check-mark">02</span><span>Describe un viaje y cuenta qué recomendarías a otra persona.</span></div><div class="check-item"><span class="check-mark">03</span><span>Expresa una opinión y apóyala con un ejemplo personal.</span></div></div><p class="muted" style="font-size:9px;line-height:1.6;margin-top:18px">La grabación y la voz sintética dependen de las funciones de tu navegador. No se envían a ningún servidor.</p></aside></div>`;
}
function libraryPage() {
  return `${pageHeading("MATERIALES DE ESTUDIO", "Tu biblioteca", "Abre los materiales incluidos en la carpeta PDF Temario.")}
    <div class="pdf-layout"><nav class="pdf-list" aria-label="Materiales PDF">${pdfs.map((pdf, index) => `<button class="pdf-button ${index === 0 ? "active" : ""}" data-pdf="${index}"><strong>${pdf.title}</strong><br><span>${pdf.category}</span></button>`).join("")}</nav><section class="pdf-viewer" id="pdf-viewer"><div class="pdf-placeholder"><div><span class="module-icon tone-green">▧</span><h2>Selecciona un documento</h2><p>Los archivos de referencia se muestran desde la carpeta local del proyecto.</p></div></div></section></div>`;
}
function progressPage() {
  const cards = modules.map(item => { const stats = getSkillStats(item.id); return `<article class="progress-module"><div class="progress-module-head"><span class="module-icon tone-${item.tone}">${item.icon}</span><div><h3>${item.name}</h3><p>${item.es}</p></div><span class="pill" style="margin-left:auto">${stats.sessions} sesiones</span></div><div class="progress-track"><span style="width:${stats.accuracy}%"></span></div><div class="progress-foot"><span>${stats.count} preguntas respondidas</span><strong>${stats.accuracy}% aciertos</strong></div></article>`; }).join("");
  const totalAnswered = state.sessions.reduce((sum, item) => sum + item.total, 0);
  return `${pageHeading("TUS ESTADÍSTICAS", "Tu progreso", "Un registro personal de lo que ya has practicado.", `<button class="button button-line" id="clear-progress">Borrar mis datos</button>`)}<div class="stats-row"><div class="stat-card"><div class="stat-top">Sesiones completadas</div><strong class="stat-value">${state.sessions.length}</strong></div><div class="stat-card"><div class="stat-top">Preguntas respondidas</div><strong class="stat-value">${totalAnswered}</strong></div><div class="stat-card"><div class="stat-top">Puntos de estudio</div><strong class="stat-value">${state.xp}<span class="stat-suffix">XP</span></strong></div><div class="stat-card"><div class="stat-top">Días activos</div><strong class="stat-value">${new Set(state.activeDays).size}</strong></div></div><div class="section-head"><h2>Destrezas</h2></div><div class="progress-grid">${cards}</div><div class="section-head" style="margin-top:28px"><h2>Sesiones recientes</h2></div><div class="activity-list">${recentActivity()}</div>`;
}
function sourcesPage() {
  return `${pageHeading("REFERENCIAS", "Fuentes y materiales", "Materiales locales y enlaces para consultar el examen directamente.")}
    <section class="panel"><h2 style="font-size:16px;margin:0">Materiales del curso</h2><p class="muted" style="font-size:11px;line-height:1.7">La carpeta proporcionada incluye 12 documentos de gramática, vocabulario, unidades y lectura. Se accede a todos desde la biblioteca de esta academia.</p><button class="button button-green" data-view="biblioteca">Abrir biblioteca ↗</button><h2 style="font-size:16px;margin:27px 0 0">Información del examen</h2><p class="muted" style="font-size:11px;line-height:1.7">Consulta siempre la información actualizada del formato y los recursos de preparación en las páginas oficiales de Oxford University Press y Oxford Test of English.</p><div class="source-list"><a class="source-link" href="https://elt.oup.com/feature/global/oxford_test_of_english/" target="_blank" rel="noreferrer"><span><strong>Oxford University Press</strong><br><small>Oxford Test of English · información del examen</small></span><span>↗</span></a><a class="source-link" href="https://www.oxfordtestofenglish.com/" target="_blank" rel="noreferrer"><span><strong>Oxford Test of English</strong><br><small>Portal oficial del examen</small></span><span>↗</span></a></div><p class="muted" style="font-size:9px;line-height:1.6;margin-top:17px">Esta academia independiente no está afiliada ni respaldada por Oxford University Press. Las prácticas aquí incluidas son originales y no son preguntas oficiales del examen.</p></section>`;
}
function render() {
  const root = document.querySelector("#view-container");
  const pages = { inicio: dashboard, ruta: routePage, practicar: practicePage, simulacro: () => `${pageHeading("PRÁCTICA INTEGRAL", "Simulacro de práctica", "Una sesión más amplia de preguntas variadas. No es un examen oficial.")}<section class="panel" style="max-width:700px"><span class="module-icon tone-yellow">◷</span><h2 style="font-size:18px;margin:14px 0 8px">Cuatro destrezas, una sesión</h2><p class="muted" style="font-size:11px;line-height:1.7">Completa hasta 20 preguntas de Reading, Listening, gramática y vocabulario. Writing y Speaking tienen espacios de práctica propios en la academia.</p><p class="pill">20 preguntas · resultado orientativo</p><div style="margin-top:15px"><button class="button button-green" data-action="start-exam">Comenzar simulacro ↗</button></div></section>`, biblioteca: libraryPage, progreso: progressPage, quiz: quizPage, writing: writingPage, speaking: speakingPage, fuentes: sourcesPage };
  root.innerHTML = (pages[currentView] || dashboard)();
  mountListeningControls(root);
  if (currentView === "biblioteca") loadPdf(0);
  if (currentView === "writing") bindWriting();
  if (currentView === "speaking") bindSpeaking();
  populateListeningVoices();
  bindActions();
}
function loadPdf(index) {
  const pdf = pdfs[index];
  if (!pdf) return;
  document.querySelectorAll(".pdf-button").forEach((button, buttonIndex) => button.classList.toggle("active", buttonIndex === index));
  const path = `PDF%20Temario/${encodeURIComponent(pdf.file).replace(/%2F/g, "/")}`;
  document.querySelector("#pdf-viewer").innerHTML = `<iframe title="${escapeHtml(pdf.title)}" src="${path}"></iframe><div style="padding:8px 12px;background:white"><a class="text-button" href="${path}" target="_blank" rel="noreferrer">Abrir PDF en otra pestaña ↗</a></div>`;
}
function bindWriting() {
  const field = document.querySelector("#writing-text");
  const taskSelect = document.querySelector("#writing-task");
  field.addEventListener("input", () => {
    const words = field.value.trim() ? field.value.trim().split(/\s+/).length : 0;
    document.querySelector("#word-count").textContent = words;
    state.drafts[taskSelect.value] = field.value;
    persist();
  });
  taskSelect.addEventListener("change", () => { setView("writing"); location.search = `?task=${taskSelect.value}`; });
  document.querySelector("#save-writing").addEventListener("click", () => { state.drafts[taskSelect.value] = field.value; persist(); showToast("Borrador guardado en este dispositivo."); });
}
function getEnglishVoices() {
  if (!("speechSynthesis" in window)) return [];
  return window.speechSynthesis.getVoices()
    .filter(voice => voice.lang.toLowerCase().startsWith("en"))
    .sort((first, second) => {
      const score = voice => /natural/i.test(voice.name) ? 0 : /neural/i.test(voice.name) ? 1 : /online|enhanced|premium/i.test(voice.name) ? 2 : 3;
      return score(first) - score(second) || Number(second.lang.toLowerCase().startsWith("en-gb")) - Number(first.lang.toLowerCase().startsWith("en-gb")) || first.name.localeCompare(second.name);
    });
}
function mountListeningControls(root) {
  const audioButton = root.querySelector("[data-action='play-audio']");
  if (!audioButton) return;
  const controls = document.createElement("div");
  controls.className = "listening-controls";
  controls.innerHTML = `<button class="button button-light" data-action="play-audio">♫ Escuchar audio</button><label class="voice-control"><span>Voz inglesa</span><select class="select-control" id="listening-voice" aria-label="Voz inglesa"><optgroup label="Kokoro Natural · británico"><option value="kokoro:bf_emma">Emma · voz británica femenina (recomendada)</option><option value="kokoro:bf_isabella">Isabella · voz británica femenina</option><option value="kokoro:bm_george">George · voz británica masculina</option><option value="kokoro:bm_fable">Fable · voz británica masculina</option></optgroup><optgroup id="system-voice-options" label="Voces del sistema"><option value="system:auto">No hay voces inglesas detectadas</option></optgroup></select></label><label class="voice-control"><span>Velocidad <strong id="listening-rate-label"></strong></span><input id="listening-rate" type="range" min="0.75" max="1.1" step="0.05" aria-label="Velocidad de audio"></label>`;
  audioButton.replaceWith(controls);
  const notice = document.createElement("p");
  notice.className = "voice-notice";
  notice.id = "voice-notice";
  controls.insertAdjacentElement("afterend", notice);
  const output = document.createElement("div");
  output.className = "generated-audio";
  output.id = "generated-audio";
  notice.insertAdjacentElement("afterend", output);
  const status = document.createElement("p");
  status.className = "audio-status";
  status.id = "audio-status";
  output.insertAdjacentElement("afterend", status);
  const rate = root.querySelector("#listening-rate");
  rate.value = String(state.ttsRate);
  root.querySelector("#listening-rate-label").textContent = `${Number(state.ttsRate).toFixed(2)}×`;
}
function populateListeningVoices() {
  const select = document.querySelector("#listening-voice");
  const notice = document.querySelector("#voice-notice");
  if (!select) return;
  const voices = getEnglishVoices();
  const systemGroup = select.querySelector("#system-voice-options");
  systemGroup.replaceChildren();
  if (voices.length) {
    systemGroup.append(new Option("Automática · voz inglesa disponible", "system:auto"));
    voices.forEach(voice => systemGroup.append(new Option(`${voice.name} (${voice.lang})`, `system:${voice.voiceURI}`)));
  } else {
    systemGroup.append(new Option("No hay voces inglesas instaladas", "system:auto"));
  }
  if ([...select.options].some(option => option.value === state.ttsVoice)) {
    select.value = state.ttsVoice;
  } else {
    state.ttsVoice = "kokoro:bf_emma";
    select.value = state.ttsVoice;
    persist();
  }
  notice.textContent = "Kokoro genera la voz en este navegador. La primera escucha descarga el modelo de unos 92 MB; después se reutiliza desde la caché.";
}
function stopCurrentAudio(pausePlayer = true) {
  playbackRequestId++;
  window.speechSynthesis?.cancel();
  const source = naturalPlaybackSource;
  naturalPlaybackSource = null;
  try { source?.stop(); } catch {}
  const context = naturalPlaybackContext;
  naturalPlaybackContext = null;
  if (context && context.state !== "closed") void context.close().catch(() => {});
  if (pausePlayer && naturalAudioPlayer) {
    naturalAudioPlayer.pause();
    naturalAudioPlayer.currentTime = 0;
  }
}
function speakWithSystem(text, voiceURI = "", rate = state.ttsRate) {
  stopCurrentAudio();
  if (!("speechSynthesis" in window)) { showToast("La voz sintética no está disponible en este navegador."); return; }
  const utterance = new SpeechSynthesisUtterance(text);
  const voices = getEnglishVoices();
  const bestVoice = voices.find(voice => /natural|neural|online/i.test(voice.name)) || voices.find(voice => voice.lang.toLowerCase().startsWith("en-gb")) || voices[0];
  const selectedVoice = voiceURI ? voices.find(voice => voice.voiceURI === voiceURI) : bestVoice;
  if (selectedVoice) {
    utterance.voice = selectedVoice;
    utterance.lang = selectedVoice.lang;
  } else {
    utterance.lang = "en-GB";
  }
  utterance.rate = Number(rate) || 0.9;
  window.speechSynthesis.speak(utterance);
}
function setAudioStatus(message) {
  const status = document.querySelector("#audio-status");
  if (status) status.textContent = message;
}
async function speakNaturally(text, voice, rate, button) {
  stopCurrentAudio();
  const requestId = playbackRequestId;
  const originalLabel = button.textContent;
  button.disabled = true;
  button.textContent = "Preparando audio…";
  setAudioStatus("Cargando Kokoro Natural. La primera descarga es de unos 92 MB.");
  let playbackContext;
  try {
    const AudioContextConstructor = window.AudioContext || window.webkitAudioContext;
    if (AudioContextConstructor) {
      playbackContext = new AudioContextConstructor();
      naturalPlaybackContext = playbackContext;
      await playbackContext.resume();
    }
    const { generateNaturalSpeech } = await import("./natural-tts.js");
    const blob = await generateNaturalSpeech(text, {
      voice,
      speed: Number(rate),
      onProgress: progress => {
        if (progress.status === "progress" && progress.total) {
          const percent = Math.round(progress.loaded / progress.total * 100);
          setAudioStatus(`Descargando el modelo de voz: ${percent}%`);
        }
      }
    });
    if (requestId !== playbackRequestId) return;
    if (naturalAudioUrl) URL.revokeObjectURL(naturalAudioUrl);
    naturalAudioUrl = URL.createObjectURL(blob);
    const player = document.createElement("audio");
    player.controls = true;
    player.preload = "auto";
    player.volume = 1;
    player.src = naturalAudioUrl;
    player.addEventListener("play", () => stopCurrentAudio(false));
    naturalAudioPlayer = player;
    const replayButton = document.createElement("button");
    replayButton.className = "button button-green";
    replayButton.type = "button";
    replayButton.textContent = "▶ Reproducir audio";
    replayButton.addEventListener("click", async () => {
      stopCurrentAudio();
      try {
        player.currentTime = 0;
        await player.play();
        setAudioStatus("Reproduciendo audio natural.");
      } catch {
        setAudioStatus("El navegador bloqueó la reproducción. Descarga el WAV para escucharlo en tu reproductor.");
      }
    });
    const downloadLink = document.createElement("a");
    downloadLink.className = "text-button";
    downloadLink.href = naturalAudioUrl;
    downloadLink.download = `oxford-listening-${voice}.wav`;
    downloadLink.textContent = "Descargar WAV";
    document.querySelector("#generated-audio")?.replaceChildren(player, replayButton, downloadLink);
    player.load();
    if (playbackContext) {
      const audioBuffer = await playbackContext.decodeAudioData(await blob.arrayBuffer());
      if (requestId !== playbackRequestId) return;
      const source = playbackContext.createBufferSource();
      source.buffer = audioBuffer;
      source.connect(playbackContext.destination);
      naturalPlaybackContext = playbackContext;
      naturalPlaybackSource = source;
      source.onended = () => {
        if (naturalPlaybackSource !== source) return;
        naturalPlaybackSource = null;
        if (naturalPlaybackContext === playbackContext) naturalPlaybackContext = null;
        playbackContext.close();
        setAudioStatus("Audio listo. Puedes volver a escucharlo desde el reproductor.");
      };
      source.start();
      setAudioStatus("Reproduciendo audio natural. Puedes repetirlo o descargarlo.");
    } else {
      setAudioStatus("Audio natural listo. Pulsa reproducir para escucharlo.");
    }
  } catch (error) {
    if (playbackContext?.state !== "closed") playbackContext?.close();
    console.error("Kokoro Natural could not generate audio:", error);
    setAudioStatus("No se pudo reproducir el audio natural. Comprueba la conexión e inténtalo otra vez.");
    showToast("No se pudo cargar o reproducir Kokoro Natural.");
    speakWithSystem(text, "", rate);
  } finally {
    button.disabled = false;
    button.textContent = originalLabel;
  }
}
function speak(text, voiceChoice = state.ttsVoice, rate = state.ttsRate, button = null) {
  if (voiceChoice.startsWith("kokoro:")) {
    speakNaturally(text, voiceChoice.slice(7), rate, button || document.querySelector("[data-action='play-audio']"));
    return;
  }
  const voiceURI = voiceChoice.startsWith("system:") && voiceChoice !== "system:auto" ? voiceChoice.slice(7) : "";
  speakWithSystem(text, voiceURI, rate);
}
function bindSpeaking() {
  document.querySelector("#listen-prompt").addEventListener("click", () => speakWithSystem(document.querySelector("#speaking-prompt").textContent));
  const start = document.querySelector("#record-speaking");
  const stop = document.querySelector("#stop-speaking");
  start.addEventListener("click", async () => {
    if (!navigator.mediaDevices?.getUserMedia || !window.MediaRecorder) { showToast("La grabación no está disponible. Prueba en Chrome o Edge con conexión segura."); return; }
    try {
      recordingStream = await navigator.mediaDevices.getUserMedia({ audio: true });
      recorder = new MediaRecorder(recordingStream);
      const chunks = [];
      recorder.ondataavailable = event => { if (event.data.size) chunks.push(event.data); };
      recorder.onstop = () => {
        const blob = new Blob(chunks, { type: recorder.mimeType || "audio/webm" });
        if (recordingUrl) URL.revokeObjectURL(recordingUrl);
        recordingUrl = URL.createObjectURL(blob);
        document.querySelector("#recording-result").innerHTML = `<div style="margin-top:17px"><audio controls src="${recordingUrl}"></audio> <a class="text-button" href="${recordingUrl}" download="mi-practica-speaking.webm">Descargar audio</a></div>`;
        recordingStream.getTracks().forEach(track => track.stop());
        document.querySelector("#record-status").textContent = "Grabación lista. Escúchala o descárgala.";
      };
      recorder.start();
      start.disabled = true;
      stop.disabled = false;
      document.querySelector("#record-status").textContent = "Grabando tu respuesta...";
      let seconds = 60;
      const display = document.querySelector("#timer-display");
      clearInterval(speakingTimer);
      speakingTimer = setInterval(() => { seconds--; display.textContent = `00:${String(Math.max(0, seconds)).padStart(2, "0")}`; if (seconds <= 0) stop.click(); }, 1000);
    } catch { showToast("No se pudo acceder al micrófono. Revisa el permiso del navegador."); }
  });
  stop.addEventListener("click", () => {
    clearInterval(speakingTimer);
    if (recorder?.state === "recording") recorder.stop();
    start.disabled = false;
    stop.disabled = true;
    document.querySelector("#timer-display").textContent = "01:00";
  });
}
function recordSession() {
  const total = quiz.questions.length;
  const skillScores = {};
  quiz.questions.forEach(item => {
    const skill = ["grammar", "vocabulary"].includes(item.skill) ? "reading" : item.skill;
    skillScores[skill] ||= { total: 0, correct: 0 };
    skillScores[skill].total++;
    if (item.selected === item.answer) skillScores[skill].correct++;
  });
  const skill = quiz.skill === "all" ? "mixed" : quiz.skill;
  state.sessions.push({ skill, skillScores, title: quiz.exam ? "Simulacro de práctica" : quiz.skill === "all" ? "Práctica aleatoria" : `Práctica ${modules.find(item => item.id === quiz.skill)?.name || "B1"}`, correct: quiz.correct, total, date: new Date().toISOString() });
  state.xp += quiz.correct * 10 + total * 2;
  if (!state.activeDays.includes(todayKey())) state.activeDays.push(todayKey());
  persist();
}
function showToast(message) {
  document.querySelector(".toast")?.remove();
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  document.body.append(toast);
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.remove(), 2600);
}
function bindActions() {
  const voiceSelect = document.querySelector("#listening-voice");
  voiceSelect?.addEventListener("change", () => {
    stopCurrentAudio();
    if (naturalAudioUrl) URL.revokeObjectURL(naturalAudioUrl);
    naturalAudioUrl = null;
    naturalAudioPlayer = null;
    document.querySelector("#generated-audio")?.replaceChildren();
    setAudioStatus("Voz cambiada. Pulsa Escuchar audio para generar una nueva muestra.");
    state.ttsVoice = voiceSelect.value;
    persist();
  });
  const rateControl = document.querySelector("#listening-rate");
  rateControl?.addEventListener("input", () => {
    state.ttsRate = Number(rateControl.value);
    document.querySelector("#listening-rate-label").textContent = `${state.ttsRate.toFixed(2)}×`;
    persist();
  });
  document.querySelectorAll("[data-view]").forEach(button => button.addEventListener("click", () => setView(button.dataset.view)));
  document.querySelectorAll("[data-module]").forEach(button => button.addEventListener("click", () => {
    const skill = button.dataset.module;
    if (skill === "writing" || skill === "speaking") setView(skill); else startQuiz(skill);
  }));
  document.querySelectorAll("[data-practice]").forEach(button => button.addEventListener("click", () => {
    const skill = button.dataset.practice;
    if (skill === "writing" || skill === "speaking") setView(skill); else startQuiz(skill);
  }));
  document.querySelectorAll("[data-pdf]").forEach(button => button.addEventListener("click", () => loadPdf(Number(button.dataset.pdf))));
  document.querySelectorAll("[data-answer]").forEach(button => button.addEventListener("click", () => { if (!quiz.checked) { quiz.questions[quiz.index].selected = Number(button.dataset.answer); render(); } }));
  document.querySelectorAll("[data-action]").forEach(button => button.addEventListener("click", () => {
    const action = button.dataset.action;
    if (action === "quick-start") startQuiz("all");
    if (action === "start-exam") startQuiz("all", true);
    if (action === "check-answer" && quiz && quiz.questions[quiz.index].selected !== null) {
      quiz.checked = true;
      if (quiz.questions[quiz.index].selected === quiz.questions[quiz.index].answer) quiz.correct++;
      render();
    }
    if (action === "next-question" && quiz) {
      quiz.index++;
      quiz.checked = false;
      if (quiz.index >= quiz.questions.length) { recordSession(); render(); } else render();
    }
    if (action === "retry-quiz") startQuiz(quiz?.skill || "all", quiz?.exam || false);
    if (action === "play-audio" && quiz) speak(quiz.questions[quiz.index].audio, voiceSelect?.value || state.ttsVoice, rateControl?.value || state.ttsRate, button);
  }));
}
document.querySelector("#enter-course").addEventListener("click", () => {
  document.querySelector("#intro").classList.add("intro-exit");
  document.querySelector("#intro").hidden = true;
  document.querySelector("#app-shell").hidden = false;
  document.querySelector("#today-label").textContent = prettyDate(new Date());
  document.querySelector("#profile-name").textContent = state.name || "Estudiante";
  document.querySelector("#avatar-initial").textContent = (state.name || "Z").trim().charAt(0).toUpperCase();
  render();
});
document.querySelectorAll(".nav-item").forEach(button => button.addEventListener("click", () => setView(button.dataset.view)));
document.querySelector("#mobile-menu").addEventListener("click", () => document.querySelector("#sidebar").classList.toggle("open"));
document.querySelector("#profile-button").addEventListener("click", () => { document.querySelector("#student-name").value = state.name; document.querySelector("#profile-dialog").showModal(); });
document.querySelector("#save-profile").addEventListener("click", event => {
  event.preventDefault();
  state.name = document.querySelector("#student-name").value.trim();
  persist();
  document.querySelector("#profile-dialog").close();
  document.querySelector("#profile-name").textContent = state.name || "Estudiante";
  document.querySelector("#avatar-initial").textContent = (state.name || "Z").charAt(0).toUpperCase();
  if (currentView === "inicio") render();
  showToast("Perfil actualizado.");
});
document.querySelector("#help-button").addEventListener("click", () => document.querySelector("#help-dialog").showModal());
document.querySelector("#open-sources").addEventListener("click", () => { document.querySelector("#help-dialog").close(); setView("fuentes"); });
document.querySelector("#view-container").addEventListener("click", event => {
  if (event.target.id === "clear-progress") {
    if (confirm("¿Borrar tus sesiones, puntos y días de actividad? Tus borradores de Writing se conservarán.")) {
      state.sessions = []; state.xp = 0; state.activeDays = []; persist(); render(); showToast("Estadísticas borradas.");
    }
  }
});
if (window.speechSynthesis) window.speechSynthesis.onvoiceschanged = populateListeningVoices;