'use strict';

document.getElementById('Valider').addEventListener('click', function () {

	var name = document.getElementById('name').value;
	var formattedName = void 0;
	var ul = document.getElementById('historique');
	ul.innerHTML = "";

	if (name.length == 0) {
		formattedName = 'le père noël est une ordure :-)';
	} else {
		var firstLetterUpperCase = name.charAt(0).toUpperCase();
		var nextLettersLowerCase = name.slice(1).toLowerCase();
		formattedName = '' + firstLetterUpperCase + nextLettersLowerCase;
		nameHistory.push(formattedName);
	}

	nameHistory.forEach(function (name) {
		var li = document.createElement('li');
		li.innerHTML = name;
		ul.appendChild(li);
	});

	// avec .map().reduce()
	/*let allNames = nameHistory
 //.filter(name => ...)chercher un true
 .map(name => {
 	nameUpperCase = name.charAt(0).toUpperCase().concat(name.slice(1).toLowerCase());
 	'<li>'.concat(nameUpperCase).concat('</li>');
 })
 .reduce( (allNames, name) => allNames.concat(name), '');
 	ul.innerHTML = allNames;
 */
	// fin .map().reduce()


	//document.getElementById('recevoir').innerHTML = 'Bonjour '.concat(name) .concat(' !');
	document.getElementById('recevoir').innerHTML = 'Bonjour ' + formattedName + ' !';
});
var nameHistory = [];

document.getElementById('searchedName').addEventListener('keyup', function () {
	var searchedhName = document.getElementById('searchedName').value;

	var filteredHistory = nameHistory.filter(function (name) {
		return name.toLowerCase().startsWith(searchedhName.toLowerCase());
	});

	//affichage 
	var ul = document.getElementById('historique');
	ul.innerHTML = "";
	filteredHistory.forEach(function (name) {
		var li = document.createElement('li');
		li.innerHTML = name;
		ul.appendChild(li);
	});
});
