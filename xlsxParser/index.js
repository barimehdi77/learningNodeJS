const xlsx = require('xlsx');
const http = require('http');
const express = require('express')


const RC = xlsx.readFile('./RecapCommandes.xlsx');
const RCSheets = RC.Sheets;

const data = RCSheets.map((sheet) => {

	const data = xlsx.utils.sheet_to_json(RCSheets);
})

// console.log(data);
const port = 8080;

const app = express()

app.use(express.json ());
app.get('/', (req, res) => {
  res.json(RCSheets)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
