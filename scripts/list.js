document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('header').innerHTML = localStorage.getItem('headerData');
    document.getElementById('footer').innerHTML = localStorage.getItem('footerData');

});

