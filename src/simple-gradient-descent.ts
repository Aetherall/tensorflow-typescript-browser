function run() {
  const f = (x: number) => 3 * x + 1;

  let m = 0;
  let b = 0;

  for (let n = 0; n < 1000; n++) {
    const x = Math.floor(Math.random() * 100) / 10;
    const y = f(x);
    const guess = m * x + b;
    const error = y - guess;
    m = m + error * x * 0.02;
    b = b + error * 0.02;
  }

  console.log(m, b);
}

const button = document.createElement("button");
button.textContent = "Run simple gradient descent";
button.onclick = run;
document.body.appendChild(button);
