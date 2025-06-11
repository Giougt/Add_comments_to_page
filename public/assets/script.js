const img = document.getElementById('plane');
// button get 
const response_button = document.getElementById("response_button");

// counter move plane 
let position = 0;

// function if response user == True 
response_button.addEventListener("click", function(){
   // get value field answer
    let answer_user = document.getElementById("field_answer").value;
    if (answer_user == 1) {
        document.getElementById("field_answer").value="Right answer";
        position = position + 1
        // debug
        console.log(position);
        move_plane(position);
    } else {
        // notified wrong answer
        console.log("wrong answer");
        document.getElementById("field_answer").value="";
    }
});
    
// move plane only correct answer 
function move_plane(number_correct) {
    if (img){
        const currentMargin = parseInt(window.getComputedStyle(img).marginLeft) || 0;
        img.style.marginLeft = (currentMargin + 50) + 'px';
    }
    if(number_correct == 8){
        win_level();
    }
}

function win_level() {
    // write "complete" in bar progress
    document.getElementById("progress_bar").textContent="Complete";
    // just for test reset
    reset_progress();
}

// move plane to begin after each game 
function reset_progress() {
    // reset position plane 
    const currentMargin = parseInt(window.getComputedStyle(img).marginLeft) || 0;
    img.style.marginLeft = (currentMargin - 400) + 'px';
}

// create square for a new game
function create_square() {
    
}