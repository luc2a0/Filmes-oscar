const MOVIES = [
  {
    id: "the-secret-agent",
    title: "O Agente Secreto",
    originalTitle: "The Secret Agent",
    rating: "98% no Rotten Tomatoes",
    synopsis:
      "Brasil, 1977. Marcelo, um especialista em tecnologia na casa dos quarenta anos, está fugindo de um passado perigoso e tenta reencontrar o filho em Recife durante o Carnaval. O que deveria ser uma tentativa de refúgio e reconexão logo se transforma em tensão crescente, porque a cidade não é o lugar seguro que ele imaginava. Cercado por suspeitas, vigilância, interesses ocultos e um clima político sufocante, ele precisa se mover com cuidado enquanto a sensação de ameaça se adensa ao seu redor. É um thriller político carregado de atmosfera, deslocamento e paranoia, em que o espaço urbano e o momento histórico parecem conspirar contra qualquer sensação de estabilidade.",
    color: "#1f8f63"
  },
  {
    id: "sinners",
    title: "Pecadores",
    originalTitle: "Sinners",
    rating: "97% no Rotten Tomatoes",
    synopsis:
      "Dois irmãos gêmeos tentam abandonar as marcas de uma vida turbulenta e voltar para a cidade natal em busca de recomeço. Mas o retorno, em vez de oferecer paz, abre caminho para uma força ameaçadora que se instala pouco a pouco e contamina tudo ao redor. O filme mistura horror, redenção, violência e forte carga emocional, acompanhando personagens que precisam enfrentar não apenas um perigo externo, mas também aquilo que trouxeram consigo do passado. A premissa combina tensão sobrenatural, atmosfera sombria e drama humano, criando a sensação de que o verdadeiro pesadelo está tanto nas circunstâncias quanto nas feridas que nunca cicatrizaram.",
    color: "#8b1e2d"
  },
  {
    id: "bugonia",
    title: "Bugonia",
    originalTitle: "Bugonia",
    rating: "88% no Rotten Tomatoes",
    synopsis:
      "Dois jovens completamente tomados por teorias conspiratórias decidem sequestrar a poderosa CEO de uma grande empresa, convencidos de que ela não é apenas perigosa, mas literalmente uma ameaça alienígena ao planeta. A partir dessa ideia absurda e inquietante, o filme mergulha em paranoia coletiva, delírio, crítica social e um humor desconfortável muito próprio. O enredo acompanha o confronto entre convicções delirantes e estruturas de poder, explorando até que ponto medo, ressentimento e fantasia podem distorcer a percepção da realidade. O resultado é uma ficção estranha, ácida e provocadora, que brinca com o ridículo sem perder a sensação de perigo.",
    color: "#7a53ff"
  },
  {
    id: "f1",
    title: "F1",
    originalTitle: "F1: The Movie",
    rating: "83% no Rotten Tomatoes",
    synopsis:
      "Nos anos 1990, Sonny Hayes foi visto como um dos nomes mais promissores da Fórmula 1, até que um acidente quase encerrou sua carreira. Décadas depois, ele recebe a chance de voltar às pistas quando o dono de uma equipe em crise o convence a retornar ao esporte. Agora, ao lado de um piloto novato talentoso e impulsivo, Sonny precisa lidar com a pressão competitiva, o peso do passado e a dificuldade de reencontrar um propósito em um ambiente em que tudo é velocidade, ego e risco. A história combina drama esportivo, redenção e rivalidade geracional, colocando no centro a pergunta sobre o que significa voltar quando o mundo já parece ter seguido em frente.",
    color: "#1fa2ff"
  },
  {
    id: "frankenstein",
    title: "Frankenstein",
    originalTitle: "Frankenstein",
    rating: "85% no Rotten Tomatoes",
    synopsis:
      "Nesta releitura do clássico de Mary Shelley, Victor Frankenstein é apresentado como um cientista brilhante, obsessivo e profundamente arrogante, disposto a ultrapassar limites éticos e humanos para concretizar sua visão. Quando consegue dar vida a uma criatura, o feito extraordinário rapidamente se converte em tragédia, culpa e descontrole. Em vez de ser apenas uma narrativa sobre horror científico, o filme enfatiza as consequências emocionais, morais e existenciais desse gesto de criação, examinando o vínculo entre criador e criatura. A trama avança como um grande drama gótico sobre ambição, abandono, identidade e humanidade, em que o monstruoso não está apenas na aparência, mas também nas escolhas que produzem sofrimento.",
    color: "#4ea67a"
  },
  {
    id: "hamnet",
    title: "Hamnet",
    originalTitle: "Hamnet",
    rating: "84% no Rotten Tomatoes",
    synopsis:
      "Dirigido por Chloé Zhao, o filme acompanha Agnes e William Shakespeare em uma história marcada por amor, luto e transformação íntima. A narrativa se concentra na dor profunda que atravessa a família e no modo como a perda altera a vida doméstica, a relação entre os personagens e a própria imaginação artística. Em vez de seguir um caminho biográfico convencional, a obra se move por emoções, memória e ecos afetivos, examinando como uma experiência devastadora pode reverberar na criação de algo maior do que a própria vida. É um drama delicado e intenso, voltado menos para acontecimentos grandiosos e mais para a dimensão emocional da ausência.",
    color: "#d28c2d"
  },
  {
    id: "marty-supreme",
    title: "Marty Supreme",
    originalTitle: "Marty Supreme",
    rating: "93% no Rotten Tomatoes",
    synopsis:
      "Marty Mauser é um jovem com um sonho imenso e praticamente nenhum respeito ao redor. Mesmo assim, ele insiste em perseguir grandeza com uma obstinação que o leva por situações extremas, sucessos improváveis, fracassos dolorosos e confrontos que colocam seu senso de identidade à prova. O filme acompanha essa trajetória de ascensão e queda com energia febril, humor nervoso e forte pulsação dramática. Mais do que uma história de conquista simples, a narrativa observa o custo psicológico, social e emocional de querer muito ser alguém em um mundo que parece o tempo inteiro pronto para te diminuir, ignorar ou transformar em espetáculo.",
    color: "#ef4444"
  },
  {
    id: "one-battle-after-another",
    title: "One Battle after Another",
    originalTitle: "One Battle after Another",
    rating: "97% no Rotten Tomatoes",
    synopsis:
      "Quando um antigo inimigo retorna após muitos anos, um grupo de ex-revolucionários é forçado a se reorganizar para resgatar a filha de um deles. A partir daí, o filme embarca em uma aventura épica, caótica e cheia de energia, combinando ação, humor, tensão política e relações marcadas pelo tempo. Ao mesmo tempo em que acompanha movimentos urgentes e situações de alto risco, a história também reflete sobre envelhecimento, legado, compromisso ideológico e o desgaste entre aquilo que se acreditava no passado e o que restou no presente. É um filme de impulso narrativo forte, mas que também carrega camadas de memória, desencanto e reinvenção.",
    color: "#ec4899"
  },
  {
    id: "sentimental-value",
    title: "Sentimental Value",
    originalTitle: "Sentimental Value",
    rating: "97% no Rotten Tomatoes",
    synopsis:
      "As irmãs Nora e Agnes voltam a se aproximar do pai distante, Gustav, um diretor outrora renomado e ainda envolto em carisma, controle e ambiguidades emocionais. Quando ele oferece a Nora um papel em um novo projeto, antigos ressentimentos, expectativas e feridas mal resolvidas começam a emergir com força. O filme se desenvolve como um drama familiar maduro sobre arte, afeto, memória e a dificuldade de distinguir expressão artística de manipulação emocional. Em vez de respostas simples, a narrativa trabalha tensões delicadas entre intimidade e performance, revelando como vínculos familiares podem ser, ao mesmo tempo, fonte de identidade, desconforto, desejo de reparação e desgaste.",
    color: "#3b82f6"
  },
  {
    id: "train-dreams",
    title: "Train Dreams",
    originalTitle: "Train Dreams",
    rating: "97% no Rotten Tomatoes",
    synopsis:
      "Baseado na novela de Denis Johnson, o filme acompanha Robert Grainier ao longo de um período de mudanças profundas na América do início do século XX. Órfão desde cedo, ele amadurece em meio às vastas paisagens do noroeste do Pacífico, trabalhando na expansão da malha ferroviária enquanto o país se transforma ao redor dele. A narrativa é menos movida por espetáculo e mais por passagem do tempo, silêncio, trabalho, família, perda e resistência. Com sensibilidade intimista e dimensão quase mítica, o filme observa uma vida aparentemente comum para revelar nela a densidade de uma experiência humana inteira, atravessada por natureza, memória e transformação histórica.",
    color: "#14b8a6"
  }
];

const selector = document.getElementById("movieSelector");
const selectedCount = document.getElementById("selectedCount");
const selectAllBtn = document.getElementById("selectAllBtn");
const clearAllBtn = document.getElementById("clearAllBtn");
const spinBtn = document.getElementById("spinBtn");

const movieTitle = document.getElementById("movieTitle");
const movieRating = document.getElementById("movieRating");
const movieSynopsis = document.getElementById("movieSynopsis");
const resultContent = document.getElementById("resultContent");
const emptyState = document.getElementById("emptyState");

const notes = document.getElementById("notes");
const copyBtn = document.getElementById("copyBtn");
const copyFeedback = document.getElementById("copyFeedback");

const canvas = document.getElementById("wheel");
const ctx = canvas.getContext("2d");

let rotation = 0;
let currentMovie = null;
let spinning = false;

function createSelector() {
  selector.innerHTML = "";

  MOVIES.forEach((movie, index) => {
    const wrapper = document.createElement("div");
    wrapper.className = "movie-option";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = true;
    checkbox.id = `movie-${movie.id}`;
    checkbox.dataset.movieId = movie.id;

    const label = document.createElement("label");
    label.setAttribute("for", checkbox.id);
    label.innerHTML = `
      <span class="movie-name">${index + 1}. ${movie.title}</span>
      <span class="movie-mini">${movie.rating}</span>
    `;

    checkbox.addEventListener("change", () => {
      updateSelectedCount();
      drawWheel();
    });

    wrapper.appendChild(checkbox);
    wrapper.appendChild(label);
    selector.appendChild(wrapper);
  });

  updateSelectedCount();
}

function getSelectedMovies() {
  const checkedIds = [...selector.querySelectorAll("input:checked")].map(
    (input) => input.dataset.movieId
  );

  return MOVIES.filter((movie) => checkedIds.includes(movie.id));
}

function updateSelectedCount() {
  const total = getSelectedMovies().length;
  selectedCount.textContent = `${total} selecionado${total !== 1 ? "s" : ""}`;
  spinBtn.disabled = total < 1;
}

function drawWheel() {
  const movies = getSelectedMovies();
  const size = canvas.width;
  const center = size / 2;
  const radius = center - 24;

  ctx.clearRect(0, 0, size, size);

  if (movies.length === 0) {
    ctx.beginPath();
    ctx.arc(center, center, radius, 0, Math.PI * 2);
    ctx.fillStyle = "#241a12";
    ctx.fill();

    ctx.strokeStyle = "rgba(244, 200, 111, 0.22)";
    ctx.lineWidth = 5;
    ctx.stroke();

    ctx.fillStyle = "#f8f1e6";
    ctx.font = "bold 28px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("Selecione filmes", center, center);
    return;
  }

  const sliceAngle = (Math.PI * 2) / movies.length;

  movies.forEach((movie, i) => {
    const start = rotation + i * sliceAngle;
    const end = start + sliceAngle;

    const gradient = ctx.createRadialGradient(center, center, 80, center, center, radius);
    gradient.addColorStop(0, lightenColor(movie.color, 25));
    gradient.addColorStop(1, movie.color);

    ctx.beginPath();
    ctx.moveTo(center, center);
    ctx.arc(center, center, radius, start, end);
    ctx.closePath();
    ctx.fillStyle = gradient;
    ctx.fill();

    ctx.strokeStyle = "rgba(255,255,255,0.18)";
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.save();
    ctx.translate(center, center);
    ctx.rotate(start + sliceAngle / 2);

    ctx.fillStyle = "#fff6e5";
    ctx.textAlign = "right";
    ctx.textBaseline = "middle";
    ctx.shadowColor = "rgba(0,0,0,0.35)";
    ctx.shadowBlur = 8;

    let fontSize = 18;
    let truncateLimit = 22;

    if (movies.length >= 8) {
      fontSize = 14;
      truncateLimit = 15;
    } else if (movies.length >= 6) {
      fontSize = 16;
      truncateLimit = 18;
    }

    ctx.font = `bold ${fontSize}px Arial`;
    ctx.fillText(truncate(movie.title, truncateLimit), radius - 28, 0);

    ctx.restore();
  });

  ctx.beginPath();
  ctx.arc(center, center, radius, 0, Math.PI * 2);
  ctx.strokeStyle = "rgba(244, 200, 111, 0.35)";
  ctx.lineWidth = 6;
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(center, center, 74, 0, Math.PI * 2);
  ctx.fillStyle = "#120f14";
  ctx.fill();
  ctx.strokeStyle = "rgba(244,200,111,0.42)";
  ctx.lineWidth = 5;
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(center, center, 46, 0, Math.PI * 2);
  ctx.fillStyle = "#24180e";
  ctx.fill();

  ctx.fillStyle = "#fff0cf";
  ctx.font = "bold 17px Arial";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("OSCAR", center, center - 12);
  ctx.fillText("2026", center, center + 14);
}

function spinWheel() {
  const movies = getSelectedMovies();
  if (movies.length < 1 || spinning) return;

  spinning = true;
  spinBtn.disabled = true;
  copyFeedback.textContent = "";

  const sliceAngle = (Math.PI * 2) / movies.length;
  const randomIndex = Math.floor(Math.random() * movies.length);
  const spins = 7 + Math.random() * 2.5;

  const targetAngle =
    (Math.PI * 2 * spins) +
    (Math.PI * 1.5) -
    (randomIndex * sliceAngle + sliceAngle / 2);

  const startRotation = rotation;
  const finalRotation = targetAngle;
  const duration = 5200;
  const startTime = performance.now();

  function animate(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeOutQuart(progress);

    rotation = startRotation + (finalRotation - startRotation) * eased;
    drawWheel();

    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      rotation = rotation % (Math.PI * 2);
      drawWheel();

      const selectedMovie = getMovieAtPointer();
      showMovie(selectedMovie);

      spinning = false;
      updateSelectedCount();
    }
  }

  requestAnimationFrame(animate);
}

function getMovieAtPointer() {
  const movies = getSelectedMovies();
  const sliceAngle = (Math.PI * 2) / movies.length;
  const pointerAngle = (Math.PI * 1.5 - rotation + Math.PI * 2) % (Math.PI * 2);
  const index = Math.floor(pointerAngle / sliceAngle) % movies.length;
  return movies[index];
}

function showMovie(movie) {
  if (!movie) return;

  currentMovie = movie;

  emptyState.classList.add("hidden");
  resultContent.classList.remove("hidden");

  movieTitle.textContent = movie.title;
  movieRating.textContent = movie.rating;
  movieSynopsis.textContent = movie.synopsis;

  const savedText = localStorage.getItem(`notes-${movie.id}`) || "";
  notes.value = savedText;
  notes.focus();
}

notes.addEventListener("input", () => {
  if (!currentMovie) return;
  localStorage.setItem(`notes-${currentMovie.id}`, notes.value);
});

async function copyText() {
  if (!currentMovie) {
    copyFeedback.textContent = "Primeiro sorteie um filme.";
    return;
  }

  const textToCopy = `Filme: ${currentMovie.title}
Título original: ${currentMovie.originalTitle}
Nota: ${currentMovie.rating}

Sinopse:
${currentMovie.synopsis}

Minhas anotações:
${notes.value.trim() || "(sem anotações)"}`;

  try {
    await navigator.clipboard.writeText(textToCopy);
    copyFeedback.textContent = "Texto copiado com sucesso.";
  } catch (error) {
    copyFeedback.textContent = "Não foi possível copiar automaticamente.";
  }
}

function truncate(text, limit) {
  return text.length > limit ? text.slice(0, limit - 1) + "…" : text;
}

function easeOutQuart(t) {
  return 1 - Math.pow(1 - t, 4);
}

function lightenColor(hex, percent) {
  const num = parseInt(hex.replace("#", ""), 16);
  const r = Math.min(255, ((num >> 16) & 0xff) + percent);
  const g = Math.min(255, ((num >> 8) & 0xff) + percent);
  const b = Math.min(255, (num & 0xff) + percent);

  return `rgb(${r}, ${g}, ${b})`;
}

selectAllBtn.addEventListener("click", () => {
  selector.querySelectorAll("input").forEach((input) => {
    input.checked = true;
  });
  updateSelectedCount();
  drawWheel();
});

clearAllBtn.addEventListener("click", () => {
  selector.querySelectorAll("input").forEach((input) => {
    input.checked = false;
  });
  updateSelectedCount();
  drawWheel();
});

spinBtn.addEventListener("click", spinWheel);
copyBtn.addEventListener("click", copyText);

createSelector();
drawWheel();