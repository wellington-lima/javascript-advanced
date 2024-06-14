const { error } = require('./src/constants')
const File = require('./src/file')
const { rejects, deepStrictEqual } = require('assert')
  ;
(async () => {
  {
    const filePath = './mocks/threeItems-valid.csv'
    const result = await File.csvToJson(filePath)
    const expected = [
      {
        "id": 123,
        "name": "John",
        "profession": "Javascript Developer",
        "age": "45",
        "birthDay": 1979
      },
      {
        "id": 456,
        "name": "Mary",
        "profession": "UX Design",
        "age": "25",
        "birthDay": 1999
      },
      {
        "id": 789,
        "name": "James",
        "profession": "Backend Developer",
        "age": "18",
        "birthDay": 2006
      }
    ]
    deepStrictEqual(JSON.stringify(result), JSON.stringify(expected))
  }

  /* {
    const filePath = './mocks/emptyFile-invalid.csv'
    const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE)
    const result = await File.csvToJson(filePath)
    await rejects(result, rejection)
  } */

  /* {
    const filePath = './mocks/invalid-header.csv'
    const rejection = new Error(error.FILE_FIELDS_ERROR_MESSAGE)
    const result = File.csvToJson(filePath)
    await rejects(result, rejection)
  } */


})()