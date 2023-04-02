// Variables
    var element = 1;
    var bon = [];
    var moyen = [];
    var mauvais = [];

// Calcul de la marge
    var marge_element = (screen.width - (3 * 370)) / 6;

// Création du HTML
    creation_html(nombre_element, marge_element, titre_musique.length);
    
    // Fonction de transition d'élément
    function transition_element(numero_element) {
        var div_element_1 = ((((marge_element * 2) + 370) * nombre_element) / 2) - (185 + marge_element);
        if (numero_element == 1) {
            musique_play();
            document.getElementById("element_parent").style.transform = `translateX(${div_element_1}px)`;

            // Réactivation des événements pour l'élément spécifié
            document.getElementById("id-bouton-" + numero_element + ".1").style.pointerEvents = "all";
            document.getElementById("id-bouton-" + numero_element + ".2").style.pointerEvents = "all";
            document.getElementById("id-bouton-" + numero_element + ".3").style.pointerEvents = "all";
            document.getElementById("image-" + numero_element).style.pointerEvents = "all";

            console.log("Element : " + numero_element);
        } else if (numero_element == (nombre_element + 1)) {

            affiche_resulta();
        } else {
            musique_play();
            document.getElementById("element_parent").style.transition = "transform 1.5s cubic-bezier(0.65, 0.05, 0.36, 1)";
            
            // Désactivation des événements pour l'élément précédent
            document.getElementById("id-bouton-" + (numero_element - 1) + "." + 1).style.pointerEvents = "none";
            document.getElementById("id-bouton-" + (numero_element - 1) + "." + 2).style.pointerEvents = "none";
            document.getElementById("id-bouton-" + (numero_element - 1) + "." + 3).style.pointerEvents = "none";
            document.getElementById("image-" + (numero_element - 1)).style.pointerEvents = "none";
            
            // Réinitialisation de l'image de l'élément précédent
            document.getElementById("image-" + (element - 1)).style.backgroundImage = "url('Item/Picture/image-secret.svg')";
            
            // Transition vers l'élément spécifié
            document.getElementById("element_parent").style.transform = `translateX(${div_element_1 - ((numero_element - 1) * (370 + (marge_element * 2)))}px)`;
        
            // Réactivation des événements pour l'élément spécifié
            document.getElementById("id-bouton-" + numero_element + ".1").style.pointerEvents = "all";
            document.getElementById("id-bouton-" + numero_element + ".2").style.pointerEvents = "all";
            document.getElementById("id-bouton-" + numero_element + ".3").style.pointerEvents = "all";
            document.getElementById("image-" + numero_element).style.pointerEvents = "all";

            console.log("Element : " + numero_element);
        }
    }

transition_element(element);