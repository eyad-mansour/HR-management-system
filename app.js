"use strict";

document.title = "HR mangement system";

// accecing the main element
const mainjs = document.getElementsByTagName("main");

// creat div for each department
const finance = document.createElement("div");
const development = document.createElement("div");
const administration = document.createElement("div");
const marketing = document.createElement("div");

const financeTitle = document.createElement("h2");
const developmentTitle = document.createElement("h2");
const administrationTitle = document.createElement("h2");
const marketTitle = document.createElement("h2");
// h2 adding style

financeTitle.className = "h2";
developmentTitle.className = "h2";
administrationTitle.className = "h2";
marketTitle.className = "h2";

// text for the title
financeTitle.textContent = "Finance ";
developmentTitle.textContent = "Development ";
marketTitle.textContent = "Marketing ";
administrationTitle.textContent = "Administration ";

// adding the child for the title
administration.appendChild(administrationTitle);
finance.appendChild(financeTitle);
marketing.appendChild(marketTitle);
development.appendChild(developmentTitle);

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
  // split by department
  const card = document.createElement("div");
  const info = document.createElement("h5");
  const imgEmp = document.createElement("img");

  // add employee info

  info.textContent = `Name :${this.fullName} \r\n- ID :${this.id} \r\nDepartment : ${this.department} - ${this.level} \r\n${this.salary}`;
  info.innerHTML = info.innerHTML.replace(/\r\n?/g, "<br>");
  // add class employee
  card.className = "card";
  imgEmp.src = this.img;
  imgEmp.className = "img";

  // append
  card.appendChild(imgEmp);
  card.appendChild(info);

  if (this.department.toLowerCase() === "administration") {
    administration.appendChild(card);
  } else if (this.department.toLowerCase() === "finance") {
    finance.appendChild(card);
  } else if (this.department.toLowerCase() === "marketing") {
    marketing.appendChild(card);
  } else if (this.department.toLowerCase() === "development") {
    development.appendChild(card);
  }
};

const ghaziSamer = new Employee(
  1000,
  "Ghazi Samer",
  "Administration",
  "Senior",
  "/assets/Ghazi.jpeg"
);
const lanaAli = new Employee(
  1001,
  "Lana Ali",
  "Finance",
  "Senior",
  "/assets/Lana.jpeg"
);
const tamaraAyoub = new Employee(
  1002,
  "Tamara Ayoub",
  "Marketing",
  "Senior",
  "/assets/Tamara.jpeg"
);
const safiWalid = new Employee(
  1003,
  "Safi Walid",
  "Administration",
  "Mid-Senior",
  "/assets/Safi.jpeg"
);
const omarZaid = new Employee(
  1004,
  "Omar Zaid",
  "Development",
  "Senior",
  "/assets/Omar.jpeg"
);
const ranaSaleh = new Employee(
  1005,
  "Rana Saleh",
  "Development",
  "Junior",
  "/assets/Rana.jpeg"
);
const hadiAhmad = new Employee(
  1006,
  "Hadi Ahmad",
  "Finance",
  "Mid-Senior",
  "/assets/Hadi.jpeg"
);

for (let i = 0; i < allEmployee.length; i++) {
  allEmployee[i].render();
}

// append child for the mian and adding the style
administration.className = "admin-card";
mainjs[0].appendChild(administration);
finance.className = "finance-card";
mainjs[0].appendChild(finance);
marketing.className = "market-card";
mainjs[0].appendChild(marketing);
development.className = "dev-card";
mainjs[0].appendChild(development);

// console.log(mainjs);
