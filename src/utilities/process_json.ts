function process_json(jsonData: any): string {
  let filenameSet = new Set<string>();
  const extensionCounterMap = new Map<string, number>();
  let result: any = {};

  for (let i = 0; i < jsonData.length; i++) {
    filenameSet.add(jsonData[i].nm);
  }
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
    result[key] = value;
  });

  return result;
}

export default process_json;
