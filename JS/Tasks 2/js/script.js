// create main


var newMain = document.createElement('div');
newMain.classList.add('main');
document.body.appendChild(newMain);

// create newHeader
var newHeader = document.createElement('header');
newHeader.innerHTML = 'Тест по програмированию';
newMain.appendChild(newHeader);

var newForm = document.createElement('form');
newMain.appendChild(newForm);

var paragraph = document.createElement('p');
paragraph.classList.add('header_Question');
paragraph.innerHTML = '1. Вопрос №1';
newForm.appendChild(paragraph);

function createChekboxQuestion() {

	for (var i = 1; i < 4; i++) {

		var valueInput = 'val_' + i;
		var LabelTxt = 'Вариант ответа №' + i;
		var chekboxClas = 'answer__checkbox';
		var idInput = 'Question ' + i;

		var newChekbox = document.createElement("p");
		var newInput = document.createElement("input");
		newInput.type = "checkbox";
		newInput.id = idInput;
		newInput.name = "answer";
		newInput.value = valueInput;
		newInput.checked = false;
		newChekbox.classList.add(chekboxClas);
		newChekbox.appendChild(newInput);
		newForm.appendChild(newChekbox);

		var newLabel = document.createElement("label");
		newLabel.setAttribute("for", idInput);
		newLabel.innerHTML = LabelTxt;
		newChekbox.appendChild(newLabel);
		newForm.appendChild(newChekbox);
	}
}
createChekboxQuestion();


var question_2 = document.createElement('p');
question_2.classList.add('header_Question');
question_2.innerHTML = '2. Вопрос №2';
newForm.appendChild(question_2);

function createChekboxQuestion2() {

	for (var i = 1; i < 4; i++) {

		var valueInput = 'val_' + i;
		var LabelTxt = 'Вариант ответа №' + i;
		var chekboxClas = 'answer__checkbox';
		var idInput = 'Question__2 ' + i;

		var newChekbox = document.createElement("p");
		var newInput = document.createElement("input");
		newInput.type = "checkbox";
		newInput.id = idInput;
		newInput.name = "answer" ;
		newInput.value = valueInput;
		newInput.checked = false;
		newChekbox.classList.add(chekboxClas);
		newChekbox.appendChild(newInput);
		newForm.appendChild(newChekbox);

		var newLabel = document.createElement("label");
		newLabel.setAttribute("for", idInput);
		newLabel.innerHTML = LabelTxt;
		newChekbox.appendChild(newLabel);
		newForm.appendChild(newChekbox);
	}
}
createChekboxQuestion2();



var question_3 = document.createElement('p');
question_3.classList.add('header_Question');
question_3.innerHTML = '3. Вопрос №3';
newForm.appendChild(question_3);

function createChekboxQuestion3() {

	for (var i = 1; i < 4; i++) {

		var valueInput = 'val_' + i;
		var LabelTxt = 'Вариант ответа №' + i;
		var chekboxClas = 'answer__checkbox';
		var idInput = 'Question__3 ' + i;

		var newChekbox = document.createElement("p");
		var newInput = document.createElement("input");
		newInput.type = "checkbox";
		newInput.id = idInput;
		newInput.name = "answer";
		newInput.value = valueInput;
		newInput.checked = false;
		newChekbox.classList.add(chekboxClas);
		newChekbox.appendChild(newInput);
		newForm.appendChild(newChekbox);

		var newLabel = document.createElement("label");
		newLabel.setAttribute("for", idInput);
		newLabel.innerHTML = LabelTxt;
		newChekbox.appendChild(newLabel);
		newForm.appendChild(newChekbox);
	}
}
createChekboxQuestion3();

var newInputSubmit = document.createElement("input");
newInputSubmit.type = "submit";
newInputSubmit.value = "Проверить мои результати";
newInputSubmit.classList.add("submit");
newForm.appendChild(newInputSubmit);

	