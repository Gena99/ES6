document.getElementById('Valider').addEventListener('click',()=>{

	let name = document.getElementById('name').value;
	let formattedName;
	let ul= document.getElementById('historique');
	ul.innerHTML = "";

	if (name.length ==0){
		formattedName ='le père noël est une ordure :-)';
	}else{
		let firstLetterUpperCase = name.charAt(0).toUpperCase()
		let nextLettersLowerCase = name.slice(1).toLowerCase();
		formattedName = `${firstLetterUpperCase}${nextLettersLowerCase}`;
		nameHistory.push(formattedName);
	}

	nameHistory.forEach( name => {
		let li = document.createElement('li');
		li.innerHTML = name;
		ul.appendChild(li);
	});

	


	


	document.getElementById('recevoir').innerHTML = `Bonjour ${formattedName} !`;

});
let nameHistory = [];

document.getElementById('searchedName').addEventListener('keyup',()=>{
	let searchedhName = document.getElementById('searchedName').value;

	let filteredHistory = nameHistory.filter(name=>{
		return name.toLowerCase().startsWith(searchedhName.toLowerCase())
	})


	//affichage 
	let ul= document.getElementById('historique');
	ul.innerHTML = "";
	filteredHistory.forEach( name => {
		let li = document.createElement('li');
		li.innerHTML = name;
		ul.appendChild(li);
	});

})

