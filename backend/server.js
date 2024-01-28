// Requiring module
const express = require('express');
const connectDB = require('./database/db');
const cors = require("cors");

const userRouter = require("./moduels/user/user.router");
const postRouter = require("./moduels/posts/posts.router");
const {generateSession} = require("./util/lib");

// Creating express object
const app = express();

connectDB()

app.use(cors());
app.use(express.json());


app.use(generateSession());

app.use('/v1/user', userRouter);
app.use('/v1/post', postRouter);

// Server Setup
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


module.exports = app;