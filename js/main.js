let up = document.getElementById("up");
let down = document.getElementById("down");
let input = document.getElementById("input");
let go = document.getElementById("ok");
let lift = document.getElementById("lift");
let p = document.getElementById("p");
// lift.style.transition = "1.5s";
let position = 50;
let floor = "";
let min = 1;
let current = 10;
let max = 10;

showFloor();

function showFloor() {
  console.log(current);
  p.innerText = current;
  p.style.color = "white";
  p.style.fontWeight = "900";
  p.style.textAlign = "center";
}

function goToUp() {
  if (current >= min && current < max) {
    current++;
    lift.style.top = `${(position -= 50)}px`;
    lift.style.transition = "1.5s";
    showFloor();
  } else {
    alert("Дальше некуда ехать!");
  }
}

up.addEventListener("click", () => {
  goToUp();
});

function goToDown() {
  if (current > min && current <= max) {
    current--;
    lift.style.top = `${(position += 50)}px`;
    lift.style.transition = "1.5s";
    showFloor();
  } else {
    alert("Дальше некуда ехать!");
  }
}

down.addEventListener("click", () => {
  goToDown();
});

function goToFloor() {
  floor = input.value;
  if (floor < min || floor > max) {
    alert("Нет такого этажа!");
  }
  input.value = "";
  if (floor >= min && floor <= max) {
    while (current < floor) {
      goToUp();
    }
    while (current > floor) {
      goToDown();
    }
  } else {
    console.error("Нет такого этажа!");
  }
}

go.addEventListener("click", () => {
  goToFloor();
});
