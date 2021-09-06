import * as tf from '@tensorflow/tfjs'

function run() {
  const f = (x: tf.Scalar) => x.mul(3).add(1);

  const m = tf.variable(tf.scalar(Math.random()))
  const b = tf.variable(tf.scalar(Math.random()));

  for (let n = 0; n < 1000; n++) {
    const x = tf.scalar(Math.floor(Math.random() * 100) / 10);
    const y = f(x);
    const guess = m.mul(x).add(b);
    const error = y.sub(guess);
    m.assign(m.add(error.mul(x).mul(0.02)))
    b.assign(b.add(error.mul(0.02)))
  }

  console.log(m.toString(), b.toString());
}

const button = document.createElement("button");
button.textContent = "Run tensor gradient descent";
button.onclick = run;
document.body.appendChild(button);

export {}