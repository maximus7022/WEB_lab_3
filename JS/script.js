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

function validate_form() {
	var st_exp = /^[А-Яа-яІі\s]+/;
	var gr_exp = /^[А-Яа-яІі]{2,2}\-[0-9]/;
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
	
}

// 3) Реалізувати аналогічну перевірку із використанням бібліотеки jQuery
// validate.

var sp = $('#sp_input').val();
var em = $('#em_input').val();

$(".decor").validate({
	rules: {
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
		if (element.attr("name") == "specialty") error.insertAfter($("#sp_input"));
		if (element.attr("name") == "email") error.insertAfter($("input[name=email]"));
	}

});

// Завдання 4 - 5 реалізовані в іншому файлі під назвою 'lab_3_(tasks_4-5).js' і демонструються в одноіменному файлі .html