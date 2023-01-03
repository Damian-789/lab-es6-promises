// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync

// setTimeOut pero no se como aplicarlo
getInstruction(
  "mashedPotatoes",
  0,
  (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  },
  (error) => console.log(error)
);

getInstruction(
  "mashedPotatoes",
  1,
  (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  },
  (error) => console.log(error)
);

getInstruction(
  "mashedPotatoes",
  2,
  (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  },
  (error) => console.log(error)
);

getInstruction(
  "mashedPotatoes",
  3,
  (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  },
  (error) => console.log(error)
);

getInstruction(
  "mashedPotatoes",
  4,
  (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  },
  (error) => console.log(error)
);

getInstruction(
  "mashedPotatoes",
  5,
  (step6) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step6}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  },
  (error) => console.log(error)
);

// Iteration 1 - using callbacks
// ...

// Iteration 2 - using promises+

const result = obtainInstruction("steak", 0)

console.log(obtainInstruction("steak", 0))






/*
const steakDom = document.querySelector("#steak");

obtainInstruction("steak", 0)
  .then((step1) => {
    steakDom.innerHTML += `<li>${step1}</li>`;
  })
  .then(() => obtainInstruction("steak", 1))
  .catch((err) => console.log(err));
  */

// Iteration 3 using async/await
// ...

async function asyncAwait() {
  const data = await obtainInstruction("brusselsSprouts", 0);
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${data}</li>`;
}
asyncAwait();

async function asyncAwait() {
  const data = await obtainInstruction("brusselsSprouts", 1);
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${data}</li>`;
}
asyncAwait();

async function asyncAwait() {
  const data = await obtainInstruction("brusselsSprouts", 2);
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${data}</li>`;
}
asyncAwait();

async function asyncAwait() {
  const data = await obtainInstruction("brusselsSprouts", 3);
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${data}</li>`;
}
asyncAwait();

async function asyncAwait() {
  const data = await obtainInstruction("brusselsSprouts", 4);
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${data}</li>`;
}
asyncAwait();

async function asyncAwait() {
  const data = await obtainInstruction("brusselsSprouts", 5);
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${data}</li>`;
}
asyncAwait();

async function asyncAwait() {
  const data = await obtainInstruction("brusselsSprouts", 6);
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${data}</li>`;
}
asyncAwait();

async function asyncAwait() {
  const data = await obtainInstruction("steak", 7);
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${data}</li>`;
}
asyncAwait();

console.log(data);

// Bonus 2 - Promise all
// ...
