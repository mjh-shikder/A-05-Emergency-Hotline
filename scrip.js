// Heart count 
let heartCount = document.getElementById('heart-count');

let count = 0; 

function cartHeartButtons(id) {
    document.getElementById(id).addEventListener('click', function () {
        count = count + 1; 
        heartCount.innerText = count; 
        
    })
}

cartHeartButtons('card-hart-icon1')
cartHeartButtons('card-hart-icon2')
cartHeartButtons('card-hart-icon3')
cartHeartButtons('card-hart-icon4')
cartHeartButtons('card-hart-icon5')
cartHeartButtons('card-hart-icon6')
cartHeartButtons('card-hart-icon7')
cartHeartButtons('card-hart-icon8')
cartHeartButtons('card-hart-icon9')

// document.getElementById('card-hart-icon1').addEventListener('click', function () {
//     count = count + 1; 
//     heartCount.innerText = count;
// })

// document.getElementById('card-hart-icon2').addEventListener('click', function () {
//     count = count + 1; 
//     heartCount.innerText = count;
// })

// document.getElementById('card-hart-icon3').addEventListener('click', function () {
//     count = count + 1; 
//     heartCount.innerText = count;
// })

// document.getElementById('card-hart-icon4').addEventListener('click', function () {
//     count = count + 1; 
//     heartCount.innerText = count;
// })

// document.getElementById('card-hart-icon5').addEventListener('click', function () {
//     count = count + 1; 
//     heartCount.innerText = count;
// })

// document.getElementById('card-hart-icon6').addEventListener('click', function () {
//     count = count + 1; 
//     heartCount.innerText = count;
// })

// document.getElementById('card-hart-icon7').addEventListener('click', function () {
//     count = count + 1; 
//     heartCount.innerText = count;
// })

// document.getElementById('card-hart-icon8').addEventListener('click', function () {
//     count = count + 1; 
//     heartCount.innerText = count;
// })

// document.getElementById('card-hart-icon9').addEventListener('click', function () {
//     count = count + 1; 
//     heartCount.innerText = count;
// })










