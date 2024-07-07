// Function to load content from external files
function loadContent(url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById('main-content').innerHTML = data;
        })
        .catch(error => console.error('Error loading content:', error));
}

// Event listeners to load content on link click
document.getElementById('about-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    loadContent('aboutus.html');
});

document.getElementById('services-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    loadContent('services.html');
});

// Initial content load on page load
document.addEventListener('DOMContentLoaded', function() {
    loadContent('aboutus.html'); // Load aboutus.html by default
});
