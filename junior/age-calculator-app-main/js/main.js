const day = document.querySelector("#day");
const days = document.querySelector("#days");
const month = document.querySelector("#month");
const months = document.querySelector("#months");
const year = document.querySelector("#year");
const years = document.querySelector("#years");

const test = document.getElementById("test");

const form = document.querySelector("form");
function main() {
  let validDay = false;
  let validMonth = false;
  let validYear = false;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    validateDays(form.elements[0].value);
    validateMonths(form.elements[1].value);
    validateYears(form.elements[2].value);
    
    
    calculateAge()
  });
}

main();

function validateDays(days) {
  const dd = Number(days);
  if (dd !== NaN && dd <= 31 && dd !== 0) {
    console.log("valid day");
  } else {
    console.log("Invalid day");
  }
}

function validateMonths(month) {
  const mm = Number(month);
  if (mm !== NaN && mm <= 12 && mm !== 0) {
    console.log("valid month");
  } else {
    console.log("Invalid month");
  }
}


function validateYears(year) {
  const yy = Number(year)
  
  if (yy !== NaN && yy >= 1918 && yy < new Date().getFullYear()) {
    console.log("valid year");
  } else {
    console.log("Invalid year");
  }
  
}


function calculateAge() {
  
  const currentTime = new Date()
  const currentYear = currentTime.getFullYear();
  const currentMonth = currentTime.getMonth()
  const currentDay = currentTime.getDate()
  
  console.log(currentDay,currentMonth,currentYear)
}