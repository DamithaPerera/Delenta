// Requiring module
const express = require('express');

// Creating express object
const app = express();



// Port Number
const PORT = process.env.PORT || 3000;

// Server Setup
app.listen(PORT, console.log(`Server started on port ${PORT}`));
