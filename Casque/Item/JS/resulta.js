function affiche_resulta () {
    for (let i = 1; i <= bon.length; i++) {
        const element_parent_resulta = document.querySelector('#element_parent_resulta');
        let div_element_resulta = document.createElement('div');
        div_element_resulta.id = "element-resulta-" + bon[i-1];
        div_element_resulta.setAttribute("class", "element-resulta");

        let div_1 = document.createElement('div');
        let div_image_resulta = document.createElement('div');
        div_image_resulta.setAttribute("class", "image-resulta");
        div_image_resulta.setAttribute("style", "pointer-events: all; background-image: url('Item/Donner/Image/" + noms[(bon[i-1])-1] +".png');");
        div_1.appendChild(div_image_resulta);

        let div_text_resulta = document.createElement('div');
        div_text_resulta.setAttribute("class", "text_resulta");
        div_text_resulta.textContent = noms[(bon[i-1])-1];

        let div_classement_resulta = document.createElement('div');
        div_classement_resulta.setAttribute("class", "classement_resulta");
        div_classement_resulta.setAttribute("style", "background-image: url(Item/Picture/coeur.svg);");

        div_element_resulta.appendChild(div_1);
        div_element_resulta.appendChild(div_text_resulta);
        div_element_resulta.appendChild(div_classement_resulta);
        element_parent_resulta.appendChild(div_element_resulta);
    }

    for (let i = 1; i <= moyen.length; i++) {
        const element_parent_resulta = document.querySelector('#element_parent_resulta');
        let div_element_resulta = document.createElement('div');
        div_element_resulta.id = "element-resulta-" + moyen[i-1];
        div_element_resulta.setAttribute("class", "element-resulta");

        let div_1 = document.createElement('div');
        let div_image_resulta = document.createElement('div');
        div_image_resulta.setAttribute("class", "image-resulta");
        div_image_resulta.setAttribute("style", "pointer-events: all; background-image: url('Item/Donner/Image/" + noms[(moyen[i-1])-1] +".png');");
        div_1.appendChild(div_image_resulta);

        let div_text_resulta = document.createElement('div');
        div_text_resulta.setAttribute("class", "text_resulta");
		div_text_resulta.textContent = noms[(moyen[i-1])-1];

        let div_classement_resulta = document.createElement('div');
        div_classement_resulta.setAttribute("class", "classement_resulta");
        div_classement_resulta.setAttribute("style", "background-image: url(Item/Picture/barre.svg);");

        div_element_resulta.appendChild(div_1);
        div_element_resulta.appendChild(div_text_resulta);
        div_element_resulta.appendChild(div_classement_resulta);
        element_parent_resulta.appendChild(div_element_resulta);
    }

    for (let i = 1; i <= mauvais.length; i++) {
        const element_parent_resulta = document.querySelector('#element_parent_resulta');
        let div_element_resulta = document.createElement('div');
        div_element_resulta.id = "element-resulta-" + mauvais[i-1];
        div_element_resulta.setAttribute("class", "element-resulta");

        let div_1 = document.createElement('div');
        let div_image_resulta = document.createElement('div');
        div_image_resulta.setAttribute("class", "image-resulta");
        div_image_resulta.setAttribute("style", "pointer-events: all; background-image: url('Item/Donner/Image/" + noms[(mauvais[i-1])-1] +".png');");
        div_1.appendChild(div_image_resulta);

        let div_text_resulta = document.createElement('div');
        div_text_resulta.setAttribute("class", "text_resulta");
        div_text_resulta.textContent = noms[(mauvais[i-1])-1];

        let div_classement_resulta = document.createElement('div');
        div_classement_resulta.setAttribute("class", "classement_resulta");
        div_classement_resulta.setAttribute("style", "background-image: url(Item/Picture/croie.svg);");

        div_element_resulta.appendChild(div_1);
        div_element_resulta.appendChild(div_text_resulta);
        div_element_resulta.appendChild(div_classement_resulta);
        element_parent_resulta.appendChild(div_element_resulta);
    }

    document.getElementById("element_parent").style.display = "none";
    document.getElementById("element_parent_resulta").style.display = "flex";
    
}