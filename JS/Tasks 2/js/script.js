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

function createChekbox() {

	for (var i = 1; i < 4; i++) {
		// var id = 'lb' + i;
		var val = 'val_' + i;
		var txt = 'Вариант ответа №' + i;
		var clas = 'answer__checkbox';

		var newChekbox = document.createElement("p");
		var newInput = document.createElement("input");
		newInput.type = "checkbox";
		// newInput.id = id;
		newInput.name = "answer";
		newInput.value = val;
		newInput.checked = false;
		newChekbox.classList.add(clas);
		newChekbox.appendChild(newInput);
		newForm.appendChild(newChekbox);

		var newLabel = document.createElement("label");
		// newLabel.setAttribute("for", id);
		newLabel.innerHTML = txt;
		newChekbox.appendChild(newLabel);
		newForm.appendChild(newChekbox);
	}
}
createChekbox();


var question_2 = document.createElement('p');
question_2.classList.add('header_Question');
question_2.innerHTML = '2. Вопрос №2';
newForm.appendChild(question_2);

createChekbox();

var question_3 = document.createElement('p');
question_3.classList.add('header_Question');
question_3.innerHTML = '3. Вопрос №3';
newForm.appendChild(question_3);

createChekbox();

var newInputSubmit = document.createElement("input");
newInputSubmit.type = "submit";
newInputSubmit.value = "Проверить мои результати";
newInputSubmit.classList.add("submit");
newForm.appendChild(newInputSubmit);

	