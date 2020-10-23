// Data of students. The data contains the student's last name, name and rate.

const { Console } = require("console");

const students = [
	{
          lastName: "Пилипчук",
		firstName: "Микола",
		rating: [90, 95, 91]
	},
	{
		lastName: "Довганюк",
		firstName: "Анастасія",
		rating: [45, 67, 45]
	},
	{
		lastName: "Приймас",
		firstName: "Володимир",
		rating: [12, 95, 91]
	},
	{
		lastName: "Приймас",
		firstName: "Олександр",
		rating: [54, 95, 43]
	},
	{
		lastName: "Пилипчук",
		firstName: "Ульяна",
		rating: [90, 87, 76]
	},
	{
		lastName: "Бредик",
		firstName: "Маріна",
		rating: [80, 54, 91]
	},
	{
		lastName: "Ліфінцев",
		firstName: "Петро",
		rating: [77, 71, 75]
	},
	{
		lastName: "Лищук",
		firstName: "Олександр",
		rating: [65, 60, 61]
	},
	{
		lastName: "Дзюба",
		firstName: "Максим",
		rating: [54, 100, 54]
	}
];
//Variables in the program
let StudentWithMaxRate, StudentWithMinRate, StudentWithAverageRate, sumAverageRate = 0;

//Main function in the program.

//Calculation of the average score of each student
const AverageRate = array => array.reduce((rate, person) => rate + person) / array.length;

//Sorting the list of students depending on the type of sorting
const SortingBySomeType = (array, type) => (type === 1) ? array.sort((a, b) => a.lastName > b.lastName ? 1 : -1) : array.sort((a, b) => AverageRate(a.rating) > AverageRate(b.rating) ? -1 : 1);

//Some function in the program.

//Display a list of students depending on the parameters
function SortAndShowBySomeType(type_of_sorting){
     SortingBySomeType(students,type_of_sorting);
     students.forEach(person => console.log(person.firstName, person.lastName));
}

//Find student with max rate in the list
function FindMaxStudent(){
     let max = 0;
     for (let i = 0; i < students.length; i++) {
          if (AverageRate(students[i].rating) > max) {
               max = AverageRate(students[i].rating);
               StudentWithMaxRate = `${students[i].lastName} ${students[i].firstName}`;
          }
     }
     return StudentWithMaxRate;
}

//Find student with min rate in the list
function FindMinStudent(){
     let min = AverageRate(students[0].rating);
     for (let i = 0; i < students.length; i++) {
          if (AverageRate(students[i].rating) < min) {
               min = AverageRate(students[i].rating);
               StudentWithMinRate = `${students[i].lastName} ${students[i].firstName}`;
          }
     }
     return StudentWithMinRate;
}

//Find student with average rate in the list
function FindAverageStudent(){
     
     for (let i = 0; i < students.length; i++) {
          sumAverageRate += AverageRate(students[i].rating);
     }

     let minAverageRate = Math.abs(AverageRate(students[0].rating) - (sumAverageRate / students.length));
     for (let i = 0; i < students.length; i++) {
          if ((Math.abs(AverageRate(students[i].rating) - (sumAverageRate / students.length))) < minAverageRate) {
               minAverageRate = Math.abs(AverageRate(students[i].rating) - (sumAverageRate / students.length));
               StudentWithAverageRate = `${students[i].lastName} ${students[i].firstName}`;
          }
     }
     return StudentWithAverageRate;
}

//Create new array with ratting.
function newArray(){
     const additionalArray = students.map(student => student);
     

	let max = 0;
	for (let i = 0; i < students.length; i++) {
		if (AverageRate(additionalArray[i].rating) > max) max = AverageRate(students[i].rating);
	}


	for (let i = 0; i < students.length; i++) {
		additionalArray[i].ratting = Math.floor(100 - ((AverageRate(additionalArray[i].rating) / max) * 100));
	}
     additionalArray.forEach(student => console.log(student.firstName, student.lastName, AverageRate(student.rating).toFixed(2),student.ratting));
}

// 1. Display the names and surnames of classmates in alphabetical order;
console.log("Sorting by Surname & Name students");
console.log("");
SortAndShowBySomeType(1);
console.log("**********************************");

// 2. Display names and surnames according to estimates
console.log("Sorting by rate studens");
console.log("");
SortAndShowBySomeType(2);
console.log("**********************************");

// 3. Display the name of the student with the maximum minimum and average grades.
//Show rating students
students.forEach(student => console.log(student.firstName, student.lastName, AverageRate(student.rating).toFixed(2)));
console.log("**********************************");

// 3.1 Show Student with max rate in the list
console.log("Student with max rate");
console.log("");
console.log(FindMaxStudent());
console.log("**********************************");

// 3.2 Show Student with min rate in the list
console.log("Student with min rate");
console.log("");
console.log(FindMinStudent());
console.log("**********************************");

// 3.3 Show Student with average rate in the list
console.log("Student with average rate");
console.log("");
console.log(FindAverageStudent());
console.log("**********************************");

// 4. Create a new array based on the old one
console.log("New array with ratting");
console.log("");
newArray();