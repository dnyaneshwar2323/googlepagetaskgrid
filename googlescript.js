///Sticky Notes


const addbutton=document.getElementById("addbutton");
const inputnote=document.getElementById("inputnote");
const tasklist=document.getElementById("tasklist");


addbutton.addEventListener("click",addTask);
function addTask(){
    const taskTest= inputnote.value.trim();
    if (taskTest==="") return;
    const li=document.createElement("li");
    li.innerHTML= `
    <span> ${taskTest}</span>
    <span class="delete-button">X</span>
    `;

    const deletebutton=li.querySelector(".delete-button");
    deletebutton.addEventListener("click",()=>{
        tasklist.removeChild(li);
    });

    tasklist.appendChild(li);
    taskInput.value="";

}


//Digital Watch


const timeElement=document.getElementById("time")
let timeFormat=12;

function updateTime(){
    const now =new Date();
    
    if (timeFormat===24){
        timeElement.textContent=now.toLocaleTimeString("en-US", {hour12:false});
    }
    else{
        timeElement.textContent=now.toLocaleTimeString("en-US")
    }
}


timeElement.addEventListener("click", ()=>{
    timeFormat=(timeFormat===12) ? 24:12;
    updateTime();
});

updateTime();
setInterval(updateTime, 1000);


//CountDown


function startTimer(){
    dateEntered = document.getElementById("datepicker").value;
    
    countDownDate = new Date(dateEntered).getTime();
    // Update the count down every 1 second
    x = setInterval(refreshDate, 1000);
    }
    
    function refreshDate() {
    // Get todays date and time
    var now = new Date().getTime();
    // Find the distance between now an the count down date
    var distance = countDownDate - now;
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(Math.abs(distance / (1000 * 60 * 60 * 24)));
    var years = Math.floor(days / 365);
    var hours = Math.floor(Math.abs((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    var minutes = Math.floor(Math.abs((distance % (1000 * 60 * 60)) / (1000 * 60)));
    var seconds =Math.floor(Math.abs((distance % (1000 * 60)) / 1000));

    document.getElementById("countdown").innerHTML = "To be left: </br>"+ years + "years ," + days + " Days, </br>" + hours + "Hours : " + minutes + "m : " + seconds + "s";
    
      if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = " Time's Up </br> Ago: </br>"+ years + "years "+ days + " Days, </br>" + hours + "Hours : " + minutes + "m : " + seconds + "s";
        }
    
    }

