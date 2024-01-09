document.addEventListener('DOMContentLoaded', function() {
    // Get references to the links and content divs
    var listViewLink = document.getElementById('list-view-link');
    var mapViewLink = document.getElementById('map-view-link');
    var listView = document.getElementById('list-view');
    var mapView = document.getElementById('map-view');

    // Show List View by default
    listView.style.display = 'block';
    mapView.style.display = 'none';
    listViewLink.classList.add('btn-primary');


    // Add click event listeners to the links
    listViewLink.addEventListener('click', function(event) {
        event.preventDefault();
        listView.style.display = 'block';
        mapView.style.display = 'none';
        listViewLink.classList.add('btn-primary');
        mapViewLink.classList.remove('btn-primary');
    });

    mapViewLink.addEventListener('click', function(event) {
        event.preventDefault();
        listView.style.display = 'none';
        mapView.style.display = 'block';
        mapViewLink.classList.add('btn-primary');
        listViewLink.classList.remove('btn-primary');
    });
});