var express = require("express");
var app = express();
var port = process.env.PORT|| 3000;

// if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
//   }
app.listen(port)


