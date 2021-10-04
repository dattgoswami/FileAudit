import process_json from '../../src/utilities/process_json';

describe('test suite for function process json', () => {
  it('should return specific result when called', () => {
    const result = process_json([
      {
        ts: 1551140352,
        pt: 55,
        si: '3380fb19-0bdb-46ab-8781-e4c5cd448074',
        uu: '0dd24034-36d6-4b1e-a6c1-a52cc984f105',
        bg: '77e28e28-745a-474b-a496-3c0e086eaec0',
        sha: 'abb3ec1b8174043d5cd21d21fbe3c3fb3e9a11c7ceff3314a3222404feedda52',
        nm: 'note.txt',
        ph: '/efvrfutgp/expgh/phkkrw',
        dp: 2
      }
    ]);
    const compareTo: any = { txt: 1 };
    expect(result).toEqual(compareTo);
  });
  it('should not return any response when the filename is not specified', () => {
    const result = process_json([
      {
        ts: 1551140352,
        pt: 55,
        si: '3380fb19-0bdb-46ab-8781-e4c5cd448074',
        uu: '0dd24034-36d6-4b1e-a6c1-a52cc984f105',
        bg: '77e28e28-745a-474b-a496-3c0e086eaec0',
        sha: 'abb3ec1b8174043d5cd21d21fbe3c3fb3e9a11c7ceff3314a3222404feedda52',
        nm: '.java',
        ph: '/some_directory/no_filename',
        dp: 2
      }
    ]);
    const compareTo: any = {};
    expect(result).toEqual(compareTo);
  });
  it('should not return any response when the extension is not specified', () => {
    const result = process_json([
      {
        ts: 1551140352,
        pt: 55,
        si: '3380fb19-0bdb-46ab-8781-e4c5cd448074',
        uu: '0dd24034-36d6-4b1e-a6c1-a52cc984f105',
        bg: '77e28e28-745a-474b-a496-3c0e086eaec0',
        sha: 'abb3ec1b8174043d5cd21d21fbe3c3fb3e9a11c7ceff3314a3222404feedda52',
        nm: 'noextension.',
        ph: '/some_directory',
        dp: 2
      }
    ]);
    const compareTo: any = {};
    expect(result).toEqual(compareTo);
  });
});
