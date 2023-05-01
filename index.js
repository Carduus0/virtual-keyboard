const bodyPage = document.body;
const wrapper = document.createElement("div");
/* const row1 = [
  {
    text: "Backquote",
    code: "`",
  },
  "Digit1",
  "Digit2",
  "Digit3",
  "Digit4",
  "Digit5",
  "Digit6",
  "Digit7",
  "Digit8",
  "Digit9",
  "Digit0",
  "Minus",
  "Equal",
  "Backspace",
];
 */

wrapper.className = "wrapper";

wrapper.innerHTML = ` <h1 class="title">RSSchool Virtual keyboard</h1>
  <textarea class="textarea" rows="5" cols="50"></textarea>
  <div class="keyboard">
      <div class="row row-1">
          <span class="key"></span>
          <span class="key">1</span>
          <span class="key">2</span>
          <span class="key">3</span>
          <span class="key">4</span>
          <span class="key">5</span>
          <span class="key">6</span>
          <span class="key">7</span>
          <span class="key">8</span>
          <span class="key">9</span>
          <span class="key">0</span>
          <span class="key">-</span>
          <span class="key">=</span>
          <span class="key backspace">Backspace</span>
      </div>
      <div class="row row-2">
          <span class="key tab">Tab</span>
          <span class="key">q</span>
          <span class="key">w</span>
          <span class="key">e</span>
          <span class="key">r</span>
          <span class="key">t</span>
          <span class="key">y</span>
          <span class="key">u</span>
          <span class="key">i</span>
          <span class="key">o</span>
          <span class="key">p</span>
          <span class="key">[</span>
          <span class="key">]</span>
          <span class="key backslash"></span>
          <span class="key del">Del</span>
      </div>
      <div class="row row-3">
          <span class="key capslock">Caps Lock</span>
          <span class="key">a</span>
          <span class="key">s</span>
          <span class="key">d</span>
          <span class="key">f</span>
          <span class="key">g</span>
          <span class="key">h</span>
          <span class="key">j</span>
          <span class="key">k</span>
          <span class="key">l</span>
          <span class="key">;</span>
          <span class="key">'</span>
          <span class="key enter">Enter</span>
      </div>
      <div class="row row-4">
          <span class="key shiftleft">Shift</span>
          <span class="key">z</span>
          <span class="key">x</span>
          <span class="key">c</span>
          <span class="key">v</span>
          <span class="key">b</span>
          <span class="key">n</span>
          <span class="key">m</span>
          <span class="key">,</span>
          <span class="key">.</span>
          <span class="key">/</span>
          <span class="key arrowup">↑</span>
          <span class="key shiftright">Shift</span>
      </div>
      <div class="row row-5">
          <span class="key ctrlleft">Ctrl</span>
          <span class="key win">Win</span>
          <span class="key altleft">Alt</span>
          <span class="key space"> </span>
          <span class="key altright">Alt</span>
          <span class="key arrowleft">←</span>
          <span class="key arrowdown">↓</span>
          <span class="key arrowright">→</span>
          <span class="key ctrlright">Ctrl</span>
      </div>
  </div>
  <p class="description">Клавиатура создана в операционной системе Windows</p>
  <p class="lang">Для переключения языка нажмите левые ctrl+alt</p>`;

bodyPage.append(wrapper);
const keyboard = document.querySelector(".keyboard");
const textArea = document.querySelector(".textarea");
const keys = document.querySelectorAll(".key");
// const tab = document.querySelector(".tab");
const space = document.querySelector(".space");
// const win = document.querySelector(".win");
const capsLock = document.querySelector(".capslock");
const shiftLeft = document.querySelector(".shiftleft");
const shiftRight = document.querySelector(".shiftright");
// const altLeft = document.querySelector(".alttleft");
// const altRight = document.querySelector(".altright");
// const del = document.querySelector(".del");
// const backspace = document.querySelector(".backspace ");
// const enter = document.querySelector(".tab");
for (let i = 0; i < keys.length; i += 1) {
  keys[i].setAttribute("keyname", keys[i].innerText);
  keys[i].setAttribute("loverCasename", keys[i].innerText.toLowerCase());
}
window.addEventListener("keydown", (e) => {
  for (let i = 0; i < keys.length; i += 1) {
    if (
      e.key === keys[i].getAttribute("keyname") ||
      e.key === keys[i].getAttribute("loverCasename")
    ) {
      keys[i].classList.add("active");
    }
    if (e.code === "Space") {
      space.classList.add("active");
    }
    if (e.code === "ShiftLeft") {
      shiftRight.classList.remove("active");
    }
    if (e.code === "ShiftRight") {
      shiftLeft.classList.remove("active");
    }
    if (e.code === "CapsLock") {
      capsLock.classList.toggle("active");
    }
  }
});
window.addEventListener("keyup", (e) => {
  for (let i = 0; i < keys.length; i += 1) {
    if (
      e.key === keys[i].getAttribute("keyname") ||
      e.key === keys[i].getAttribute("loverCasename")
    ) {
      // keys[i].classList.remove(".active");
      // keys[i].classList.add(".remove");
    }
    if (e.code === "Space") {
      space.classList.remove("active");
    }
    if (e.code === "ShiftLeft") {
      shiftRight.classList.remove("active");
    }
    if (e.code === "ShiftRight") {
      shiftLeft.classList.remove("active");
      //  shiftLeft.classList.remove(".remove");
    }
    setTimeout(() => keys[i].classList.remove("active"), 1000);
  }
});
/* -----------------------------Mouse-------------------------------*/
keyboard.addEventListener("click", (e) => {
  for (let i = 0; i < keys.length; i += 1) {
    // const kEy = keys[i].getAttribute("keyname");
    if (
      e.key === keys[i].getAttribute("keyname") ||
      e.key === keys[i].getAttribute("loverCasename")
    ) {
      keys[i].classList.add("active");
      textArea.value += e.key;
      // textArea.value += String.fromCharCode(action);
    }
  }
});
// function handleClick(event) {
// const action = event.target.dataset.keyname;
// textArea.value += String.fromCharCode(action);
//  const action = event.dataset.keyname;
//  textArea.value += action;
/// }

// keys.forEach((item) => item.addEventListener("click", handleClick));
/* document.querySelectorAll(".key").forEach((elem) => {
  const el = elem;
  el.onclick = (event) => {
    document.querySelectorAll(".key").forEach((element) => {
      element.classList.remove(".active");
    });
    const code = event.getAttribute("keyname");
  };
}); */

/*eslint-disable*/
