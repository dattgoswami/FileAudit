# Liquidation Monitor

The task of this assignment is to build a json parser that gets the extensions and number of unique filenames with those extensions.

## Getting Started

The src folder has index.ts which creates the server and starts listening on port 3000. The routes folder has index.ts file which creates an express router and configures the extensions endpoint to use the module extensions from routes/api/extensions.ts.

There is a function process_textfile which takes filename as the argument and parses the file line by line and checks if the JSON is valid or not and creates a list of unique filenames and stores it in a set. This is set is then parsed and used to create a hashmap of extensions and their counts. It is located at src/utilities/process_textfile.ts

The other function process_json takes JSON data as argument and displays the required result. It is located in folder src/utilities/process_json.ts

## Instructions

Steps to run the project:
Once you have cloned the project repo, navigate to the project directory.

```
npm install
npm run test
npm run start
//OR
node dist/index.js
```

To run the prettier and linting scripts use following commands:
npm run prettier
npm run lint

After running the npm run start or node dist/index.js you will be prompted that the server has started on port 3000.
Go to this url in the browser:
[http://localhost:3000/api/extensions] - this would display the required output after parsing the data.txt file
will display {"ext":1,"pdf":1} in the browser and in the terminal
[http://localhost:3000/api/extensions/json] - this would display the output after parsing the data.json file(present in the assets directory of the src folder), it does not do any validation of JSON
will display {"ext":1,"pdf":1,"txt":2,"java":1} in the browser and in the terminal
[http://localhost:3000/api/] - this would show you all the endpoints that are available

## Test Cases

Test cases are in file spec/utilities/process_jsonSpec.ts ,
spec/utilities/process_textfileSpec.ts and
spec/routes/api/extensionsSpec.ts

More test cases can be added about

1. The filename containing special characters
2. The length of the filename exceeds certain length

## Note

data.txt has first three entries as valid JSON and the last four entries are invalid JSON's.
data.json contains all valid entries
The test data is in folder dist/src/assets
