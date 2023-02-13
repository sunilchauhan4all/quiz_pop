
var highScoreArray = JSON.parse(localStorage.getItem("highScoreArray")) || [];//Question bank
var userName="sunil";
var questionBank= [
    {
        question : 'Eritrea, which became the 182nd member of the UN in 1993, is in the continent of',
        option : ['Asia','Africa','Europe','Australia'],
        answer : 'Africa'
    },
    {
        question : 'Garampani sanctuary is located at',
        option : ['Junagarh, Gujarat','Diphu, Assam','Kohima, Nagaland','Gangtok, Sikkim'],
        answer : 'Diphu, Assam'
    },
    {
        question : 'For which of the following disciplines is Nobel Prize awarded?',
        option : ['Physics and Chemistry','Physiology or Medicine','Literature, Peace and Economics','All of the above'],
        answer : 'All of the above'
    },
    {
        question : 'Hitler party which came into power in 1933 is known as',
        option : ['Labour Party','Nazi Party','Ku-Klux-Klan','Democratic Party'],
        answer : 'Nazi Party'
    },
    {
        question : 'First human heart transplant operation conducted by Dr. Christiaan Barnard on Louis Washkansky, was conducted in',
        option : ['1967','1968','1958','1922'],
        answer : '1967'
    }
]
// var questionBank=[
//     {
//         "music": [
//           {
//             "id": 1,
//             "question": "Which of the following is not a type of music notation?",
//             "options": ["Standard notation", "Tab notation", "Morse code notation", "Graphics notation"],
//             "answer": "Morse code notation",
//             "category": "music"
//           },
//           {
//             "id": 2,
//             "question": "What is the most common time signature in classical music?",
//             "options": ["3/4", "4/4", "5/4", "6/8"],
//             "answer": "4/4",
//             "category": "music"
//           },
//           {
//             "id": 3,
//             "question": "Which of the following is not a type of instrument in a symphony orchestra?",
//             "options": ["Violin", "Piano", "Harp", "Theremin"],
//             "answer": "Theremin",
//             "category": "music"
//           },
//           {
//             "id": 4,
//             "question": "What is the most common key in pop music?",
//             "options": ["C Major", "G Major", "D Major", "A Major"],
//             "answer": "C Major",
//             "category": "music"
//           },
//           {
//             "id": 5,
//             "question": "Which of the following is not a type of chord?",
//             "options": ["Major", "Minor", "Diminished", "Flat"],
//             "answer": "Flat",
//             "category": "music"
//           },
//           {
//             "id": 6,
//             "question": "Which of the following is not a type of music genre?",
//             "options": ["Jazz", "Blues", "Rock", "Applesauce"],
//             "answer": "Applesauce",
//             "category": "music"
//           },
//           {
//             "id": 7,
//             "question": "Which of the following is not a type of music theory?",
//             "options": ["Harmony", "Counterpoint", "Form", "Cooking"],
//             "answer": "Cooking",
//             "category": "music"
//           },
//           {
//             "id": 8,
//             "question": "What is the most common tempo marking in classical music?",
//             "options": ["Allegro", "Andante", "Adagio", "Moderato"],
//             "answer": "Allegro",
//             "category": "music"
//           },
//           {
//             "id": 9,
//             "question": "Which of the following is not a type of musical form?",
//             "options": ["Sonata", "Symphony", "Concerto", "Spaghetti"],
//             "answer": "Spaghetti",
//             "category": "music"
//           },
//           {
//             "id": 10,
//             "question": "Which of the following is not a type of music notation software?",
//             "options": ["Sibelius", "Finale", "MuseScore", "Microsoft Word"],
//             "answer": "Microsoft Word",
//             "category": "music"
//           }
//         ],
//         "modern-art": [
//           {
//             "id": 11,
//             "question": "Which artist is known for coining the term 'Surrealism'?",
//             "options": ["Pablo Picasso", "Salvador Dali", "Vincent van Gogh", "Henri Matisse"],
//             "answer": "Salvador Dali",
//             "category": "modern-art"
//           },
//           {
//             "id": 12,
//             "question": "Which movement is associated with the use of abstract forms and shapes in art?",
//             "options": ["Impressionism", "Expressionism", "Futurism", "Cubism"],
//             "answer": "Cubism",
//             "category": "modern-art"
//           },
//           {
//             "id": 13,
//             "question": "Which artist is known for painting the work 'The Persistence of Memory'?",
//             "options": ["Pablo Picasso", "Salvador Dali", "Vincent van Gogh", "Henri Matisse"],
//             "answer": "Salvador Dali",
//             "category": "modern-art"
//           },
//           {
//             "id": 14,
//             "question": "Which artist is known for creating the painting 'The Scream'?",
//             "options": ["Vincent van Gogh", "Salvador Dali", "Edvard Munch", "Claude Monet"],
//             "answer": "Edvard Munch",
//             "category": "modern-art"
//           },
//           {
//             "id": 15,
//             "question": "What movement was associated with the use of bold, bright colors and thick brushstrokes?",
//             "options": ["Impressionism", "Expressionism", "Fauvism", "Cubism"],
//             "answer": "Fauvism",
//             "category": "modern-art"
//           },
//           {
//             "id": 16,
//             "question": "What movement was associated with the use of bright colors, simplified forms, and a focus on movement and speed",
//             "options": ["Impressionism", "Futurism", "Surrealism", "Abstract Expressionism"],
//             "answer": "Futurism",
//             "category": "modern-art"
//           },
//           {
//             "id": 17,
//             "question": "Which artist is known for creating the painting 'Water Lilies'?",
//             "options": ["Claude Monet", "Paul Cezanne", "Paul Gauguin", "Paul Klee"],
//             "answer": "Claude Monet",
//             "category": "modern-art"
//           },
//           {
//             "id": 18,
//             "question": "Which artist is known for creating the painting 'Les Demoiselles d'Avignon'?",
//             "options": ["Henri Matisse", "Vincent van Gogh", "Salvador Dali", "Pablo Picasso"],
//             "answer": "Pablo Picasso",
//             "category": "modern-art"
//           },
//           {
//             "id": 19,
//             "question": "Which artist is known for creating the painting 'Guernica'?",
//             "options": ["Claude Mone", "Paul Cezanne", "Pablo Picasso", "Vincent van Gogh"],
//             "answer": "Pablo Picasso",
//             "category": "modern-art"
//           },
//           {
//             "id": 20,
//             "question": "Which artist is known for creating the sculpture 'The Thinker'?",
//             "options": ["Auguste Rodin", "Alexander Calder", "Jean Arp", "Henry Moore"],
//             "answer": "Auguste Rodin",
//             "category": "modern-art"
//           }
//         ],
      
//         "coding": [
//           {
//             "id": 21,
//             "question": "What is the correct syntax for an if statement in Python?",
//             "options": ["if (condition):", "if condition", "if: condition", "if condition:"],
//             "answer": "if condition:",
//             "category": "coding"
//           },
//           {
//             "id": 22,
//             "question": "Which of the following is not a data type in JavaScript?",
//             "options": ["String", "Number", "Boolean", "ArrayList"],
//             "answer": "ArrayList",
//             "category": "coding"
//           },
//           {
//             "id": 23,
//             "question": "Which of the following is used to declare a variable in Java?",
//             "options": ["var", "let", "const", "int"],
//             "answer": "int",
//             "category": "coding"
//           },
//           {
//             "id": 24,
//             "question": "What is the correct syntax for a for loop in C#?",
//             "options": ["for i = 0 to 10", "for (i = 0; i <= 10; i++)", "for (int i = 0; i <= 10)", "for i in range(0, 10)"],
//             "answer": "for (i = 0; i <= 10; i++)",
//             "category": "coding"
//           },
//           {
//             "id": 25,
//             "question": "Which of the following is not a looping structure in PHP?",
//             "options": ["while", "for", "do-while", "foreach"],
//             "answer": "foreach",
//             "category": "coding"
//           },
//           {
//             "id": 26,
//             "question": "Which of the following is not a valid operator in C++?",
//             "options": ["+", "-", "*", "$"],
//             "answer": "$",
//             "category": "coding"
//           },
//           {
//             "id": 27,
//             "question": "In which programming language is 'print' used for displaying output?",
//             "options": ["Python", "JavaScript", "Java", "C++"],
//             "answer": "Python",
//             "category": "coding"
//           },
//           {
//             "id": 28,
//             "question": "What is the correct syntax for a function in Ruby?",
//             "options": ["function name()", "def name", "function name", "def name()"],
//             "answer": "def name()",
//             "category": "coding"
//           },
//           {
//             "id": 29,
//             "question": "Which of the following is not a type of variable in Swift?",
//             "options": ["Int", "String", "Double", "Object"],
//             "answer": "Object",
//             "category": "coding"
//           },
//           {
//             "id": 30,
//             "question": "In which programming language is '#' used for commenting?",
//             "options": ["Python", "JavaScript", "Java", "C++"],
//             "answer": "C++",
//             "category": "coding"
//           }
//         ]
//       }
      
// ]

var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scoreboard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var pre= document.querySelector('.pre');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;

//function to display questions
function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    // question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
    question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}
function storeScore(newScore) {
    if(localStorage){
        localStorage.clear();
        localStorage.setItem("newHighScoreAdded", JSON.stringify({ userName, newScore }));
    }
    
}

//function to calculate scores
function calcScore(e){
    
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
        storeScore(score);
        
    }
    else{
        document.getElementById(e.id).style.background= 'tomato';
       
    }
    setTimeout(nextQuestion,300);
}

//function to display next question
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}
function preQuestion(){
    if(i<questionBank.length-1)
    {
        i=i-1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}


//click events to next button
next.addEventListener('click',nextQuestion);
pre.addEventListener('click',preQuestion);

//Back to Quiz button event
function backToQuiz(){
    location.reload();
}

//function to check Answers
function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}


displayQuestion();