function pageInit(){
    const rockBtn = document.querySelector("#rock-btn");
    const paperBtn = document.querySelector("#paper-btn");
    const scisscorsBtn = document.querySelector("#scissors-btn");
    const sprites = document.querySelectorAll(".sprite");

    rockBtn.addEventListener("click", () => {
        disableBtns();
        setTimeout(enableBtns, 5000);
        setTimeout(() =>{
            document.getElementById("user-sprite").src = "../imgs/rock.png"
        }, 3250)
        playCPU("rock");
        setTimeout(resetSprites, 5000);
        for(var i = 0; i < sprites.length; i++){
            if(i == 0){
                sprites[i].animate(handShake, shakeTiming);
            }
            else{
                sprites[i].animate(cpuShake, shakeTiming);
            }
        }
    });

    paperBtn.addEventListener("click", () => {
        disableBtns();
        setTimeout(enableBtns, 5000);
        setTimeout(() =>{
            document.getElementById("user-sprite").src = "../imgs/paper.png"
        }, 3250)
        playCPU("paper");
        setTimeout(resetSprites, 5000);
        for(var i = 0; i < sprites.length; i++){
            if(i == 0){
                sprites[i].animate(handShake, shakeTiming);
            }
            else{
                sprites[i].animate(cpuShake, shakeTiming);
            }
        }
    });

    scisscorsBtn.addEventListener("click", () => {
        disableBtns();
        setTimeout(enableBtns, 5000);
        setTimeout(() =>{
            document.getElementById("user-sprite").src = "../imgs/scissors.png"
        }, 3250)
        playCPU("scissors");
        setTimeout(resetSprites, 5000);
        for(var i = 0; i < sprites.length; i++){
            if(i == 0){
                sprites[i].animate(handShake, shakeTiming);
            }
            else{
                sprites[i].animate(cpuShake, shakeTiming);
            }
        }
    });

    function enableBtns(){
        rockBtn.disabled = false;
        paperBtn.disabled = false;
        scisscorsBtn.disabled = false;
    }
    function disableBtns(){
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scisscorsBtn.disabled = true;
    }


    function playCPU(playerChoice){
        var randNum = Math.floor(Math.random() * 3) + 1;   //random number between 1 and 3
        if(randNum == 1){ 
            setTimeout(() => {
                document.getElementById("cpu-sprite").src = "../imgs/cpu-rock.png"
            }, 3000); 
            ChooseWinner(playerChoice, "rock");
        }
        else if(randNum == 2){
            setTimeout(() => {
                document.getElementById("cpu-sprite").src = "../imgs/cpu-paper.png"
            }, 3000);
            ChooseWinner(playerChoice, "paper");
        }
        else if(randNum == 3){
            setTimeout(() => {
                document.getElementById("cpu-sprite").src = "../imgs/cpu-scissors.png"
            }, 3000);
            ChooseWinner(playerChoice, "scissors");
        }
    }

    function resetSprites(){
        document.getElementById("cpu-sprite").src = "../imgs/cpu-rock.png"
        document.getElementById("user-sprite").src = "../imgs/rock.png"
    }

    function ChooseWinner(playerChoice, cpuChoice){
        if(playerChoice === cpuChoice){
            return false;
        }
        else if((playerChoice === "paper" && cpuChoice === "rock") || (playerChoice === "rock" && cpuChoice === "scissors") || (playerChoice === "scissors" && cpuChoice === "paper")){
            var wins = document.getElementById("w-count").value;
            setTimeout(() => {
                document.getElementById("w-count").value = parseInt(wins) + 1;
            }, 3050);
        }
        else{
            var loses = document.getElementById("l-count").value;
            setTimeout(() => {
                document.getElementById("l-count").value = parseInt(loses) + 1;
            }, 3050);        
        }
    }


}

//ANIMATIONS BELOW

const handShake = [
    { transform: "rotate(0)" },
    { transform: "rotate(-30deg)" },
];

const cpuShake = [
    { transform: "rotate(0)" },
    { transform: "rotate(30deg)" },
]

const shakeTiming = {
    duration: 500,
    iterations: 6,
    direction: "alternate",
    timing: "ease-out",
};