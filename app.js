"use strict";

// creat new title using js
document.title = "HR mangement system";

// const mainjs = document.getElementsByTagName("main");
// // mainjs[0].textContent = "";
// const card = document.createElement("div");
// mainjs[0].appendChild(card);

// const imgEmp = document.createElement("img");
// mainjs[0].appendChild(imgEmp);

// imgEmp.src = "img/Ghazi.jpeg";
// card.textContent = "paragraph working";

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

Employee.prototype.pickDepartment = function (dep) {
  for (let i = 0; i < allEmployee.length; i++) {
    if (this.department.toLowerCase() === "administration") {
      const adminCard = document.createElement("div");
      adminCard.className = "card-admin";
    } else if (this.department.toLowerCase() === "finance") {
      const financeCard = document.createElement("div");
      financeCard.className = "finance-card";
    } else if (this.department.toLowerCase() === "marketing") {
      const marketCard = document.createElement("div");
      marketCard.className = "market-card";
    } else if (this.department.toLowerCase() === "Development") {
      const devCard = document.createElement("div");
      devCard.className = "dev-card";
    }
  }
};

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
  const mainjs = document.getElementsByTagName("main");
  const card = document.createElement("div");
  const info = document.createElement("h5");
  const imgEmp = document.createElement("img");

  // content
  info.textContent = `Name :${this.fullName} \r\n- ID :${this.id} \r\nDepartment : ${this.department} - ${this.level} \r\n${this.salary}`;
  info.innerHTML = info.innerHTML.replace(/\r\n?/g, "<br />");

  card.className = "card";
  imgEmp.src = this.img;
  imgEmp.className = "img";

  // appending

  // this.pickDepartment(this.department);
  card.appendChild(imgEmp);
  card.appendChild(info);
  mainjs[0].appendChild(card);
  console.log(mainjs);
};

const ghaziSamer = new Employee(
  1000,
  "Ghazi Samer",
  "Administration",
  "Senior",
  "/img/Ghazi.jpeg"
);
const lanaAli = new Employee(
  1001,
  "Lana Ali",
  "Finance",
  "Senior",
  "/img/Lana.jpeg"
);
const tamaraAyoub = new Employee(
  1002,
  "Tamara Ayoub",
  "Marketing",
  "Senior",
  "/img/Tamara.jpeg"
);
const safiWalid = new Employee(
  1003,
  "Safi Walid",
  "Administration",
  "Mid-Senior",
  "/img/Safi.jpeg"
);
const omarZaid = new Employee(
  1004,
  "Omar Zaid",
  "Development",
  "Senior",
  "/img/Omar.jpeg"
);
const ranaSaleh = new Employee(
  1005,
  "Rana Saleh",
  "Development",
  "Junior",
  "/img/Rana.jpeg"
);
const hadiAhmad = new Employee(
  1006,
  "Hadi Ahmad",
  "Finance",
  "Mid-Senior",
  "/img/Hadi.jpeg"
);

for (let i = 0; i < allEmployee.length; i++) {
  allEmployee[i].render();
}

// console.log(allEmployee);

/////////////////////////////////////////
// document.title = "java script";

// const divEl = document.getElementsByTagName("div");

// console.log(divEl);

// // add content to the div
// divEl[0].textContent = "div1 hello from js";
// divEl[1].textContent = "div2 hello from js";
// divEl[2].textContent = "div3 hello from js";
// divEl[3].textContent = "div4 hello from js";

// const h1El = document.getElementById("headingEl");

// h1El.textContent = "hello heading";

// const pEl = document.getElementsByClassName("paraph");

// pEl[0].textContent = "hello paraph";

// pEl[1].textContent = "hello paraph 2";

// h1El.style.color = "blue";

// divEl[0].style.backgroundColor = "gray";

// pEl[1].style.backgroundColor = "yellow";

// divEl[1].className = "fromJS";

// // divEl[0].classList.add("fromJS");

// // creating elements 3 steps
// const h3El = document.createElement("h3");
// // add content  or atribute
// h3El.textContent = "hello h3";
// // append it to the Dom tree
// divEl[0].appendChild(h3El);

// console.log(h3El);

// // creat img

// const imgDom = document.createElement("img");
// // add content to the attribute

// imgDom.src =
//   "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg";
// imgDom.alt = "eyes";
// // append the iamge
// divEl[2].appendChild(imgDom);

// last try
// if (this.department.toLowerCase() === "administration") {
//   const adminCard = document.createElement("div");
//   adminCard.className = "card-admin";
//   imgEmp.src = this.img;
//   imgEmp.className = "img";
//   adminCard.appendChild(imgEmp);
//   adminCard.appendChild(info);
//   mainjs[0].appendChild(adminCard);
// } else if (this.department.toLowerCase() === "finance") {
//   const financeCard = document.createElement("div");
//   financeCard.className = "finance-card";
//   imgEmp.src = this.img;
//   imgEmp.className = "img";
//   financeCard.appendChild(imgEmp);
//   financeCard.appendChild(info);
//   mainjs[0].appendChild(financeCard);
// } else if (this.department.toLowerCase() === "marketing") {
//   const marketCard = document.createElement("div");
//   marketCard.className = "market-card";
//   imgEmp.src = this.img;
//   imgEmp.className = "img";
//   marketCard.appendChild(imgEmp);
//   marketCard.appendChild(info);
//   mainjs[0].appendChild(marketCard);
// } else if (this.department.toLowerCase() === "Development") {
//   const devCard = document.createElement("div");
//   devCard.className = "dev-card";
//   imgEmp.src = this.img;
//   imgEmp.className = "img";
//   devCard.appendChild(imgEmp);
//   devCard.appendChild(info);
//   mainjs[0].appendChild(devCard);
// }
