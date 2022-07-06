"use strict";

const allEmployee = [];

function Employee(id, fullName, department, level, img) {
  this.id = id;
  this.fullName = fullName;
  this.department = department;
  this.level = level;
  this.img = img;
  this.salary = this.getSalary(this.level);
  allEmployee.push(this);
}

Employee.prototype.getSalary = function (level) {
  let min, max, netSalary;
  if (level.toLowerCase() === "junior") {
    min = 500;
    max = 1000;
  } else if (level.toLowerCase() === "mid-senior") {
    min = 1000;
    max = 1500;
  } else if (level.toLowerCase() === "senior") {
    min = 1500;
    max = 2000;
  }
  netSalary = (Math.random() * (max - min) + min) * 0.925;
  return Math.round(netSalary);
};

Employee.prototype.render = function () {
  console.log(`${this.id} ${this.fullName} ${this.department} ${this.level}`);
  document.write(
    `<table style="border:solid; text-align: center;">
    <tr>
    <th>Employee ID </th>
    <th>Full Name </th> 
    <th>Department</th>
    <th>Level </th>
    <th>Salary</th>
  </tr>
  <tr>
    <td> ${this.id} </td> <td>${this.fullName}</td> <td>${this.department}</td> <td>${this.level}</td><td>${this.salary}</td>
  </tr>
</table>`
  );
};

const ghaziSamer = new Employee(
  1000,
  "Ghazi Samer",
  "Administration",
  "Senior",
  "img/ghazi.jpeg"
);
const lanaAli = new Employee(
  1001,
  "Lana Ali",
  "Finance",
  "Senior",
  "img/lana.jpeg"
);
const tamaraAyoub = new Employee(
  1002,
  "Tamara Ayoub",
  "Marketing",
  "Senior",
  "img/tamara.jpeg"
);
const safiWalid = new Employee(
  1003,
  "Safi Walid",
  "Administration",
  "Mid-Senior",
  "img/safi.jpeg"
);
const omarZaid = new Employee(
  1004,
  "Omar Zaid",
  "Development",
  "Senior",
  "img/omar.jpeg"
);
const ranaSaleh = new Employee(
  1005,
  "Rana Saleh",
  "Development",
  "Junior",
  "img/ranaa.jpeg"
);
const hadiAhmad = new Employee(
  1006,
  "Hadi Ahmad",
  "Finance",
  "Mid-Senior",
  "img/hadi.jpeg"
);

for (let i = 0; i < allEmployee.length; i++) {
  allEmployee[i].render();
}

console.log(allEmployee);
