const nbCases = 81;
const withGrid = 9;
const colorsList = [
  "blue",
  "green",
  "red",
  "purple",
  "orange",
  "brown",
  "grey",
  "black",
];

const numberShowed = (nb) => {
  return `<text font-size='${50}' x='-25%' y='20' fill='${
    colorsList[nb - 1]
  }'>${nb}</text>`;
};

function CasesBeside(n) {
  let cases = [n - withGrid, n + withGrid];
  if (n % withGrid == 1) {
    cases.push(n - withGrid + 1, n + 1, n + withGrid + 1);
  } else if (n % withGrid == 0) {
    cases.push(n - withGrid - 1, n - 1, n + withGrid - 1);
  } else {
    cases.push(
      n - withGrid + 1,
      n + 1,
      n + withGrid + 1,
      n - withGrid - 1,
      n - 1,
      n + withGrid - 1
    );
  }
  return cases;
}

function isMinesbeside(button, mines) {
  let memo = 0;
  CasesBeside(button).forEach((element) => {
    if (mines.includes(element)) {
      memo++;
    }
  });
  return memo;
}

function Win() {
  console.log("Win !")
}

export function ShowCase(button, mines) {
  let show = document.getElementById(button);
  if (show.classList.contains("bg-white")) {
  } else {
    show.classList.remove("bg-grey")
    show.classList.add("bg-white");
    if (document.querySelectorAll(".bg-white").length == nbCases - 10) {
      Win();
    }
    if (isMinesbeside(button, mines) === 0) {
      CasesBeside(Number(button)).forEach((element) => {
        if (element > 0 && element <= nbCases) {
          ShowCase(element, mines);
        }
      });
    } else {
      show.innerHTML = numberShowed(isMinesbeside(button, mines));
    }
  }
}