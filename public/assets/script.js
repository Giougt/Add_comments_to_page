const img = document.getElementById('plane');
// button get 
const response_button = document.getElementById("response_button");

// counter move plane 
let position = 0;
let number_answer = 0;
let number_correct = 0;

// main function
// function if response user == True 
response_button.addEventListener("click", async function(){
   // get value field answer
    let answer_user = document.getElementById("field_answer").value;
    if (answer_user == 1) {
        document.getElementById("field_answer").value="Right answer";
        // only for plane position
        position = position + 1
        // count answer for progression
        number_answer = number_answer + 1
        // call function for time sleep then reset field 
        await sleep(1000);
        document.getElementById("field_answer").value="";
        // debug
        console.log("position",position);
        console.log("number_answer",number_answer);
        move_plane(position, number_answer);
        // call function for colorize cube (list item so first = 0)
        fill_color(number_answer-1,true);
        if(number_answer == 8){
            // reset all counters
            position = 0;
            number_answer = 0;
        }
    } else {
        // count answer for progression
        number_answer = number_answer+ 1
        // notified wrong answer
        document.getElementById("field_answer").value="Wrong answer";
        await sleep(1000);
        document.getElementById("field_answer").value="";
        // call function for fill cube
        fill_color(number_answer-1,false);
        if(number_answer == 8){
            // reset all counters
            position = 0;
            number_answer = 0;
        }
    }
});
    
// move plane only correct answer 
function move_plane(number_correct, number_answer) {
    if (img){
        const currentMargin = parseInt(window.getComputedStyle(img).marginLeft) || 0;
        img.style.marginLeft = (currentMargin + 50) + 'px';
        fill_progress_bar(number_correct);
    }
    // debug 
    console.log("number answer (move_plane)",number_answer);
    // detect end of the round 
    if(number_answer == 8){
        if(number_correct == 8){
            // player win the round (number_correct for reset position of plane)
            win_level(number_correct);
        }
        else if (number_correct < 8 ){
            // debug
            console.log("incorrect answer detects");
            // player loose the round (number_correct for reset position of plane)
            loose_level(number_correct);
        }
    }
}

async function win_level(number_correct) {
    // write "complete" in bar progress
    document.getElementById("color_progress_bar").textContent="Complete";
    // fill 100% the progress bar 
    document.getElementById('color_progress_bar').style.width = 99.9 + '%';
    await sleep(5000);
    // reset progress bar for next round 
    reset_progress(number_correct);
    // create new field for answer
    create_square();
}

// move plane to begin after each game 
function reset_progress(number_correct) {
    // debug 
    console.log("reset progress bar")
    // reset position plane 
    const currentMargin = parseInt(window.getComputedStyle(img).marginLeft) || 0;
    img.style.marginLeft = (currentMargin - (50*number_correct)) + 'px';
    // reset text 
    document.getElementById("progress_bar").textContent="";
}

// create square for a new game
function create_square() {
    const space = document.getElementById("game_square_stat");
    // create new line for round
    const row = document.createElement("div");
    row.className = "cube-row";
    for (let index = 0; index < 8; index++) {
        // create div (new cube)
        const cube = document.createElement("div");
        // add proprety css
        cube.className="cube";
        // add next to the others cube 
        space.appendChild(cube);
    }
    space.appendChild(row);
}

// async function sleep
async function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

// fill the bar when plane move
function fill_progress_bar(count) {
    document.getElementById('color_progress_bar').style.width = 12.49*count + '%';
}

// fill color green or red depend on response user 
function fill_color(num,state) {
    // all my cubes 
    const cubes = document.querySelectorAll('.cube');
        // 8 == number of cube in one line 
        for (let index = 0; index < cubes.length; index++) {
            if (index == num){
                if (state == true){
                    cubes[index].style.backgroundColor = "green";
                }else if (state == false){
                    cubes[index].style.backgroundColor = "red";
                }
            }
        }
    }
  
// if player loose 
async function loose_level(number_correct) {
    // write "fail" in bar progress
    document.getElementById("color_progress_bar").textContent="Fail";
    // create new field for answer
    create_square();
    await sleep(5000);
    // reset progress bar for next round 
    reset_progress(number_correct);
}

