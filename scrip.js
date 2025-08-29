const historyData = [];

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
//-----
    const data = {
        serviceName: 'National Emergency Service 🚨',
        number: 999,
        date: new Date().toLocaleTimeString()
    }
    historyData.push(data);

    //
    const histoContainer = document.getElementById('history-container')
    
    histoContainer.innerText = "";

    for (const data of historyData) {
        const div = document.createElement('div')
        div.innerHTML = `
        <div
                class="flex justify-between items-center w-[85%] mx-auto bg-[#fafafa] rounded-md px-3.5 py-2.5 mt-3.5"
              >
                <div>
                  <h1 class="text-gray-800 hind-madurai-medium">
                    ${data.serviceName}
                  </h1>
                  <h2 class="text-gray-700">${data.number}</h2>
                </div>
                <div>
                  <p class="text-gray-800">${data.date}</p>
                </div>
              </div>

        `

        histoContainer.appendChild(div)
         
        

    }
    //

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

    //-----
    const data = {
        serviceName: 'Police 👮',
        number: 999,
        date: new Date().toLocaleTimeString()
    }
    historyData.push(data);

    //
    const histoContainer = document.getElementById('history-container')
    
    histoContainer.innerText = "";

    for (const data of historyData) {
        const div = document.createElement('div')
        div.innerHTML = `
        <div
                class="flex justify-between items-center w-[85%] mx-auto bg-[#fafafa] rounded-md px-3.5 py-2.5 mt-3.5"
              >
                <div>
                  <h1 class="text-gray-800 hind-madurai-medium">
                    ${data.serviceName}
                  </h1>
                  <h2 class="text-gray-700">${data.number}</h2>
                </div>
                <div>
                  <p class="text-gray-800">${data.date}</p>
                </div>
              </div>

        `

        histoContainer.appendChild(div)
         
        

    }
    //

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


    //-----
    const data = {
        serviceName: 'Fire Service 🔥',
        number: 999,
        date: new Date().toLocaleTimeString()
    }
    historyData.push(data);

    //
    const histoContainer = document.getElementById('history-container')
    
    histoContainer.innerText = "";

    for (const data of historyData) {
        const div = document.createElement('div')
        div.innerHTML = `
        <div
                class="flex justify-between items-center w-[85%] mx-auto bg-[#fafafa] rounded-md px-3.5 py-2.5 mt-3.5"
              >
                <div>
                  <h1 class="text-gray-800 hind-madurai-medium">
                    ${data.serviceName}
                  </h1>
                  <h2 class="text-gray-700">${data.number}</h2>
                </div>
                <div>
                  <p class="text-gray-800">${data.date}</p>
                </div>
              </div>

        `

        histoContainer.appendChild(div)
         
        

    }
    //

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


    //-----
    const data = {
        serviceName: 'Ambulance 🚑 ',
        number: '1994-999999',
        date: new Date().toLocaleTimeString()
    }
    historyData.push(data);

    //
    const histoContainer = document.getElementById('history-container')
    
    histoContainer.innerText = "";

    for (const data of historyData) {
        const div = document.createElement('div')
        div.innerHTML = `
        <div
                class="flex justify-between items-center w-[85%] mx-auto bg-[#fafafa] rounded-md px-3.5 py-2.5 mt-3.5"
              >
                <div>
                  <h1 class="text-gray-800 hind-madurai-medium">
                    ${data.serviceName}
                  </h1>
                  <h2 class="text-gray-700">${data.number}</h2>
                </div>
                <div>
                  <p class="text-gray-800">${data.date}</p>
                </div>
              </div>

        `

        histoContainer.appendChild(div)
         
        

    }
    //

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


//-----
    const data = {
        serviceName: 'Women & Child Helpline 👩‍👧‍👦',
        number: 109,
        date: new Date().toLocaleTimeString()
    }
    historyData.push(data);

    //
    const histoContainer = document.getElementById('history-container')
    
    histoContainer.innerText = "";

    for (const data of historyData) {
        const div = document.createElement('div')
        div.innerHTML = `
        <div
                class="flex justify-between items-center w-[85%] mx-auto bg-[#fafafa] rounded-md px-3.5 py-2.5 mt-3.5"
              >
                <div>
                  <h1 class="text-gray-800 hind-madurai-medium">
                    ${data.serviceName}
                  </h1>
                  <h2 class="text-gray-700">${data.number}</h2>
                </div>
                <div>
                  <p class="text-gray-800">${data.date}</p>
                </div>
              </div>

        `

        histoContainer.appendChild(div)
         
        

    }
    //


})

// Anti Corruption
document.getElementById('call-btn6').addEventListener('click', function () {
    let availableCoin = parseInt(document.getElementById('coin').innerText);

    if (availableCoin < 20) {
        alert('❌ আপনার পর্যাপ্ত কয়েন ব্যালেন্স নেই। কল করতে সর্ব নিম্ন ২০ কয়েন প্রয়জন।')
        return;
    }

    alert('📞 Calling ⚖️ Anti-Corruption: 106')

    const coinLeft = availableCoin - 20;

    document.getElementById('coin').innerText = coinLeft;

//-----
    const data = {
        serviceName: 'Anti-Corruption ⚖️',
        number: 106,
        date: new Date().toLocaleTimeString()
    }
    historyData.push(data);

    //
    const histoContainer = document.getElementById('history-container')
    
    histoContainer.innerText = "";

    for (const data of historyData) {
        const div = document.createElement('div')
        div.innerHTML = `
        <div
                class="flex justify-between items-center w-[85%] mx-auto bg-[#fafafa] rounded-md px-3.5 py-2.5 mt-3.5"
              >
                <div>
                  <h1 class="text-gray-800 hind-madurai-medium">
                    ${data.serviceName}
                  </h1>
                  <h2 class="text-gray-700">${data.number}</h2>
                </div>
                <div>
                  <p class="text-gray-800">${data.date}</p>
                </div>
              </div>

        `

        histoContainer.appendChild(div)
         
        

    }
    //


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


//-----
    const data = {
        serviceName: 'Electricity Outage ⚡',
        number: 16216,
        date: new Date().toLocaleTimeString()
    }
    historyData.push(data);

    //
    const histoContainer = document.getElementById('history-container')
    
    histoContainer.innerText = "";

    for (const data of historyData) {
        const div = document.createElement('div')
        div.innerHTML = `
        <div
                class="flex justify-between items-center w-[85%] mx-auto bg-[#fafafa] rounded-md px-3.5 py-2.5 mt-3.5"
              >
                <div>
                  <h1 class="text-gray-800 hind-madurai-medium">
                    ${data.serviceName}
                  </h1>
                  <h2 class="text-gray-700">${data.number}</h2>
                </div>
                <div>
                  <p class="text-gray-800">${data.date}</p>
                </div>
              </div>

        `

        histoContainer.appendChild(div)
         
        

    }
    //


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


    //-----
    const data = {
        serviceName: 'Brac 🅱️',
        number: 16445,
        date: new Date().toLocaleTimeString()
    }
    historyData.push(data);

    //
    const histoContainer = document.getElementById('history-container')
    
    histoContainer.innerText = "";

    for (const data of historyData) {
        const div = document.createElement('div')
        div.innerHTML = `
        <div
                class="flex justify-between items-center w-[85%] mx-auto bg-[#fafafa] rounded-md px-3.5 py-2.5 mt-3.5"
              >
                <div>
                  <h1 class="text-gray-800 hind-madurai-medium">
                    ${data.serviceName}
                  </h1>
                  <h2 class="text-gray-700">${data.number}</h2>
                </div>
                <div>
                  <p class="text-gray-800">${data.date}</p>
                </div>
              </div>

        `

        histoContainer.appendChild(div)
         
        

    }
    //


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

 //-----
    const data = {
        serviceName: 'Bangladesh Railway 🚅',
        number: 163,
        date: new Date().toLocaleTimeString()
    }
    historyData.push(data);

    //
    const histoContainer = document.getElementById('history-container')
    
    histoContainer.innerText = "";

    for (const data of historyData) {
        const div = document.createElement('div')
        div.innerHTML = `
        <div
                class="flex justify-between items-center w-[85%] mx-auto bg-[#fafafa] rounded-md px-3.5 py-2.5 mt-3.5"
              >
                <div>
                  <h1 class="text-gray-800 hind-madurai-medium">
                    ${data.serviceName}
                  </h1>
                  <h2 class="text-gray-700">${data.number}</h2>
                </div>
                <div>
                  <p class="text-gray-800">${data.date}</p>
                </div>
              </div>

        `

        histoContainer.appendChild(div)
         
        

    }
    //


})


// Clear button function 
const historyContainer = document.getElementById('history-container');
const clearButton = document.getElementById('clear-button');

clearButton.addEventListener('click', function () {
    historyContainer.innerHTML = "";
})


