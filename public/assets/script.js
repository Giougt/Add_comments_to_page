const img = document.getElementById('plane');
// button get 
const response_button = document.getElementById("response_button");

// counter move plane 
let position = 0;

// function if response user == True 
response_button.addEventListener("click", async function(){
   // get value field answer
    let answer_user = document.getElementById("field_answer").value;
    if (answer_user == 1) {
        document.getElementById("field_answer").value="Right answer";
        position = position + 1
        // call function for time sleep then reset field 
        await sleep(1000);
        document.getElementById("field_answer").value="";
        // debug
        console.log(position);
        move_plane(position);
    } else {
        // notified wrong answer
        document.getElementById("field_answer").value="Wrong answer";
        await sleep(1000);
        document.getElementById("field_answer").value="";
    }
});
    
// move plane only correct answer 
function move_plane(number_correct) {
    if (img){
        const currentMargin = parseInt(window.getComputedStyle(img).marginLeft) || 0;
        img.style.marginLeft = (currentMargin + 50) + 'px';
        fill_progress_bar(number_correct);
    }
    if(number_correct == 8){
        win_level();
    }
}

async function win_level() {
    // write "complete" in bar progress
    document.getElementById("color_progress_bar").textContent="Complete";
    // fill 100% the progress bar 
    document.getElementById('color_progress_bar').style.width = 99.9 + '%';
    await sleep(5000);
    // just for test reset
    reset_progress();
}

// move plane to begin after each game 
function reset_progress() {
    // reset position plane 
    const currentMargin = parseInt(window.getComputedStyle(img).marginLeft) || 0;
    img.style.marginLeft = (currentMargin - 400) + 'px';
    // reset text 
    document.getElementById("progress_bar").textContent="";
}

// create square for a new game
function create_square() {
    
}

// async function sleep
async function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

// fill the bar when plane move
function fill_progress_bar(count) {
    document.getElementById('color_progress_bar').style.width = 12.49*count + '%';
}