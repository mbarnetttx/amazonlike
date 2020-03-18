var mysql = require("mysql");
var inquirer = require("inquirer");
require ("console.table");
require ("colors");



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
function start() {
   // console.log('I am connected')
   //Connecting to the database to query the departments 

    // select all from the table named PRODUCTS, 
   connection.query("SELECT * FROM products", function (err, res){
       if (err) throw err;
       console.log("----------------------------------");
       console.log("----------------------------------");
       console.log("WELCOME TO BAMAZON")
       console.log("----------------------------------");
       console.log("Select a product from the table below")
       console.log("----------------------------------");
       console.log("----------------------------------");


       //Draw the table within the terminal 
       console.table(res);


        // ask customer which item they would like to buy
       promptCustomerWhichItem(res);

   });
}

function promptCustomerWhichItem(inventory) {
    //Ask the user what would they like from the inventory 
    inquirer.prompt([
        {
            type: 'input',
            name: 'choice',
            message: 'What is the id of the product you would like to buy?',
            // check the input value
            validate: function (val) {
                return val > 0 || val.toLowerCase() === 'q';
                // return results as long as they make a choice more than 0
            }
        }
    ])
    .then(function(val){
 
    // run exit function, while returning the comparison of inventory vs user request
 Exit(val.choice);

// customerChoice = comparison of inventory vs user request
 var customerChoice = parseInt(val.choice);
// product = inventoryCheck function, that takes in inventory vs user request
 var product = inventoryCheck(customerChoice, inventory);
 console.log('checking')
// ask the customer how many of the item they want, and run the inventoryCheck
if (product) {
    HowMany(product);
}
else {
    
    // console.log("\n !!!!   NOT ENOUGH IN STOCK, PLEASE TRY AGAIN   !!!!");
}
    });
   
    //allow purchase is available 
}


//After the customer decides its option you will promt to ask how many 
function HowMany(product) {
    inquirer.prompt([
        {
        type:'input',
        name:'quantity', 
        message: "How many would you like? [Quit with q]" , 
        validate:  function (val) {
            // return the values as an integer, as long as a selection is made. also check the value if Q is entered
            return val > 0 || val.toLowerCase() === 'q';
        }
    }

])
//checking to see if there is enough in stock to fill the order
.then (function(val){
    Exit(val.quantity);

    // change the quantity to an integer
    var quantity = parseInt(val.quantity);

    // if quantity requested is more than what is in stock, run next line, then return to the start function

    if(quantity>product.stock_quantity){
        console.log("\n !!!!   NOT ENOUGH IN STOCK, PLEASE TRY AGAIN   !!!!".green);
        start();
    }
// if there is enough in inventory to fulfil the request, run the purchase function
    else {
       // console.log('make purchase')
       purchase(product, quantity)
       
    }


})

}




//Checks the inventory
function inventoryCheck(customerChoice, inventory){

    //loop through the array of items in the databse -
        //to assure the is enough for the client 
    //forloop
    for(var i = 0; i < inventory.length; i++){
        if (inventory[i].item_id === customerChoice){
            return inventory[i];
        }
    }
    return null;
}








//Exit code 
function Exit (choice) {
    // if they enter q, exit 
    if(choice ==='q'){
        console.log('you selected to leave');
        process.exit(0);
    }
}




//Purchasing function 
function purchase(product, quantity) {
    connection.query (
        "UPDATE products SET stock_quantity = stock_quantity - ? WHERE item_id = ?",
        [quantity, product.item_id],
        function(err, res) {
            console.log("Thank you for your purchase ".green + quantity + " " + product.product_name.green + "'s!".green);
            start();
        }
    );
}