var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "amazon_DB"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  start();
});

// function which prompts the user for what action they should take
function start() {
  inquirer
    .prompt({
      name: "selectCategory",
      type: "list",
      message: "Which category would you like to search?",
      choices: ["FOOD", "FURNITURE", "ELECTRONICS", "APPAREL", "ACCESSORIES"]
    })
    .then(function(answer) {
      // based on their answer, either call the bid or the post functions
      if (answer.selectproduct === "FOOD") {
        displayFood();
      }
      if (answer.selectproduct === "ELECTRONICS") {
        displayElectronics();
      }
      if (answer.selectproduct === "APPAREL") {
        displayApparel();
      }
      
    });

}


// // function to handle posting new items up for auction
function displayFood() {

    inquirer
    .prompt({
      name: "selectFood",
      type: "list",
      message: "Which item would you like to buy?",
      choices: ["GRANOLA", "APPLES", "YOGURT", "GO_BACK"]
    })
    .then(function(answer) {
      // based on their answer, either call the bid or the post functions
      if (answer.selectFood === "GRANOLA") {
        displayGranola();
      }
      if (answer.selectFood === "APPLES") {
        displayApples();
      }
      if (answer.selectFood === "YOGURT") {
        displayYogurt();
      }
      if (answer.selectFood === "GO_BACK") {
        goBackMain();
      }
    })
}

function displayGranola() {

    inquirer
    .prompt({
      name: "granola",
      type: "list",
      message: "This item costs $5, are you sure you want to buy?",
      choices: ["YES", "NO"]
    })
    .then(function(answer) {
      if (answer.granola === "YES") {
        granolaInventory();
      }
      if (answer.granola === "NO") {
          goBackToFoodList();
      }
    })
}

function granolaInventory(){
    inquirer
    .prompt([
      {
        name: "granolaInventory",
        type: "input",
        message: "How may would you like to buy?"
      },
    ])
}

function displayApples() {

    inquirer
    .prompt({
      name: "apples",
      type: "list",
      message: "This item costs $4, are you sure you want to buy?",
      choices: ["YES", "NO"]
    })
    .then(function(answer) {
      if (answer.apples === "YES") {
        appleInventory();
      }
      if (answer.apples === "NO") {
          goBackToFoodList();
      }
    })
}

function appleInventory(){
    inquirer
    .prompt([
      {
        name: "appleInventory",
        type: "input",
        message: "How may would you like to buy?"
      },
    ])
}

function displayYogurt() {

    inquirer
    .prompt({
      name: "yogurt",
      type: "list",
      message: "This item costs $8, are you sure you want to buy?",
      choices: ["YES", "NO"]
    })
    .then(function(answer) {
      if (answer.yogurt === "YES") {
        yogurtInventory();
      if (answer.yogurt === "NO") {
          goBackToFoodList();
      }
    }})
}
function yogurtInventory(){
    inquirer
    .prompt([
      {
        name: "yogurtInventory",
        type: "input",
        message: "How may would you like to buy?"
      },
    ])
}

function goBackToFoodList(){
    // here put a function to return to the food list
}





function displayElectronics() {

    inquirer
    .prompt({
      name: "selectElectronics",
      type: "list",
      message: "Which item would you like to buy?",
      choices: ["UNIVERSAL_REMOTE", "NINTENDO_SWITCH", "METAL_DETECTOR", "GO_BACK"]
    })
    .then(function(answer) {
      // based on their answer, either call the bid or the post functions
      if (answer.selectElectronics === "UNIVERSAL_REMOTE") {
        displayRemote();
      }
      if (answer.selectElectronics === "NINTENDO_SWITCH") {
        displayNintendo();
      }
      if (answer.selectElectronicst === "METAL_DETECTOR") {
        displayMetal();
      }
      if (answer.selectElectronics === "GO_BACK") {
        goBackMain();
      }
    })
}

function displayRemote() {

    inquirer
    .prompt({
      name: "remote",
      type: "list",
      message: "This item costs $20, are you sure you want to buy?",
      choices: ["YES", "NO"]
    })
    .then(function(answer) {
      if (answer.remote === "YES") {
        remoteInventory();
      }
      if (answer.remote === "NO") {
          goBackToElectronicsList();
      }
    })
}

function remoteInventory(){
    inquirer
    .prompt([
      {
        name: "remoteInventory",
        type: "input",
        message: "How may would you like to buy?"
      },
    ])
}

// get this to check the inventory and either buy or tell the customer "insufficient stock"

function displayNintendo() {

    inquirer
    .prompt({
      name: "nintendo",
      type: "list",
      message: "This item costs $450, are you sure you want to buy?",
      choices: ["YES", "NO"]
    })
    .then(function(answer) {
      if (answer.nintento === "YES") {
        nintendoInventory();
      }
      if (answer.nintendo === "NO") {
          goBackToElectronicsList();
      }
    })
}

function nintendoInventory(){
    inquirer
    .prompt([
      {
        name: "nintendoInventory",
        type: "input",
        message: "How may would you like to buy?"
      },
    ])
}



function displayMetal() {

    inquirer
    .prompt({
      name: "metal",
      type: "list",
      message: "This item costs $600, are you sure you want to buy?",
      choices: ["YES", "NO"]
    })
    .then(function(answer) {
      if (answer.metal=== "YES") {
        metalInventory();
      }
      if (answer.metal === "NO") {
          goBackToElectronicsList();
      }
    })
}

function metalInventory(){
    inquirer
    .prompt([
      {
        name: "metalInventory",
        type: "input",
        message: "How may would you like to buy?"
      },
    ])
}

function goBackToElectronicsList(){
    // here put a function to return to electronics list
}

function displayApparel() {

    inquirer
    .prompt({
      name: "selectApparel",
      type: "list",
      message: "Which item would you like to buy?",
      choices: ["SHOES", "JACKET", "SKI_PANTS", "GO_BACK"]
    })
    .then(function(answer) {
      // based on their answer, either call the bid or the post functions
      if (answer.selectApparel === "SHOES") {
        displayShoes();
      }
      if (answer.selectApparel === "JACKET") {
        displayJacket();
      }
      if (answer.selectApparel === "SKI_PANTS") {
        displayPants();
      }
      if (answer.selectApparel === "GO_BACK") {
        goBackMain();
      }
    })
}

function displayShoes() {

    inquirer
    .prompt({
      name: "shoes",
      type: "list",
      message: "This item costs $40, are you sure you want to buy?",
      choices: ["YES", "NO"]
    })
    .then(function(answer) {
      if (answer.shoes === "YES") {
        shoeInventory();
      }
      if (answer.shoes === "NO") {
          goBackToApparelList();
      }
    })
}

function shoeInventory(){
    inquirer
    .prompt([
      {
        name: "shoeInventory",
        type: "input",
        message: "How may would you like to buy?"
      },
    ])
}

// get this to check the inventory and either buy or tell the 
// customer "insufficient stock"

function displayJacket() {

    inquirer
    .prompt({
      name: "jacket",
      type: "list",
      message: "This item costs $75, are you sure you want to buy?",
      choices: ["YES", "NO"]
    })
    .then(function(answer) {
      if (answer.selectproduct === "YES") {
        jacketInventory();
      }
      if (answer.selectproduct === "NO") {
          goBackToApparelList();
      }
    })
}

function jacketInventory(){
    inquirer
    .prompt([
      {
        name: "jacketInventory",
        type: "input",
        message: "How may would you like to buy?"
      },
    ])
}



function displayPants() {

    inquirer
    .prompt({
      name: "pants",
      type: "list",
      message: "This item costs $100, are you sure you want to buy?",
      choices: ["YES", "NO"]
    })
    .then(function(answer) {
      if (answer.selectproduct === "YES") {
        pantsInventory();
      }
      if (answer.selectproduct === "NO") {
          goBackToApparelList();
      }
    })
}

function pantsInventory(){
    inquirer
    .prompt([
      {
        name: "pantsInventory",
        type: "input",
        message: "How may would you like to buy?"
      },
    ])
}

function goBackToApparelList(){
    // here put a function that returns to apparel list
}

function goBackMain(){
    // here put the function to use on all list pages t
    // back to the front of the store
}    