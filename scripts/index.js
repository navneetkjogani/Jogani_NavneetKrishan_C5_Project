document.addEventListener('DOMContentLoaded', function() {
    const headerData = document.getElementById('header').innerHTML;
    const footerData = document.getElementById('footer').innerHTML;

    localStorage.setItem('headerData', headerData);
    localStorage.setItem('footerData', footerData);

});

