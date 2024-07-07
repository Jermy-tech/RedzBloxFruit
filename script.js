// Function to load service detail
function loadServiceDetail(serviceId) {
    const serviceData = getServiceData(serviceId);
    if (serviceData) {
        document.getElementById('service-detail-title').textContent = serviceData.title;
        document.getElementById('service-detail-description').textContent = serviceData.description;
        document.getElementById('service-detail-image').src = serviceData.imageUrl;
        document.getElementById('service-detail-vouches').textContent = `Vouches: ${serviceData.vouches}`;
        document.getElementById('service-detail').style.display = 'flex'; // Display the detail view
    }
}

// Function to close service detail
function closeServiceDetail() {
    document.getElementById('service-detail').style.display = 'none'; // Hide the detail view
}

// Event listener for View Details buttons
document.querySelectorAll('.btn-view-details').forEach(btn => {
    btn.addEventListener('click', function() {
        const serviceId = btn.getAttribute('data-service-id'); // Get service ID from button attribute
        loadServiceDetail(serviceId); // Load details for the selected service
    });
});

// Event listener for Close button in service detail
document.getElementById('btn-close-detail').addEventListener('click', function() {
    closeServiceDetail(); // Close the service detail view
});
