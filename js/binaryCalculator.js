const res = document.getElementById("res")
const btns = [...document.querySelectorAll("button")];

const oper = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "×": (a, b) => a * b,
  "÷": (a, b) => Math.floor(a / b)
};

function action(e) {
  let pressed = document.getElementById(e.target.id);
  if (pressed.id === "btnSum") res.innerHTML += "+";
  if (pressed.id === "btnSub") res.innerHTML += "-";
  if (pressed.id === "btnMul") res.innerHTML += "×";
  if (pressed.id === "btnDiv") res.innerHTML += "÷";
  if (pressed.id === "btn0") res.innerHTML += "0";
  if (pressed.id === "btn1") res.innerHTML += "1";
  if (pressed.id === "btnClr") res.innerHTML = "";
  if (pressed.id === "btnEql") {
    // split between digits and symbols
    const [op1, operator, op2] = res.innerText.split(/\b/);
    
    //string to int binario base(2) octal(8) decimal(10)default

    num1 = parseInt(op1,2);
    num2 = parseInt(op2,2);

    result = oper[operator](num1, num2);
   
    // display result in string base (2)
    res.innerText = result.toString(2);
 
  }
}

btns.forEach(element => {
   element.addEventListener("click", action);
});


