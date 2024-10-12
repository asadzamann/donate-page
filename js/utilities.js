// donation section utilities
function updateBalance(buttonId, inputId, campaignBalanceID, donationName) {
    document.getElementById(buttonId)
        .addEventListener('click', function (event) {
            event.preventDefault();
            const input = document.getElementById(inputId).value;
            const inputNumber = parseFloat(input);
            const campaignBalance = document.getElementById(campaignBalanceID);
            const nameDonation = document.getElementById(donationName).innerText
            if (!isNaN(inputNumber) && inputNumber > 0) {
                campaignBalance.innerText = inputNumber;
            }
            else {
                alert('Invalid Amount')
                return;
            }
            // Reducing from available balance
            const balance = document.getElementById('available-balance');
            const availableBalance = parseFloat(balance.innerText);
            const newBalance = availableBalance - inputNumber;
            if (newBalance >= 0) {
                balance.innerText = newBalance;
                alert('Your new balance: ' + balance.innerText)
                // add to history
                const div = document.createElement('div');
                div.innerHTML = `
            <div class="hero bg-base-200 mb-3">
                <div class="hero-content flex-col lg:flex-row">
                  <div>
                    <h2 class="text-xl font-bold">${inputNumber} Taka is Donated for ${nameDonation}</h2>
                    <br>
                    <p>${new Date()}</p>
                  </div>
                </div>
              </div>`

                document.getElementById('history-container').appendChild(div);
            }
            else {
                alert('Insufficient Balance')
            }
        })
}
// toggle feature
function showSectionById(id){
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');
    // show section
    document.getElementById(id).classList.remove('hidden')
}
