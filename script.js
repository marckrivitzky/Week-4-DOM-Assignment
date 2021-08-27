let add = document.getElementById('button');
let table = document.getElementById('table');

let countryInput = document.getElementById('country');
let dateInput = document.getElementById('date');
let yesOrNoInput = document.getElementById('comingBack');

add.addEventListener('click', () =>{
	let country = countryInput.value;
	let date = dateInput.value;
	let yesOrNo = yesOrNoInput.value;

	

	let template = `
		<tr>
			<td>${country}</td>
			<td>${date}</td>
			<td>${yesOrNo}</td>
		</tr>`

	table.innerHTML += template;
	clrInput();
});

function clrInput (){
	countryInput.value = '';
	dateInput.value = '';
	yesOrNoInput.value = '';
}

