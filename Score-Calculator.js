var initialScore = 0;
var newScore = 0;

function ScoreAdder(value, id){
    var checkdiv = document.getElementById(`${id}`);
    var checkbox = checkdiv.querySelector('input');
    if(checkbox.checked === false){
        newScore = newScore - 1
        console.log(newScore);
    }
    if (checkbox.checked === true){
        newScore = newScore + 1;
        console.log(newScore);
    }

    ScoreRes();
}

function ScoreRes(){
    var score = document.getElementById('score');
    score.innerText = newScore;
}

function donate(){
    var credit = prompt('Please enter the credit you want to donate');
}
