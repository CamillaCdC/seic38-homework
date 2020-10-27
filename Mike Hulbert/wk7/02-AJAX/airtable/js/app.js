require('dotenv').config();

const apiKey = process.env.API_KEY;
const baseKey = process.env.BASE_KEY;

var Airtable = require('airtable');
var base = new Airtable({
  apiKey: apiKey
}).base(baseKey);



const table = base('Design projects'); // Base name

//-------------------- Query Airtable: all Records -----------------------//

const getRecords = async () => {
  const records = await table.select({
    maxRecords: 3,
    view: 'All projects'
  }).firstPage();
  console.log(records)
}
// getRecords();

//--------------------- Query Airtable: by Record Id ---------------------//

const getRecordById = async (id) => {
  const record = await table.find(id);
  console.log(record.fields.Name);
}
getRecordById('recFqRzewAuNdO9Vp')

// --------------------- Create Table Record -----------------------------//

const createRecord = async (fields) => {
  const createdRecord = await table.create(fields);
  console.log(minifyRecord(createdRecord));
}

//------------------------ Update Table Record -------------------------//

const updateRecord = async (id, fields) => {
  const updatedRecord = await table.update(id, fields);
  console.log(minifyRecord(updatedRecord));
}

//------------------------- Delete Table Record ----------------------//

const deleteRecord = async (id) => {
  const deletedRecord = await table.destroy(id);
  console.log(minifyRecord(deletedRecord));
}

//------------------------ Minify Data Returned ---------------------//

const minifyRecord = (record) => {
  return {
    id: record.id,
    fields: record.fields
  }
}
//
