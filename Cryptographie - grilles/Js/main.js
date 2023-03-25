let stock_valeur = Array(100).fill(0);
const style_message_1 = "font-size: 16.5px; color: #0C9E84;";
const style_message_2 = "font-size: 16.5px; color: ;";
const style_message_3 = "font-size: 16.5px; color: #f3617b;";
const style_titre = "font-size: 60px; color: white; border: solid white 3px; padding: 10px;";
const style_validation = "font-size: 15px; color: #4fc904";
const style_erreur = "font-size: 15px; color: #ad0404";

function box(valeur, bouton, id) {
	if (valeur == 28) {
		valeur = 0;
	}
	
	if (valeur == 0) {
		bouton.innerHTML = " ";
		bouton.parentNode.style.backgroundColor  = "#c9cacb";
	}
	else if (valeur == 1) {
		bouton.parentNode.style.backgroundColor  = "#000000e1";
		bouton.style.color  = "#000000e1";
		bouton.innerHTML = "/";
	}
	else {
		bouton.style.backgroundColor  = "";
		bouton.innerHTML = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".substring(valeur-2, valeur-1);
		bouton.parentNode.style.backgroundColor  = "#c9cacb";
    }

	id;
	stock_valeur[id] = valeur;
	// console.log(id + " | " + valeur + " | " + stock_valeur);
}

function bouton(event) {

    const id = event.target.id;
    const bouton = document.getElementById(id);
	let i = parseInt(id.substring(1, 4)-1);
	let valeur = stock_valeur[i];

	valeur++;
	
	box(valeur, bouton, i);

	console.log("%c " + stock_valeur[i] + "%c | %c" + id, style_message_1, style_message_2, style_message_3);
}



function print_file (){
    window.print();	
}



let currentStyle = 1;
document.getElementById("style_2").addEventListener("click", function() {

	console.log("changement style ...");

	if (currentStyle == 2) {
		console.log("Style 2");
	  	document.getElementById("style_1").setAttribute("href", "Css/css_2.css");
	  	currentStyle = 3;

	} else if (currentStyle == 3){
		console.log("Style 3");
		document.getElementById("style_1").setAttribute("href", "Css/css_3.css");
		currentStyle = 1;

	} else {
		console.log("Style 1");
	  	document.getElementById("style_1").setAttribute("href", "Css/css_1.css");
	  	currentStyle = 2;
	}
});



function help() {
	console.log("%cHELP%c \n\n" +
				"%c• help()%c |\n%cliste de tout les commandes\n\n" +
				"%c• hello()%c |\n%cdis bonjour\n\n" +
				"%c• random1()%c |\n%cpremière façon de générer des cases noir aléatoirement\n\n" +
				"%c• random2()%c |\n%cdeuxième façon de générer des cases noir aléatoirement\n\n" +
				"%c• random3()%c |\n%ctroisième façon de générer un certain nombre de case noir aléatoirement\n\n" +
				"%c• clear()%c |\n%cvide le tableau"
				, style_titre, style_message_2, style_message_3, style_message_2, style_message_1, style_message_3, style_message_2, style_message_1, style_message_3, style_message_2, style_message_1, style_message_3, style_message_2, style_message_1, style_message_3, style_message_2, style_message_1, style_message_3, style_message_2, style_message_1);
}

function random1() {
	random_boucle = 1;
	let random_tableau = [];

	while (random_boucle <= 100) {
		if (Math.round(Math.random()) == 1) {
			random_tableau.push(random_boucle);

			box(1, document.getElementById("b" + random_boucle), random_boucle - 1);
		}

		random_boucle++;
	}
	// console.log(random_tableau);
	console.log("%cRandom effectuer", style_validation);
}

function random2() {
	var random_nombre_box = Math.floor(Math.random() * 100) + 1;

	let random_boucle = 1;
	let random_tableau = [];

	while (random_boucle <= random_nombre_box) {

		let random_nombre = Math.floor(Math.random() * 100) + 1;
		if (!random_tableau.includes(random_nombre)) {
			random_tableau.push(random_nombre);

			box(1, document.getElementById("b" + random_nombre), random_nombre - 1);

			random_boucle++;
		}
	}
	// console.log(random_tableau);
	console.log("%cRandom effectuer", style_validation);
}

function random3(max) {
	if (max <= 100 && max >=1) {
		let random_boucle = 1;
		let random_tableau = [];

		while (random_boucle <= max) {

			let random_nombre = Math.floor(Math.random() * 100) + 1;
			if (!random_tableau.includes(random_nombre)) {
				random_tableau.push(random_nombre);

				box(1, document.getElementById("b" + random_nombre), random_nombre - 1);

				random_boucle++;
			}
		}
		// console.log(random_tableau);
		console.log("%cRandom effectuer", style_validation);
	} else {
		console.log("%cErreur : le nombre est trop grans ou trop petit. Il doit etre compris entre 1 et 100", style_erreur);
	}
}

function clear() {
	for (let i = 1; i <= 100; i++) {
		box(0, document.getElementById("b" + i), i - 1);
	}

	console.log("%cClear finish", style_validation)
}



function hello() {
	console.log("Hello, World!");
}