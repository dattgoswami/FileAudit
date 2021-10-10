import * as fs from 'fs';
import * as path from 'path';
import readline from 'readline';
// import { Observable } from 'rxjs';

function process_textfile(filename: string, callback: Function): void {
  const filenameSet: Set<string> = new Set<string>();
  const resultExtensionCounter: any = {};
  const extensionCounterMap = new Map<string, number>();
  //reference https://stackoverflow.com/questions/6156501/read-a-file-one-line-at-a-time-in-node-js
  const filePath = '../assets/' + filename;
  const lineReader = readline.createInterface({
    input: fs.createReadStream(path.join(__dirname, filePath))
  });
  lineReader.on('line', function (line: any) {
    if (checkJSONValidity(line)) {
      let lineJSON = JSON.parse(line);
      filenameSet.add(lineJSON.nm);
      // process_line(lineJSON);
    }
  });

  lineReader.on('close', function () {
    filenameSet.forEach(function (filename: string) {
      const filenameExtension: string[] = filename.split('.');
      const fileName = filenameExtension[0];
      const fileExt = filenameExtension[1];
      if (fileExt.length !== 0 && fileName.length !== 0) {
        if (!extensionCounterMap.has(fileExt)) {
          extensionCounterMap.set(fileExt, 1);
        } else {
          let count: any = extensionCounterMap.get(fileExt);
          count++;
          extensionCounterMap.set(fileExt, count as number);
        }
      }
    });
    extensionCounterMap.forEach((value, key) => {
      resultExtensionCounter[key] = value;
    });
    callback(resultExtensionCounter);
  });
}

//reference https://www.codegrepper.com/code-examples/javascript/node+js+to+check+if+content+of+file+is+a+valid+json
function checkJSONValidity(str: any) {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
}

// module.exports = checkJSONValidity;
export default process_textfile;
