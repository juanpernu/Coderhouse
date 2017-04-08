'use sctrict'

var studentList = []; // Declaro el array vacio

function addStudent() {
	var newStudent = confirm('Quiere agregar un alumno?'); // Pregunto si quiere agregar un alumno nuevo y guardo el boolean en una var

	while(newStudent === true) {
		studentList.push(prompt('Ingrese el nombre del alumno')); // Pregunto el nombre del alumno
		newStudent = confirm('Quiere agregar otro alumno?')	;
	}

	for (var i = 0; i < studentList.length; i++) {
		studentList[i] = studentList[i].toUpperCase();
	}
}

function maradona(studentArray) {

  for (var i = 0; i < studentArray.length; i++) {
    if (studentArray[i] == 'MARADONA') {
      return true;
    }

    return false;

  }

}

addStudent();
console.log(studentList);
var vinoMaradona = maradona(studentList);
