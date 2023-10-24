// Variables
    var audio_statue = 0;
    var numero_audio = 1;
    var volume = true;
    var musique_statue = Array(titre_musique.length).fill(0);

// Musique statue
    function musique(id_audio, audio_statue) {
        if (audio_statue == 1) {
            document.getElementById("audio" + id_audio).play();
            musique_statue[id_audio - 1] = 1;
        } else if (audio_statue == 2) {
            if (document.getElementById("audio" + id_audio).currentTime != 0) {
                document.getElementById("audio" + id_audio).currentTime = 0;
            }
            document.getElementById("audio" + id_audio).pause();
            musique_statue[id_audio - 1] = 0;
        } else {
            document.getElementById("audio" + id_audio).pause();
            musique_statue[id_audio - 1] = 0;
        }
    }

// Bouton musique image
    function musique_play_on_off() {
        if (audio_statue == 0) {
            musique(numero_audio, 1);
            document.getElementById("image-" + element).style.backgroundImage = "url('Item/Picture/image-secret-play.svg')";
            console.log("Musique on");
            audio_statue = 1;
        } else {
            musique(numero_audio, 0);
            document.getElementById("image-" + element).style.backgroundImage = "url('Item/Picture/image-secret-pause.svg')";
            console.log("Musique off");
            audio_statue = 0;
        }
    }

    function musique_play() {
        if (audio_statue == 0) {
            musique(numero_audio, 0);
            document.getElementById("image-" + element).style.backgroundImage = "url('Item/Picture/image-secret-pause.svg')";
        } else {
            musique(numero_audio, 1);
            document.getElementById("image-" + element).style.backgroundImage = "url('Item/Picture/image-secret-play.svg')";
        }
    }

// musique seting 
    document.getElementById("parametre_musique_image_id").src = "Item/Musique/image/musique-" + numero_audio + ".png";
    document.getElementById("parametre_musique_nom_id").textContent = titre_musique[(numero_audio - 1)];

    function musique_seting(id) {
        if (id == 1) {
            if (numero_audio > 1) {
                numero_audio--; 
            }

            if (audio_statue == 1) {
                index_musique = musique_statue.indexOf(1);
                musique((index_musique + 1), 2);
                musique(numero_audio,1);
            }

            document.getElementById("parametre_musique_image_id").src = "Item/Musique/image/musique-" + numero_audio + ".png";
            document.getElementById("parametre_musique_nom_id").textContent = titre_musique[(numero_audio - 1)];
            console.log("Musique : " + titre_musique[(numero_audio - 1)]);
        } else if (id == 3) {
            if (numero_audio < titre_musique.length) {
                numero_audio++; 
            }

            if (audio_statue == 1) {
                index_musique = musique_statue.indexOf(1);
                musique((index_musique + 1), 2);
                musique(numero_audio,1);
            }

            document.getElementById("parametre_musique_image_id").src = "Item/Musique/image/musique-" + numero_audio + ".png";
            document.getElementById("parametre_musique_nom_id").textContent = titre_musique[(numero_audio - 1)];
            console.log("Musique : " + titre_musique[(numero_audio - 1)]);
        } else {
            if (volume == false) {
                volume = true;
                for (let i = 1; i <= titre_musique.length; i++) {
                    document.getElementById("audio" + i).volume = 1;
                }
                
                document.getElementById("volume").src = "Item/Picture/son-on.svg";
                console.log("Volume : 100");
            } else {
                volume = false;
                for (let i = 1; i <= titre_musique.length; i++) {
                    document.getElementById("audio" + i).volume = 0;
                }
                document.getElementById("volume").src = "Item/Picture/son-off.svg";
                console.log("Volume : 0");
            }
        }
    }

// Musique barre
    let progresse_barre = document.getElementById("progresse_barre");
    
    function musique_barre() {
        if (musique_statue.indexOf(1) != -1) {
            let progresse_barre_audio = document.getElementById("audio" + (musique_statue.indexOf(1) + 1));
            progresse_barre.style.width = (Math.floor((progresse_barre_audio.currentTime / progresse_barre_audio.duration) * 100))  + "%";
        }
    }

setInterval(musique_barre, 10);