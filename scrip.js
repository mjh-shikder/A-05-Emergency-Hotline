// Hear count 
let heartCountElement = document.getElementById('heart-count');

let count = 0;
// global function for card hart button click
function cardHeartButton(id) {
    document.getElementById(id).addEventListener('click', function () {
        count = count + 1;
        heartCountElement.innerText = count;
    })
}

cardHeartButton('card-hart-icon1');
cardHeartButton('card-hart-icon2');
cardHeartButton('card-hart-icon3');
cardHeartButton('card-hart-icon4');
cardHeartButton('card-hart-icon5');
cardHeartButton('card-hart-icon6');
cardHeartButton('card-hart-icon7');
cardHeartButton('card-hart-icon8');
cardHeartButton('card-hart-icon9');

