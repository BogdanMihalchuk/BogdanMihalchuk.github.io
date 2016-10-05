function createMain(divMain, classMain, parentBody) {

	var newMain = document.createElement(divMain);
	newMain.classList.add(classMain);
	var parent = document.querySelector(parentBody);
	parent.appendChild(newMain);

}

function createHeader(header) {

	var newHeader = document.createElement(header);
	newHeader.innerHTML = 'Тест по програмированию';
	var parent = document.querySelector('.main')
	parent.appendChild(newHeader);
}

function createForm() {

	var newForm = document.createElement('form');
	var parent = document.querySelector('.main');
	parent.appendChild(newForm);
}

function createFormQuestion(number, question) {
	var paragraph = document.createElement('p');
	paragraph.classList.add(question);
	paragraph.innerHTML = number + '. Вопрос №1';
	var parent = document.querySelector('form');
	parent.appendChild(paragraph);
}

function createChekboxQuestion(id, answer) {

	for (var i = 1; i < 4; i++) {

		var parent = document.querySelector('form');
		var newChekbox = document.createElement("p");
		var newInput = document.createElement("input");
		var newLabel = document.createElement("label");

		newInput.type = "checkbox";
		newInput.id = id + i;
		newInput.name = "answer_" + i;
		newInput.value = 'val_' + i;;
		newInput.checked = false;
		newChekbox.classList.add('answer__checkbox');
		newLabel.setAttribute("for", id + i);
		newLabel.innerHTML = answer + i;

		newChekbox.appendChild(newInput);
		parent.appendChild(newChekbox);
		newChekbox.appendChild(newLabel);
		parent.appendChild(newChekbox);
	}
}

function createSubmit() {

	var newInputSubmit = document.createElement("input");
	var parent = document.querySelector('form');
	newInputSubmit.type = "submit";
	newInputSubmit.value = "Проверить мои результати";
	newInputSubmit.classList.add("submit");
	parent.appendChild(newInputSubmit);

}

var elemPage = {
	main: createMain,
	header: createHeader,
	form: createForm,
	question: createFormQuestion,
	chekbox: createChekboxQuestion,
	submit: createSubmit


}

elemPage.main('div', 'main', 'body');
elemPage.header('header');
elemPage.form();
elemPage.question(1, 'header_Question');
elemPage.chekbox('Question_', 'Вариант ответа №');
elemPage.question(2, 'header_Question');
elemPage.chekbox('Question_2_','Вариант ответа №' );
elemPage.question(3, 'header_Question');
elemPage.chekbox('Question_3_', 'Вариант ответа №');
elemPage.submit()