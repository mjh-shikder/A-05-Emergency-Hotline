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

// Call button funtion
// জাতীয় জরুরি সেবা
document.getElementById('call-btn1').addEventListener('click', function () {
    let availableCoin = parseInt(document.getElementById('coin').innerText);

    if (availableCoin < 20) {
        alert('❌ আপনার পর্যাপ্ত কয়েন ব্যালেন্স নেই। কল করতে সর্ব নিম্ন ২০ কয়েন প্রয়জন।')
        return;
    }

    alert('📞 Calling 🚨 National Emergency Service: 999')

    const coinLeft = availableCoin - 20;

    document.getElementById('coin').innerText = coinLeft;
    
})

// Police
document.getElementById('call-btn2').addEventListener('click', function () {
    let availableCoin = parseInt(document.getElementById('coin').innerText);

    if (availableCoin < 20) {
        alert('❌ আপনার পর্যাপ্ত কয়েন ব্যালেন্স নেই। কল করতে সর্ব নিম্ন ২০ কয়েন প্রয়জন।')
        return;
    }

    alert('📞 Calling 👮 Police: 999')

    const coinLeft = availableCoin - 20;

    document.getElementById('coin').innerText = coinLeft;
    
})

// Fire Service
document.getElementById('call-btn3').addEventListener('click', function () {
    let availableCoin = parseInt(document.getElementById('coin').innerText);

    if (availableCoin < 20) {
        alert('❌ আপনার পর্যাপ্ত কয়েন ব্যালেন্স নেই। কল করতে সর্ব নিম্ন ২০ কয়েন প্রয়জন।')
        return;
    }

    alert('📞 Calling 🔥 Fire Service: 999')

    const coinLeft = availableCoin - 20;

    document.getElementById('coin').innerText = coinLeft;
    
})

// Ambulance
document.getElementById('call-btn4').addEventListener('click', function () {
    let availableCoin = parseInt(document.getElementById('coin').innerText);

    if (availableCoin < 20) {
        alert('❌ আপনার পর্যাপ্ত কয়েন ব্যালেন্স নেই। কল করতে সর্ব নিম্ন ২০ কয়েন প্রয়জন।')
        return;
    }

    alert('📞 Calling 🚑 Ambulance: 1994-999999')

    const coinLeft = availableCoin - 20;

    document.getElementById('coin').innerText = coinLeft;
    
})

// Women & Child Helpline
document.getElementById('call-btn5').addEventListener('click', function () {
    let availableCoin = parseInt(document.getElementById('coin').innerText);

    if (availableCoin < 20) {
        alert('❌ আপনার পর্যাপ্ত কয়েন ব্যালেন্স নেই। কল করতে সর্ব নিম্ন ২০ কয়েন প্রয়জন।')
        return;
    }

    alert('📞 Calling 👩‍👧‍👦  Women & Child Helpline: 109')

    const coinLeft = availableCoin - 20;

    document.getElementById('coin').innerText = coinLeft;
    
})

// Anti Corruption
document.getElementById('call-btn6').addEventListener('click', function () {
    let availableCoin = parseInt(document.getElementById('coin').innerText);

    if (availableCoin < 20) {
        alert('❌ আপনার পর্যাপ্ত কয়েন ব্যালেন্স নেই। কল করতে সর্ব নিম্ন ২০ কয়েন প্রয়জন।')
        return;
    }

    alert('📞 Calling 🚔 Anti-Corruption: 106')

    const coinLeft = availableCoin - 20;

    document.getElementById('coin').innerText = coinLeft;
    
})

// Electricity Outage
document.getElementById('call-btn7').addEventListener('click', function () {
    let availableCoin = parseInt(document.getElementById('coin').innerText);

    if (availableCoin < 20) {
        alert('❌ আপনার পর্যাপ্ত কয়েন ব্যালেন্স নেই। কল করতে সর্ব নিম্ন ২০ কয়েন প্রয়জন।')
        return;
    }

    alert('📞 Calling⚡Electricity Outage: 16216')

    const coinLeft = availableCoin - 20;

    document.getElementById('coin').innerText = coinLeft;
    
})

// Brac
document.getElementById('call-btn8').addEventListener('click', function () {
    let availableCoin = parseInt(document.getElementById('coin').innerText);

    if (availableCoin < 20) {
        alert('❌ আপনার পর্যাপ্ত কয়েন ব্যালেন্স নেই। কল করতে সর্ব নিম্ন ২০ কয়েন প্রয়জন।')
        return;
    }

    alert('📞 Calling 🅱️ Brac: 16445')

    const coinLeft = availableCoin - 20;

    document.getElementById('coin').innerText = coinLeft;
    
})

// Bangladesh Railway
document.getElementById('call-btn9').addEventListener('click', function () {
    let availableCoin = parseInt(document.getElementById('coin').innerText);

    if (availableCoin < 20) {
        alert('❌ আপনার পর্যাপ্ত কয়েন ব্যালেন্স নেই। কল করতে সর্ব নিম্ন ২০ কয়েন প্রয়জন।')
        return;
    }

    alert('📞 Calling 🚅 Bangladesh Railway: 163')

    const coinLeft = availableCoin - 20;

    document.getElementById('coin').innerText = coinLeft;
    
})


