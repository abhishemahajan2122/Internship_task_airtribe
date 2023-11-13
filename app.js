const express = require("express");
const bodyParser = require("body-parser");
const tablesRouter = require("./tables");
const coursesRouter = require("./courses");
const registrationRouter = require("./registration");
const leadsRouter = require("./leads");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use("/api/tables", tablesRouter);
app.use("/api/courses", coursesRouter);
app.use("/api/registration", registrationRouter);
app.use("/api/leads", leadsRouter);

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
