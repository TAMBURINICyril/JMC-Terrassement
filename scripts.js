// Script pour le formulaire de contact
document.getElementById('contact-form').addEventListener('submit', function(event){
    event.preventDefault(); // Empêche l'envoi du formulaire
    
    // Récupération des valeurs du formulaire
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;
    
    // TODO: Ici vous pouvez ajouter une logique pour envoyer ces données à votre serveur

    alert('Merci ' + name + ', votre message a été envoyé !');
});

// Script pour le défilement fluide
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Script pour Google Maps
function initMap() {
    var location = {lat: -34.397, lng: 150.644}; // Remplacez par vos coordonnées exactes
    var map = new google.maps.Map(document.getElementById('googleMap'), {
        zoom: 10,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}
