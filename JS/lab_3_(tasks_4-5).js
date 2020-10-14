// Завдання 1 - 3 реалізовані в файлі під назвою 'script.js'



// 4) Продемонструвати можливість створення користувацього об’єкту
// засобами JavaScript. Створити об’єкт Student із властивостями name,
// surname, age, course та властивостями GetOlder()- зміна віку на
// вказану кількість років, ChangeSurname() - зміна прізвища,
// MoveToSecondCourse() – переведення на наступний курс.

var Student = new Object();

Student.name = "Максим";
Student.surname = "Пашинський";
Student.age = 18;
Student.course = 2;

$('#button_age').on('click', function GetOlder() {
	if( $('#input_age').val() == '')
	{
		alert("Нічого не введено");
	}
	else
	{
		Student.age = $('#input_age').val();
		alert('Новий вік студента: ' + Student.age);
	}
});

$('#button_name').on('click', function ChangeName() {
	if( $('#input_name').val() == '')
	{
		alert("Нічого не введено");
	}
	else
	{
		Student.name = $('#input_name').val();
		alert('Нове ім\'я студента: ' + Student.name);
	}
});

$('#button_sur').on('click', function ChangeSurname() {
	if( $('#input_sur').val() == '')
	{
		alert("Нічого не введено");
	}
	else
	{
		Student.surname = $('#input_sur').val();
		alert('Нове прізвище студента: ' + Student.surname);
	}
});

$('#button_course').on('click', function MoveToSecondCourse() {
	Student.course = Student.course + 1;
	if(Student.course > 4 )
	{
		Student.course = 1
	}
	alert('Студента переведено на ' + Student.course + ' курс');
});

$('#info').on('click', function ShowInfo() {
	alert('Студент: ' + Student.name + ' ' + Student.surname + '\n' + 'Вік: ' + Student.age + '\n' + 'Курс: ' + Student.course);
});

// 5) Реалізувати користувацьку JS-функцію відповідно до варіанту:
// 		6. Функція, що визначає найменше значення серед заданих чисел.

$('#min_button').on('click', function Min() {
	let min;
	let a = $('#input_1').val();
	let b = $('#input_2').val();
	let c = $('#input_3').val();

	if(a < b && a < c)
	{
		min = a;
	}
	else if(b < a && b < c)
	{
		min = b;
	}
	else if(c < a && c < b)
	{
		min = c;
	}
	alert('Мінімальне значення із введених: ' + min);
});