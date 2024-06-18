function createNumberInput(name){
    let numberInput = document.createElement("input");
    numberInput.setAttribute("type", "number");
    numberInput.id = name;
    return numberInput;
}

function createButton(name){
    let button = document.createElement("button");
    button.id = name;
    button.textContent = name;
    return button;
}

function createLabel(name){
    let label = document.createElement("label");
    label.textContent = name;
    label.setAttribute("For", name);
    return label;
}

function stopLying(){
    angry = true;
    robot.src = 'Img/lie.png';
    alert(`STOP LYING!!, Your Number Is ${guessNumber.textContent}`);
    more.remove();
    less.remove();
}

/*              HTML Body            */ 
let body = document.body;

/*             Robot Image           */ 
let angry = false;
let robot = document.createElement("img");
robot.src = "Img/Welcome.png";

/*               Labels              */ 
let fromLabel = createLabel("From");
let toLabel = createLabel("To");

/*           Number Inputs           */ 
let fromInput = createNumberInput("From");
let toInput = createNumberInput("To");

/*            Input Values           */ 
let fromValue;
let toValue;

/*      The Number That AI Guess     */ 
let guessNumber = document.createElement("div");


/*The Number Of Times AI Try To Guess*/ 
let counter = 1;
let numberOfGuesses = document.createElement("div");
numberOfGuesses.innerHTML = `AI Try ${counter} time`;

let flexContainer = document.createElement("div");
flexContainer.className = "flex-container";
flexContainer.appendChild(fromLabel);
flexContainer.appendChild(fromInput);
flexContainer.appendChild(toLabel);
flexContainer.appendChild(toInput);

// -----------------------------------

/* ==================================*/
/* =            Buttons             =*/
/* ==================================*/

/*            First Button           */ 
let play = createButton("Let's Play!!");
play.addEventListener("click", function() {
    body.innerHTML = '';
    robot.src = "Img/think.png";
    body.appendChild(robot);
    body.appendChild(flexContainer);
    body.append(go);
});

/*            Second Button          */ 
let go = createButton("Go!!");
go.addEventListener("click", function(){
    fromValue = fromInput.value;
    toValue = toInput.value;
    if(Number(fromValue) > Number(toValue))
        [fromValue, toValue] = [toValue, fromValue];
    guessNumber.innerHTML = Math.floor((Number(fromValue) + Number(toValue)) / 2);
    body.innerHTML = '';
    robot.src = "Img/up.png";
    body.appendChild(guessNumber)
    body.appendChild(robot);
    body.appendChild(more);
    body.appendChild(less);
    body.appendChild(numberOfGuesses);
    body.appendChild(correct);
});

/*            Third Buttons          */ 
let more = createButton("More");
more.addEventListener('mouseover', function() {
    robot.src = 'Img/right.png';
});
more.addEventListener('mouseout', function() {
    robot.src = 'Img/up.png';
});
more.addEventListener("click", function(){
    fromValue = Number(guessNumber.textContent) + 1;
    if(fromValue > toValue)
        stopLying();
    else{
        counter++;
        guessNumber.innerHTML = Math.floor((Number(fromValue) + Number(toValue)) / 2);
        numberOfGuesses.innerHTML = `AI Try ${counter} time`;
    }
})

// ------------------------------------

let less = createButton("Less");
less.addEventListener('mouseover', function() {
    robot.src = 'Img/left.png';
});
less.addEventListener('mouseout', function() {
    robot.src = 'Img/up.png';
});
less.addEventListener("click", function(){
    toValue = Number(guessNumber.textContent) - 1;
    if(fromValue > toValue)
        stopLying();
    else{
        counter++;
        guessNumber.innerHTML = Math.floor((Number(fromValue) + Number(toValue)) / 2);
        numberOfGuesses.innerHTML = `AI Try ${counter} time`;
    }
})

// ------------------------------------

let correct = createButton("Correct");
correct.addEventListener('mouseover', function(){
    if(!angry)
        robot.src = "Img/down.png";
});
correct.addEventListener('mouseout', function() {
    if(!angry)
        robot.src = 'Img/up.png';
});
correct.addEventListener("click", function(){
    body.innerHTML = '';
    robot.src = "Img/win.png";
    body.appendChild(robot);
    let win = document.createElement("div");
    win.textContent = `AI Wins After ${counter} Guess`;
    if(counter > 1)
        win.textContent += "es";
    win.textContent += "!!";
    body.appendChild(win);
})

/* ==================================*/
/* =        Start of Program        =*/
/* ==================================*/

body.appendChild(robot);
body.appendChild(play);