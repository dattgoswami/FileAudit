import * as fs from 'fs';
import * as path from 'path';
// import { Observable } from 'rxjs';

let filenameSet: Set<string> = new Set<string>();

function process_textfile(filename: string): string {
  let resultExtensionCounter: any = {};
  const extensionCounterMap = new Map<string, number>();
  //reference https://stackoverflow.com/questions/6156501/read-a-file-one-line-at-a-time-in-node-js
  let filePath = '../assets/' + filename;
  let lineReader = require('readline').createInterface({
    input: require('fs').createReadStream(path.join(__dirname, filePath))
  });
  lineReader.on('line', function (line: any) {
    if (checkJSONValidity(line)) {
      let lineJSON = JSON.parse(line);
      //   filenameSet.add(lineJSON.nm);
      process_line(lineJSON);
    }
  });
  filenameSet.forEach(function (filename: string) {
    let filenameExtension: string[] = filename.split('.');
    if (filenameExtension[0].length != 0 && filenameExtension[1].length != 0) {
      if (!extensionCounterMap.has(filenameExtension[1])) {
        extensionCounterMap.set(filenameExtension[1], 1);
      } else {
        let count: any = extensionCounterMap.get(filenameExtension[1]);
        count++;
        extensionCounterMap.set(filenameExtension[1], count as number);
      }
    }
  });
  extensionCounterMap.forEach((value, key) => {
    resultExtensionCounter[key] = value;
  });

  return resultExtensionCounter;
}

function process_line(lineJSON: any) {
  filenameSet.add(lineJSON.nm);
}

//reference https://www.codegrepper.com/code-examples/javascript/node+js+to+check+if+content+of+file+is+a+valid+json
function checkJSONValidity(str: any) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

// module.exports = checkJSONValidity;
export default process_textfile;
