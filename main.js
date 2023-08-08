const frasesBiscoitoDaSorte = [
    "A vida é uma jornada, não um destino.",
    "Seja a mudança que você deseja ver no mundo.",
    "Acredite em si mesmo e tudo será possível.",
    "O sucesso nasce do esforço.",
    "Grandes coisas estão por vir para quem está disposto a tentar.",
    "O fracasso é apenas uma oportunidade para recomeçar de forma mais inteligente.",
    "O conhecimento é o poder mais valioso.",
    "A sorte favorece a mente preparada.",
    "A alegria está na jornada, não no destino.",
    "A vida é curta, aproveite cada momento.",
    "Com persistência, você atingirá seus objetivos.",
    "A gentileza é a chave para relacionamentos duradouros.",
    "Seja corajoso nas suas escolhas e nunca se arrependa.",
    "Você é mais forte do que imagina.",
    "A felicidade está dentro de você, não nas coisas materiais.",
    "O otimismo é a chave para superar desafios.",
    "A sorte segue aqueles que trabalham duro.",
    "A paciência é amarga, mas seus frutos são doces.",
    "A verdadeira sabedoria está em aprender com os erros dos outros.",
    "Sonhe grande e siga em frente.",
    "A vida recompensa a ação.",
  ];


function openCookie(event) {
    event.preventDefault()

    document.querySelector(".screen1").classList.add("hide")
    document.querySelector(".screen2").classList.remove("hide")


    let fraseAleatoria = frasesBiscoitoDaSorte[Math.floor(Math.random() * frasesBiscoitoDaSorte.length)]; 
    console.log(fraseAleatoria);

    document.querySelector(".screen2 p1").innerText = fraseAleatoria
}
 
function reloadCookie(event) {
    event.preventDefault()

    document.querySelector(".screen2").classList.add("hide")
    document.querySelector(".screen1").classList.remove("hide")
}