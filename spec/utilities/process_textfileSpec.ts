import process_textfile from '../../src/utilities/process_textfile';
// import checkJSONValidity from '../../src/utilities/process_textfile';

describe('test suite for function process textfile', () => {
  it('should return specific result when called', () => {
    const compareTo: any = { ext: 1, pdf: 1 };
    process_textfile('data.txt', function (result_received: any) {
      expect(result_received).toEqual(compareTo);
    });
  });
  it('should not return any response when the filename is not specified', () => {
    const compareTo: any = {};
    process_textfile('test2_data.txt', function (result_received: any) {
      expect(result_received).toEqual(compareTo);
    });
  });
  it('should not return any response when the extension is not specified', () => {
    const compareTo: any = {};
    process_textfile('test3_data.txt', function (result_received: any) {
      expect(result_received).toEqual(compareTo);
    });
  });
});
// describe('test suite for function to check if the json is valid or not', () => {
//   it('should  return true when the json is invalid', () => {
//     const dataJSON: string =
//       '{"ts":1551140352,"pt":55,"si":"3380fb19-0bdb-46ab-8781-e4c5cd448074","uu":"0dd24034-36d6-4b1e-a6c1-a52cc984f105","bg":"77e28e28-745a-474b-a496-3c0e086eaec0","sha":"abb3ec1b8174043d5cd21d21fbe3c3fb3e9a11c7ceff3314a3222404feedda52","nm":"index.ts","ph":"/efvrfutgp/expgh/phkkrw","dp":2}';
//     checkJSONValidity(dataJSON, function (result_received: any) {
//       expect(result_received).toEqual(true);
//     });
//   });
// });
