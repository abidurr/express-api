const express = require("express");
const path = require("path");
// const logger = require("./middleware/logger")

const app = express();

// initialize middleware
// app.use(logger);

// body parser middleware for json and form data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.use("/api/members", require("./routes/api/members"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
