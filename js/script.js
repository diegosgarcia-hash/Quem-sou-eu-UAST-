var scores = {
    clarice: 0,
    machado: 0,
    conceicao: 0,
    carolina: 0,
    shakespeare: 0,
    austen: 0,
    king: 0,
    poe: 0,
    saussure: 0,
    chomsky: 0,
    bakhtin: 0,
    sapir: 0
};

var authorImages = {
    clarice: "assets/CL.png",
    machado: "assets/MA.png",
    conceicao: "assets/CE.png",
    carolina: "assets/CM.png",   
    shakespeare: "assets/WS.png",
    austen: "assets/JA.png",
    king: "assets/SK.png",   
    poe: "assets/AP.png",       
    saussure: "assets/FS.png",
    chomsky: "assets/NC.png", 
    bakhtin: "assets/BK.png",   
    sapir: "assets/SP.png"      
};

var questionCount = 0;

var homeScreen = document.querySelector("header");
var mainContainer = document.querySelector("main");
var result = document.getElementById("result");
var displayResult = document.getElementById("displayResult");
var restart = document.getElementById("restart");

var h2Elements = mainContainer.querySelectorAll("h2");
var questionDivs = mainContainer.querySelectorAll(".question");
var startButton = document.getElementById("start");

function initQuiz() {
    for (var i = 0; i < h2Elements.length; i++) {
        if (i < 6) {
            h2Elements[i].style.display = "none";
            questionDivs[i].style.display = "none";
        }
    }
    displayResult.style.display = "none";
    result.style.display = "none";
    restart.style.display = "none";
}

initQuiz();

startButton.addEventListener("click", function() {
    homeScreen.style.display = "none";
    showQuestion(0);
});

function showQuestion(index) {
    if (index < 6) {
        h2Elements[index].style.display = "block";
        questionDivs[index].style.display = "flex";
    }
}

function hideQuestion(index) {
    if (index < 6) {
        h2Elements[index].style.display = "none";
        questionDivs[index].style.display = "none";
    }
}

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");
var q5a4 = document.getElementById("q5a4");

var q6a1 = document.getElementById("q6a1");
var q6a2 = document.getElementById("q6a2");
var q6a3 = document.getElementById("q6a3");
var q6a4 = document.getElementById("q6a4");

q1a1.addEventListener("click", function() { scores.clarice += 1; scores.king += 1; nextQ(0, 1); });
q1a2.addEventListener("click", function() { scores.machado += 1; scores.austen += 1; nextQ(0, 1); });
q1a3.addEventListener("click", function() { scores.shakespeare += 1; scores.poe += 1; nextQ(0, 1); });
q1a4.addEventListener("click", function() { scores.saussure += 1; scores.chomsky += 1; nextQ(0, 1); });

q2a1.addEventListener("click", function() { scores.conceicao += 1; scores.carolina += 1; nextQ(1, 2); });
q2a2.addEventListener("click", function() { scores.austen += 1; scores.shakespeare += 1; nextQ(1, 2); });
q2a3.addEventListener("click", function() { scores.king += 1; scores.poe += 1; nextQ(1, 2); });
q2a4.addEventListener("click", function() { scores.chomsky += 1; scores.bakhtin += 1; nextQ(1, 2); });

q3a1.addEventListener("click", function() { scores.carolina += 1; scores.conceicao += 1; nextQ(2, 3); });
q3a2.addEventListener("click", function() { scores.machado += 1; scores.clarice += 1; nextQ(2, 3); });
q3a3.addEventListener("click", function() { scores.bakhtin += 1; scores.sapir += 1; nextQ(2, 3); });
q3a4.addEventListener("click", function() { scores.sapir += 1; scores.saussure += 1; nextQ(2, 3); });

q4a1.addEventListener("click", function() { scores.clarice += 1; scores.poe += 1; nextQ(3, 4); });
q4a2.addEventListener("click", function() { scores.king += 1; scores.shakespeare += 1; nextQ(3, 4); });
q4a3.addEventListener("click", function() { scores.conceicao += 1; scores.carolina += 1; nextQ(3, 4); });
q4a4.addEventListener("click", function() { scores.saussure += 1; scores.chomsky += 1; nextQ(3, 4); });

q5a1.addEventListener("click", function() { scores.bakhtin += 1; scores.carolina += 1; nextQ(4, 5); });
q5a2.addEventListener("click", function() { scores.conceicao += 1; scores.clarice += 1; nextQ(4, 5); });
q5a3.addEventListener("click", function() { scores.sapir += 1; scores.chomsky += 1; nextQ(4, 5); });
q5a4.addEventListener("click", function() { scores.shakespeare += 1; scores.austen += 1; nextQ(4, 5); });

q6a1.addEventListener("click", function() { scores.austen += 1; scores.machado += 1; finishQuiz(); });
q6a2.addEventListener("click", function() { scores.king += 1; scores.poe += 1; finishQuiz(); });
q6a3.addEventListener("click", function() { scores.machado += 1; scores.bakhtin += 1; finishQuiz(); });
q6a4.addEventListener("click", function() { scores.sapir += 1; scores.saussure += 1; finishQuiz(); });

function nextQ(hideIndex, showIndex) {
    hideQuestion(hideIndex);
    showQuestion(showIndex);
    questionCount += 1;
}

function finishQuiz() {
    hideQuestion(5);
    questionCount += 1;
    displayResult.style.display = "inline-block";
    displayResult.addEventListener("click", reveal);
}

function reveal() {
    result.style.display = "block";
    restart.style.display = "inline-block";

    var highestScore = -1;
    var winningAuthor = "clarice";

    for (var author in scores) {
        if (scores[author] > highestScore) {
            highestScore = scores[author];
            winningAuthor = author;
        }
    }

    var oldImg = document.getElementById("winningAuthorImg");
    if (oldImg) {
        oldImg.remove();
    }

    var img = document.createElement("img");
    img.id = "winningAuthorImg";
    img.src = authorImages[winningAuthor] || "assets/CL.png";
    img.alt = winningAuthor;
    
    img.style.width = "15vw";
    img.style.maxWidth = "12em";
    img.style.height = "15vw";
    img.style.maxHeight = "12em";
    img.style.objectFit = "cover";
    img.style.borderRadius = "50%";
    img.style.margin = "1.5em auto 0.5em auto";
    img.style.display = "block";
    img.style.border = "3px solid #EAA71B";

    result.parentNode.insertBefore(img, result);

    switch (winningAuthor) {
        case "clarice":
            result.innerHTML = "Você é <b>Clarice Lispector</b>! Profunda, introspectiva e dona de uma escrita visceral que busca a essência das coisas.";
            break;
        case "machado":
            result.innerHTML = "Você é <b>Machado de Assis</b>! Irônico, sagaz, observador da natureza humana e mestre em criticar a sociedade com elegância.";
            break;
        case "conceicao":
            result.innerHTML = "Você é <b>Conceição Evaristo</b>! A voz da ancestralidade, da escrevivência e da resistência que ecoa forte da periferia para o mundo.";
            break;
        case "carolina":
            result.innerHTML = "Você é <b>Carolina Maria de Jesus</b>! Autêntica, corajosa e de uma lucidez impressionante ao retratar a realidade nua e crua.";
            break;
        case "shakespeare":
            result.innerHTML = "Você é <b>William Shakespeare</b>! Dramático, universal e apaixonado pelas grandes paixões, tragédias e complexidades da alma humana.";
            break;
        case "austen":
            result.innerHTML = "Você é <b>Jane Austen</b>! Refinado(a), espirituoso(a) e especialista em analisar as relações sociais e os corações humanos com muita ironia sutil.";
            break;
        case "king":
            result.innerHTML = "Você é <b>Stephen King</b>! Mestre do suspense e da narrativa imersiva, capaz de explorar os medos mais profundos da mente.";
            break;
        case "poe":
            result.innerHTML = "Você é <b>Edgar Allan Poe</b>! Fascinado pelo mistério, pelo sombrio, pelo macabro e pela estética refinada do suspense psicológico.";
            break;
        case "saussure":
            result.innerHTML = "Você é <b>Ferdinand de Saussure</b>! Analítico(a), estruturado(a) e fascinado(a) pelas engrenagens invisíveis que fazem a linguagem funcionar.";
            break;
        case "chomsky":
            result.innerHTML = "Você é <b>Noam Chomsky</b>! Mente brilhante e questionadora, focada em entender a estrutura profunda da mente e da linguagem humana.";
            break;
        case "bakhtin":
            result.innerHTML = "Você é <b>Mikhail Bakhtin</b>! Defensor(a) da polifonia, do diálogo vivo e da multiplicidade de vozes que compõem a cultura e os textos.";
            break;
        case "sapir":
            result.innerHTML = "Você é <b>Edward Sapir</b>! Fascinado(a) por como a língua molda a cultura, o pensamento e a nossa visão particular de mundo.";
            break;
        default:
            result.innerHTML = "Você é uma bela mistura de várias grandes mentes literárias!";
    }
}

function restartQuiz() {
    for (var author in scores) {
        scores[author] = 0;
    }
    questionCount = 0;
    
    var winningImg = document.getElementById("winningAuthorImg");
    if (winningImg) {
        winningImg.remove();
    }

    result.innerHTML = "Você é...";
    result.style.display = "none";
    displayResult.style.display = "none";
    restart.style.display = "none";
    
    homeScreen.style.display = "block";
}

restart.addEventListener("click", restartQuiz);