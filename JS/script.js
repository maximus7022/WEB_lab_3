// 1) Написати JS-сценарій, який виведе у діалоговому вікні пояснювальну
// інформацію щодо введення даних до форми, розробленої при виконанні
// лабораторної роботи №1, у випадку коли користувач протягом деякого
// інтервалу часу (1 хв, наприклад) не внесе даних до форми – використати
// запуск JavaScript за розкладом.

setTimeout('window.location="#overlay"', 60000);

// 2) Здійснити попередню перевірку коректності даних, які вносяться
// користувачем у форму. Перевірку реалізувати у вигляді окремого JS
// сценарію, для перевірки коректності заповнення полів слід застосувати
// механіхм регулярних виразів RegExp.

// діє на form_js.html

function validate_form() {
	var st_exp = /^[А-Яа-яІі\s]+/;
	var gr_exp = /^[А-Яа-яІі]{2,2}\-[0-9]/;
	var sp_exp = /^\d{3,3}$/;
	var em_exp = /^[a-z0-9._-]+\@[a-z0-9]+\.[a-z]{2,4}$/;
	var student = document.getElementById('st_input').value;
	var group = document.getElementById('gr_input').value;
	var specialty = document.getElementById('sp_input').value;
	var email = document.getElementById('em_input').value;

	if (st_exp.test(student) == false)
	{
		alert('Ім\'я повинно бути введене українськими літерами');
		return false;
	}

	if (gr_exp.test(group) == false)
	{
		alert('Поле групи повинне містити дві українські літери, дефіс та номер');
		return false;
	}

	if (sp_exp.test(specialty) == false)
	{
		alert('Номер спеціальності має бути трьохзначним числом');
		return false;
	}

	if (em_exp.test(email) == false)
	{
		alert('Це не схоже на Email');
		return false;
	}

	
}

// 3) Реалізувати аналогічну перевірку із використанням бібліотеки jQuery
// validate.

// діє на form_jQuery.html

var st = $('#st_input').val();
var gr = $('#gr_input').val();
var sp = $('#sp_input').val();
var em = $('#em_input').val();

$(".decor_j").validate({
	rules: {
		student: {
			required: true,
			pattern: /^[А-Яа-яІі\s]+/,
		},

		group: {
			required: true,
			pattern: /^[А-Яа-яІі]{2,2}\-[0-9]/,
		},

		specialty: {
			digits: true,
			required: true,
			minlength: 3,
			maxlength: 3
		},

		email: {
			required: true,
			email: true
		}
	},

	messages: {
		student: {
			required: "Поле ПІБ пусте",
			pattern: "Ім\'я повинно бути введене українськими літерами"
		},

		group: {
			required: "Поле групи пусте",
			pattern: "Поле групи повинне містити дві українські літери, дефіс та номер"
		},

		specialty: {
			required: "Поле спеціальності пусте",
			minlength: "Номер спеціальності надто короткий",
			maxlength: "Номер спеціальності надто довгий"
		}, 

		email: {
			required: "Поле пошти пусте",
			email: "Це не схоже на поштову скриньку"
		}
	},

	errorClass: "input_error",

	errorPlacement: function(error, element) { 
		if (element.attr("name") == "student") error.insertAfter($("#st_input"));
		if (element.attr("name") == "group") error.insertAfter($("#gr_input"));
		if (element.attr("name") == "specialty") error.insertAfter($("#sp_input"));
		if (element.attr("name") == "email") error.insertAfter($("#em_input"));
	}

});

// Завдання 4 - 5 реалізовані в іншому файлі під назвою 'lab_3_(tasks_4-5).js' і демонструються в одноіменному файлі .html