// function doLogin(username, password){
//     if(username.value && password.value) {
//         const username = username.value;
//         const password = password.value;
//         window.location.href = './index.html?username=' + username + '&password=' + password;
//     } 
// }

// function contact(email){
//     if(email.value) {
//         const email = email.value;
//         window.location.href = './index.html?email=' + email;
//     } 
// }

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('header').innerHTML = localStorage.getItem('headerData');
    document.querySelector('footer').innerHTML = localStorage.getItem('footerData');

});