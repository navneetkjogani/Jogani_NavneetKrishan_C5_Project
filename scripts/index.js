document.addEventListener('DOMContentLoaded', function() {
    const headerData = document.querySelector('header').innerHTML;
    const footerData = document.querySelector('footer').innerHTML;

    localStorage.setItem('headerData', headerData);
    localStorage.setItem('footerData', footerData);

    var link = document.getElementById('indexLink');
    var currentUrl = window.location.href;

    var indexUrl = "http://" + window.location.host + "/index.html";

    if (currentUrl === indexUrl) {
        link.classList.add('no-link');
    }

    $("#loginModalBody").load("login.html");
    $("#contactModalBody").load("contact.html");

});


