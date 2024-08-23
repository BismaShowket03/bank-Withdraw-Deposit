// Initialize the balance
let balance = 1000;

// Get references to HTML elements
const balanceElement = document.getElementById('balance');
const depositInput = document.getElementById('deposit-amount');
const withdrawInput = document.getElementById('withdraw-amount');
const depositButton = document.getElementById('deposit-btn');
const withdrawButton = document.getElementById('withdraw-btn');

// Function to update the balance display
function updateBalance() {
    balanceElement.textContent = `$${balance.toLocaleString()}`;
}

// Event listener for Deposit button
depositButton.addEventListener('click', () => {
    const depositAmount = parseFloat(depositInput.value);
    if (depositAmount > 0) {
        balance += depositAmount;
        updateBalance();
    }
    depositInput.value = ''; // Clear the input field
});

// Event listener for Withdraw button
withdrawButton.addEventListener('click', () => {
    const withdrawAmount = parseFloat(withdrawInput.value);
    if (withdrawAmount > 0 && withdrawAmount <= balance) {
        balance -= withdrawAmount;
        updateBalance();
    } else if (withdrawAmount > balance) {
        alert('Insufficient funds. Cannot withdraw more than the current balance.');
    }
    withdrawInput.value = ''; // Clear the input field
});

// Initial display of balance
updateBalance();
