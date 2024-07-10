const express = require("express")
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send("hello World")
})

app.get('/pawan', (req, res) => {
  res.send("Hello My Name Is Pawan Yadav")
})

app.listen(port, () => {
  console.log(`Server is Start ${port}`)
})