import * as tf from "@tensorflow/tfjs";
import * as tfvis from "@tensorflow/tfjs-vis";

function run() {
  console.log(tf.version);
  console.log(tfvis.version_vis);

  tfvis.visor().toggleFullScreen();

  tfvis.render.table(tfvis.visor().surface({ name: "table" }), {
    headers: ["index", "age"],
    values: [
      [1, 200],
      [2, 100],
    ],
  });

  tfvis.render.barchart(tfvis.visor().surface({ name: "barchart" }), [
    { index: 1, value: 1 },
    { index: 2, value: 2 },
    { index: 3, value: 3 },
  ]);

  tfvis.render.confusionMatrix(tfvis.visor().surface({ name: "confusionMatrix" }), {
    values: [
      [0.7, 0.2, 0.1],
      [0.1, 0.7, 0.2],
      [0.2, 0.1, 0.7],
    ],
    tickLabels: ["Dog", "Cat", "Fish"],
  });

  tfvis.render.heatmap(tfvis.visor().surface({ name: "heatmap" }), {
    values: [
      [1, 2, 3],
      [2, 3, 2],
      [3, 2, 1],
    ],
    xTickLabels: ["First", "Second", "Third"],
    yTickLabels: ["A", "B", "C"],
  });

  tfvis.render.histogram(tfvis.visor().surface({ name: "histogram" }), [
    0.1,
    0.3,
    0.3,
    -0.1,
    0,
    0,
    NaN,
    Infinity,
    Infinity,
  ]);

  tfvis.render.linechart(tfvis.visor().surface({ name: "linechart" }), {
    values: [
      [
        { x: 0, y: 0 },
        { x: 0.5, y: 0.8 },
        { x: 1, y: 1 },
      ],
      [
        { x: 0, y: 1 },
        { x: 0.5, y: 0.3 },
        { x: 1, y: 0 },
      ],
    ],
    series: ["Performance", "Error"],
  });

  tfvis.render.scatterplot(
    tfvis.visor().surface({ name: "scatterplot" }),
    {
      values: [
        [
          { x: 0.1, y: 0.1 },
          { x: 0.5, y: 0.8 },
          { x: 0.9, y: 0.9 },
        ],
        [
          { x: 0, y: 1 },
          { x: 0.5, y: 0.3 },
          { x: 1, y: 0 },
        ],
      ],
      series: ["Performance", "Error"],
    },
    { xLabel: "label x" }
  );
}

const button = document.createElement("button");
button.textContent = "Run tfvis demo";
button.onclick = run;
document.body.appendChild(button);
