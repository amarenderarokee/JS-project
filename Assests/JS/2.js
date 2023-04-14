const incrementBtn = document.getElementById("increment-btn");
const decrementBtn = document.getElementById("decrement-btn");
const resetBtn = document.getElementById("reset-btn");
const countEl = document.getElementById("count");

let count = 0;

incrementBtn.addEventListener("click", () => {
  count++;
  countEl.innerHTML = count;
});

decrementBtn.addEventListener("click", () => {
  console.log(count)
  // if (count >= 0) {
    --count;
    countEl.innerHTML = count;
  // }
});

resetBtn.addEventListener("click", () => {
  // if (count = 0) {
    countEl.innerHTML = 0;
  // }
})