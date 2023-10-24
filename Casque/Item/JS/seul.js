// Changer le titre de la page
    const titles = ['❤️🎧 Smashing Casque 🎧❤️', '🎧❤️ Smashing Casque ❤️🎧'];
    let index = 0;

    setInterval(function () {
        document.title = titles[index++ % titles.length];
    }, 1000);

// Création des element html
function creation_html(nombre_element, marge_element, nombre_musique) {
        nombre_element = calcule_nombre_element();

        while (casque_element.length < nombre_element) {
            let nombre_random_creation_html = Math.floor(Math.random() * nombre_element) + 1;
            if (!casque_element.includes(nombre_random_creation_html)) {
              casque_element.push(nombre_random_creation_html);
            }
        }

        for (let a = 1; a <= nombre_element; a++) {

            const div_element_parent = document.querySelector('#element_parent');
            var div_element_principale = document.createElement('div');
            div_element_principale.className = "element_principale";
            div_element_principale.id = "element_principale-" + a;
            div_element_principale.setAttribute("style", "margin-left: " + marge_element + "px; " + "margin-right: " + marge_element + "px;");

            var div = document.createElement('div');
            var div_image = document.createElement('div');
            div_image.className = "image";
            div_image.id = "image-" + a;
            div_image.style = "pointer-events : none;";
            div_image.setAttribute("onclick", "musique_play_on_off()");
            div.appendChild(div_image);

            var div_bouton = document.createElement('div');
            div_bouton.style = "display: flex;flex-direction: row;justify-content: space-evenly;align-items: center;flex-wrap: nowrap;";
            var div_coeur = document.createElement('div');
            div_coeur.className = "div-button-coeur";
            div_coeur.id = "id-bouton-" + a + ".1";
            div_coeur.setAttribute("onclick", "bouton(1)");
            div_coeur.style = "pointer-events : none;";
            var img_coeur = document.createElement('img');
            img_coeur.setAttribute("src", "Item/Picture/coeur.svg");
            img_coeur.className = "img-button";
            var div_barre = document.createElement('div');
            div_barre.className = "div-button-barre";
            div_barre.id = "id-bouton-" + a + ".2";
            div_barre.setAttribute("onclick", "bouton(2)");
            div_barre.style = "pointer-events : none;";
            var img_barre = document.createElement('img');
            img_barre.setAttribute("src", "Item/Picture/barre.svg");
            img_barre.className = "img-button";
            var div_croie = document.createElement('div');
            div_croie.className = "div-button-croie";
            div_croie.id = "id-bouton-" + a + ".3";
            div_croie.setAttribute("onclick", "bouton(3)");
            div_croie.style = "pointer-events : none;";
            var img_croie = document.createElement('img');
            img_croie.setAttribute("src", "Item/Picture/croie.svg");
            img_croie.className = "img-button";
            div_coeur.appendChild(img_coeur);
            div_barre.appendChild(img_barre);
            div_croie.appendChild(img_croie);
            div_bouton.appendChild(div_coeur);
            div_bouton.appendChild(div_barre);
            div_bouton.appendChild(div_croie);

            div_element_principale.appendChild(div);
            div_element_principale.appendChild(div_bouton);
            div_element_parent.appendChild(div_element_principale);
        }

        for (let i = 1; i <= nombre_musique; i++) {
            const audio = document.querySelector('#audio');
            var element_audio = document.createElement('audio');
            element_audio.id = "audio" + i
            element_audio.setAttribute("src", "Item/Musique/musique-" + i + ".mp3");
            element_audio.setAttribute("loop", "true");
            audio.appendChild(element_audio);
        }
    }