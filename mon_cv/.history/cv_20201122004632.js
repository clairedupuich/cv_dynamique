// Gestion de la fermeture de la page web
window.addEventListener("beforeunload", function (e) {
    var message = "À bientôt!";
    e.returnValue = message; // Provoque une demande de confirmation (standard)
    return message; // Provoque une demande de confirmation (certains navigateurs)
});

/*document.querySelectorAll(".carousel__prev").addEventListener("click" ,function(e){
    e.preventDefault()
});*/


/* for the slider */
var img_list = document.getElementById('img_list');
setInterval(function () {
    img_list.appendChild(img_list.firstChild);
}, 2500)