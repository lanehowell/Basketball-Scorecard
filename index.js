homeScore = 0;
guestScore = 0;

homeScoreElement = document.getElementById('home-score');
guestScoreElement = document.getElementById('guest-score');

homeScoreElement.textContent = homeScore;
guestScoreElement.textContent = guestScore;

function addHome(number){
    homeScore+=number;
    homeScoreElement.textContent = homeScore;
}

function addGuest(number){
    guestScore+=number;
    guestScoreElement.textContent = guestScore;
}

function resetScore(){
    guestScore=0;
    homeScore=0;
    guestScoreElement.textContent = guestScore;
    homeScoreElement.textContent = homeScore;
}