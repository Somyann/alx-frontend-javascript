// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: 'frank',
  lastName: 'Due',
  age: 30,
  location: 'Nigeria',
};

const student2: Student = {
  firstName: 'chisom',
  lastName: 'Ann',
  age: 28,
  location: 'California',
};
const studentsList: Student[] = [student1, student2];

// Create a table and append rows for each student
const table = document.createElement('table');
const tableBody = document.createElement('tbody');

// Loop through studentsList and add a row for each student
studentsList.forEach((student) => {
  const row = document.createElement('tr');

  const firstNameCell = document.createElement('td');
  firstNameCell.textContent = student.firstName;

  const locationCell = document.createElement('td');
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  tableBody.appendChild(row);
});

table.appendChild(tableBody);
document.body.appendChild(table);
