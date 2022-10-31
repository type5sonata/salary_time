let [milliseconds,seconds,minutes,hours] = [0,0,0,0];
let timerRef = document.querySelector('.timerDisplay');
let salaryRef = document.querySelector('.salaryDisplay');
let salary = null;
let int = null;

// This is the logic for the timer.

document.getElementById('startTimer').addEventListener('click', ()=>{
    if(int!==null){
        clearInterval(int);
    }
    salary=document.getElementById('salaryInput').value;
    int = setInterval(displayTimer,10);
});

document.getElementById('pauseTimer').addEventListener('click', ()=>{
    clearInterval(int);
});

document.getElementById('resetTimer').addEventListener('click', ()=>{
    clearInterval(int);
    [milliseconds,seconds,minutes,hours] = [0,0,0,0];
    timerRef.innerHTML = '00 : 00 : 00 : 000 ';
    salaryRef.innerHTML = '£0.00';
});

//declare salary (should make it come from the input field later)

/* function submitSalary() {
    //const form = document.getElementById('salaryForm');
    //salary = form.elements['salaryInput'];
    alert('Hello')
    return false;
} */

function setSalary(value){
    salary = value;
    return null
}

/* const form = document.getElementById('salaryForm');

form.addEventListener('submit', (event) => {
    salary = form.elements['salaryInput'];
}) */

function displayTimer(){
    milliseconds+=10;

    if(milliseconds == 1000){
        milliseconds = 0;
        seconds++;

        if(seconds == 60){
            seconds = 0;
            minutes++;

            if(minutes == 60){
                minutes = 0;
                hours++;
            }
        }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;
    let newSalary = h*salary + m*(salary/60) + s*(salary/3600);
    
    //declare stuff for salary
    
    timerRef.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`;


    salaryRef.innerHTML = `£${newSalary.toFixed(2)}`;
}

//for the salary, I think we just need to express it in terms of the hour etc...


