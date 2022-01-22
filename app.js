// external import
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");
const cookieParser = require("cookie-parser");

// internal import
const {
    notFoundHandler,
    errorHandler
} = require("./middleware/common/errorHandler");
// router Import
const loginRouter = require("./router/loginRouter");
const usersRouter = require("./router/usersRouter");
const inboxRouter = require("./router/inboxRouter");


const app = express();
dotenv.config();

// database connection
mongoose.connect(process.env.MONGO_CONNECTION_START,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(() => console.log("database connection success"))
.catch(err => console.log(err));

// request parser
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// set view engin
app.set("view engine", "ejs");

// set static folder 
app.use(express.static(path.join(__dirname, "public")));

// parse cookies 
app.use(cookieParser(process.env.COOKIE_SECRET));

// route setup
app.use("/", loginRouter);
app.use("/users", usersRouter);
app.use("/inbox", inboxRouter);

//404 fot found error handling

app.use(notFoundHandler);

// common error
app.use(errorHandler);

app.listen(process.env.PORT, () => {
    console.log(`app listening to port ${process.env.PORT}`)
});
