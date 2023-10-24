// Bouton 
function bouton(type) {
    document.getElementById("id-bouton-" + element + "." + type).style.backgroundColor = "#ffffff";

    if (type == 1) {
        bon.push(element);
    } else if (type == 2) {
        moyen.push(element);
    } else {
        mauvais.push(element);
    }

    element++;
    transition_element(element);
}

// Parametre
function parametre(type) {
    if (type) {
        document.getElementById("parametre_fond").style.transform = "translateX(0px)";
    } else {
        document.getElementById("parametre_fond").style.transform = "translateX(450px)";
    }
}

// bouton parametre casque 
let bouton_casque_statue = Array(8).fill(true);
let bouton_casque_nombre = 8;
var nombre_element = 18;
function bouton_casque(id) {
    if (bouton_casque_statue[id - 1] == true) {
        if (bouton_casque_nombre > 1) {
            document.getElementById("checkbox" + id).style.backgroundImage = "url('')";
            bouton_casque_nombre--;
            bouton_casque_statue[id - 1] = false;
        }
    } else {
        document.getElementById("checkbox" + id).style.backgroundImage = "url('Item/Picture/V.svg')";
        bouton_casque_nombre++;
        bouton_casque_statue[id - 1] = true;
    }
}

// calcule nombre d'element
var casque_element = [];
var noms = [];

function calcule_nombre_element() {
    nombre_element = 0;
    nombre_casque_marque = [];
    for (let i = 1; i <= 8; i++) {
        switch (i) {
            case 1:
                if (bouton_casque_statue[i - 1] == true) {
                    nombre_element += nom_casque['Apple'].length;
                    noms.push(...nom_casque['Apple']);
                }
                break;

            case 2:
                if (bouton_casque_statue[i - 1] == true) {
                    nombre_element += nom_casque['Beats'].length;
                    noms.push(...nom_casque['Beats']);
                }
                break;

            case 3:
                if (bouton_casque_statue[i - 1] == true) {
                    nombre_element += nom_casque['Bose'].length;
                    noms.push(...nom_casque['Bose']);
                }
                break;

            case 4:
                if (bouton_casque_statue[i - 1] == true) {
                    nombre_element += nom_casque['JBL'].length;
                    noms.push(...nom_casque['JBL']);
                }
                break;

            case 5:
                if (bouton_casque_statue[i - 1] == true) {
                    nombre_element += nom_casque['Marshall'].length;
                    noms.push(...nom_casque['Marshall']);
                }
                break;

            case 6:
                if (bouton_casque_statue[i - 1] == true) {
                    nombre_element += nom_casque['Sennheiser'].length;
                    noms.push(...nom_casque['Sennheiser']);
                }
                break;

            case 7:
                if (bouton_casque_statue[i - 1] == true) {
                    nombre_element += nom_casque['Sony'].length;
                    noms.push(...nom_casque['Sony']);
                }
                break;

            case 8:
                if (bouton_casque_statue[i - 1] == true) {
                    nombre_element += nom_casque['Steelseries'].length;
                    noms.push(...nom_casque['Steelseries']);
                }
                break;

            default:
                console.log("Erreur Nombre de marque");
                break;
        }
    }
    return nombre_element;
}

// bouton actualiser
function actualiser() {
    console.log("Page actualiser")

    document.getElementById("element_parent").style.display = "none";
    document.getElementById("element_parent_resulta").style.display = "none";

    element = 1;
    bon = [];
    moyen = [];
    mauvais = [];
    casque_element = [];
    noms = [];

    document.getElementById("element_parent").innerHTML = '';
    document.getElementById("element_parent_resulta").innerHTML = '';
    creation_html(nombre_element, marge_element, titre_musique.length);
    transition_element(element);

    document.getElementById("element_parent").style.display = "flex";
    document.getElementById("element_parent_resulta").style.display = "none";
}