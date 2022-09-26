const express = require("express")
const bodyParser = require("body-parser")
const app = express();

//extended is used to use the full full functionality of the body-parser
app.use(bodyParser.urlencoded({ extended: true }))

// This is to show the date on the webpage. 

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
})


//This is to post the value of the html page to backend so that logic can be exicuted.
app.post("/", function (req, res) {
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;
    res.send("The result of the calculation is " + result)

})

//This is to show the data in the terminal.
app.listen(3000, function () {
    console.log("server started at 3000");
}); 