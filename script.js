const express = require("express");
const app = express();
app.use(express.json());
const arr1 = [];

// Kata 1.1

app.get("/currentDate", (req, res) => {
  const fechaHoy = new Date().toString();
  res.send(fechaHoy);
});
//Kata 1.2

app.get("/greet", (req, res) => {
  res.send("Hola mundo");
});

//Kata 3

app.get("/greet/:name", (req, res) => {
  res.send("Hola " + req.params.name);
});

// Kata 4

app.get("/checkEvenNumber/:number", (req, res) => {
  if (req.params.number % 2 === 0) {
    res.status(200).send();
  } else {
    res.status(400).send();
  }
});

// Kata 5

app.get("/checkEvenNumber/:number", (req, res) => {
  if (req.params.number % 2 === 0) {
    res.status(200).send();
  } else if (req.params.number % 2 !== 0) {
    res.status(400).send();
  } else if (req.params.number === NaN) {
    res.status(400).send();
  }
});

// Kata 6

app.get("/add/:number1/:number2", (req, res) => {
  res.send(String(parseInt(req.params.number1) + parseInt(req.params.number2)));
});

// Kata 7

app.post("/number/:number2", (req, res) => {
  const addNumber = parseInt(req.params.number2);
  arr1.push(addNumber);
  res.send(arr1);
});

// Kata 8

app.delete("/number/:number2", (req, res) => {
  const deleteNumber = parseInt(req.params.number2);
  arr1.splice(deleteNumber);
  res.send(arr1);
});

// Kata 9

app.put("/number/:number2/:number3", (req, res) => {
  const changeNumber = parseInt(req.params.number2);
  const changeNumber2 = parseInt(req.params.number3);
  arr1.splice(changeNumber);
  arr1.push(changeNumber2);
  res.send(arr1);
});

// Kata 9.5

app.post("/students", (req, res) => {
  console.log(req.body.firstname);
});
// Kata 10

app.post("/countFields", (req, res) => {
  const body = req.body;
  const elementsNumber = Object.keys(body).length;
  res.send(String(elementsNumber));
});

// Kata 11

app.post("/createUser", (req, res) => {
  const body = req.body;
  const objectToArray = Object.keys(body);
  objectToArray.forEach((id) => objectToArray[i].id);
  res.send(String(objectToArray));
});

app.listen(4001, () => console.log("Server on..."));
