const prompt = require("prompt-sync")();
function random_questions() {
   

    let objA = {
        question: "What is the capital of Nigeria?",
        options: "(a) Abuja  (b) Ikeja  (c) Tollgate  (d) Lekki",
        correctAnswer: "(a) Abuja"
    };

    let objB = {
        question: "What is the capital of Kwara state?",
        options: "(a) Ilorin  (b) Offa  (c) Bauchi  (d) Ifelodun",
        correctAnswer: "(a) Ilorin"
    };

    let objC = {
        question: "What is the capital of Zamfara state?",
        options: "(a) Gusau  (b) Ilorin  (c) Birnin-Kebbi  (d) Zaria",
        correctAnswer: "(a) Gusau"
    };

    let objD = {
        question: "What is the nickname of Nigerian President?",
        options: "(a) Jagaban  (b) Oju-yobo  (c) Lameda  (d) Bola",
        correctAnswer: "(a) Jagaban"
    };

    let objE = {
        question: "Which state is Semi-colon Africa located?",
        options: "(a) Lagos  (b) Ikeja  (c) Abuja  (d) Yaba",
        correctAnswer: "(a) Lagos"
    };

    let objF = {
        question: "Which state has the highest population in Nigeria?",
        options: "(a) Lagos  (b) Ondo  (c) Oyo  (d) Kano",
        correctAnswer: "(a) Lagos"
    };

    let objG = {
        question: "Which country won the last World Cup?",
        options: "(a) Argentina  (b) France  (c) Morocco  (d) Nigeria",
        correctAnswer: "(a) Argentina"
    };

    let objH = {
        question: "How many geo-political zones do we have in Nigeria?",
        options: "(a) 6  (b) 7  (c) 8  (d) 9",
        correctAnswer: "(a) 6"
    };

    let objI = {
        question: "Who is the governor of Lagos state?",
        options: "(a) Sanwo-Olu  (b) Osinbajo  (c) Hamzat  (d) Lanre",
        correctAnswer: "(a) Sanwo-Olu"
    };

    let objK = {
        question: "Who is the CEO of Semi-colon Africa?",
        options: "(a) Sam - Immanuel  (b) Asheley Immanuel  (c) Chibuzor  (d) Serial killer",
        correctAnswer: "(a) Sam - Immanuel"
    };

  
    let questions = [objA, objB, objC, objD, objE, objF, objG, objH, objI, objK];

    for (let i = 0; i < questions.length; i++) {
        console.log(questions[i].question);
        console.log(questions[i].options);
        let answer = prompt("Your answer: ");
        if (answer.trim().toLowerCase() === questions[i].correctAnswer.trim().toLowerCase()) {
            console.log("congratulations,you are correct");
        } else {
            console.log("sorry,your answer is Wrong! Correct answer is " + questions[i].correctAnswer + "\n");
        }
    }
}
