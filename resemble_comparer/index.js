const playwright = require('playwright');
const compareImages = require("resemblejs/compareImages")
const config = require("./config.json");
const fs = require('fs');

const { v3Directory, v4Directory, options } = config;

async function executeTest() {
  let resultInfo = {}
  let datetime = new Date().toISOString().replace(/:/g, ".");

  let features = fs.readdirSync(v3Directory);


  for (let index = 0; index < features.length; index++) {
    const feature = features[index];

    let screenshots = fs.readdirSync(`${v3Directory}/${feature}`).map(function (item) {
      let num = item.split('.')
      return parseInt(num, 10);
    });
    screenshots = screenshots.sort(sorter);

    for (let j = 0; j < screenshots.length; j++) {
      const step = screenshots[j];

      const data = await compareImages(
        fs.readFileSync(`${v3Directory}/${feature}/${step}.png`),
        fs.readFileSync(`${v4Directory}/${feature}/${step}.png`),
        options
      );

      console.log(data);

      resultInfo[feature] = {
        isSameDimensions: data.isSameDimensions,
        dimensionDifference: data.dimensionDifference,
        rawMisMatchPercentage: data.rawMisMatchPercentage,
        misMatchPercentage: data.misMatchPercentage,
        diffBounds: data.diffBounds,
        analysisTime: data.analysisTime
      }

      if (!fs.existsSync('./results')) {
        fs.mkdirSync('./results', {
          recursive: true
        });
      }

      if (!fs.existsSync(`./results/${feature}`)) {
        fs.mkdirSync(`./results/${feature}`, {
          recursive: true
        });
      }
      fs.writeFileSync(`./results/${feature}/compare-${step}.png`, data.getBuffer());
    };
  };

  /*
  
  
  
  fs.writeFileSync(`./results/${datetime}/report.html`, createReport(datetime, resultInfo));
  fs.copyFileSync('./index.css', `./results/${datetime}/index.css`);
  */
  console.log('------------------------------------------------------------------------------------')
  console.log("Execution finished. Check the report under the results folder")
  return resultInfo;
}
(async () => console.log(await executeTest()))();

function browser(b, info) {
  return `<div class=" browser" id="test0">
    <div class=" btitle">
    <h2>Browser: ${b}</h2>
    <p>Data: ${JSON.stringify(info)}</p>
    </div>
    <div class="imgline">
    <div class="imgcontainer">
    <span class="imgname">Reference</span>
    <img class="img2" src="before-${b}.png" id="refImage" label="Reference">
    </div>
    <div class="imgcontainer">
    <span class="imgname">Test</span>
    <img class="img2" src="after-${b}.png" id="testImage" label="Test">
    </div>
    </div>
    <div class="imgline">
    <div class="imgcontainer">
    <span class="imgname">Diff</span>
    <img class="imgfull" src="./compare-${b}.png" id="diffImage" label="Diff">
    </div>
    </div>
    </div>`
}

function createReport(datetime, resInfo) {
  return `
    <html>
    <head>
    <title> VRT Report </title>
    <link href="index.css" type="text/css" rel="stylesheet">
    </head>
    <body>
    <h1>Report for 
    <a href="${config.url}"> ${config.url}</a>
    </h1>
    <p>Executed: ${datetime}</p>
    <div id="visualizer">
    ${config.browsers.map(b => browser(b, resInfo[b]))}
    </div>
    </body>
    </html>`
}

function sorter(a, b) {
  if (a < b) return -1;  // any negative number works
  if (a > b) return 1;   // any positive number works
  return 0; // equal values MUST yield zero
}